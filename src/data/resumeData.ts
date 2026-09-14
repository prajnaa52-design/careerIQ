export interface CourseModuleNote {
  moduleNumber: number;
  moduleTitle: string;
  keyTakeaways: string[];
  codeSnippet?: string;
  cheatSheetSummary: string;
}

export interface CourseQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface CourseSuggestion {
  id: string;
  title: string;
  provider: 'Coursera' | 'DeepLearning.AI' | 'Stanford Online' | 'MIT OpenCourseWare' | 'edX' | 'Udacity' | 'Harvard Online' | 'DataCamp';
  instructor: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviewsCount: string;
  skillTarget: string;
  matchUplift: number; // e.g. +14% Match
  syllabusHighlights: string[];
  url: string;
  category?: 'Data & Analytics' | 'AI & LLMs' | 'Machine Learning' | 'Software Architecture' | 'Cloud & DevOps' | 'BI & Visualization';
  targetRoles?: string[];
  prerequisites?: string;
  certificateType?: string;
  modulesCount?: number;
  detailedNotes?: CourseModuleNote[];
  practiceQuiz?: CourseQuizQuestion[];
}

export interface CareerRoleOpportunity {
  id: string;
  title: string;
  category: 'AI & Machine Learning' | 'Software & Cloud' | 'Data & Analytics' | 'Product & Strategy';
  matchScore: number;
  salaryRange: string;
  averageSalary: string;
  growthRate: string;
  openingsCount: string;
  description: string;
  requiredSkills: string[];
  topHiringCompanies: string[];
  whyYouMatch: string;
  sampleOpenings: {
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
  }[];
}

export interface SampleResume {
  id: string;
  title: string;
  currentRole: string;
  targetRole: string;
  experienceYears: string;
  rawText: string;
  defaultExtractedSkills: string[];
}

export const SAMPLE_RESUMES: SampleResume[] = [
  {
    id: 'sample-software-to-ai',
    title: 'Full Stack Engineer → AI Systems Engineer',
    currentRole: 'Senior Full Stack Developer',
    targetRole: 'AI Application Engineer',
    experienceYears: '4+ years',
    defaultExtractedSkills: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'REST APIs', 'Git', 'AWS'],
    rawText: `ALEX MERCER
San Francisco, CA • alex.mercer@example.com • linkedin.com/in/alex-mercer-dev • github.com/alexmercer

PROFESSIONAL SUMMARY
Senior Full Stack Developer with 4+ years of experience designing and scaling web applications using React, TypeScript, Node.js, and Python. Proven record of migrating microservices to AWS and optimizing PostgreSQL query latencies by 35%. Passionate about transitioning into generative AI application engineering and agentic workflows.

TECHNICAL SKILLS
Languages: TypeScript, JavaScript, Python, SQL, HTML/CSS
Frameworks & Libraries: React, Next.js, Node.js, Express, FastAPI, TailwindCSS
Cloud & DevOps: AWS (S3, ECS, Lambda), Docker, Git, CI/CD pipelines
Databases: PostgreSQL, Redis, MongoDB

PROFESSIONAL EXPERIENCE
Senior Software Engineer | Apex Cloud Solutions | 2023 - Present
- Architected and delivered customer-facing dashboard in React & TypeScript serving 120,000+ daily active users.
- Built backend ingestion microservice in Python & FastAPI, integrating external REST endpoints and caching with Redis.
- Reduced database bottleneck latencies by 35% through indexing and PostgreSQL query refactoring.
- Led sprint planning and mentored 3 junior frontend engineers.

Full Stack Engineer | MetricPulse Inc. | 2021 - 2023
- Developed enterprise client portals utilizing Next.js, Node.js, and Docker containers on AWS ECS.
- Automated deployment scripts with GitHub Actions, reducing release cycle time from 40 to 12 minutes.

EDUCATION
B.S. in Computer Science | University of California, Davis | 2017 - 2021
`
  },
  {
    id: 'sample-analyst-to-datascience',
    title: 'Data Analyst → Machine Learning Scientist',
    currentRole: 'Lead Data Analyst',
    targetRole: 'Data Scientist & ML Engineer',
    experienceYears: '3 years',
    defaultExtractedSkills: ['SQL', 'Python', 'Pandas', 'Tableau', 'Power BI', 'Statistics', 'Excel', 'Data Visualization', 'A/B Testing'],
    rawText: `PRIYA SHARMA
New York, NY • priya.sharma@example.com • linkedin.com/in/priyasharma-data

PROFESSIONAL SUMMARY
Analytical and detail-oriented Lead Data Analyst with 3 years of experience driving product growth and customer retention using SQL, Python, Tableau, and statistical modeling. Seeking to accelerate into Machine Learning and Data Science to deploy predictive algorithms in production.

TECHNICAL SKILLS
Analytics & Data: SQL, Python (Pandas, NumPy, Matplotlib), Advanced Excel, Tableau, Power BI
Methodologies: A/B Testing, Hypothesis Testing, Cohort Analysis, Star Schema Modeling, ETL Pipelines
Databases: Snowflake, PostgreSQL, BigQuery

EXPERIENCE
Lead Data Analyst | FinMetrics Global | 2022 - Present
- Built and maintained Snowflake ETL pipelines and customer segmentation models for 2.4M active user accounts.
- Designed 15+ executive Tableau dashboards tracking revenue churn and conversion funnel metrics.
- Executed 25+ randomized A/B experiments collaborating directly with product managers and engineers.

Quantitative Analyst | Nexus Data Labs | 2021 - 2022
- Conducted exploratory data analysis in Python using Pandas and Seaborn to identify fraud transaction patterns.
- Automated monthly recurring financial reconciliation reports in SQL, saving 16 hours of analyst manual effort weekly.

EDUCATION
B.S. in Statistics & Data Analytics | Columbia University | 2017 - 2021
`
  },
  {
    id: 'sample-cs-grad',
    title: 'Recent CS Graduate → Cloud & DevOps Engineer',
    currentRole: 'Computer Science Graduate',
    targetRole: 'Cloud Infrastructure & DevOps Engineer',
    experienceYears: 'Entry Level',
    defaultExtractedSkills: ['Python', 'Java', 'Linux', 'Git', 'Docker', 'Kubernetes', 'Bash', 'Networking', 'AWS'],
    rawText: `JORDAN CHEN
Seattle, WA • jordan.chen@example.com • github.com/jordanchen-cloud

EDUCATION
B.S. in Computer Science | University of Washington | 2022 - 2026
Relevant Coursework: Distributed Systems, Operating Systems, Computer Networks, Database Internals, Cloud Computing

TECHNICAL SKILLS
Languages: Python, Java, Bash, Go, SQL
Platforms & Tools: Linux (Ubuntu/Debian), Docker, Kubernetes, AWS, Git, Terraform (Foundational)
Networking & Systems: TCP/IP, DNS, HTTP/REST, CI/CD, Containerization

PROJECTS
High-Availability Microservice Cluster | Kubernetes, Docker, Go
- Deployed a fault-tolerant microservice cluster on AWS EKS with Prometheus monitoring and ingress controllers.
- Configured automated rolling updates and zero-downtime health-check probes using Terraform.

Serverless Event Dispatcher | AWS Lambda, Python, SQS
- Built an event-driven notification queue ingesting 10,000 mock webhook messages per minute.
`
  }
];

