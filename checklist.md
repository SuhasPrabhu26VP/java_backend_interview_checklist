# Java Backend Interview - Complete Topic Checklist (6 YOE)

Topics only, no questions. Tick each box as you master it. Come back for interview-style questions once a field is done.

## Index

1. Core Java
2. Java 8 to 21+ Features
3. Collections Framework and Internals
4. Multithreading and Concurrency
5. JVM Internals and Performance Tuning
6. Design Patterns
7. SOLID, Clean Code, Architecture Styles
8. Spring Core
9. Spring Boot
10. Spring MVC and REST
11. Spring Security
12. Spring Data JPA and Hibernate
13. Microservices
14. Messaging and Event-Driven (Kafka, RabbitMQ)
15. Caching and Redis
16. Databases (SQL and NoSQL)
17. Low Level Design (LLD)
18. High Level Design and System Design
19. Data Structures and Algorithms
20. DevOps, Docker, Kubernetes, CI/CD
21. Cloud (AWS focus)
22. Testing
23. Security (General)
24. Observability and Production Support
25. Networking and OS Basics
26. Behavioral and Project Discussion
27. Other Domains (Reactive, Batch, Search, GraphQL, AI awareness, SAP Commerce)

---

## 1. Core Java

### OOP
- [ ] Encapsulation, abstraction, inheritance, polymorphism
- [ ] Compile-time vs runtime polymorphism, overloading vs overriding rules
- [ ] Method hiding, field hiding, `super`, `this`, constructor chaining
- [ ] Abstract class vs interface, multiple inheritance and diamond problem
- [ ] Composition vs inheritance, aggregation vs association
- [ ] Covariant return types, access modifiers, `static`, `final` (variable, method, class)
- [ ] Initialization order (static block, instance block, constructor, inheritance)
- [ ] Object class methods: `equals`, `hashCode`, `toString`, `clone`, `finalize`, `wait/notify`

### Strings
- [ ] String immutability and why, String pool, `intern()`
- [ ] String vs StringBuilder vs StringBuffer
- [ ] `==` vs `equals`, string concatenation internals, compact strings
- [ ] Text blocks, `String.format`, `strip` vs `trim`, regex basics

### Data Types and Memory Behavior
- [ ] Primitives vs wrappers, autoboxing/unboxing, Integer cache (-128 to 127)
- [ ] Pass-by-value in Java (references too), shallow vs deep copy
- [ ] Immutable class creation, defensive copying
- [ ] `BigDecimal` vs `double`, floating-point precision, overflow
- [ ] Bitwise operators, type casting, widening/narrowing

### Exceptions
- [ ] Throwable hierarchy: Error, Exception, RuntimeException
- [ ] Checked vs unchecked, custom exceptions
- [ ] try/catch/finally behavior, return in finally, try-with-resources, suppressed exceptions
- [ ] Exception chaining, multi-catch, exception handling best practices
- [ ] `throw` vs `throws`, rethrow patterns

### Generics
- [ ] Generic classes/methods, bounded types, wildcards (`? extends`, `? super`), PECS
- [ ] Type erasure, reifiable types, generic arrays restriction
- [ ] Raw types, heap pollution

### Inner and Special Classes
- [ ] Static nested, inner, local, anonymous classes
- [ ] Enums (fields, methods, abstract methods, EnumMap/EnumSet, enum singleton)
- [ ] Records, sealed classes/interfaces
- [ ] Marker interfaces, functional interfaces

### Core APIs and Features
- [ ] Reflection (Class, Method, Field, Constructor, accessibility, performance cost)
- [ ] Annotations: built-in, custom, retention, target, processing
- [ ] Serialization: `Serializable`, `transient`, `serialVersionUID`, `Externalizable`, custom serialization, security concerns
- [ ] Cloning: `Cloneable`, copy constructors
- [ ] I/O: byte vs character streams, buffered streams, NIO (Path, Files, Channels, Buffers), NIO.2
- [ ] Date/Time API (`java.time`: LocalDate, ZonedDateTime, Instant, Duration, Period), time zones
- [ ] `Optional` correct usage, `Objects` utility
- [ ] `Iterator` vs `Iterable`, `Comparable` vs `Comparator`
- [ ] `Properties`, `ResourceBundle`, `Locale`, `Scanner`
- [ ] Packages, classpath, modules (JPMS), jar structure
- [ ] Weak/Soft/Phantom references usage
- [ ] `Cloneable`, `AutoCloseable`, `Closeable`
- [ ] Varargs, static imports, `instanceof` pattern matching
- [ ] `transient` vs `volatile` vs `static`

---

## 2. Java 8 to 21+ Features

### Java 8
- [ ] Lambda expressions, functional interfaces (`Function`, `Predicate`, `Consumer`, `Supplier`, `BiFunction`, `UnaryOperator`)
- [ ] Method references (4 types), default and static methods in interfaces
- [ ] Stream API: creation, intermediate vs terminal ops, lazy evaluation, short-circuiting
- [ ] `map`, `flatMap`, `filter`, `reduce`, `collect`, `sorted`, `distinct`, `limit`, `skip`, `peek`
- [ ] Collectors: `toList`, `toMap`, `groupingBy`, `partitioningBy`, `joining`, `counting`, `summarizingInt`, downstream collectors
- [ ] Primitive streams (`IntStream`, etc.), `Stream.iterate`, `generate`
- [ ] Parallel streams, common ForkJoinPool, when not to use
- [ ] `Optional` API, `CompletableFuture` basics, new Date/Time API

### Java 9 to 17
- [ ] Modules (JPMS), `List.of/Set.of/Map.of`, private interface methods
- [ ] `var` (local variable type inference), HTTP Client, `Stream.takeWhile/dropWhile`
- [ ] Switch expressions, text blocks, records, pattern matching for `instanceof`
- [ ] Sealed classes, helpful NPE messages, `Collectors.teeing`, `Stream.toList()`

### Java 18 to 21+
- [ ] Virtual threads (Project Loom), structured concurrency, scoped values
- [ ] Pattern matching for switch, record patterns
- [ ] Sequenced collections, `SequencedMap`
- [ ] Generational ZGC, Foreign Function and Memory API (awareness)
- [ ] LTS versions overview (8, 11, 17, 21, 25), what changed between each

---

## 3. Collections Framework and Internals

### Hierarchy and Basics
- [ ] Collection vs Collections, hierarchy overview (List, Set, Queue, Deque, Map)
- [ ] Fail-fast vs fail-safe iterators, `ConcurrentModificationException`, `ListIterator`
- [ ] `Collections` utilities: `unmodifiableList`, `synchronizedList`, `sort`, `binarySearch`, `shuffle`
- [ ] Immutable collections (`List.of`) vs unmodifiable wrappers
- [ ] Arrays: `Arrays.asList` pitfalls, `Arrays.sort` algorithm, `Arrays.copyOf`

### List
- [ ] ArrayList internals: dynamic array, growth factor, `ensureCapacity`, `trimToSize`
- [ ] LinkedList internals: doubly linked, as List/Deque
- [ ] ArrayList vs LinkedList vs Vector vs CopyOnWriteArrayList
- [ ] Time complexity of each operation

### Set
- [ ] HashSet (backed by HashMap), LinkedHashSet, TreeSet (Red-Black tree)
- [ ] `EnumSet`, `CopyOnWriteArraySet`, `ConcurrentSkipListSet`
- [ ] Uniqueness rules via `equals`/`hashCode`/`compareTo`

