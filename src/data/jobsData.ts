export interface JobVacancy {
  id: string;
  title: string;
  company: string;
  companyLogoBg: string; // Gradient or hex color for avatar badge
  category: 'Data & Analytics' | 'AI & Machine Learning' | 'Software & Cloud' | 'Product & Strategy';
  employmentType: 'Internship' | 'Full-Time' | 'Co-op' | 'Contract';
  season?: 'Summer 2026' | 'Fall 2026' | 'Immediate';
  location: string;
  workModel: 'Remote' | 'Hybrid' | 'On-Site';
  salary: string;
  matchScore: number;
  requiredSkills: string[];
  matchedSkills: string[];
  missingSkills: string[];
  whyMatch: string;
  description: string;
  responsibilities: string[];
  perks: string[];
  applyUrl: string;
  postedDate: string;
  deadline?: string;
}

export const JOB_VACANCIES_CATALOG: JobVacancy[] = [
  // ─── INTERNSHIPS (SUMMER / FALL 2026) ───
  {
    id: 'intern-google-data',
    title: 'Data Analyst & Insights Intern - Summer 2026',
    company: 'Google',
    companyLogoBg: 'from-blue-600 to-rose-600',
    category: 'Data & Analytics',
    employmentType: 'Internship',
    season: 'Summer 2026',
    location: 'Mountain View, CA (Hybrid / Remote Option)',
    workModel: 'Hybrid',
    salary: '$52 - $68 / hr ($8,500/mo stipend)',
    matchScore: 94,
    requiredSkills: ['SQL', 'Python', 'Data Visualization', 'Statistics', 'A/B Testing'],
    matchedSkills: ['SQL', 'Python', 'Data Visualization', 'Statistics'],
    missingSkills: ['BigQuery / Google Cloud'],
    whyMatch: 'Your demonstrated proficiency in SQL window functions and Python automated wrangling matches 94% of Google’s data analysis workflow requirements. Taking our BigQuery module completes your profile.',
    description: 'Join Google’s Core Data & Insights team to analyze product metrics for Search, YouTube, and Cloud, extracting strategic insights that direct quarterly roadmap decisions.',
    responsibilities: [
      'Build automated ETL pipelines in BigQuery & SQL to analyze user cohort retention.',
      'Design interactive executive dashboards tracking key product usage metrics.',
      'Partner directly with Product Managers to execute randomized A/B experiments.'
    ],
    perks: ['Housing stipend ($8,500/mo)', 'Full meal benefits', 'Return full-time offer eligibility', '1-on-1 Senior Staff Mentorship'],
    applyUrl: 'https://careers.google.com',
    postedDate: '2 days ago',
    deadline: 'Oct 31, 2026'
  },
  {
    id: 'intern-openai-ai',
    title: 'AI & LLM Systems Engineering Intern - Summer 2026',
    company: 'OpenAI',
    companyLogoBg: 'from-emerald-500 to-teal-700',
    category: 'AI & Machine Learning',
    employmentType: 'Internship',
    season: 'Summer 2026',
    location: 'San Francisco, CA (Hybrid)',
    workModel: 'Hybrid',
    salary: '$65 - $80 / hr ($11,000/mo stipend)',
    matchScore: 91,
    requiredSkills: ['Python', 'PyTorch', 'RAG Architecture', 'FastAPI', 'Vector Databases'],
    matchedSkills: ['Python', 'RAG Architecture', 'FastAPI', 'Vector Databases'],
    missingSkills: ['Distributed PyTorch GPU Scaling'],
    whyMatch: 'Your LangGraph multi-agent and RAG pipeline projects rank in the top 5% of candidate submissions. Completing GPU CUDA optimization elevates you to the interview shortlist.',
    description: 'Work directly alongside OpenAI Applied Research Scientists building next-generation fine-tuning frameworks, RAG evaluation metrics, and API orchestration tools.',
    responsibilities: [
      'Develop low-latency vector retrieval mechanisms for multimodal LLM endpoints.',
      'Benchmark and evaluate model outputs using automated RAGAS and preference metrics.',
      'Optimize API response latency and token consumption for enterprise clients.'
    ],
    perks: ['Highest tier intern compensation ($11k/mo)', 'Relocation coverage', 'Daily gourmet dining', 'Direct access to frontier AI research'],
    applyUrl: 'https://openai.com/careers',
    postedDate: '1 day ago',
    deadline: 'Nov 15, 2026'
  },
  {
    id: 'intern-stripe-software',
    title: 'Software Engineering Intern (Backend / Cloud) - Fall 2026',
    company: 'Stripe',
    companyLogoBg: 'from-violet-600 to-indigo-700',
    category: 'Software & Cloud',
    employmentType: 'Co-op',
    season: 'Fall 2026',
    location: 'Seattle, WA (Remote / Hybrid)',
    workModel: 'Remote',
    salary: '$58 - $72 / hr ($9,500/mo stipend)',
    matchScore: 89,
    requiredSkills: ['TypeScript', 'Node.js', 'PostgreSQL', 'System Design', 'Docker'],
    matchedSkills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    missingSkills: ['Distributed Consensus (Raft/Paxos)'],
    whyMatch: 'Your verified containerized Node.js microservices background aligns with Stripe’s core financial API architecture.',
    description: 'Help build resilient global financial infrastructure processing hundreds of billions of dollars annually for millions of businesses worldwide.',
    responsibilities: [
      'Architect high-throughput payment processing endpoints with strict idempotency.',
      'Optimize PostgreSQL query latency and database connection pooling.',
      'Write automated integration tests with 99.999% reliability targets.'
    ],
    perks: ['100% Remote flexibility', 'Home office equipment stipend ($2,000)', 'Wellness budget'],
    applyUrl: 'https://stripe.com/jobs',
    postedDate: '3 days ago',
    deadline: 'Dec 01, 2026'
  },
  {
    id: 'intern-meta-data-science',
    title: 'Data Science & Product Analytics Intern - Summer 2026',
    company: 'Meta',
    companyLogoBg: 'from-blue-500 to-indigo-600',
    category: 'Data & Analytics',
    employmentType: 'Internship',
    season: 'Summer 2026',
    location: 'Menlo Park, CA (Hybrid / Remote)',
    workModel: 'Hybrid',
    salary: '$54 - $70 / hr ($9,000/mo stipend)',
    matchScore: 88,
    requiredSkills: ['SQL', 'Python', 'Scikit-Learn', 'A/B Testing', 'Product Metrics'],
    matchedSkills: ['SQL', 'Python', 'A/B Testing'],
    missingSkills: ['Scikit-Learn ML Pipelines'],
    whyMatch: 'Strong statistical foundations and SQL mastery position you well for Meta’s product analytics team working on Instagram & WhatsApp growth.',
    description: 'Drive data-informed product decisions across Meta’s family of apps, executing hypothesis testing and product growth experiments.',
    responsibilities: [
      'Define success metrics and construct analytics pipelines for new features.',
      'Run large-scale randomized control trials (A/B tests) on 1B+ active users.',
      'Present findings to Director and VP-level engineering leadership.'
    ],
    perks: ['Subsidized corporate housing', 'Free transportation & shuttle', 'Full health benefits'],
    applyUrl: 'https://www.metacareers.com',
    postedDate: 'Just now',
    deadline: 'Oct 15, 2026'
  },
  {
    id: 'intern-microsoft-cloud',
    title: 'Cloud Infrastructure & DevOps Intern - Summer 2026',
    company: 'Microsoft',
    companyLogoBg: 'from-blue-600 to-cyan-500',
    category: 'Software & Cloud',
    employmentType: 'Internship',
    season: 'Summer 2026',
    location: 'Redmond, WA (Hybrid)',
    workModel: 'Hybrid',
    salary: '$50 - $65 / hr ($8,200/mo stipend)',
    matchScore: 86,
    requiredSkills: ['Kubernetes', 'Docker', 'Linux', 'Azure / AWS', 'Python / Bash'],
    matchedSkills: ['Kubernetes', 'Docker', 'Linux', 'Python / Bash'],
    missingSkills: ['Azure Resource Manager (ARM) / Bicep'],
    whyMatch: 'Containerization and Linux administration background satisfy 86% of Azure cloud orchestration requirements.',
    description: 'Build automated Kubernetes deployment tools and cloud security monitoring services for Microsoft Azure enterprise customers.',
    responsibilities: [
      'Automate CI/CD pipelines using GitHub Actions and Azure DevOps.',
      'Configure Kubernetes pod autoscaling rules and health probes.',
      'Monitor cluster performance metrics and resolve latency spikes.'
    ],
    perks: ['Corporate housing or stipend', 'Intern hackathon & prizes', 'Microsoft Surface laptop gift'],
    applyUrl: 'https://careers.microsoft.com',
    postedDate: '4 days ago',
    deadline: 'Nov 01, 2026'
  },

  // ─── FULL-TIME JOB VACANCIES (JUNIOR TO SENIOR) ───
  {
    id: 'job-google-senior-data',
    title: 'Senior Data Analyst & Business Intelligence Lead',
    company: 'Google',
    companyLogoBg: 'from-blue-600 to-emerald-600',
    category: 'Data & Analytics',
    employmentType: 'Full-Time',
    location: 'San Francisco, CA (Hybrid)',
    workModel: 'Hybrid',
    salary: '$140,000 - $185,000 / yr + Equity',
    matchScore: 92,
    requiredSkills: ['SQL', 'Power BI / Tableau', 'Python', 'BigQuery', 'Star Schema', 'Data Storytelling'],
    matchedSkills: ['SQL', 'Power BI / Tableau', 'Python', 'Star Schema', 'Data Storytelling'],
    missingSkills: ['BigQuery ML'],
    whyMatch: 'Your verified expertise in Star Schema modeling, Power BI executive dashboards, and window functions matches 92% of Google’s senior analyst baseline.',
    description: 'Lead revenue analytics and executive reporting for Google Cloud enterprise accounts, working directly with VP of Sales and Global Operations.',
    responsibilities: [
      'Architect executive KPI dashboards tracking $20B+ annual cloud revenue.',
      'Build automated Snowflake & BigQuery data pipelines for global sales forecasting.',
      'Mentor junior analysts and establish BI data modeling standards.'
    ],
    perks: ['Generous GSUs (Equity)', '401(k) 50% match up to cap', 'Unlimited free meals & snacks', 'Top-tier health insurance'],
    applyUrl: 'https://careers.google.com',
    postedDate: '1 day ago'
  },
  {
    id: 'job-netflix-fullstack',
    title: 'Senior Full Stack Cloud Engineer - Streaming Systems',
    company: 'Netflix',
    companyLogoBg: 'from-red-600 to-rose-700',
    category: 'Software & Cloud',
    employmentType: 'Full-Time',
    location: 'Los Gatos, CA (Hybrid / Remote)',
    workModel: 'Remote',
    salary: '$170,000 - $230,000 / yr (All-Cash Compensation Option)',
    matchScore: 89,
    requiredSkills: ['TypeScript', 'React', 'Node.js', 'System Design', 'AWS', 'Microservices'],
    matchedSkills: ['TypeScript', 'React', 'Node.js', 'Microservices'],
    missingSkills: ['AWS Chaos Engineering / Simian Army'],
    whyMatch: 'Your modern web stack experience with React & containerized Node.js backend services matches 89% of Netflix Content Engineering needs.',
    description: 'Build internal tools and high-throughput streaming services that serve 260M+ subscribers across 190 countries with zero downtime.',
    responsibilities: [
      'Design microservice interfaces powering Netflix studio production tools.',
      'Optimize React frontend rendering performance for low-bandwidth environments.',
      'Participate in architecture reviews and fault-tolerant system design.'
    ],
    perks: ['Top of market all-cash salary', 'Flexible PTO with no set cap', '100% remote freedom', '$5,000 annual personal development budget'],
    applyUrl: 'https://jobs.netflix.com',
    postedDate: '2 days ago'
  },
  {
    id: 'job-nvidia-mlops',
    title: 'MLOps Infrastructure & GPU Distributed Cluster Engineer',
    company: 'NVIDIA',
    companyLogoBg: 'from-emerald-600 to-green-700',
    category: 'AI & Machine Learning',
    employmentType: 'Full-Time',
    location: 'Santa Clara, CA (Hybrid / Remote)',
    workModel: 'Hybrid',
    salary: '$165,000 - $220,000 / yr + Stock Refreshers',
    matchScore: 90,
    requiredSkills: ['Python', 'Kubernetes', 'Docker', 'CUDA C++', 'Ray', 'vLLM', 'Linux'],
    matchedSkills: ['Python', 'Kubernetes', 'Docker', 'Linux', 'vLLM'],
    missingSkills: ['CUDA C++ Kernel Optimization'],
    whyMatch: 'Your container orchestration and vLLM serving background satisfy 90% of NVIDIA’s AI Enterprise infrastructure team specs.',
    description: 'Build distributed Kubernetes GPU orchestration tools powering DGX Cloud clusters for leading LLM research labs globally.',
    responsibilities: [
      'Manage multi-node H100 GPU clusters with automated health monitoring.',
      'Optimize low-latency LLM inference serving using vLLM & Triton Inference Server.',
      'Automate container deployment pipelines for AI framework containers.'
    ],
    perks: ['High-value NVIDIA Stock Options', 'Employee Stock Purchase Plan (ESPP)', 'Comprehensive wellness centers'],
    applyUrl: 'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite',
    postedDate: '3 days ago'
  },
  {
    id: 'job-databricks-data-engineer',
    title: 'Senior Analytics & Data Engineer (Delta Lake & Spark)',
    company: 'Databricks',
    companyLogoBg: 'from-orange-600 to-red-600',
    category: 'Data & Analytics',
    employmentType: 'Full-Time',
    location: 'San Francisco, CA (Hybrid / Remote)',
    workModel: 'Remote',
    salary: '$150,000 - $200,000 / yr + Pre-IPO Equity',
    matchScore: 93,
    requiredSkills: ['SQL', 'Python', 'Apache Spark', 'dbt', 'Snowflake / BigQuery', 'ETL Pipelines'],
    matchedSkills: ['SQL', 'Python', 'dbt', 'Snowflake / BigQuery', 'ETL Pipelines'],
    missingSkills: ['Databricks Unity Catalog'],
    whyMatch: 'Your dbt data modeling and modular SQL transformation projects rank in the top tier for Databricks customer analytics solutions.',
    description: 'Design real-time data streaming and analytics lakehouse architectures using Databricks Delta Lake, Spark, and dbt.',
    responsibilities: [
      'Build robust streaming & batch ETL pipelines processing terabytes of data daily.',
      'Implement data quality assertions, schema evolution tests, and CI/CD.',
      'Partner with ML engineers to publish feature stores for predictive models.'
    ],
    perks: ['Pre-IPO Stock Options with massive upside', 'Unlimited PTO', '$3,000 home office setup allowance'],
    applyUrl: 'https://www.databricks.com/company/careers',
    postedDate: 'Just now'
  },
  {
    id: 'job-snowflake-bi',
    title: 'Business Intelligence & Data Warehouse Architect',
    company: 'Snowflake',
    companyLogoBg: 'from-cyan-500 to-blue-600',
    category: 'Data & Analytics',
    employmentType: 'Full-Time',
    location: 'San Mateo, CA (Hybrid)',
    workModel: 'Hybrid',
    salary: '$145,000 - $190,000 / yr + Equity',
    matchScore: 91,
    requiredSkills: ['SQL', 'Snowflake', 'Power BI / Tableau', 'dbt', 'Data Modeling'],
    matchedSkills: ['SQL', 'Snowflake', 'Power BI / Tableau', 'Data Modeling'],
    missingSkills: ['dbt Semantic Layer'],
    whyMatch: 'Snowflake virtual warehouse sizing and dimensional modeling experience match 91% of their internal BI engineering roles.',
    description: 'Architect Snowflake data warehouses and executive Tableau dashboards tracking global SaaS subscription health.',
    responsibilities: [
      'Design optimized Star Schema data models in Snowflake for rapid query response.',
      'Manage warehouse clustering keys and auto-suspension policies to optimize cost.',
      'Deliver executive analytics to C-level revenue and finance leadership.'
    ],
    perks: ['Snowflake Equity Grants', 'Full health/dental/vision', '401(k) matching'],
    applyUrl: 'https://careers.snowflake.com',
    postedDate: '5 days ago'
  },
  {
    id: 'job-palantir-forward-engineer',
    title: 'Forward Deployed AI & Software Engineer',
    company: 'Palantir Technologies',
    companyLogoBg: 'from-slate-700 to-slate-900',
    category: 'Software & Cloud',
    employmentType: 'Full-Time',
    location: 'New York, NY (Hybrid / On-Site)',
    workModel: 'On-Site',
    salary: '$155,000 - $205,000 / yr + Stock',
    matchScore: 87,
    requiredSkills: ['Python', 'TypeScript', 'PostgreSQL', 'Docker', 'System Design', 'Client Interaction'],
    matchedSkills: ['Python', 'TypeScript', 'PostgreSQL', 'Docker'],
    missingSkills: ['Palantir Foundry Platform'],
    whyMatch: 'Solid software engineering fundamentals and client-facing communication background make you an ideal candidate for Palantir AIP deployments.',
    description: 'Deploy Palantir Artificial Intelligence Platform (AIP) to Fortune 500 enterprise clients, customizing data ontologies and AI workflows on-site.',
    responsibilities: [
      'Integrate client legacy databases into unified Palantir Foundry ontologies.',
      'Build custom React & Python applications automating complex operational workflows.',
      'Interface directly with C-suite client executives to solve mission-critical problems.'
    ],
    perks: ['Substantial Palantir Stock Grants', 'First-class business travel benefits', 'Comprehensive health & fitness stipends'],
    applyUrl: 'https://www.palantir.com/careers',
    postedDate: '2 days ago'
  }
];
