/**
 * Initial Seed Data for the Online Examination System (B.Tech CSE)
 * Loaded into Browser LocalStorage on initial load if not already present.
 */

export const INITIAL_USERS = [
  {
    id: "usr_admin_1",
    email: "admin@eduexam.ac.in",
    password: "admin",
    name: "Dr. A. P. J. Abdul Kalam",
    role: "admin",
    department: "Computer Science & Engineering",
    designation: "Head of Examination & Professor"
  },
  {
    id: "usr_student_1",
    email: "student@eduexam.ac.in",
    password: "student",
    name: "Gagan Kumar Reddy",
    role: "student",
    rollNumber: "22CSE101",
    batch: "2022-2026",
    semester: "6th Semester",
    department: "Computer Science & Engineering"
  },
  {
    id: "usr_student_2",
    email: "priya@eduexam.ac.in",
    password: "student",
    name: "Priya Sharma",
    role: "student",
    rollNumber: "22CSE102",
    batch: "2022-2026",
    semester: "6th Semester",
    department: "Computer Science & Engineering"
  }
];

export const INITIAL_EXAMS = [
  {
    id: "exam_dsa_01",
    code: "CS-301",
    title: "Data Structures & Algorithms Comprehensive",
    category: "Core CSE",
    durationMinutes: 15,
    totalMarks: 20,
    passingMarks: 8,
    negativeMarking: 0.25,
    status: "Active",
    instructions: [
      "Total duration is 15 minutes. The timer starts automatically upon entry.",
      "Each correct answer awards 2.0 marks. An incorrect answer deducts 0.25 marks.",
      "Unattempted questions receive zero penalty.",
      "You can flag questions for review and return to them anytime before final submission.",
      "Do not switch tabs or exit fullscreen; violation warnings will be recorded.",
      "The system will automatically auto-submit your exam when the countdown timer hits 00:00."
    ],
    createdAt: "2026-11-20T10:00:00.000Z"
  },
  {
    id: "exam_os_02",
    code: "CS-402",
    title: "Operating Systems & Concurrency",
    category: "Systems",
    durationMinutes: 10,
    totalMarks: 16,
    passingMarks: 6,
    negativeMarking: 0.25,
    status: "Active",
    instructions: [
      "Total duration is 10 minutes.",
      "Each question carries 2.0 marks. Negative mark for wrong answer is 0.25.",
      "Topics include CPU scheduling, virtual memory, race conditions, and deadlocks.",
      "Use the Question Palette on the right to navigate between sections."
    ],
    createdAt: "2026-11-21T14:30:00.000Z"
  },
  {
    id: "exam_dbms_03",
    code: "CS-503",
    title: "Database Management & Relational Design",
    category: "Databases",
    durationMinutes: 12,
    totalMarks: 14,
    passingMarks: 6,
    negativeMarking: 0.0,
    status: "Active",
    instructions: [
      "Total duration is 12 minutes.",
      "No negative marking for this foundational test.",
      "Each question carries 2.0 marks.",
      "Topics include SQL, Normalization, ACID properties, and B+ Trees."
    ],
    createdAt: "2026-11-22T09:15:00.000Z"
  }
];