### Map (most asked)
- [ ] HashMap internals: array of buckets, node structure, hash function, index calculation
- [ ] Hash spreading (`h ^ (h >>> 16)`), why capacity is power of 2
- [ ] Collision handling: linked list then tree (treeify at 8, untreeify at 6, min capacity 64)
- [ ] Load factor (0.75), resize/rehash, initial capacity tuning
- [ ] Null key and null values handling
- [ ] `put`, `get`, `remove`, `computeIfAbsent`, `merge` flow
- [ ] Mutable keys problem, custom key class requirements
- [ ] HashMap in multi-threaded environment issues (infinite loop in Java 7, lost updates)
- [ ] Hashtable vs HashMap vs `Collections.synchronizedMap`
- [ ] ConcurrentHashMap: Java 7 segments vs Java 8 CAS + synchronized bins, size counting, no null, iterators
- [ ] LinkedHashMap: insertion vs access order, LRU cache implementation (`removeEldestEntry`)
- [ ] TreeMap: Red-Black tree, NavigableMap methods, comparators
- [ ] WeakHashMap, IdentityHashMap, EnumMap, `ConcurrentSkipListMap`

### Queue and Deque
- [ ] PriorityQueue (binary heap, comparator, complexity)
- [ ] ArrayDeque vs LinkedList vs Stack
- [ ] BlockingQueue: ArrayBlockingQueue, LinkedBlockingQueue, PriorityBlockingQueue, DelayQueue, SynchronousQueue
- [ ] `ConcurrentLinkedQueue`, `LinkedTransferQueue`

### Comparison
- [ ] Comparable vs Comparator, natural vs custom ordering, comparator chaining
- [ ] Sorting stability, TimSort and dual-pivot quicksort
- [ ] `equals`/`hashCode` contract in collections, `hashCode` best practices
- [ ] Choosing the right collection for a use case, memory and performance trade-offs

---

## 4. Multithreading and Concurrency

### Fundamentals
- [ ] Process vs thread, thread lifecycle and states
- [ ] Creating threads: `Thread`, `Runnable`, `Callable`, `Future`
- [ ] `start` vs `run`, `join`, `sleep`, `yield`, `interrupt`, interruption handling
- [ ] Daemon vs user threads, thread priorities, thread groups
- [ ] Context switching, thread safety, race conditions, critical sections

### Java Memory Model and Visibility
- [ ] Java Memory Model, main memory vs working memory
- [ ] Happens-before rules, instruction reordering, memory barriers
- [ ] `volatile`: visibility, ordering, no atomicity
- [ ] `synchronized`: method vs block, intrinsic lock, class vs object lock, reentrancy
- [ ] Double-checked locking and why `volatile` is needed
- [ ] Safe publication, immutability and thread safety, `final` field semantics
- [ ] Monitor, lock inflation (biased, thin, fat locks)

### Coordination
- [ ] `wait`, `notify`, `notifyAll`, spurious wakeups, guarded blocks
- [ ] `sleep` vs `wait`, `Thread.join`
- [ ] Producer-consumer with wait/notify and with BlockingQueue

### Locks and Atomics
- [ ] `ReentrantLock` (fairness, tryLock, lockInterruptibly), `Condition`
- [ ] `ReadWriteLock`, `StampedLock` (optimistic reads)
- [ ] Atomic classes: `AtomicInteger`, `AtomicReference`, `LongAdder`, CAS, ABA problem
- [ ] Lock-free vs wait-free, spin locks
- [ ] Deadlock (conditions, detection, prevention), livelock, starvation

