(function () {
  'use strict';

  // ---------- Config ----------
  const MD_FILE = 'checklist.md';
  const KEY_ENABLED = 'checklist:v1:enabled'; // written only after the visitor clicks "Yes"
  const KEY_DONE = 'checklist:v1:done';       // list of ticked item IDs

  // ---------- Elements ----------
  const $ = (id) => document.getElementById(id);
  const content = $('content');
  const consent = $('consent');
  const overallBar = $('overall-progress');
  const overallLabel = $('overall-label');
  const statusEl = $('storage-status');
  const toggleBtn = $('storage-toggle');
  const sidebarEl = $('sidebar');
  const navEl = $('toc');
  const backdrop = $('sidebar-backdrop');
  const navToggle = $('nav-toggle');

  // Groups shown in the side panel. Edit freely: ranges refer to the ## section numbers.
  const PARTS = [
    { title: 'Part 01 \u2014 Java Foundations', from: 1, to: 5 },
    { title: 'Part 02 \u2014 Design & Architecture', from: 6, to: 7 },
    { title: 'Part 03 \u2014 Spring Ecosystem', from: 8, to: 12 },
    { title: 'Part 04 \u2014 Distributed Systems', from: 13, to: 15 },
    { title: 'Part 05 \u2014 Data, Design & Algorithms', from: 16, to: 19 },
    { title: 'Part 06 \u2014 Platform & Delivery', from: 20, to: 24 },
    { title: 'Part 07 \u2014 Fundamentals & More', from: 25, to: 27 }
  ];

  // ---------- State ----------
  let storageOn = false;
  let storageBlocked = false;
  const ticked = new Set();
  const items = [];                // { id, li, input, section }
  const sections = new Map();      // h2 element -> { badge }
  const navList = [];              // { h2, num, name, link, count }

  // ---------- Safe storage helpers (never throw) ----------
  function storeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storeSet(key, value) {
    try { window.localStorage.setItem(key, value); return true; } catch (e) { return false; }
  }
  function storeRemove(key) {
    try { window.localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }

  // ---------- Small utilities ----------
  const norm = (s) => s.replace(/\s+/g, ' ').trim();

  // cyrb53: small, fast, non-cryptographic hash (used only to make stable item IDs)
  function hash(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }

  function showMessage(text) {
    content.textContent = '';
    const p = document.createElement('p');
    p.textContent = text;
    content.appendChild(p);
  }

  // ---------- Persistence ----------
  function loadSaved() {
    ticked.clear();
    try {
      const raw = storeGet(KEY_DONE);
      const arr = raw ? JSON.parse(raw) : [];
      if (Array.isArray(arr)) {
        arr.forEach((id) => { if (typeof id === 'string') ticked.add(id); });
      }
    } catch (e) { /* corrupted data: start clean */ }
  }

  function save() {
    if (!storageOn) return;
    if (!storeSet(KEY_DONE, JSON.stringify(Array.from(ticked)))) {
      storageBlocked = true;
      renderStatus();
    }
  }

  function enableStorage() {
    if (!storeSet(KEY_ENABLED, '1')) {
      storageBlocked = true;
      storageOn = false;
    } else {
      storageBlocked = false;
      storageOn = true;
      save(); // store whatever is already ticked on screen
    }
    consent.hidden = true;
    renderStatus();
  }

  function disableStorage() {
    storeRemove(KEY_DONE);
    storeRemove(KEY_ENABLED);
    storageOn = false;
    renderStatus();
  }

  // ---------- Rendering the checklist ----------
  function build(md) {
    const rawHtml = window.marked.parse(md, { gfm: true });
    content.innerHTML = window.DOMPurify.sanitize(rawHtml);

    let currentSection = null;
    let h2Text = '';
    let h3Text = '';
    const seen = new Map();

    content.querySelectorAll('h2, h3, li').forEach((node) => {
      const tag = node.tagName;

      if (tag === 'H2') {
        h2Text = norm(node.textContent);
        h3Text = '';
        if (h2Text === 'Index') hideIndex(node);
        const badge = document.createElement('span');
        badge.className = 'section-progress';
        node.appendChild(badge);
        currentSection = node;
        sections.set(node, { badge });
        const m = h2Text.match(/^(\d+)\.\s*(.+)$/);
        if (m) {
          node.id = 'sec-' + m[1];
          const codeTag = document.createElement('span');
          codeTag.className = 'sec-code';
          codeTag.textContent = 'S-' + m[1].padStart(2, '0');
          node.insertBefore(codeTag, badge);
          navList.push({ h2: node, num: parseInt(m[1], 10), name: m[2], link: null, count: null });
        }
        return;
      }
      if (tag === 'H3') {
        h3Text = norm(node.textContent);
        return;
      }

      // list item: only handle ones that contain a checkbox
      const oldBox = node.querySelector('input[type="checkbox"]');
      if (!oldBox) return;

      // move the item's content into a <span> and wrap everything in a <label>
      oldBox.remove();
      const span = document.createElement('span');
      while (node.firstChild) span.appendChild(node.firstChild);

      const text = norm(span.textContent);
      const base = h2Text + '|' + h3Text + '|' + text;
      const count = (seen.get(base) || 0) + 1;
      seen.set(base, count);
      const id = hash(base + '#' + count);

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.dataset.id = id;

      const label = document.createElement('label');
      label.appendChild(input);
      label.appendChild(span);
      node.appendChild(label);

      node.classList.add('task-item');
      if (node.parentElement) node.parentElement.classList.add('task-list');

      items.push({ id, li: node, input, section: currentSection });
    });
  }

  // ---------- Side navigation ----------
  function buildNav() {
    navEl.textContent = '';
    let lastPart = null;
    let group = null;
    navList.forEach((entry) => {
      const part = PARTS.find((p) => entry.num >= p.from && entry.num <= p.to);
      if (!group || (part && part !== lastPart)) {
        group = document.createElement('div');
        group.className = 'toc-group';
        navEl.appendChild(group);
        if (part) {
          const head = document.createElement('div');
          head.className = 'toc-part';
          head.textContent = part.title;
          group.appendChild(head);
        }
        lastPart = part;
      }
      const a = document.createElement('a');
      a.href = '#' + entry.h2.id;

      const code = document.createElement('span');
      code.className = 'toc-num';
      code.textContent = 'S-' + String(entry.num).padStart(2, '0');

      const name = document.createElement('span');
      name.className = 'toc-name';
      name.textContent = entry.name;

      const count = document.createElement('span');
      count.className = 'toc-count';

      a.append(code, name, count);
      group.appendChild(a);
      entry.link = a;
      entry.count = count;
    });
  }

  // hide the markdown's own "Index" (the side panel replaces it)
  function hideIndex(h2) {
    h2.classList.add('is-index');
    let n = h2.nextElementSibling;
    while (n && n.tagName !== 'H2') {
      n.classList.add('is-index');
      n = n.nextElementSibling;
    }
  }

  function openNav() {
    sidebarEl.classList.add('open');
    backdrop.classList.add('show');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    sidebarEl.classList.remove('open');
    backdrop.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  let activeEntry = null;
  let spyQueued = false;

  function updateActive() {
    spyQueued = false;
    if (!navList.length) return;
    const header = document.querySelector('.topbar');
    const line = (header ? header.offsetHeight : 64) + 24;
    let current = navList[0];
    for (const entry of navList) {
      if (entry.h2.getBoundingClientRect().top <= line) current = entry;
      else break;
    }
    if (current === activeEntry) return;
    activeEntry = current;
    navList.forEach((e) => e.link.classList.toggle('active', e === current));

    // keep the active link visible inside the side panel
    const top = current.link.offsetTop;
    const bottom = top + current.link.offsetHeight;
    if (top < sidebarEl.scrollTop + 40) sidebarEl.scrollTop = Math.max(0, top - 40);
    else if (bottom > sidebarEl.scrollTop + sidebarEl.clientHeight - 20) sidebarEl.scrollTop = bottom - sidebarEl.clientHeight + 20;
  }

  function queueActiveUpdate() {
    if (spyQueued) return;
    spyQueued = true;
    window.requestAnimationFrame(updateActive);
  }

  // ---------- Syncing UI with state ----------
  function applyTicks() {
    items.forEach((it) => {
      const on = ticked.has(it.id);
      it.input.checked = on;
      it.li.classList.toggle('done', on);
    });
    updateProgress();
  }

  function updateProgress() {
    const perSection = new Map();
    let done = 0;

    items.forEach((it) => {
      const isDone = ticked.has(it.id);
      if (isDone) done++;
      if (it.section) {
        const s = perSection.get(it.section) || { total: 0, done: 0 };
        s.total++;
        if (isDone) s.done++;
        perSection.set(it.section, s);
      }
    });

    sections.forEach((info, h2) => {
      const s = perSection.get(h2);
      info.badge.textContent = s ? s.done + ' / ' + s.total : '';
    });

    navList.forEach((e) => {
      const s = perSection.get(e.h2);
      if (!s || !e.count) return;
      e.count.textContent = s.done + '/' + s.total;
      e.link.classList.toggle('complete', s.total > 0 && s.done === s.total);
    });

    const total = items.length;
    overallBar.max = total || 1;
    overallBar.value = done;
    overallLabel.textContent = done + ' / ' + total + ' done';
  }

  function renderStatus() {
    if (storageBlocked) {
      statusEl.textContent = 'Storage: unavailable in this browser';
      toggleBtn.textContent = 'Try again';
    } else if (storageOn) {
      statusEl.textContent = 'Storage: on (this browser only)';
      toggleBtn.textContent = 'Turn off and delete';
    } else {
      statusEl.textContent = 'Storage: off';
      toggleBtn.textContent = 'Turn on';
    }
  }

  // ---------- Events ----------
  function wireEvents() {
    content.addEventListener('change', (e) => {
      const input = e.target;
      if (!(input instanceof HTMLInputElement) || !input.dataset.id) return;
      const li = input.closest('li');
      if (input.checked) ticked.add(input.dataset.id);
      else ticked.delete(input.dataset.id);
      if (li) li.classList.toggle('done', input.checked);
      updateProgress();
      save();
    });

    navToggle.addEventListener('click', () => {
      if (sidebarEl.classList.contains('open')) closeNav();
      else openNav();
    });
    backdrop.addEventListener('click', closeNav);
    navEl.addEventListener('click', (e) => {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
    window.addEventListener('scroll', queueActiveUpdate, { passive: true });
    window.addEventListener('resize', queueActiveUpdate);

    $('consent-yes').addEventListener('click', enableStorage);
    $('consent-no').addEventListener('click', () => { consent.hidden = true; });

    toggleBtn.addEventListener('click', () => {
      if (storageOn) disableStorage();
      else enableStorage();
    });

    $('reset-progress').addEventListener('click', () => {
      if (!window.confirm('Clear all ticks on this page?')) return;
      ticked.clear();
      applyTicks();
      save();
    });
  }

  // ---------- Start ----------
  async function init() {
    if (!window.marked || !window.DOMPurify) {
      showMessage('Could not load the markdown libraries. Check that the vendor/ folder is present.');
      return;
    }

    let md;
    try {
      const res = await fetch(MD_FILE, { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      md = await res.text();
    } catch (e) {
      showMessage('Could not load the checklist. If you opened this file directly, run it through a local web server instead.');
      return;
    }

    build(md);
    buildNav();
    $('tag-sections').textContent = navList.length + ' sections';
    $('tag-topics').textContent = items.length + ' topics';

    // Storage is used only if the visitor said "Yes" on an earlier visit.
    if (storeGet(KEY_ENABLED) === '1') {
      storageOn = true;
      loadSaved();
    } else {
      consent.hidden = false; // ask; default stays "no storage"
    }

    applyTicks();
    renderStatus();
    wireEvents();

    // jump to a section named in the URL (e.g. #sec-5) now that the content exists
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
    updateActive();
  }

  init();
})();