export const CAREER_OPPORTUNITIES_CATALOG: CareerRoleOpportunity[] = [
  {
    id: 'role-ai-engineer',
    title: 'AI Application & LLM Systems Engineer',
    category: 'AI & Machine Learning',
    matchScore: 91,
    salaryRange: '$145,000 - $195,000',
    averageSalary: '$168,000',
    growthRate: '+34% YoY',
    openingsCount: '4,280+ Active Jobs',
    description: 'Build enterprise-grade LLM applications, RAG pipelines, and autonomous agent workflows integrating vector databases and fine-tuned models.',
    requiredSkills: ['Python', 'TypeScript', 'LangChain / LlamaIndex', 'Vector Databases (Pinecone/Milvus)', 'FastAPI', 'RAG Architecture', 'Docker'],
    topHiringCompanies: ['OpenAI', 'Anthropic', 'Scale AI', 'Databricks', 'Palantir'],
    whyYouMatch: 'Your strong foundation in Python and backend microservices positions you directly in the top tier for LLM app orchestration. Bridging RAG vector embeddings and evaluation frameworks will unlock immediate placement.',
    sampleOpenings: [
      {
        title: 'Senior AI Application Engineer',
        company: 'Synthetix AI',
        location: 'San Francisco, CA (Hybrid)',
        salary: '$160k - $205k',
        type: 'Full-time'
      },
      {
        title: 'Full Stack LLM Engineer',
        company: 'CognitiveScale',
        location: 'Remote (US)',
        salary: '$150k - $190k',
        type: 'Full-time'
      }
    ]
  },
  {
    id: 'role-fullstack-cloud',
    title: 'Senior Full Stack & Cloud Solutions Architect',
    category: 'Software & Cloud',
    matchScore: 88,
    salaryRange: '$135,000 - $180,000',
    averageSalary: '$155,000',
    growthRate: '+22% YoY',
    openingsCount: '8,900+ Active Jobs',
    description: 'Design distributed microservices, serverless cloud architectures, and modern web applications with high throughput and strict resilience.',
    requiredSkills: ['TypeScript', 'React', 'Node.js', 'AWS / GCP', 'Docker', 'PostgreSQL', 'System Design', 'CI/CD'],
    topHiringCompanies: ['Stripe', 'Twilio', 'Shopify', 'Vercel', 'AWS'],
    whyYouMatch: 'Your verified production experience with React, Node.js, and containerized cloud services matches 88% of requirements. Mastering modern distributed system patterns will put you in the top 5% of applicants.',
    sampleOpenings: [
      {
        title: 'Lead Full Stack Cloud Architect',
        company: 'CloudVector Systems',
        location: 'Seattle, WA (Remote)',
        salary: '$155k - $195k',
        type: 'Full-time'
      },
      {
        title: 'Senior Systems Engineer',
        company: 'FinTech Velocity',
        location: 'New York, NY (Hybrid)',
        salary: '$140k - $175k',
        type: 'Full-time'
      }
    ]
  },
  {
    id: 'role-data-scientist',
    title: 'Lead Data Scientist & Predictive Modeler',
    category: 'Data & Analytics',
    matchScore: 84,
    salaryRange: '$130,000 - $175,000',
    averageSalary: '$152,000',
    growthRate: '+26% YoY',
    openingsCount: '5,120+ Active Jobs',
    description: 'Extract predictive value from massive datasets using machine learning algorithms, causal inference, feature engineering, and statistical experimentation.',
    requiredSkills: ['Python', 'SQL', 'Scikit-learn', 'Feature Engineering', 'Hypothesis Testing', 'PyTorch', 'Snowflake / BigQuery'],
    topHiringCompanies: ['Uber', 'DoorDash', 'Two Sigma', 'Netflix', 'Airbnb'],
    whyYouMatch: 'Proven statistical modeling and data transformation background satisfies core analytical requirements. Deepening production ML pipeline deployment completes your target profile.',
    sampleOpenings: [
      {
        title: 'Senior Machine Learning Scientist',
        company: 'Predix Analytics',
        location: 'Boston, MA (Hybrid)',
        salary: '$145k - $185k',
        type: 'Full-time'
      },
      {
        title: 'Applied Data Scientist',
        company: 'GrowthMetric',
        location: 'Remote',
        salary: '$135k - $170k',
        type: 'Full-time'
      }
    ]
  },
  {
    id: 'role-mlops-engineer',
    title: 'MLOps & Distributed Infrastructure Engineer',
    category: 'AI & Machine Learning',
    matchScore: 78,
    salaryRange: '$150,000 - $210,000',
    averageSalary: '$176,000',
    growthRate: '+38% YoY',
    openingsCount: '3,100+ Active Jobs',
    description: 'Automate machine learning lifecycle from continuous training to low-latency GPU serving, model observability, and Kubernetes deployment.',
    requiredSkills: ['Python', 'Kubernetes', 'Docker', 'vLLM / Triton', 'Ray', 'CI/CD for ML', 'AWS / GCP'],
    topHiringCompanies: ['Anyscale', 'CoreWeave', 'NVIDIA', 'Lambda Labs', 'Meta'],
    whyYouMatch: 'Containerization and backend fundamentals provide an ideal starting platform. Adding distributed training orchestration (Ray) and low-latency inference serving unlocks this highest-paying specialty.',
    sampleOpenings: [
      {
        title: 'MLOps Infrastructure Engineer',
        company: 'TensorScale',
        location: 'San Jose, CA',
        salary: '$165k - $215k',
        type: 'Full-time'
      }
    ]
  }
];