### Executor Framework
- [ ] `Executor`, `ExecutorService`, `Executors` factory methods and their dangers
- [ ] `ThreadPoolExecutor`: core/max pool size, queue types, keep-alive, rejection policies, thread factory
- [ ] Pool sizing (CPU-bound vs IO-bound, Little's law)
- [ ] `ScheduledExecutorService`, `ForkJoinPool`, work stealing, `RecursiveTask`
- [ ] `Future` vs `CompletableFuture`: `supplyAsync`, `thenApply`, `thenCompose`, `thenCombine`, `allOf`, `anyOf`, exception handling, custom executors
- [ ] Graceful shutdown (`shutdown`, `shutdownNow`, `awaitTermination`)

### Synchronizers and Utilities
- [ ] `CountDownLatch`, `CyclicBarrier`, `Semaphore`, `Phaser`, `Exchanger`
- [ ] Concurrent collections overview, `CopyOnWriteArrayList`
- [ ] `ThreadLocal`: usage, memory leaks in thread pools, `InheritableThreadLocal`
- [ ] Parallel streams and common pool pitfalls

### Modern Concurrency
- [ ] Virtual threads: how they work, carrier threads, pinning, when to use
- [ ] Structured concurrency, scoped values
- [ ] Reactive vs virtual threads trade-offs

### Practical Problems
- [ ] Implement producer-consumer, thread-safe singleton, custom thread pool
- [ ] Print odd/even or alternating sequence with threads
- [ ] Implement a rate limiter, bounded blocking queue, deadlock demo and fix
- [ ] Debugging concurrency issues: thread dumps, race condition diagnosis

---

## 5. JVM Internals and Performance Tuning

### Architecture
- [ ] JDK vs JRE vs JVM, bytecode, compilation and execution flow
- [ ] Class loader subsystem: bootstrap, platform, application loaders, parent delegation, custom loaders, class unloading
- [ ] Class loading phases: loading, linking (verify, prepare, resolve), initialization
- [ ] Runtime data areas: heap, stack, metaspace, PC register, native method stack, direct memory
- [ ] Stack frames: local variable array, operand stack, frame data
- [ ] Execution engine: interpreter, JIT (C1, C2, tiered compilation), AOT, GraalVM native image

### Memory Management
- [ ] Heap layout: Young (Eden, Survivor S0/S1), Old, Metaspace (vs PermGen)
- [ ] Object allocation: TLAB, object header, escape analysis, scalar replacement
- [ ] Object lifecycle, promotion, tenuring threshold
- [ ] Reference types: strong, soft, weak, phantom, `ReferenceQueue`
- [ ] Memory leaks: common causes (static collections, listeners, ThreadLocal, unclosed resources)

### Garbage Collection
- [ ] GC roots, reachability, mark-sweep-compact, copying, generational hypothesis
- [ ] Minor vs major vs full GC, stop-the-world, safepoints
- [ ] Collectors: Serial, Parallel, CMS (legacy), G1, ZGC, Shenandoah, Epsilon
- [ ] G1 internals: regions, remembered sets, mixed collections, humongous objects
- [ ] GC tuning goals: throughput vs latency vs footprint
- [ ] Reading GC logs, GC pause analysis

### Tuning and Diagnostics
- [ ] JVM flags: `-Xms`, `-Xmx`, `-Xss`, `-XX:MaxMetaspaceSize`, `-XX:+UseG1GC`, etc.
- [ ] Container-aware JVM settings (memory and CPU limits in Docker/K8s)
- [ ] `OutOfMemoryError` types (heap, metaspace, direct buffer, unable to create thread), `StackOverflowError`
- [ ] Tools: jps, jstack, jmap, jstat, jcmd, jconsole, VisualVM, JFR + JMC, Eclipse MAT, async-profiler
- [ ] Thread dump analysis, heap dump analysis, CPU profiling, flame graphs
- [ ] Troubleshooting scenarios: high CPU, memory growth, long GC pause, thread starvation, connection leak
- [ ] JMH benchmarking basics, JIT warm-up
- [ ] Java agents, bytecode instrumentation (ASM, ByteBuddy), JNI basics

---

## 6. Design Patterns

### Creational
- [ ] Singleton (eager, lazy, synchronized, double-checked, holder idiom, enum), breaking singleton (reflection, serialization, cloning)
- [ ] Factory Method, Abstract Factory, Builder, Prototype, Object Pool

### Structural
- [ ] Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy (static, JDK dynamic, CGLIB)

### Behavioral
- [ ] Strategy, Observer, Template Method, Chain of Responsibility, Command
- [ ] State, Iterator, Mediator, Memento, Visitor, Interpreter, Null Object

### Application
- [ ] Patterns inside JDK (Iterator, Decorator in I/O, Builder in StringBuilder, Factory in Calendar, etc.)
- [ ] Patterns inside Spring (Singleton/Prototype scope, Proxy in AOP, Template in `JdbcTemplate`, Factory in `BeanFactory`, Observer in events, Front Controller in DispatcherServlet)
- [ ] Enterprise patterns: DAO, Repository, DTO, Service Layer, Unit of Work, Specification, Dependency Injection, MVC
- [ ] Pattern selection: when to use, when not to use, combining patterns
- [ ] Anti-patterns: God object, Singleton abuse, Anemic domain model, Spaghetti code, Golden hammer
- [ ] Microservice patterns (see section 13)

---

## 7. SOLID, Clean Code, Architecture Styles

- [ ] SOLID principles each with violations and fixes
- [ ] DRY, KISS, YAGNI, Law of Demeter, Separation of Concerns, Composition over Inheritance
- [ ] Code smells, refactoring techniques, technical debt
- [ ] Clean code: naming, function size, comments, error handling
- [ ] Layered architecture, hexagonal (ports and adapters), onion, clean architecture
- [ ] Domain-Driven Design: entities, value objects, aggregates, repositories, domain events, bounded context, ubiquitous language
- [ ] Monolith vs modular monolith vs microservices vs serverless
- [ ] Event-driven, CQRS, event sourcing, pipes and filters, microkernel
- [ ] Code review practices, coding standards, static analysis (SonarQube)
- [ ] API design principles, backward compatibility, versioning
- [ ] Architecture Decision Records (ADR), trade-off analysis

---

## 8. Spring Core

### IoC and DI
- [ ] Inversion of Control, Dependency Injection, IoC container
- [ ] `BeanFactory` vs `ApplicationContext`, context hierarchy
- [ ] Injection types: constructor, setter, field; why constructor injection is preferred
- [ ] `@Autowired`, `@Qualifier`, `@Primary`, `@Resource`, `@Inject`, `@Lazy`, `@DependsOn`
- [ ] Injecting collections, `ObjectProvider`, `Optional` injection
- [ ] Circular dependencies: causes, how Spring resolves (3-level cache), how to fix

### Beans
- [ ] Bean definition: `@Component`, `@Service`, `@Repository`, `@Controller`, `@Configuration`, `@Bean`
- [ ] Component scanning, stereotype annotations, XML vs Java config
- [ ] `@Configuration` full vs lite mode, `proxyBeanMethods`
- [ ] Bean scopes: singleton, prototype, request, session, application, websocket; scoped proxies
- [ ] Singleton bean thread safety, prototype in singleton problem
- [ ] Bean lifecycle: instantiation, population, Aware interfaces, `BeanPostProcessor`, `@PostConstruct`, `InitializingBean`, init-method, `@PreDestroy`, `DisposableBean`
- [ ] `BeanFactoryPostProcessor` vs `BeanPostProcessor`, `FactoryBean`
- [ ] Conditional beans: `@Conditional`, `@Profile`, `@ConditionalOnProperty`
- [ ] Application context refresh process, startup phases

### Configuration
- [ ] Properties, `@Value`, `@PropertySource`, `Environment`, `@ConfigurationProperties`
- [ ] SpEL, profiles, externalized configuration
- [ ] Resource loading, internationalization (`MessageSource`)

### AOP
- [ ] Concepts: aspect, advice, join point, pointcut, weaving
- [ ] Advice types: before, after, afterReturning, afterThrowing, around
- [ ] Pointcut expressions, custom annotations with AOP
- [ ] Proxy mechanisms: JDK dynamic proxy vs CGLIB, limitations
- [ ] Self-invocation problem, ordering of aspects
- [ ] Spring AOP vs AspectJ

### Transactions
- [ ] `@Transactional`: how it works (proxy + TransactionManager)
- [ ] Propagation levels (REQUIRED, REQUIRES_NEW, NESTED, SUPPORTS, MANDATORY, NEVER, NOT_SUPPORTED)
- [ ] Isolation levels, read-only, timeout, rollback rules (checked vs unchecked)
- [ ] Pitfalls: self-invocation, private methods, exception swallowing, async and transactions
- [ ] Programmatic transactions (`TransactionTemplate`), `@TransactionalEventListener`
- [ ] Transaction synchronization, distributed transactions awareness (JTA)

### Other Core Features
- [ ] Application events, custom events, async events
- [ ] `@Async`, `@Scheduled`, task executors
- [ ] Spring Expression Language, Spring Retry, `RestTemplate`, `WebClient`, `RestClient`
- [ ] Validation (Bean Validation, custom validators)
- [ ] Spring Data access: `JdbcTemplate`, `DataSource`, exception translation

---

## 9. Spring Boot

### Core Mechanics
- [ ] What Boot adds over Spring, opinionated defaults, convention over configuration
- [ ] `@SpringBootApplication` = `@Configuration` + `@EnableAutoConfiguration` + `@ComponentScan`
- [ ] Auto-configuration internals: `AutoConfiguration.imports` (and older `spring.factories`), conditional annotations, ordering, excluding auto-config
- [ ] Starters, creating a custom starter and auto-configuration
- [ ] Startup flow: `SpringApplication.run`, listeners, environment prep, context creation, runners
- [ ] `CommandLineRunner`, `ApplicationRunner`, lifecycle events

### Configuration
- [ ] `application.properties` / `application.yml`, profiles, property precedence order
- [ ] `@ConfigurationProperties` binding, validation, relaxed binding
- [ ] Config via environment variables, command line args, Config Server, Kubernetes ConfigMaps/Secrets
- [ ] Multi-environment configuration strategy

### Web and Servers
- [ ] Embedded Tomcat/Jetty/Undertow, tuning threads and connections
- [ ] Graceful shutdown, HTTP/2, SSL setup
- [ ] Spring MVC vs WebFlux in Boot

### Actuator and Operations
- [ ] Actuator endpoints: health, info, metrics, env, beans, loggers, threaddump, heapdump
- [ ] Custom health indicators, custom endpoints, securing actuator
- [ ] Micrometer metrics, Prometheus integration, readiness and liveness probes
- [ ] Logging: SLF4J, Logback, log levels, MDC, structured logging

### Packaging and Deployment
- [ ] Fat jar structure, layered jars, Docker image build (Buildpacks, Jib)
- [ ] GraalVM native images, AOT processing, startup optimization
- [ ] DevTools, Spring Boot CLI

### Testing in Boot
- [ ] `@SpringBootTest`, `@WebMvcTest`, `@DataJpaTest`, `@MockBean`/`@MockitoBean`, `@TestConfiguration`
- [ ] Testcontainers, `@DynamicPropertySource`, slice tests

### Boot 3 / Spring 6 Changes
- [ ] Jakarta EE namespace migration, Java 17 baseline
- [ ] `ProblemDetail` (RFC 7807), HTTP interface clients
- [ ] Observability with Micrometer Tracing, virtual threads support
- [ ] Deprecations and migration from Boot 2.x

---

## 10. Spring MVC and REST

### MVC Internals
- [ ] Request flow: Servlet container, filters, `DispatcherServlet`, `HandlerMapping`, `HandlerAdapter`, controller, `ViewResolver`/message converters
- [ ] Filter vs Interceptor vs AOP: differences and order
- [ ] `@Controller` vs `@RestController`, `@RequestMapping` variants
- [ ] `@RequestParam`, `@PathVariable`, `@RequestBody`, `@ResponseBody`, `@RequestHeader`, `@ModelAttribute`, `@CookieValue`
- [ ] `ResponseEntity`, status codes, custom headers
- [ ] Message converters (Jackson), content negotiation, custom serializers/deserializers
- [ ] Jackson: annotations (`@JsonProperty`, `@JsonIgnore`, `@JsonView`), date handling, polymorphism

### Error Handling and Validation
- [ ] `@ControllerAdvice`, `@ExceptionHandler`, `ResponseStatusException`, `ProblemDetail`
- [ ] Bean Validation: `@Valid`, `@Validated`, constraint annotations, custom constraints, validation groups
- [ ] Global error response format

### REST Design
- [ ] REST constraints, resource naming, HTTP methods, idempotency and safety
- [ ] Status code selection (2xx, 3xx, 4xx, 5xx)
- [ ] Pagination, sorting, filtering, partial responses
- [ ] API versioning strategies (URI, header, media type)
- [ ] HATEOAS, Richardson maturity model
- [ ] Idempotency keys, conditional requests (ETag, If-Match), optimistic concurrency in APIs
- [ ] File upload/download, streaming responses, async endpoints (`DeferredResult`, `Callable`), SSE
- [ ] CORS, CSRF considerations, rate limiting, throttling
- [ ] OpenAPI/Swagger documentation, API-first design
- [ ] REST vs GraphQL vs gRPC vs SOAP

### Calling Other Services
- [ ] `RestTemplate` vs `WebClient` vs `RestClient` vs OpenFeign
- [ ] Timeouts, retries, connection pooling, error decoding
- [ ] Load-balanced clients

### WebFlux Basics
- [ ] Reactive streams, `Mono`, `Flux`, operators, backpressure
- [ ] Netty event loop model, blocking pitfalls, when to choose WebFlux
- [ ] Functional endpoints vs annotated controllers

---

## 11. Spring Security

### Fundamentals
- [ ] Authentication vs authorization, principal, authorities, roles (`ROLE_` prefix), granted authority
- [ ] Security filter chain, `DelegatingFilterProxy`, `FilterChainProxy`, filter ordering
- [ ] `SecurityContext`, `SecurityContextHolder` (thread-local strategy), `Authentication` object
- [ ] `AuthenticationManager`, `ProviderManager`, `AuthenticationProvider`, `UserDetails`, `UserDetailsService`
- [ ] `PasswordEncoder`: BCrypt, Argon2, delegating encoder, salting, hashing vs encryption
- [ ] Configuration with `SecurityFilterChain` bean (post-`WebSecurityConfigurerAdapter`), `HttpSecurity`, `requestMatchers`
- [ ] Multiple filter chains, ordering, custom filters (`OncePerRequestFilter`)
- [ ] Login flows: form login, HTTP Basic, logout, remember-me

### Authorization
- [ ] URL-based authorization, method security (`@PreAuthorize`, `@PostAuthorize`, `@Secured`, `@RolesAllowed`)
- [ ] SpEL in security expressions, custom permission evaluators
- [ ] Role hierarchy, ACLs, domain object security
- [ ] `AuthorizationManager`, access decision concepts

### Sessions, CSRF, CORS
- [ ] Session management: fixation protection, concurrent sessions, session creation policy
- [ ] Stateful vs stateless security
- [ ] CSRF: attack, token mechanism, when to disable
- [ ] CORS configuration, preflight requests
- [ ] Security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options)