export const INITIAL_QUESTIONS = [
  // EXAM 1: DSA (10 questions, 2 marks each = 20 total)
  {
    id: "q_dsa_1",
    examId: "exam_dsa_01",
    questionNumber: 1,
    questionText: "What is the worst-case time complexity of QuickSort when the pivot element is always chosen as the smallest or largest element?",
    options: [
      { id: "A", text: "O(n log n)" },
      { id: "B", text: "O(n)" },
      { id: "C", text: "O(n²)" },
      { id: "D", text: "O(log n)" }
    ],
    correctOption: "C",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Sorting Algorithms",
    explanation: "When the selected pivot divides the array into subproblems of size 0 and n-1 at each recursion step (e.g., sorted array with first or last element as pivot), the recurrence relation becomes T(n) = T(n-1) + O(n), which resolves to O(n²)."
  },
  {
    id: "q_dsa_2",
    examId: "exam_dsa_01",
    questionNumber: 2,
    questionText: "Which of the following data structures is typically used to implement Breadth-First Search (BFS) traversal of a graph?",
    options: [
      { id: "A", text: "Stack" },
      { id: "B", text: "Queue" },
      { id: "C", text: "Binary Search Tree" },
      { id: "D", text: "Min-Heap" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "Graph Algorithms",
    explanation: "Breadth-First Search visits vertices level by level in First-In, First-Out order, making a FIFO Queue the fundamental data structure for maintaining the frontier of vertices."
  },
  {
    id: "q_dsa_3",
    examId: "exam_dsa_01",
    questionNumber: 3,
    questionText: "What is the balance factor constraint for any node in an AVL Tree?",
    options: [
      { id: "A", text: "Height difference between left and right subtrees must be in {-1, 0, 1}" },
      { id: "B", text: "Height difference between left and right subtrees must strictly equal 0" },
      { id: "C", text: "Number of nodes in left subtree equals right subtree" },
      { id: "D", text: "Balance factor can be any value between -2 and +2" }
    ],
    correctOption: "A",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Self-Balancing Trees",
    explanation: "An AVL tree is a self-balancing binary search tree where the difference between heights of left and right subtrees for any node cannot exceed 1. Hence, balance factor must be in {-1, 0, 1}."
  },
  {
    id: "q_dsa_4",
    examId: "exam_dsa_01",
    questionNumber: 4,
    questionText: "Which algorithm finds the Single Source Shortest Path in a weighted graph with non-negative edge weights?",
    options: [
      { id: "A", text: "Prim's Algorithm" },
      { id: "B", text: "Kruskal's Algorithm" },
      { id: "C", text: "Dijkstra's Algorithm" },
      { id: "D", text: "Floyd-Warshall Algorithm" }
    ],
    correctOption: "C",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "Greedy Algorithms",
    explanation: "Dijkstra's algorithm computes the shortest path from a single source vertex to all other vertices in graphs with non-negative weights using a priority queue in O((V + E) log V) time."
  },
  {
    id: "q_dsa_5",
    examId: "exam_dsa_01",
    questionNumber: 5,
    questionText: "What is the minimum number of stacks required to implement a standard First-In-First-Out (FIFO) Queue?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "Cannot be implemented using stacks" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Stacks & Queues",
    explanation: "Two stacks (an input stack for enqueue and an output stack for dequeue) are required to invert the LIFO order twice, restoring the desired FIFO order with amortized O(1) operations."
  },
  {
    id: "q_dsa_6",
    examId: "exam_dsa_01",
    questionNumber: 6,
    questionText: "In a min-heap with N elements, where is the second smallest element always located?",
    options: [
      { id: "A", text: "At index 0 (the root)" },
      { id: "B", text: "Either at index 1 or index 2 (children of the root)" },
      { id: "C", text: "At any leaf node" },
      { id: "D", text: "At index N - 1" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Heaps",
    explanation: "In a 0-indexed min-heap, the root (index 0) holds the smallest element. By the heap property, the second smallest element must be one of the immediate children of the root (indices 1 or 2)."
  },
  {
    id: "q_dsa_7",
    examId: "exam_dsa_01",
    questionNumber: 7,
    questionText: "Which algorithmic paradigm is employed by the 0/1 Knapsack problem when solved in O(n*W) time?",
    options: [
      { id: "A", text: "Greedy Technique" },
      { id: "B", text: "Dynamic Programming" },
      { id: "C", text: "Divide and Conquer" },
      { id: "D", text: "Backtracking with pruning only" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Dynamic Programming",
    explanation: "0/1 Knapsack exhibits overlapping subproblems and optimal substructure. It cannot be solved greedily; dynamic programming achieves pseudo-polynomial O(n*W) runtime using tabulation or memoization."
  },
  {
    id: "q_dsa_8",
    examId: "exam_dsa_01",
    questionNumber: 8,
    questionText: "What is the primary resolution strategy used in Open Addressing collision resolution known as Quadratic Probing?",
    options: [
      { id: "A", text: "hash(key, i) = (h(key) + i) % TableSize" },
      { id: "B", text: "hash(key, i) = (h(key) + c1*i + c2*i²) % TableSize" },
      { id: "C", text: "Creating a linked list at each bucket" },
      { id: "D", text: "Hashing the result using a secondary hash function h2(key)" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Hard",
    topic: "Hashing",
    explanation: "Quadratic probing calculates probe positions using quadratic polynomial offsets (c1*i + c2*i²) added to the original hash value to mitigate primary clustering."
  },
  {
    id: "q_dsa_9",
    examId: "exam_dsa_01",
    questionNumber: 9,
    questionText: "What is the maximum number of nodes in a binary tree of height 'h' (assuming root has height 0)?",
    options: [
      { id: "A", text: "2^h - 1" },
      { id: "B", text: "2^(h + 1) - 1" },
      { id: "C", text: "2^h" },
      { id: "D", text: "h² + 1" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "Trees",
    explanation: "A perfect binary tree of height h with root at level 0 has nodes summing: 2^0 + 2^1 + ... + 2^h = 2^(h+1) - 1."
  },
  {
    id: "q_dsa_10",
    examId: "exam_dsa_01",
    questionNumber: 10,
    questionText: "What is the space complexity of an adjacency matrix representation of a graph with V vertices and E edges?",
    options: [
      { id: "A", text: "O(V + E)" },
      { id: "B", text: "O(V²)" },
      { id: "C", text: "O(E²)" },
      { id: "D", text: "O(V * E)" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "Graph Representation",
    explanation: "An adjacency matrix allocates a 2D matrix of size V x V irrespective of the number of edges, requiring O(V²) space."
  },

  // EXAM 2: OPERATING SYSTEMS (8 questions, 2 marks each = 16 total)
  {
    id: "q_os_1",
    examId: "exam_os_02",
    questionNumber: 1,
    questionText: "Which condition is NOT one of Coffman's four necessary conditions for a Deadlock to occur?",
    options: [
      { id: "A", text: "Mutual Exclusion" },
      { id: "B", text: "Preemption Allowed" },
      { id: "C", text: "Hold and Wait" },
      { id: "D", text: "Circular Wait" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Deadlocks",
    explanation: "The four Coffman conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. If preemption is allowed, deadlocks cannot persist."
  },
  {
    id: "q_os_2",
    examId: "exam_os_02",
    questionNumber: 2,
    questionText: "What phenomenon occurs in paging when increasing the number of page frames results in an increased number of page faults for FIFO replacement?",
    options: [
      { id: "A", text: "Thrashing" },
      { id: "B", text: "Belady's Anomaly" },
      { id: "C", text: "Priority Inversion" },
      { id: "D", text: "Convoy Effect" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "Memory Management",
    explanation: "Belady's Anomaly describes the counter-intuitive situation where increasing page frames leads to more page faults under First-In, First-Out (FIFO) page replacement."
  },
  {
    id: "q_os_3",
    examId: "exam_os_02",
    questionNumber: 3,
    questionText: "Which CPU scheduling algorithm is mathematically optimal in terms of minimizing average waiting time?",
    options: [
      { id: "A", text: "First-Come, First-Served (FCFS)" },
      { id: "B", text: "Round Robin (RR)" },
      { id: "C", text: "Shortest Job First (SJF) / Shortest Remaining Time First" },
      { id: "D", text: "Priority Scheduling" }
    ],
    correctOption: "C",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "CPU Scheduling",
    explanation: "Shortest Job First (SJF) is provably optimal because scheduling a shorter process before a longer process decreases waiting time for the short process more than it increases waiting time for the long process."
  },
  {
    id: "q_os_4",
    examId: "exam_os_02",
    questionNumber: 4,
    questionText: "What is the role of the Translation Lookaside Buffer (TLB) in virtual memory systems?",
    options: [
      { id: "A", text: "Stores operating system kernel instructions" },
      { id: "B", text: "A fast hardware cache of recent virtual-to-physical address translations" },
      { id: "C", text: "Buffers disk write blocks" },
      { id: "D", text: "Manages network packets" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Virtual Memory",
    explanation: "The TLB is an associative memory cache inside the MMU that stores recent page table entries (virtual page number to physical frame number) to avoid multiple RAM memory accesses during address translation."
  },
  {
    id: "q_os_5",
    examId: "exam_os_02",
    questionNumber: 5,
    questionText: "In UNIX-like operating systems, what system call creates an exact duplicate child process of the caller?",
    options: [
      { id: "A", text: "fork()" },
      { id: "B", text: "exec()" },
      { id: "C", text: "spawn()" },
      { id: "D", text: "clone()" }
    ],
    correctOption: "A",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "Process Management",
    explanation: "The fork() system call creates a new child process with its own copy of the parent's address space, file descriptors, and registers. It returns 0 to the child and the child's PID to the parent."
  },
  {
    id: "q_os_6",
    examId: "exam_os_02",
    questionNumber: 6,
    questionText: "What is a 'Race Condition' in concurrent programming?",
    options: [
      { id: "A", text: "When two processes compete for CPU clock frequency" },
      { id: "B", text: "When the outcome of concurrent execution depends unpredictably on the order of execution" },
      { id: "C", text: "When a thread is starved of memory allocation" },
      { id: "D", text: "When a system continuously pages without doing useful work" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "Synchronization",
    explanation: "A race condition occurs when multiple threads or processes access and manipulate shared data concurrently and the final result depends on the order or timing in which instructions execute."
  },
  {
    id: "q_os_7",
    examId: "exam_os_02",
    questionNumber: 7,
    questionText: "What is an Inode in Unix file systems?",
    options: [
      { id: "A", text: "The name of the root directory" },
      { id: "B", text: "A data structure containing file metadata such as size, permissions, and disk block pointers" },
      { id: "C", text: "The partition boot record" },
      { id: "D", text: "A cache for directory strings" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Medium",
    topic: "File Systems",
    explanation: "An inode (index node) stores all metadata about a filesystem object (file or directory) except its filename and actual data contents: permissions, owner, timestamps, and pointers to storage blocks."
  },
  {
    id: "q_os_8",
    examId: "exam_os_02",
    questionNumber: 8,
    questionText: "Which synchronization primitive consists of an integer variable accessed only via atomic wait() (P) and signal() (V) operations?",
    options: [
      { id: "A", text: "Monitor" },
      { id: "B", text: "Semaphore" },
      { id: "C", text: "Spinlock only" },
      { id: "D", text: "Barrier" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.25,
    difficulty: "Easy",
    topic: "Synchronization",
    explanation: "Dijkstra introduced the Semaphore as an integer variable that, apart from initialization, is accessed only through two standard atomic operations: wait() (or P) and signal() (or V)."
  },

  // EXAM 3: DBMS (6 questions, 2 marks each = 12 total)
  {
    id: "q_dbms_1",
    examId: "exam_dbms_03",
    questionNumber: 1,
    questionText: "Which normal form eliminates transitive functional dependencies on non-prime attributes?",
    options: [
      { id: "A", text: "First Normal Form (1NF)" },
      { id: "B", text: "Second Normal Form (2NF)" },
      { id: "C", text: "Third Normal Form (3NF)" },
      { id: "D", text: "Boyce-Codd Normal Form (BCNF)" }
    ],
    correctOption: "C",
    marks: 2.0,
    negativeMarks: 0.0,
    difficulty: "Medium",
    topic: "Normalization",
    explanation: "A relation is in 3NF if it is in 2NF and no non-prime attribute is transitively dependent on any candidate key (X -> Y requires X is a superkey or Y is a prime attribute)."
  },
  {
    id: "q_dbms_2",
    examId: "exam_dbms_03",
    questionNumber: 2,
    questionText: "In ACID properties of transactions, what does 'Atomicity' guarantee?",
    options: [
      { id: "A", text: "Transactions are executed in isolation from other concurrent operations" },
      { id: "B", text: "Either all operations of a transaction execute completely, or none are reflected" },
      { id: "C", text: "The database transforms from one valid state to another valid state" },
      { id: "D", text: "Committed changes persist even during unexpected system power loss" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.0,
    difficulty: "Easy",
    topic: "Transactions",
    explanation: "Atomicity ensures an 'all-or-nothing' execution rule. If any part of a transaction fails, all updates are rolled back to the pre-transaction state."
  },
  {
    id: "q_dbms_3",
    examId: "exam_dbms_03",
    questionNumber: 3,
    questionText: "Which SQL clause is used to filter records aggregated by a GROUP BY clause?",
    options: [
      { id: "A", text: "WHERE" },
      { id: "B", text: "HAVING" },
      { id: "C", text: "FILTER BY" },
      { id: "D", text: "ORDER BY" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.0,
    difficulty: "Easy",
    topic: "SQL Queries",
    explanation: "WHERE filters rows before aggregation takes place, whereas HAVING filters summary groups produced by the GROUP BY clause."
  },
  {
    id: "q_dbms_4",
    examId: "exam_dbms_03",
    questionNumber: 4,
    questionText: "Why are B+ Trees predominantly preferred over Binary Search Trees for relational database indexing on disk storage?",
    options: [
      { id: "A", text: "B+ Trees have fewer disk I/O operations due to high fan-out and leaf-level sequential traversal" },
      { id: "B", text: "Binary search trees require less memory cache" },
      { id: "C", text: "B+ Trees don't require balancing" },
      { id: "D", text: "B+ Trees allow duplicate primary keys" }
    ],
    correctOption: "A",
    marks: 2.0,
    negativeMarks: 0.0,
    difficulty: "Hard",
    topic: "Indexing",
    explanation: "B+ trees have a high branching factor (fan-out), keeping tree height very shallow (typically 3-4 levels) which reduces disk I/O reads. Furthermore, linked leaf nodes provide fast range query scans."
  },
  {
    id: "q_dbms_5",
    examId: "exam_dbms_03",
    questionNumber: 5,
    questionText: "What type of join returns all rows from the left table, and matched rows from the right table, filling nulls if no match?",
    options: [
      { id: "A", text: "INNER JOIN" },
      { id: "B", text: "LEFT OUTER JOIN" },
      { id: "C", text: "RIGHT OUTER JOIN" },
      { id: "D", text: "CROSS JOIN" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.0,
    difficulty: "Easy",
    topic: "Relational Algebra",
    explanation: "A LEFT OUTER JOIN preserves all records from the left relation regardless of whether a matching record exists in the right relation; missing attributes are populated with NULL."
  },
  {
    id: "q_dbms_6",
    examId: "exam_dbms_03",
    questionNumber: 6,
    questionText: "Which schedule property guarantees that once a transaction commits, it will never need to be rolled back due to failure of another uncommitted transaction?",
    options: [
      { id: "A", text: "Serial Schedule" },
      { id: "B", text: "Cascadeless Recoverable Schedule" },
      { id: "C", text: "Strict Schedule" },
      { id: "D", text: "Conflict-Serializable Schedule" }
    ],
    correctOption: "B",
    marks: 2.0,
    negativeMarks: 0.0,
    difficulty: "Hard",
    topic: "Concurrency Control",
    explanation: "In a cascadeless schedule, transactions read only committed values from other transactions, preventing cascading aborts (domino effect) when a transaction rolls back."
  }
];

export const INITIAL_RESULTS = [
  {
    id: "res_demo_1",
    examId: "exam_dsa_01",
    examTitle: "Data Structures & Algorithms Comprehensive",
    examCode: "CS-301",
    studentId: "usr_student_2",
    studentName: "Priya Sharma",
    studentRoll: "22CSE102",
    totalQuestions: 10,
    attempted: 10,
    correctCount: 8,
    wrongCount: 2,
    unattemptedCount: 0,
    marksScored: 15.5,
    totalMarks: 20,
    percentage: 77.5,
    passed: true,
    timeTakenSeconds: 685,
    submittedAt: "2026-11-23T11:45:22.000Z",
    responses: {
      "q_dsa_1": "C",
      "q_dsa_2": "B",
      "q_dsa_3": "A",
      "q_dsa_4": "C",
      "q_dsa_5": "B",
      "q_dsa_6": "B",
      "q_dsa_7": "B",
      "q_dsa_8": "A", // wrong (correct: C)
      "q_dsa_9": "B",
      "q_dsa_10": "A" // wrong (correct: B)
    }
  }
];

