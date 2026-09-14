export interface CourseSuggestion {
  id: string;
  title: string;
  provider: 'Coursera' | 'DeepLearning.AI' | 'Stanford Online' | 'MIT OpenCourseWare' | 'edX' | 'Udacity';
  instructor: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviewsCount: string;
  skillTarget: string;
  matchUplift: number; // e.g. +14% Match
  syllabusHighlights: string[];
  url: string;
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
    syllabusHighlights: [
      'Chunking strategies & hybrid search with Pinecone/Qdrant',
      'Evaluation with RAGAS and automated LLM benchmarks',
      'Building stateful multi-agent workflows with LangGraph',
      'Cost and latency optimization for production deployment'
    ],
    url: 'https://www.deeplearning.ai'
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
    syllabusHighlights: [
      'Tensors, autograd, and GPU acceleration with CUDA',
      'Convolutional Neural Networks & Computer Vision',
      'Transformer architecture from scratch (Self-Attention, QKV)',
      'Fine-tuning Hugging Face models on custom domains'
    ],
    url: 'https://ocw.mit.edu'
  }
];