### Token-Based Security
- [ ] JWT structure (header, payload, signature), signing algorithms (HS256 vs RS256), claims
- [ ] Access vs refresh tokens, expiry, rotation, revocation and blacklisting
- [ ] Token storage (cookie vs local storage), XSS/CSRF trade-offs
- [ ] Session vs JWT vs opaque tokens, introspection
- [ ] Custom JWT filter implementation flow

### OAuth 2.0 and OIDC
- [ ] Roles: resource owner, client, authorization server, resource server
- [ ] Grant types: authorization code (+PKCE), client credentials, refresh token, implicit/password (deprecated)
- [ ] Scopes, consent, redirect URI validation, state parameter
- [ ] OpenID Connect: ID token, UserInfo, discovery endpoint, JWKS
- [ ] Spring Authorization Server, `oauth2-resource-server`, `oauth2-client`, `oauth2Login`
- [ ] Keycloak/Okta/Auth0 integration, social login
- [ ] SAML and SSO overview, LDAP integration
- [ ] Service-to-service security: client credentials, mTLS, token relay, API gateway auth

### Hardening and Practices
- [ ] OWASP Top 10 mapping to Spring apps
- [ ] SQL injection, XSS, SSRF, insecure deserialization, mass assignment
- [ ] Rate limiting, brute-force protection, account lockout, audit logging
- [ ] Secrets management (Vault, cloud KMS), TLS everywhere
- [ ] Testing security (`@WithMockUser`, `spring-security-test`)
- [ ] Multi-tenant security, fine-grained permissions design

---

## 12. Spring Data JPA and Hibernate

### JPA Basics
- [ ] ORM concept, JPA spec vs Hibernate vs Spring Data JPA
- [ ] `EntityManager`, `EntityManagerFactory`, `SessionFactory`, `Session`
- [ ] Entity requirements, `@Entity`, `@Table`, `@Id`, `@Column`, `@Enumerated`, `@Lob`, `@Temporal`, `@Transient`
- [ ] ID generation: AUTO, IDENTITY, SEQUENCE, TABLE, UUID; batch-insert impact
- [ ] Composite keys (`@EmbeddedId`, `@IdClass`), `@Embeddable`, value types, converters

### Entity Lifecycle and Persistence Context
- [ ] States: transient, persistent (managed), detached, removed
- [ ] `persist`, `merge`, `remove`, `refresh`, `detach`, `flush`, `clear`
- [ ] First-level cache, identity map, dirty checking, flush modes
- [ ] `save()` behavior in Spring Data (persist vs merge, `isNew`)
- [ ] Lifecycle callbacks (`@PrePersist`, `@PostLoad`, etc.), entity listeners
- [ ] `equals`/`hashCode` for entities, proxies, `getReference` vs `find`