export const COURSES_CATALOG: CourseSuggestion[] = [
  {
    id: 'course-sql-advanced',
    title: 'Advanced SQL Window Functions, CTEs & Query Tuning',
    provider: 'Coursera',
    instructor: 'Stanford University Data Faculty',
    duration: '3 weeks (4-5 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewsCount: '31,200+ reviews',
    skillTarget: 'Advanced SQL & Query Optimization',
    matchUplift: 9,
    category: 'Data & Analytics',
    targetRoles: ['data-analyst', 'bi-engineer', 'data-engineer', 'data-scientist'],
    prerequisites: 'Basic SQL SELECT, GROUP BY, and JOIN syntax',
    certificateType: 'Verified Professional Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Mastering ROW_NUMBER(), RANK(), DENSE_RANK(), and NTILE()',
      'Recursive Common Table Expressions (CTEs) & hierarchical queries',
      'LEAD, LAG, FIRST_VALUE, and sliding window aggregations',
      'EXPLAIN query plan execution, indexing strategies, and performance tuning'
    ],
    url: 'https://www.coursera.org',
    detailedNotes: [
      {
        moduleNumber: 1,
        moduleTitle: 'Window Functions: ROW_NUMBER(), RANK() & DENSE_RANK()',
        keyTakeaways: [
          'Window functions calculate aggregations across a set of rows without collapsing rows like GROUP BY.',
          'OVER (PARTITION BY col ORDER BY col) defines the window frame for calculation.',
          'ROW_NUMBER() assigns consecutive integers starting at 1 regardless of ties.',
          'RANK() skips rank numbers when ties occur (e.g. 1, 2, 2, 4), whereas DENSE_RANK() leaves no gaps (1, 2, 2, 3).'
        ],
        codeSnippet: `SELECT employee_id, department, salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as row_num,
  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dense_rk
FROM employees;`,
        cheatSheetSummary: 'Use DENSE_RANK() for top-N ranking per category without skipping ranks on tied values.'
      },
      {
        moduleNumber: 2,
        moduleTitle: 'Recursive CTEs & Hierarchical Data Exploration',
        keyTakeaways: [
          'WITH RECURSIVE creates temporary tables that reference themselves, ideal for org charts and tree structures.',
          'Consists of an Anchor Query (base case) UNION ALL with a Recursive Query referencing the CTE name.',
          'Must include a termination condition to prevent infinite loops.'
        ],
        codeSnippet: `WITH RECURSIVE OrgChart AS (
  -- Anchor Member
  SELECT employee_id, manager_id, name, 1 as level
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  -- Recursive Member
  SELECT e.employee_id, e.manager_id, e.name, o.level + 1
  FROM employees e
  JOIN OrgChart o ON e.manager_id = o.employee_id
)
SELECT * FROM OrgChart ORDER BY level;`,
        cheatSheetSummary: 'Recursive CTEs process parent-child relationships efficiently without multiple nested JOINs.'
      },
      {
        moduleNumber: 3,
        moduleTitle: 'Positional & Frame Aggregations (LEAD, LAG, Moving Averages)',
        keyTakeaways: [
          'LAG(col, offset) accesses prior row data; LEAD(col, offset) accesses next row data.',
          'ROWS BETWEEN 6 PRECEDING AND CURRENT ROW computes 7-day moving averages.',
          'Essential for calculating period-over-period percentage growth and churn velocity.'
        ],
        codeSnippet: `SELECT sale_date, revenue,
  LAG(revenue, 1) OVER (ORDER BY sale_date) as prev_day_rev,
  ROUND((revenue - LAG(revenue, 1) OVER (ORDER BY sale_date)) / 
        LAG(revenue, 1) OVER (ORDER BY sale_date) * 100, 2) as growth_pct,
  AVG(revenue) OVER (ORDER BY sale_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_7d_avg
FROM daily_sales;`,
        cheatSheetSummary: 'LAG and LEAD eliminate the need for costly self-JOINs when computing delta changes.'
      },
      {
        moduleNumber: 4,
        moduleTitle: 'Query Optimization & EXPLAIN Execution Plans',
        keyTakeaways: [
          'Sequential Scans (Seq Scan) read entire tables; B-Tree indexes allow O(log N) lookup.',
          'Composite indexes (colA, colB) require matching left-most columns in WHERE clauses.',
          'EXPLAIN ANALYZE executes the query and reports actual vs estimated costs and buffer hits.'
        ],
        codeSnippet: `EXPLAIN ANALYZE 
SELECT * FROM orders 
WHERE customer_id = 9402 AND order_date >= '2026-01-01';`,
        cheatSheetSummary: 'Avoid SELECT * and applying functions to indexed columns (e.g. WHERE YEAR(date) = 2026 prevents index usage).'
      }
    ],
    practiceQuiz: [
      {
        id: 'sql-q1',
        question: 'Which SQL window function ranks rows without leaving gaps in ranking numbers when ties occur?',
        options: ['ROW_NUMBER()', 'RANK()', 'DENSE_RANK()', 'NTILE(4)'],
        correctOptionIndex: 2,
        explanation: 'DENSE_RANK() assigns consecutive ranks (e.g., 1, 2, 2, 3), whereas RANK() skips values when ties occur (e.g., 1, 2, 2, 4).'
      },
      {
        id: 'sql-q2',
        question: 'What is the function of LAG(revenue, 1) OVER (ORDER BY date)?',
        options: [
          'It fetches the revenue value from the next day',
          'It fetches the revenue value from the previous row in chronological order',
          'It calculates the average revenue over all prior rows',
          'It returns the total revenue for the current month'
        ],
        correctOptionIndex: 1,
        explanation: 'LAG(column, offset) looks backward in the ordered partition; offset 1 retrieves the preceding row value.'
      },
      {
        id: 'sql-q3',
        question: 'What two parts are mandatory in a WITH RECURSIVE CTE syntax?',
        options: [
          'GROUP BY and HAVING clauses',
          'An Anchor Member (base query) and a Recursive Member joined by UNION ALL',
          'A PRIMARY KEY constraint and an INDEX hint',
          'A LEFT JOIN and a RIGHT JOIN'
        ],
        correctOptionIndex: 1,
        explanation: 'A Recursive CTE requires an Anchor Member (the initial result set) UNION ALL with a Recursive Member that calls the CTE until empty.'
      },
      {
        id: 'sql-q4',
        question: 'Why does applying a function to a column in a WHERE clause (e.g. WHERE UPPER(email) = "ALEX@TEST.COM") hurt query performance?',
        options: [
          'SQL engines cannot execute UPPER() in SELECT statements',
          'It prevents the query planner from utilizing standard B-Tree indexes on the email column',
          'It forces the database to raise a syntax error',
          'It converts all string data to integers'
        ],
        correctOptionIndex: 1,
        explanation: 'Applying functions to indexed columns invalidates index usage, forcing a full table Sequential Scan unless an expression index is explicitly created.'
      },
      {
        id: 'sql-q5',
        question: 'Which window frame clause computes a 7-day moving average including the current day?',
        options: [
          'ROWS BETWEEN 7 PRECEDING AND 7 FOLLOWING',
          'ROWS BETWEEN 6 PRECEDING AND CURRENT ROW',
          'RANGE UNBOUNDED PRECEDING',
          'ROWS BETWEEN CURRENT ROW AND 7 FOLLOWING'
        ],
        correctOptionIndex: 1,
        explanation: '6 PRECEDING rows + 1 CURRENT ROW = 7 total rows in the sliding window.'
      },
      {
        id: 'sql-q6',
        question: 'What does NTILE(4) OVER (ORDER BY salary DESC) accomplish?',
        options: [
          'Divides the result set into 4 equal quartiles ordered by salary',
          'Multiplies the salary by 4',
          'Returns the top 4 highest paid employees',
          'Filters out the bottom 4 rows'
        ],
        correctOptionIndex: 0,
        explanation: 'NTILE(N) divides ordered partitions into N approximately equal groups or buckets (quartiles, percentiles, etc.).'
      },
      {
        id: 'sql-q7',
        question: 'How does UNION ALL differ from UNION in CTEs and subqueries?',
        options: [
          'UNION ALL retains duplicate rows and runs faster; UNION performs duplicate elimination',
          'UNION ALL only works on numerical columns',
          'UNION is faster because it bypasses memory allocation',
          'There is no functional difference'
        ],
        correctOptionIndex: 0,
        explanation: 'UNION executes a distinct sort step to remove duplicates, whereas UNION ALL appends result sets directly without sorting.'
      },
      {
        id: 'sql-q8',
        question: 'In EXPLAIN ANALYZE output, what does "Seq Scan" signify?',
        options: [
          'The database engine used an optimal B-Tree index',
          'The database engine read every single disk block in the table sequentially',
          'The query completed in under 1 millisecond',
          'The table has no columns'
        ],
        correctOptionIndex: 1,
        explanation: 'Sequential Scan means the database engine scanned every row in the table, indicating a missing or unused index.'
      },
      {
        id: 'sql-q9',
        question: 'Which positional window function retrieves the first value in an ordered window frame?',
        options: ['FIRST_VALUE()', 'LEAD()', 'ROW_NUMBER()', 'COALESCE()'],
        correctOptionIndex: 0,
        explanation: 'FIRST_VALUE(col) returns the first value evaluated in the specified window frame.'
      },
      {
        id: 'sql-q10',
        question: 'In a composite index on (department_id, employee_status, hire_date), which WHERE clause can utilize the index efficiently?',
        options: [
          'WHERE hire_date = "2026-01-01"',
          'WHERE department_id = 10 AND employee_status = "ACTIVE"',
          'WHERE employee_status = "ACTIVE"',
          'WHERE YEAR(hire_date) = 2026'
        ],
        correctOptionIndex: 1,
        explanation: 'B-Tree composite indexes require matching the left-most leading column (department_id) to be usable by the query optimizer.'
      },
      {
        id: 'sql-q11',
        question: 'What is the primary benefit of Common Table Expressions (CTEs) over deeply nested subqueries?',
        options: [
          'CTEs improve code readability, maintainability, and allow recursive references',
          'CTEs automatically encrypt database tables',
          'CTEs bypass user authorization rules',
          'CTEs force queries to run on the GPU'
        ],
        correctOptionIndex: 0,
        explanation: 'CTEs structure SQL into modular named logic blocks that can be referenced multiple times and support recursion.'
      },
      {
        id: 'sql-q12',
        question: 'What happens when LEAD(salary, 1) is evaluated on the last row of a window partition?',
        options: [
          'It throws a runtime OutOfBoundsException',
          'It returns NULL (or an optional default value specified in LEAD)',
          'It loops back to the first employee salary',
          'It returns 0'
        ],
        correctOptionIndex: 1,
        explanation: 'LEAD beyond the partition boundary returns NULL by default unless a third argument default value is supplied.'
      },
      {
        id: 'sql-q13',
        question: 'Which SQL clause is executed BEFORE window functions in the logical query processing order?',
        options: ['SELECT', 'ORDER BY (outer query)', 'WHERE, GROUP BY, and HAVING', 'LIMIT'],
        correctOptionIndex: 2,
        explanation: 'Logical SQL processing order: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT (Window Functions) -> DISTINCT -> ORDER BY -> LIMIT.'
      },
      {
        id: 'sql-q14',
        question: 'To calculate month-over-month revenue growth, which formula is correct using LAG?',
        options: [
          '(current_rev - LAG(current_rev)) / LAG(current_rev) * 100',
          'current_rev * LEAD(current_rev)',
          'LAG(current_rev) - current_rev',
          'SUM(current_rev) OVER ()'
        ],
        correctOptionIndex: 0,
        explanation: 'MoM Growth % = (Current Month Revenue - Previous Month Revenue) / Previous Month Revenue * 100.'
      },
      {
        id: 'sql-q15',
        question: 'What does PARTITION BY department_id in a window function do?',
        options: [
          'Physically partitions the database table on disk by department',
          'Divides the query result set into independent calculation groups per department',
          'Deletes all employees not in department_id',
          'Joins the table with a department table'
        ],
        correctOptionIndex: 1,
        explanation: 'PARTITION BY logically groups rows for the window function without collapsing rows into a single summary line.'
      },
      {
        id: 'sql-q16',
        question: 'How do you prevent infinite loops in Recursive CTEs during execution?',
        options: [
          'Add a recursion depth limit condition or termination clause in the WHERE statement',
          'Remove the UNION ALL keyword',
          'Use SELECT * instead of explicit column lists',
          'Set salary = 0'
        ],
        correctOptionIndex: 0,
        explanation: 'A termination condition (e.g., WHERE level < 10 or parent_id IS NOT NULL) prevents infinite recursion on cyclic data graph loops.'
      },
      {
        id: 'sql-q17',
        question: 'What is the purpose of EXPLAIN (without ANALYZE)?',
        options: [
          'Executes the query and updates database tables',
          'Shows the estimated execution plan and cost generated by the query optimizer without executing the query',
          'Translates SQL into Python code',
          'Exports data into CSV format'
        ],
        correctOptionIndex: 1,
        explanation: 'EXPLAIN returns the query execution plan estimates without spending time actually executing the data retrieval.'
      },
      {
        id: 'sql-q18',
        question: 'In SQL windowing, what is the default frame specification when ORDER BY is present without a ROWS/RANGE clause?',
        options: [
          'RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW',
          'ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING',
          'ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING',
          'NO FRAME'
        ],
        correctOptionIndex: 0,
        explanation: 'When ORDER BY is specified, the default frame is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW.'
      },
      {
        id: 'sql-q19',
        question: 'Which strategy is most effective to eliminate duplicate records while retaining the latest record per customer?',
        options: [
          'Use ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY updated_at DESC) and filter WHERE row_num = 1',
          'Use GROUP BY customer_id without aggregate functions',
          'Use SELECT DISTINCT *',
          'Use DELETE FROM table'
        ],
        correctOptionIndex: 0,
        explanation: 'Partitioning by customer_id and ordering by updated_at DESC assigns row_num = 1 to the newest record per customer.'
      },
      {
        id: 'sql-q20',
        question: 'Why are subqueries inside WHERE clauses like WHERE id IN (SELECT id FROM large_table) often sub-optimal?',
        options: [
          'IN subqueries can cause uncorrelated evaluation loops; refactoring to JOIN or EXISTS allows better index usage',
          'IN statements are illegal in ANSI SQL',
          'IN statements automatically lock the entire database',
          'IN statements convert string IDs to floats'
        ],
        correctOptionIndex: 0,
        explanation: 'Replacing IN (subquery) with EXISTS or JOIN allows the optimizer to use semi-joins and index scans efficiently.'
      }
    ]
  },
  {
    id: 'course-powerbi-mastery',
    title: 'Power BI Executive Dashboards & Star Schema Architecture',
    provider: 'Coursera',
    instructor: 'Microsoft Certified Data Trainers',
    duration: '4 weeks (5 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewsCount: '24,800+ reviews',
    skillTarget: 'Power BI & Star Schema Modeling',
    matchUplift: 12,
    category: 'BI & Visualization',
    targetRoles: ['data-analyst', 'bi-engineer'],
    prerequisites: 'Basic Excel pivot tables and introductory data concepts',
    certificateType: 'Microsoft Industry Certification Prep',
    modulesCount: 5,
    syllabusHighlights: [
      'Designing robust Dimensional Star Schema & Snowflake Data Models',
      'Writing advanced DAX formulas (CALCULATE, ALL, SAMEPERIODLASTYEAR)',
      'Building interactive drill-through C-suite KPI dashboards',
      'Power BI Service deployment, row-level security (RLS), and automated refresh'
    ],
    url: 'https://www.coursera.org',
    detailedNotes: [
      {
        moduleNumber: 1,
        moduleTitle: 'Dimensional Star Schema vs Snowflake Architecture',
        keyTakeaways: [
          'Fact tables record numerical business metrics and events (e.g. Sales Amount, Quantity Sold).',
          'Dimension tables store descriptive context (e.g. Customer, Date, Product, Region).',
          'Star Schema places Fact tables in the center surrounded by de-normalized single-depth Dimension tables for maximum query speed.',
          'Always use integer Surrogate Keys instead of natural keys to link Fact and Dimension tables.'
        ],
        codeSnippet: `// Star Schema Relationships in Power BI Data Model
FactSales[CustomerKey]  -->  DimCustomer[CustomerKey] (Many-to-One 1:*)
FactSales[DateKey]      -->  DimDate[DateKey]         (Many-to-One 1:*)`,
        cheatSheetSummary: 'Star Schema minimizes DAX execution time and optimizes Power BI VertiPaq compression.'
      },
      {
        moduleNumber: 2,
        moduleTitle: 'Advanced DAX Measures & Time Intelligence Patterns',
        keyTakeaways: [
          'CALCULATE() modifies the filter context under which DAX expressions are evaluated.',
          'Time Intelligence functions (SAMEPERIODLASTYEAR, TOTALYTD) require a continuous DimDate table.',
          'Use DIVIDE(num, den, 0) instead of / to gracefully prevent division-by-zero errors.'
        ],
        codeSnippet: `YoY Revenue Growth = 
VAR CurrentSales = SUM(FactSales[Revenue])
VAR PriorSales   = CALCULATE(SUM(FactSales[Revenue]), SAMEPERIODLASTYEAR(DimDate[Date]))
RETURN DIVIDE(CurrentSales - PriorSales, PriorSales, 0)`,
        cheatSheetSummary: 'Never aggregate raw columns directly; write explicit measures for reusable KPI calculations.'
      }
    ]
  },
  {
    id: 'course-tableau-storytelling',
    title: 'Data Storytelling & Executive Visuals with Tableau Desktop',
    provider: 'Harvard Online',
    instructor: 'Harvard Business Analytics Program',
    duration: '3 weeks (4 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewsCount: '16,500+ reviews',
    skillTarget: 'Tableau & Data Storytelling',
    matchUplift: 10,
    category: 'BI & Visualization',
    targetRoles: ['data-analyst', 'product-manager', 'bi-engineer'],
    prerequisites: 'None',
    certificateType: 'Harvard Executive Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Visual psychology: pre-attentive attributes and cognitive load reduction',
      'Level of Detail (LOD) expressions (FIXED, INCLUDE, EXCLUDE)',
      'Interactive dashboards, parameter controls, and story points',
      'Translating raw metrics into high-impact executive board presentations'
    ],
    url: 'https://www.online.harvard.edu'
  },
  {
    id: 'course-stats-data-analysis',
    title: 'Applied Statistics & A/B Experimentation for Product Decisions',
    provider: 'Stanford Online',
    instructor: 'Prof. Susan Athey',
    duration: '4 weeks (5 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewsCount: '19,300+ reviews',
    skillTarget: 'Statistics & A/B Testing',
    matchUplift: 11,
    category: 'Data & Analytics',
    targetRoles: ['data-analyst', 'data-scientist', 'product-manager'],
    prerequisites: 'Basic algebra and elementary statistics',
    certificateType: 'Stanford Verified Track',
    modulesCount: 5,
    syllabusHighlights: [
      'Hypothesis testing: p-values, t-tests, Z-tests, and Chi-Square',
      'Randomized A/B testing design, sample size calculation, and power analysis',
      'Confidence intervals and variance reduction techniques (CUPED)',
      'Avoiding false positives (p-hacking, multiple testing correction)'
    ],
    url: 'https://online.stanford.edu'
  },
  {
    id: 'course-python-data-wrangling',
    title: 'Python for Data Analysis: Pandas, NumPy & Feature Engineering',
    provider: 'DataCamp',
    instructor: 'Wes McKinney (Creator of Pandas)',
    duration: '4 weeks (4 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewsCount: '38,100+ reviews',
    skillTarget: 'Python Data Wrangling & Pandas',
    matchUplift: 13,
    category: 'Data & Analytics',
    targetRoles: ['data-analyst', 'data-scientist', 'data-engineer'],
    prerequisites: 'Basic Python syntax (loops, functions)',
    certificateType: 'DataCamp Data Science Professional Certificate',
    modulesCount: 6,
    syllabusHighlights: [
      'High-performance DataFrame manipulation & vectorized operations',
      'Handling missing values, outlier detection, and data imputation',
      'Time-series resampling, windowing, andDatetime conversions',
      'Automating complex data cleaning pipelines for messy real-world datasets'
    ],
    url: 'https://www.datacamp.com'
  },
  {
    id: 'course-rag-llm',
    title: 'Building Production-Ready RAG & Multi-Agent LLM Systems',
    provider: 'DeepLearning.AI',
    instructor: 'Andrew Ng & Harrison Chase',
    duration: '4 weeks (4-6 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewsCount: '18,400+ reviews',
    skillTarget: 'RAG Architecture & LangChain',
    matchUplift: 14,
    category: 'AI & LLMs',
    targetRoles: ['ai-engineer', 'fullstack-cloud', 'mlops-engineer'],
    prerequisites: 'Intermediate Python & basic API integration',
    certificateType: 'DeepLearning.AI Specialist Badge',
    modulesCount: 5,
    syllabusHighlights: [
      'Chunking strategies & hybrid search with Pinecone/Qdrant',
      'Evaluation with RAGAS and automated LLM benchmarks',
      'Building stateful multi-agent workflows with LangGraph',
      'Cost and latency optimization for production deployment'
    ],
    url: 'https://www.deeplearning.ai',
    detailedNotes: [
      {
        moduleNumber: 1,
        moduleTitle: 'Chunking Strategies & Hybrid Vector Retrieval',
        keyTakeaways: [
          'Fixed-size chunking splits text by token counts; semantic chunking splits at structural paragraph boundaries.',
          'Hybrid search combines dense vector embeddings (semantic search) with sparse BM25 keyword indexing.',
          'Re-ranking models (e.g. Cohere Rerank) score top-k retrieved chunks to filter out irrelevancies.'
        ],
        codeSnippet: `from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Pinecone

splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=64)
docs = splitter.split_documents(documents)
vectorstore = Pinecone.from_documents(docs, embeddings, index_name="rag-index")`,
        cheatSheetSummary: 'Use RecursiveCharacterTextSplitter with overlap to prevent loss of contextual meaning across chunk edges.'
      },
      {
        moduleNumber: 2,
        moduleTitle: 'Stateful Multi-Agent Graphs with LangGraph',
        keyTakeaways: [
          'LangGraph structures multi-agent applications as stateful Directed Acyclic Graphs (DAGs).',
          'Agents pass state dictionaries back and forth through conditional routing edges.',
          'Enables human-in-the-loop validation and step-level retry checkpoints.'
        ],
        codeSnippet: `from langgraph.graph import StateGraph, END

workflow = StateGraph(AgentState)
workflow.add_node("planner", plan_step)
workflow.add_node("executor", execute_step)
workflow.add_edge("planner", "executor")
workflow.add_edge("executor", END)`,
        cheatSheetSummary: 'LangGraph prevents infinite loop delegation between autonomous agents through explicit state transitions.'
      }
    ]
  },
  {
    id: 'course-ml-specialization',
    title: 'Machine Learning Specialization & Predictive Modeling',
    provider: 'Coursera',
    instructor: 'Andrew Ng (Stanford Online)',
    duration: '6 weeks (5 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewsCount: '45,200+ reviews',
    skillTarget: 'Scikit-learn & Machine Learning',
    matchUplift: 16,
    category: 'Machine Learning',
    targetRoles: ['data-scientist', 'ai-engineer', 'mlops-engineer'],
    prerequisites: 'Python basics & linear algebra fundamentals',
    certificateType: 'Stanford & Coursera Joint Professional Certificate',
    modulesCount: 6,
    syllabusHighlights: [
      'Supervised learning: linear & logistic regression with gradient descent',
      'Decision trees, random forests, and XGBoost gradient boosting',
      'Unsupervised learning: clustering, anomaly detection, PCA',
      'Feature engineering & cross-validation best practices'
    ],
    url: 'https://www.coursera.org'
  },
  {
    id: 'course-system-design',
    title: 'Distributed Systems & Cloud Architecture at Scale',
    provider: 'Stanford Online',
    instructor: 'Prof. John Ousterhout',
    duration: '5 weeks (6 hrs/week)',
    difficulty: 'Advanced',
    rating: 4.8,
    reviewsCount: '12,900+ reviews',
    skillTarget: 'System Design & Distributed Scalability',
    matchUplift: 12,
    category: 'Software Architecture',
    targetRoles: ['fullstack-cloud', 'data-engineer', 'mlops-engineer'],
    prerequisites: '3+ years software engineering experience',
    certificateType: 'Stanford Advanced Engineering Certificate',
    modulesCount: 5,
    syllabusHighlights: [
      'Consensus algorithms (Raft, Paxos) and CAP theorem tradeoffs',
      'Distributed caching strategies with Redis & consistent hashing',
      'Event-driven architectures using Apache Kafka & AWS SQS',
      'Database sharding, replication, and disaster recovery'
    ],
    url: 'https://online.stanford.edu'
  },
  {
    id: 'course-k8s-docker',
    title: 'Kubernetes Mastery: Production Containers & Orchestration',
    provider: 'edX',
    instructor: 'Linux Foundation Certified Faculty',
    duration: '4 weeks (4 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviewsCount: '9,800+ reviews',
    skillTarget: 'Kubernetes & Container Orchestration',
    matchUplift: 15,
    category: 'Cloud & DevOps',
    targetRoles: ['mlops-engineer', 'fullstack-cloud', 'data-engineer'],
    prerequisites: 'Basic Linux command line & Docker fundamentals',
    certificateType: 'Linux Foundation Official Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Pods, ReplicaSets, Deployments, and DaemonSets',
      'ConfigMaps, Secrets, Persistent Volumes, and CSI',
      'Ingress controllers, Service Meshes, and TLS termination',
      'Helm package management and GitOps with ArgoCD'
    ],
    url: 'https://www.edx.org'
  },
  {
    id: 'course-dbt-snowflake',
    title: 'Modern Analytics Engineering with dbt & Snowflake',
    provider: 'Coursera',
    instructor: 'dbt Labs Certified Engineers',
    duration: '3 weeks (4 hrs/week)',
    difficulty: 'Intermediate',
    rating: 4.9,
    reviewsCount: '14,100+ reviews',
    skillTarget: 'Data Modeling & Analytics Engineering',
    matchUplift: 11,
    category: 'Data & Analytics',
    targetRoles: ['data-engineer', 'bi-engineer', 'data-analyst'],
    prerequisites: 'Intermediate SQL',
    certificateType: 'dbt Certified Analytics Engineer Track',
    modulesCount: 4,
    syllabusHighlights: [
      'Modular SQL modeling and DAG dependency compilation in dbt',
      'Snowflake virtual warehouse sizing and clustering keys',
      'Automated schema testing and data quality assertions',
      'CI/CD deployment and documentation generation'
    ],
    url: 'https://www.coursera.org'
  },
  {
    id: 'course-pytorch-deep-learning',
    title: 'Deep Learning with PyTorch: Zero to GANs & Transformers',
    provider: 'MIT OpenCourseWare',
    instructor: 'MIT CSAIL Faculty',
    duration: '6 weeks (6 hrs/week)',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewsCount: '22,400+ reviews',
    skillTarget: 'PyTorch & Neural Networks',
    matchUplift: 18,
    category: 'Machine Learning',
    targetRoles: ['data-scientist', 'ai-engineer', 'mlops-engineer'],
    prerequisites: 'Python proficiency & Machine Learning basics',
    certificateType: 'MIT OpenCourseWare Completion Badge',
    modulesCount: 6,
    syllabusHighlights: [
      'Tensors, autograd, and GPU acceleration with CUDA',
      'Convolutional Neural Networks & Computer Vision',
      'Transformer architecture from scratch (Self-Attention, QKV)',
      'Fine-tuning Hugging Face models on custom domains'
    ],
    url: 'https://ocw.mit.edu'
  },
  // ─── NEW BEGINNER (FOUNDATIONAL) COURSES ───
  {
    id: 'course-sql-beginner',
    title: 'SQL & Relational Database Foundations for Absolute Beginners',
    provider: 'Coursera',
    instructor: 'Google Career Certificate Faculty',
    duration: '3 weeks (3 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewsCount: '52,100+ reviews',
    skillTarget: 'SQL & Relational Database Basics',
    matchUplift: 8,
    category: 'Data & Analytics',
    targetRoles: ['data-analyst', 'bi-engineer'],
    prerequisites: 'No prior programming experience required',
    certificateType: 'Google Professional Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Introduction to relational tables, primary keys, and foreign keys',
      'Filtering & sorting data using WHERE, ORDER BY, and LIMIT',
      'Combining data across tables with INNER, LEFT, and RIGHT JOINs',
      'Summarizing data with GROUP BY, COUNT, SUM, AVG, and HAVING'
    ],
    url: 'https://www.coursera.org',
    detailedNotes: [
      {
        moduleNumber: 1,
        moduleTitle: 'Relational Database Concepts & Basic SELECT',
        keyTakeaways: [
          'Relational databases store structured data in rows and columns.',
          'SELECT specifies which columns to retrieve; FROM specifies the target table.',
          'Primary Keys uniquely identify each record in a table.'
        ],
        codeSnippet: `SELECT customer_id, first_name, email\nFROM customers\nWHERE status = 'ACTIVE';`,
        cheatSheetSummary: 'Always filter rows early with WHERE to reduce unnecessary disk reads.'
      }
    ]
  },
  {
    id: 'course-python-beginner',
    title: 'Python Programming & Algorithmic Problem Solving Basics',
    provider: 'edX',
    instructor: 'MIT Computer Science Faculty',
    duration: '4 weeks (4 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewsCount: '64,300+ reviews',
    skillTarget: 'Python Syntax & Algorithmic Logic',
    matchUplift: 10,
    category: 'Software Architecture',
    targetRoles: ['data-analyst', 'data-scientist', 'fullstack-cloud'],
    prerequisites: 'Basic high-school algebra',
    certificateType: 'MIT Verified Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Python variables, data types (strings, ints, floats, booleans), and operators',
      'Control flow statements: if/else conditionals and for/while loops',
      'Data structures: Lists, Dictionaries, Sets, and Tuples',
      'Defining reusable functions, scope, and error handling with try/except'
    ],
    url: 'https://www.edx.org'
  },
  {
    id: 'course-excel-beginner',
    title: 'Excel Essentials: Pivot Tables, VLOOKUP & Data Visualization',
    provider: 'DataCamp',
    instructor: 'Microsoft MVP Instructors',
    duration: '2 weeks (3 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewsCount: '41,900+ reviews',
    skillTarget: 'Excel Pivot Tables & XLOOKUP',
    matchUplift: 7,
    category: 'Data & Analytics',
    targetRoles: ['data-analyst', 'product-manager'],
    prerequisites: 'Basic computer literacy',
    certificateType: 'DataCamp Fundamentals Badge',
    modulesCount: 3,
    syllabusHighlights: [
      'Mastering cell formulas, absolute references ($A$1), and IF logic',
      'XLOOKUP and VLOOKUP for cross-sheet dataset reconciliation',
      'Building interactive Pivot Tables & Pivot Charts for instant summaries'
    ],
    url: 'https://www.datacamp.com'
  },
  {
    id: 'course-ai-prompt-beginner',
    title: 'Generative AI Foundations & Prompt Engineering Essentials',
    provider: 'DeepLearning.AI',
    instructor: 'Andrew Ng',
    duration: '2 weeks (2-3 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewsCount: '89,400+ reviews',
    skillTarget: 'Generative AI & Prompt Engineering',
    matchUplift: 9,
    category: 'AI & LLMs',
    targetRoles: ['data-analyst', 'bi-engineer', 'data-scientist', 'ai-engineer', 'product-manager', 'fullstack-cloud'],
    prerequisites: 'None',
    certificateType: 'DeepLearning.AI Practitioner Badge',
    modulesCount: 3,
    syllabusHighlights: [
      'How Large Language Models (LLMs) process text and predict tokens',
      'Prompting principles: Zero-shot, Few-shot, and Chain-of-Thought prompting',
      'Avoiding hallucinations and structuring JSON outputs from AI models'
    ],
    url: 'https://www.deeplearning.ai'
  },
  {
    id: 'course-ai-analytics-beginner',
    title: 'AI Literacy & LLM Data Tools for Data Analysts & BI Teams',
    provider: 'Coursera',
    instructor: 'Vanderbilt University AI Faculty',
    duration: '2 weeks (3 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewsCount: '34,200+ reviews',
    skillTarget: 'AI Analytics & Code Interpreter',
    matchUplift: 8,
    category: 'AI & LLMs',
    targetRoles: ['data-analyst', 'bi-engineer', 'product-manager'],
    prerequisites: 'None',
    certificateType: 'Vanderbilt University Certificate',
    modulesCount: 3,
    syllabusHighlights: [
      'Using ChatGPT Advanced Data Analysis / Code Interpreter for automated SQL & Python plots',
      'Prompting LLMs to clean messy CSV files and generate executive summary reports',
      'Data privacy guidelines and enterprise AI governance fundamentals'
    ],
    url: 'https://www.coursera.org'
  },
  {
    id: 'course-ml-foundations-beginner',
    title: 'Machine Learning Foundations & Intuition for Non-Coders',
    provider: 'Stanford Online',
    instructor: 'Stanford AI Lab Staff',
    duration: '3 weeks (3 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.9,
    reviewsCount: '27,800+ reviews',
    skillTarget: 'ML Concepts & Intuition',
    matchUplift: 8,
    category: 'Machine Learning',
    targetRoles: ['data-analyst', 'bi-engineer', 'data-scientist', 'product-manager'],
    prerequisites: 'None',
    certificateType: 'Stanford Online Certificate',
    modulesCount: 3,
    syllabusHighlights: [
      'Difference between Supervised, Unsupervised, and Reinforcement Learning',
      'Classification vs Regression metrics: Accuracy, Precision, Recall, and RMSE',
      'Understanding Overfitting, Underfitting, and Training/Test splits intuitively'
    ],
    url: 'https://online.stanford.edu'
  },
  {
    id: 'course-cloud-aws-beginner',
    title: 'AWS Cloud Practitioner & Infrastructure Basics',
    provider: 'edX',
    instructor: 'AWS Certified Instructors',
    duration: '3 weeks (4 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewsCount: '33,700+ reviews',
    skillTarget: 'AWS Cloud Services & IAM Security',
    matchUplift: 9,
    category: 'Cloud & DevOps',
    targetRoles: ['fullstack-cloud', 'mlops-engineer'],
    prerequisites: 'Basic IT fundamentals',
    certificateType: 'AWS Cloud Practitioner Exam Prep Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Cloud compute basics: Amazon EC2 instances and Serverless Lambda',
      'Object storage with Amazon S3 and relational databases with Amazon RDS',
      'Cloud security: Identity & Access Management (IAM) and VPC networking'
    ],
    url: 'https://www.edx.org'
  },
  {
    id: 'course-web-dev-beginner',
    title: 'Web Development Fundamentals: HTML5, CSS3 & JavaScript',
    provider: 'Coursera',
    instructor: 'Meta Front-End Engineering Staff',
    duration: '4 weeks (4 hrs/week)',
    difficulty: 'Beginner',
    rating: 4.8,
    reviewsCount: '48,000+ reviews',
    skillTarget: 'HTML5, CSS3 & JavaScript DOM',
    matchUplift: 8,
    category: 'Software Architecture',
    targetRoles: ['fullstack-cloud'],
    prerequisites: 'None',
    certificateType: 'Meta Front-End Developer Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Semantic HTML5 structure and accessible document design',
      'Responsive styling with CSS Flexbox, Grid, and Media Queries',
      'JavaScript DOM manipulation, event listeners, and fetch() APIs'
    ],
    url: 'https://www.coursera.org'
  },

  // ─── NEW EXPERT / ADVANCED DEEP SPECIALIZATION COURSES ───
  {
    id: 'course-llm-finetuning-expert',
    title: 'LLM Fine-Tuning, Quantization & vLLM Distributed Serving',
    provider: 'DeepLearning.AI',
    instructor: 'Meta AI & Hugging Face Research Staff',
    duration: '5 weeks (6 hrs/week)',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewsCount: '15,600+ reviews',
    skillTarget: 'LLM Fine-Tuning, LoRA & vLLM Serving',
    matchUplift: 20,
    category: 'AI & LLMs',
    targetRoles: ['ai-engineer', 'mlops-engineer'],
    prerequisites: 'Deep Learning & PyTorch proficiency',
    certificateType: 'DeepLearning.AI Expert Mastery Badge',
    modulesCount: 5,
    syllabusHighlights: [
      'Parameter-Efficient Fine-Tuning: LoRA, QLoRA, and Adapter Fusion',
      'Model quantization: 4-bit/8-bit AWQ, GPTQ, and GGUF compression',
      'High-throughput GPU serving with vLLM, PagedAttention, and Tensor Parallelism',
      'Reinforcement Learning from Human Feedback (RLHF) & Direct Preference Optimization (DPO)'
    ],
    url: 'https://www.deeplearning.ai'
  },
  {
    id: 'course-kafka-expert',
    title: 'High-Throughput Distributed Microservices with Apache Kafka',
    provider: 'Stanford Online',
    instructor: 'Confluent Chief Architects',
    duration: '5 weeks (5 hrs/week)',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewsCount: '11,400+ reviews',
    skillTarget: 'Apache Kafka & Distributed Event Sourcing',
    matchUplift: 17,
    category: 'Software Architecture',
    targetRoles: ['fullstack-cloud', 'data-engineer'],
    prerequisites: '3+ years distributed backend experience',
    certificateType: 'Stanford Advanced Systems Certificate',
    modulesCount: 5,
    syllabusHighlights: [
      'Kafka architecture: Topics, Partitions, Consumer Groups, and Commit Logs',
      'Event Sourcing & CQRS design patterns for high-concurrency systems',
      'Schema Registry, Avro serialization, and partition key hashing',
      'Cluster replication, Kraft consensus, and zero-data-loss producer configurations'
    ],
    url: 'https://online.stanford.edu'
  },
  {
    id: 'course-cuda-gpu-expert',
    title: 'Accelerated GPU Infrastructure & CUDA C++ Programming',
    provider: 'MIT OpenCourseWare',
    instructor: 'NVIDIA Deep Learning Institute & MIT Faculty',
    duration: '6 weeks (6 hrs/week)',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewsCount: '8,700+ reviews',
    skillTarget: 'CUDA C++ & GPU Acceleration',
    matchUplift: 22,
    category: 'Cloud & DevOps',
    targetRoles: ['mlops-engineer', 'ai-engineer'],
    prerequisites: 'C/C++ proficiency and computer architecture fundamentals',
    certificateType: 'NVIDIA DLI Official Certification',
    modulesCount: 6,
    syllabusHighlights: [
      'CUDA thread hierarchy: Threads, Blocks, Grids, and Warp Execution',
      'GPU memory architecture: Global, Shared, Constant, and Texture memory tuning',
      'Coalesced memory access patterns and parallel reduction algorithms',
      'Multi-GPU scaling with NCCL, Tensor Cores, and FP16/INT8 matrix math'
    ],
    url: 'https://ocw.mit.edu'
  },
  {
    id: 'course-flink-streaming-expert',
    title: 'Real-Time Stateful Data Streaming with Apache Flink & Spark',
    provider: 'Coursera',
    instructor: 'Databricks Certified Engineers',
    duration: '4 weeks (5 hrs/week)',
    difficulty: 'Advanced',
    rating: 4.8,
    reviewsCount: '9,300+ reviews',
    skillTarget: 'Apache Flink & Stateful Stream Processing',
    matchUplift: 16,
    category: 'Data & Analytics',
    targetRoles: ['data-engineer', 'mlops-engineer'],
    prerequisites: 'Apache Spark or Scala/Java fundamentals',
    certificateType: 'Databricks Streaming Professional Certificate',
    modulesCount: 4,
    syllabusHighlights: [
      'Event-time vs Processing-time semantics, Watermarks, and Allowed Lateness',
      'Stateful stream processing with RocksDB state backend and Checkpointing',
      'Exactly-once processing guarantees and transactional sinks',
      'Structured Streaming on Spark 3.x & Delta Lake integration'
    ],
    url: 'https://www.coursera.org'
  },
  {
    id: 'course-zero-trust-cloud-expert',
    title: 'Zero-Trust Cloud Security Architecture & Kubernetes Hardening',
    provider: 'edX',
    instructor: 'Linux Foundation Cyber Security Board',
    duration: '5 weeks (5 hrs/week)',
    difficulty: 'Advanced',
    rating: 4.9,
    reviewsCount: '10,800+ reviews',
    skillTarget: 'Zero-Trust Cloud Security & K8s Hardening',
    matchUplift: 19,
    category: 'Cloud & DevOps',
    targetRoles: ['fullstack-cloud', 'mlops-engineer'],
    prerequisites: 'Kubernetes & Linux administration background',
    certificateType: 'Linux Foundation Certified Cloud Security Specialist (CKS)',
    modulesCount: 5,
    syllabusHighlights: [
      'Zero-trust network architecture, mutual TLS (mTLS) with Istio Service Mesh',
      'Kernel-level threat detection using eBPF and Cilium Network Policies',
      'Container runtime security with Falco monitoring and OPA Gatekeeper policies',
      'Cloud supply chain security, image signing with Cosign, and secret management'
    ],
    url: 'https://www.edx.org'
  }
];