### Relationships
- [ ] `@OneToOne`, `@OneToMany`, `@ManyToOne`, `@ManyToMany`
- [ ] Owning vs inverse side, `mappedBy`, `@JoinColumn`, `@JoinTable`
- [ ] Unidirectional vs bidirectional, helper methods to keep sync
- [ ] Cascade types, `orphanRemoval`, Cascade pitfalls
- [ ] Fetch types: LAZY vs EAGER defaults, `LazyInitializationException`, open-session-in-view
- [ ] N+1 problem: detection and fixes (`JOIN FETCH`, `@EntityGraph`, `@BatchSize`, `@Fetch`)
- [ ] Inheritance mapping: SINGLE_TABLE, JOINED, TABLE_PER_CLASS, `@MappedSuperclass`
- [ ] Many-to-many with extra columns, bag vs set vs list semantics

### Querying
- [ ] Derived query methods, `@Query` (JPQL and native), named queries, `@Modifying`
- [ ] Projections: interface-based, class-based (DTO), dynamic projections
- [ ] Specifications, Query by Example, Criteria API, QueryDSL
- [ ] Pagination and sorting: `Pageable`, `Page` vs `Slice`, keyset pagination, count query cost
- [ ] Repository hierarchy: `CrudRepository`, `JpaRepository`, `PagingAndSortingRepository`, custom repository fragments
- [ ] Bulk operations, stored procedures, `@Query` with SpEL

### Transactions and Concurrency
- [ ] Transaction boundaries in service layer, read-only transactions
- [ ] Optimistic locking (`@Version`), pessimistic locking (`PESSIMISTIC_WRITE`, `SKIP LOCKED`)
- [ ] Isolation anomalies, handling `OptimisticLockException`
- [ ] Batch processing: `hibernate.jdbc.batch_size`, `saveAll`, `flush/clear` pattern, `StatelessSession`
- [ ] Deadlocks in database, lock timeouts

### Caching and Performance
- [ ] First-level vs second-level cache, query cache, providers (Ehcache, Redis)
- [ ] Hibernate statistics, SQL logging, slow query detection, `EXPLAIN`
- [ ] Avoiding common anti-patterns: EAGER everywhere, entity exposure in APIs, huge `IN` lists
- [ ] Connection pool (HikariCP) tuning: pool size, timeouts, leak detection
- [ ] DTO projection vs entity fetching for read paths

### Operations
- [ ] Auditing (`@CreatedDate`, `@LastModifiedBy`), soft delete (`@SQLDelete`, `@Where`/`@SoftDelete`)
- [ ] Multi-tenancy, multiple datasources, read replica routing
- [ ] Schema management: `ddl-auto` modes, Flyway, Liquibase
- [ ] Testing: `@DataJpaTest`, Testcontainers
- [ ] JDBC fundamentals: `Connection`, `PreparedStatement`, batching, transaction handling
- [ ] Spring Data variants awareness: JDBC, MongoDB, Redis, Elasticsearch

---

## 13. Microservices

### Fundamentals
- [ ] Monolith vs SOA vs microservices, benefits and costs, when not to use
- [ ] Service boundaries, bounded context, decomposition by business capability/subdomain
- [ ] Twelve-factor app, cloud-native principles
- [ ] Conway's law, team topology, ownership
- [ ] Strangler fig pattern, monolith-to-microservices migration

### Communication
- [ ] Synchronous: REST, gRPC; asynchronous: messaging, events
- [ ] Request-response vs event notification vs event-carried state transfer
- [ ] Service discovery (client-side vs server-side), Eureka, Consul, Kubernetes DNS
- [ ] API Gateway (Spring Cloud Gateway, Kong), BFF pattern, edge security
- [ ] Load balancing, client-side load balancing
- [ ] Config management: Spring Cloud Config, Vault, K8s
- [ ] OpenFeign, declarative clients, timeouts and retries

### Resilience
- [ ] Circuit breaker (states, thresholds), retry with backoff and jitter, timeout, bulkhead, rate limiter, fallback (Resilience4j)
- [ ] Cascading failures, graceful degradation, load shedding
- [ ] Idempotency, deduplication, at-least-once handling
- [ ] Health checks, readiness and liveness probes
- [ ] Chaos engineering awareness

### Data and Consistency
- [ ] Database per service, shared database anti-pattern
- [ ] Distributed transactions: 2PC and why it is avoided, Saga (orchestration vs choreography), compensating transactions
- [ ] Transactional outbox pattern, change data capture (Debezium), inbox pattern
- [ ] CQRS, event sourcing, materialized views, eventual consistency
- [ ] Data replication, API composition, handling joins across services
- [ ] CAP theorem, BASE, consistency models

### Operational Patterns
- [ ] Observability: centralized logging, metrics, distributed tracing (OpenTelemetry, Zipkin, Jaeger), correlation IDs
- [ ] Service mesh (Istio, Linkerd), sidecar pattern, mTLS between services
- [ ] Deployment: blue-green, canary, rolling, feature flags
- [ ] Versioning and backward compatibility, consumer-driven contract testing (Pact)
- [ ] Distributed caching, distributed locking, leader election
- [ ] Security: gateway auth, token propagation, zero trust
- [ ] Testing strategy: unit, component, contract, end-to-end
- [ ] Spring Cloud ecosystem overview, Kubernetes-native alternatives
- [ ] Multi-region and multi-tenant considerations, scalability and capacity planning

---

## 14. Messaging and Event-Driven (Kafka, RabbitMQ)

### Concepts
- [ ] Messaging vs REST, queue vs topic, point-to-point vs pub/sub
- [ ] Delivery semantics: at-most-once, at-least-once, exactly-once
- [ ] Ordering, idempotent consumers, deduplication, poison messages
- [ ] Event types: commands, events, documents; event design and schema evolution
- [ ] Event-driven architecture, event sourcing, outbox pattern

### Kafka
- [ ] Architecture: broker, cluster, topic, partition, offset, segment, log
- [ ] Replication: leader/follower, ISR, `min.insync.replicas`, unclean leader election
- [ ] Controller, ZooKeeper vs KRaft
- [ ] Producer: `acks`, retries, batching (`linger.ms`, `batch.size`), compression, idempotent producer, transactions, partitioner, keys
- [ ] Consumer: consumer groups, partition assignment, rebalancing (eager vs cooperative), offset commit (auto/manual), `auto.offset.reset`, lag, `max.poll.interval.ms`
- [ ] Exactly-once semantics (idempotence + transactions), read-committed
- [ ] Retention, log compaction, retention policies
- [ ] Partition count planning, hot partitions, ordering guarantees
- [ ] Error handling: retry topics, dead letter topics, backoff, `DefaultErrorHandler`
- [ ] Backpressure and throughput tuning
- [ ] Spring Kafka: `KafkaTemplate`, `@KafkaListener`, containers, concurrency, batch listeners
- [ ] Schema Registry, Avro/Protobuf/JSON schema, compatibility modes
- [ ] Kafka Streams, KTable, windowing, state stores (awareness), Kafka Connect, ksqlDB overview
- [ ] Monitoring: consumer lag, under-replicated partitions, broker metrics
- [ ] Security: SASL, SSL, ACLs
- [ ] Kafka vs RabbitMQ vs ActiveMQ vs SQS/SNS vs Pulsar

### RabbitMQ
- [ ] AMQP model: producer, exchange, binding, queue, consumer
- [ ] Exchange types: direct, topic, fanout, headers
- [ ] Acknowledgements, prefetch, durability, persistence, publisher confirms
- [ ] Dead letter exchanges, TTL, retry patterns, priority queues
- [ ] Clustering, mirrored/quorum queues, high availability
- [ ] Spring AMQP: `RabbitTemplate`, `@RabbitListener`, error handling

---

## 15. Caching and Redis

### Concepts
- [ ] Why cache: latency, load reduction, cost; hit ratio, working set
- [ ] Caching layers: browser, CDN, API gateway, application (local), distributed, DB
- [ ] Patterns: cache-aside, read-through, write-through, write-behind (write-back), refresh-ahead
- [ ] Eviction: LRU, LFU, FIFO, random, TTL
- [ ] Invalidation strategies: TTL, event-based, versioned keys; consistency with DB
- [ ] Problems: cache stampede (thundering herd), penetration, breakdown (hot key expiry), avalanche, stale data, hot keys, big keys
- [ ] Solutions: locking, request coalescing, jittered TTL, null caching, Bloom filters, probabilistic early expiry
- [ ] Cache warming, cache sizing, serialization format cost
- [ ] Local (Caffeine, Ehcache, Guava) vs distributed (Redis, Hazelcast, Memcached)
- [ ] Two-level caching (L1 + L2), invalidation across nodes

### Spring Cache
- [ ] `@EnableCaching`, `@Cacheable`, `@CachePut`, `@CacheEvict`, `@Caching`, `@CacheConfig`
- [ ] Key generation, conditions (`condition`, `unless`), `sync`
- [ ] CacheManager configuration, TTL per cache, serialization
- [ ] Self-invocation limitation (proxy), caching with transactions
- [ ] HTTP caching: `Cache-Control`, `ETag`, `Last-Modified`, conditional requests

### Redis
- [ ] Single-threaded model, event loop, I/O threads
- [ ] Data structures: String, List, Set, Sorted Set, Hash, Bitmap, HyperLogLog, Geo, Stream; use cases of each
- [ ] Persistence: RDB, AOF, hybrid; trade-offs
- [ ] Replication, Sentinel (HA), Cluster (hash slots, sharding, resharding)
- [ ] Eviction policies (`allkeys-lru`, `volatile-ttl`, etc.), expiry mechanisms
- [ ] Transactions (`MULTI/EXEC`, `WATCH`), Lua scripting, pipelining
- [ ] Pub/Sub vs Streams, distributed locks (`SET NX PX`, Redlock, fencing tokens), Redisson
- [ ] Rate limiting with Redis, leaderboards, session store, counters
- [ ] Memory management, big key/hot key issues, `SCAN` vs `KEYS`
- [ ] Spring Data Redis: `RedisTemplate`, serializers, Lettuce vs Jedis
- [ ] Monitoring and common production issues

---

## 16. Databases (SQL and NoSQL)

### Relational Fundamentals
- [ ] ACID properties, transactions, commit/rollback, savepoints
- [ ] Isolation levels: read uncommitted, read committed, repeatable read, serializable
- [ ] Anomalies: dirty read, non-repeatable read, phantom read, lost update, write skew
- [ ] MVCC, locking (shared/exclusive, row/table, gap locks), deadlocks
- [ ] Normalization (1NF to BCNF), denormalization trade-offs
- [ ] Keys, constraints, relationships, referential integrity

### SQL
- [ ] Joins (inner, left, right, full, cross, self), set operations
- [ ] Subqueries, correlated subqueries, CTEs, recursive CTEs
- [ ] Aggregations, `GROUP BY`, `HAVING`, window functions (`ROW_NUMBER`, `RANK`, `LAG`, `LEAD`, running totals)
- [ ] Common problems: Nth highest salary, duplicates, top-N per group, gaps and islands
- [ ] Views, materialized views, stored procedures, triggers, functions
- [ ] `UNION` vs `UNION ALL`, `EXISTS` vs `IN`, `DELETE` vs `TRUNCATE` vs `DROP`

### Indexing and Performance
- [ ] B-tree and B+ tree, hash, bitmap, full-text indexes
- [ ] Clustered vs non-clustered, composite index and column order, covering index, partial index
- [ ] Index selectivity, when indexes are not used, index overhead on writes
- [ ] Execution plans (`EXPLAIN`/`EXPLAIN ANALYZE`), query optimization techniques
- [ ] Pagination: offset vs keyset (seek)
- [ ] Slow query diagnosis, statistics, vacuum/analyze (Postgres)
- [ ] Connection pooling, prepared statements, batching

### Scaling
- [ ] Vertical vs horizontal scaling
- [ ] Replication (master-slave, multi-master), replication lag, read replicas
- [ ] Partitioning (range, hash, list) vs sharding, shard key selection, resharding, consistent hashing
- [ ] Failover, backups, point-in-time recovery, disaster recovery (RPO/RTO)
- [ ] Zero-downtime schema migrations, expand-contract pattern

### NoSQL
- [ ] Types: key-value, document, wide-column, graph, time-series, search
- [ ] MongoDB: document model, indexes, aggregation, sharding, replica sets, transactions
- [ ] Cassandra/DynamoDB: partition key, clustering key, consistency levels, data modeling by query
- [ ] Elasticsearch/Solr: inverted index, analyzers, relevance scoring, shards and replicas
- [ ] CAP and PACELC, eventual consistency, quorum reads/writes
- [ ] SQL vs NoSQL selection criteria, polyglot persistence
- [ ] Postgres vs MySQL differences, NewSQL awareness

---

## 17. Low Level Design (LLD)

### Approach
- [ ] Requirement clarification, identifying entities, relationships, use cases
- [ ] Class diagram, sequence diagram, state diagram (UML basics)
- [ ] Choosing patterns, extensibility, interfaces and abstractions
- [ ] Concurrency and thread safety in design
- [ ] Clean, testable code, in-memory data stores, error handling
- [ ] Writing runnable code in limited time

### Problem Set
- [ ] Parking Lot
- [ ] Elevator System
- [ ] Library Management
- [ ] ATM
- [ ] Vending Machine
- [ ] Splitwise (expense sharing)
- [ ] BookMyShow (movie ticket booking)
- [ ] Tic-Tac-Toe, Chess, Snake and Ladder
- [ ] Food Delivery, Cab Booking (Uber/Ola), Hotel Booking
- [ ] Notification System, Logger framework
- [ ] Rate Limiter (token bucket, sliding window)
- [ ] LRU Cache, LFU Cache, in-memory key-value store with TTL
- [ ] Task Scheduler, Job Scheduler, Cron
- [ ] Pub-Sub / Message Queue, Event Bus
- [ ] URL Shortener (class design)
- [ ] File System, Text Editor with undo/redo
- [ ] Rule Engine, Workflow Engine, Payment Gateway/Wallet
- [ ] Shopping Cart and Order Management, Inventory Management
- [ ] Stock Exchange/Order Matching, Social Network Feed
- [ ] Custom thread pool, custom HashMap, custom blocking queue

---

## 18. High Level Design and System Design

### Method
- [ ] Requirement gathering: functional vs non-functional, scope, assumptions
- [ ] Capacity estimation: QPS, storage, bandwidth, read/write ratio, back-of-envelope numbers
- [ ] API design, data model, high-level components, deep dives, bottlenecks, trade-offs

### Building Blocks
- [ ] Load balancers (L4 vs L7, algorithms, health checks), reverse proxy, API gateway
- [ ] CDN, DNS, caching layers, object storage, block storage
- [ ] SQL vs NoSQL selection, schema design, indexing, sharding, replication
- [ ] Message queues, streams, async processing, workers, scheduling
- [ ] Search systems, notification systems, rate limiting, throttling
- [ ] Blob storage, file chunking, deduplication

### Distributed Systems Concepts
- [ ] Scalability: horizontal vs vertical, stateless services, session handling
- [ ] CAP, PACELC, consistency models (strong, eventual, causal), quorum
- [ ] Consistent hashing, virtual nodes, sharding strategies, rebalancing
- [ ] Replication strategies, leader election, consensus (Raft, Paxos), ZooKeeper/etcd
- [ ] Distributed ID generation (Snowflake, UUID, ticket servers), distributed locks, clocks and ordering
- [ ] Idempotency, retries, exactly-once myths, backpressure
- [ ] Data structures: Bloom filter, HyperLogLog, count-min sketch, trie, geohash, quadtree, skip list, LSM tree
- [ ] Rate limiting algorithms: token bucket, leaky bucket, fixed/sliding window
- [ ] Gossip protocol, heartbeats, failure detection
- [ ] Real-time communication: WebSockets, SSE, long polling, push notifications

### Reliability and Operations
- [ ] Availability and SLA/SLO/SLI, redundancy, failover, multi-region, disaster recovery
- [ ] Fault tolerance, graceful degradation, circuit breakers
- [ ] Monitoring, alerting, logging, tracing
- [ ] Security: auth, encryption, DDoS protection
- [ ] Cost and capacity planning

### Classic Designs
- [ ] URL Shortener, Pastebin
- [ ] Rate Limiter, API Gateway
- [ ] Twitter/News Feed, Instagram, Facebook timeline
- [ ] WhatsApp/Chat system, Notification service
- [ ] YouTube/Netflix (video streaming), Spotify
- [ ] Uber/Ola (ride matching, geo-search), Food delivery, Google Maps basics
- [ ] Dropbox/Google Drive, Google Docs (collaborative editing)
- [ ] Web crawler, Search autocomplete/typeahead, Search engine
- [ ] Distributed cache, distributed queue, distributed lock service, key-value store
- [ ] Payment system, Wallet, Ticket booking, Flash sale, E-commerce (cart, inventory, orders, checkout)
- [ ] Metrics/logging system, Leaderboard, Unique ID generator, Distributed job scheduler
- [ ] Hotel/Airline reservation, Stock exchange, Recommendation system basics

---

## 19. Data Structures and Algorithms

### Foundations
- [ ] Big-O (time and space), amortized analysis, best/average/worst case
- [ ] Recursion, call stack, memoization, tail recursion
- [ ] Bit manipulation, math tricks (gcd, primes, modular arithmetic)

### Data Structures
- [ ] Arrays, strings, matrices
- [ ] Linked lists (singly, doubly, circular), fast/slow pointers
- [ ] Stack, queue, deque, monotonic stack/queue
- [ ] Hash table, hash set, collision strategies, custom HashMap implementation
- [ ] Trees: binary tree, BST, AVL, Red-Black, B-tree, segment tree, Fenwick tree
- [ ] Heap / priority queue, trie, union-find (DSU)
- [ ] Graphs: adjacency list/matrix, directed/undirected, weighted
- [ ] LRU/LFU cache structures, skip list, Bloom filter

### Patterns and Techniques
- [ ] Two pointers, sliding window, prefix sum, difference array
- [ ] Binary search (on index and on answer)
- [ ] Sorting: merge, quick, heap, counting, radix; stability; custom comparators
- [ ] Divide and conquer, greedy, intervals (merge, insert, meeting rooms)
- [ ] Backtracking: permutations, combinations, subsets, N-Queens, sudoku
- [ ] Dynamic programming: 1D, 2D, knapsack, LIS, LCS, edit distance, coin change, partition, DP on trees/grids/strings, bitmask DP
- [ ] Tree: traversals (DFS/BFS, iterative and recursive), LCA, diameter, serialization, views
- [ ] Graph: BFS, DFS, topological sort, shortest path (Dijkstra, Bellman-Ford, Floyd-Warshall), MST (Kruskal, Prim), cycle detection, connected components, grid problems
- [ ] Heap: top-K, merge K sorted lists, median of stream
- [ ] String: KMP, rolling hash, palindromes, anagrams, parsing
- [ ] Design problems: LRU cache, Min stack, Twitter feed, iterator design

### Practice Targets
- [ ] Easy, medium, hard ratio plan, pattern-based revision
- [ ] Writing clean code in Java within time, dry-running with test cases
- [ ] Explaining approach and complexity aloud

---

## 20. DevOps, Docker, Kubernetes, CI/CD

### Version Control
- [ ] Git internals, branching strategies (GitFlow, trunk-based), merge vs rebase, cherry-pick, stash, reset vs revert, resolving conflicts, bisect

### Build Tools
- [ ] Maven: lifecycle, dependency scopes, dependency management/BOM, conflict resolution, multi-module, profiles
- [ ] Gradle basics, artifact repositories (Nexus, Artifactory)

### CI/CD
- [ ] Pipeline stages: build, test, scan, package, deploy
- [ ] Jenkins, GitHub Actions, GitLab CI, Azure DevOps
- [ ] Quality gates, SonarQube, dependency and image scanning
- [ ] Deployment strategies: rolling, blue-green, canary, feature flags, rollback
- [ ] GitOps (ArgoCD/Flux), environment promotion

### Docker
- [ ] Image vs container, layers, caching, Dockerfile best practices, multi-stage builds
- [ ] Networking modes, volumes, compose
- [ ] Image size and security, running JVM in containers

### Kubernetes
- [ ] Architecture: control plane, nodes, kubelet, etcd, scheduler
- [ ] Pod, ReplicaSet, Deployment, StatefulSet, DaemonSet, Job/CronJob
- [ ] Service types, Ingress, DNS, ConfigMap, Secret, PV/PVC
- [ ] Probes (liveness, readiness, startup), resource requests/limits, HPA/VPA
- [ ] Rolling updates, rollbacks, namespaces, RBAC, network policies
- [ ] Helm, Kustomize, kubectl debugging (logs, describe, exec)

### Infrastructure
- [ ] Infrastructure as Code (Terraform, CloudFormation)
- [ ] Linux basics for engineers: processes, permissions, networking, log analysis commands

---

## 21. Cloud (AWS focus)

- [ ] Cloud fundamentals: IaaS/PaaS/SaaS, regions, AZs, shared responsibility
- [ ] Compute: EC2, Auto Scaling, ELB (ALB/NLB), Lambda, ECS, EKS, Fargate, Beanstalk
- [ ] Storage: S3 (classes, versioning, lifecycle, pre-signed URLs), EBS, EFS
- [ ] Databases: RDS, Aurora, DynamoDB, ElastiCache, DocumentDB, Redshift basics
- [ ] Messaging: SQS, SNS, EventBridge, Kinesis, MSK, Step Functions
- [ ] Networking: VPC, subnets, route tables, NAT, security groups vs NACLs, Route 53, CloudFront, API Gateway
- [ ] Security: IAM (users, roles, policies), KMS, Secrets Manager, Parameter Store, Cognito, WAF
- [ ] Observability: CloudWatch, X-Ray, CloudTrail
- [ ] Deployment: CodePipeline/CodeBuild, ECR, CloudFormation
- [ ] Architecture: high availability, multi-AZ/region, cost optimization, well-architected pillars
- [ ] Serverless patterns, event-driven on AWS
- [ ] Azure/GCP equivalents awareness

---

## 22. Testing

- [ ] Test pyramid, unit vs integration vs component vs end-to-end vs contract tests
- [ ] JUnit 5: lifecycle, parameterized tests, extensions, assertions (AssertJ)
- [ ] Mockito: mock vs spy, stubbing, verification, argument captors, mocking static/final
- [ ] TDD and BDD (Cucumber), test naming and structure (AAA, Given-When-Then)
- [ ] Spring test slices, `MockMvc`, `WebTestClient`, `@MockBean`
- [ ] Testcontainers, WireMock, embedded Kafka, database test strategies
- [ ] Contract testing (Pact, Spring Cloud Contract)
- [ ] Code coverage (JaCoCo), mutation testing (PIT), meaningful coverage
- [ ] Testing async, concurrent, and time-dependent code
- [ ] Performance testing: JMeter, Gatling, load/stress/soak tests
- [ ] Test data management, flaky tests, test isolation

---

## 23. Security (General)

- [ ] CIA triad, defense in depth, least privilege, zero trust
- [ ] OWASP Top 10, secure coding, input validation, output encoding
- [ ] Cryptography: symmetric vs asymmetric, hashing, HMAC, digital signatures, key management
- [ ] TLS/HTTPS handshake, certificates, PKI, mTLS
- [ ] Authentication methods: MFA, SSO, passwordless
- [ ] Secrets management, rotation, config security
- [ ] Dependency vulnerabilities (SBOM, Snyk, Dependabot), supply chain security
- [ ] Data privacy: PII, encryption at rest and in transit, GDPR basics, audit trails
- [ ] API security: rate limiting, input validation, authentication at gateway

---

## 24. Observability and Production Support

- [ ] Three pillars: logs, metrics, traces
- [ ] Logging best practices: levels, structured logs, correlation IDs, log aggregation (ELK/EFK, Splunk, Loki)
- [ ] Metrics: Prometheus, Grafana, Micrometer, RED and USE methods, golden signals
- [ ] Distributed tracing: OpenTelemetry, Jaeger, Zipkin, trace/span context propagation
- [ ] APM tools (Datadog, New Relic, Dynatrace)
- [ ] Alerting design, SLIs/SLOs/error budgets, runbooks
- [ ] Incident management, RCA and postmortems, on-call practices
- [ ] Production debugging: thread/heap dumps, slow endpoint diagnosis, DB slow queries, connection pool exhaustion
- [ ] Capacity planning, performance baselines, load testing in prod-like environments

---

## 25. Networking and OS Basics

### Networking
- [ ] OSI vs TCP/IP model, IP, ports, DNS resolution
- [ ] TCP vs UDP, three-way handshake, flow and congestion control, connection reuse
- [ ] HTTP/1.1 vs HTTP/2 vs HTTP/3, keep-alive, headers, methods, cookies, sessions
- [ ] HTTPS/TLS, CORS, proxies, NAT, firewalls
- [ ] WebSockets, long polling, SSE, gRPC (HTTP/2, protobuf)
- [ ] What happens when you type a URL in a browser

### Operating System
- [ ] Processes vs threads, context switching, scheduling
- [ ] Virtual memory, paging, swapping, memory-mapped files
- [ ] File descriptors, I/O models (blocking, non-blocking, multiplexing, async), epoll
- [ ] Inter-process communication, deadlocks, synchronization primitives
- [ ] Linux commands for troubleshooting (top, ps, netstat/ss, lsof, df, grep, awk, tail)

---

## 26. Behavioral and Project Discussion

### Project Walkthrough
- [ ] Architecture of current/past projects with diagram, tech stack, scale numbers
- [ ] Your exact role, ownership, modules built, decisions and why
- [ ] Integrations (ERP, payment, messaging), data flow, failure handling
- [ ] Performance, scalability, or reliability improvements with measurable impact
- [ ] Hardest bug or production incident, root cause, fix, prevention
- [ ] Design trade-offs you made, what you would do differently

### Leadership and Collaboration
- [ ] Mentoring juniors, code reviews, onboarding, estimation, planning
- [ ] Handling disagreements, tight deadlines, changing requirements, ambiguity
- [ ] Stakeholder and client communication, working with architects
- [ ] Agile/Scrum practices, sprint ceremonies, delivery ownership

### Career Narrative
- [ ] Self-introduction (answer-first, 60-90 seconds)
- [ ] Why switching, why this company, career goals, strengths/weaknesses
- [ ] Explaining domain background as an advantage (enterprise commerce to microservices)
- [ ] Gap/bench/notice period explanation, salary negotiation, offer evaluation
- [ ] STAR method for behavioral answers, questions to ask the interviewer

---

## 27. Other Domains

### Reactive and Async
- [ ] Reactive manifesto, Reactive Streams, Project Reactor (Mono/Flux), RxJava
- [ ] Operators, error handling, schedulers, backpressure, blocking vs non-blocking I/O
- [ ] R2DBC, reactive Kafka, reactive security

### Batch and Scheduling
- [ ] Spring Batch: job, step, chunk processing, reader/processor/writer, restartability, skip/retry, partitioning
- [ ] Schedulers: `@Scheduled`, Quartz, ShedLock for distributed schedulers

### Search
- [ ] Elasticsearch/OpenSearch/Solr: indexing, analyzers, mappings, queries, aggregations, relevance tuning, cluster sizing
- [ ] Faceted search, autocomplete, reindexing strategies

### API Styles
- [ ] GraphQL: schema, queries, mutations, resolvers, N+1, federation
- [ ] gRPC: protobuf, streaming types, interceptors, vs REST
- [ ] WebSockets/STOMP, webhooks, SOAP awareness

### Data and Streaming Awareness
- [ ] ETL vs ELT, data lake vs warehouse, CDC (Debezium)
- [ ] Spark, Flink, Kafka Streams overview, Iceberg awareness

### AI Awareness (increasingly asked)
- [ ] LLM API integration basics, prompt design, RAG, embeddings, vector databases
- [ ] Spring AI overview, guardrails, cost/latency considerations
- [ ] Using AI tools productively in engineering workflow

### SAP Commerce (Hybris) Domain (for domain-relevant roles)
- [ ] Architecture, extensions, type system, ImpEx, FlexibleSearch, Service Layer
- [ ] OCC REST APIs, OAuth2, Solr search, CronJobs, Backoffice, WCMS, promotions
- [ ] Business processes/workflow, order management, payment, integrations (S/4HANA, CPI)
- [ ] Hotfolder, performance tuning, CCv2 deployments

### Miscellaneous Fundamentals
- [ ] Unicode/encoding, regex, JSON/XML/YAML/Protobuf/Avro handling
- [ ] Time zones and date pitfalls, floating-point and money handling
- [ ] Internationalization, feature toggles, A/B testing basics
- [ ] Documentation practices, API contracts, technical writing
