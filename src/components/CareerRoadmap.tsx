import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  FileCode, 
  BarChart, 
  Briefcase,
  Flag,
  TrendingUp,
  Layers,
  Award,
  ArrowRight,
  BookOpen,
  Terminal,
  Database,
  Cpu,
  Cloud,
  Shield,
  Calendar,
  List,
  Zap,
  Check
} from 'lucide-react';

interface CareerRoadmapProps {
  onOpenAssessment?: () => void;
}

interface Milestone {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'target';
  badge: string;
  duration: string;
  weeklyHours: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
  description: string;
  deliverable: string;
  readinessBoost: string;
  salaryMilestone: string;
  skills: string[];
  syllabus: string[];
}

interface CareerTrack {
  id: string;
  name: string;
  category: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  overallProgress: number;
  currentPhaseText: string;
  timeRemaining: string;
  targetRole: string;
  avgSalary: string;
  milestones: Milestone[];
}

export const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ onOpenAssessment }) => {
  const [activeTrackId, setActiveTrackId] = useState<string>('data-analyst');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<number>(2);
  const [viewMode, setViewMode] = useState<'visual' | 'curriculum'>('visual');

  const tracks: Record<string, CareerTrack> = {
    'data-analyst': {
      id: 'data-analyst',
      name: 'Data Analyst & BI',
      category: 'Analytics & Intelligence',
      badge: '94% Market Demand',
      icon: BarChart,
      overallProgress: 42,
      currentPhaseText: 'Phase 2 of 5 • Core Technical Foundation',
      timeRemaining: '~6 Weeks Remaining',
      targetRole: 'Junior to Mid Data Analyst',
      avgSalary: '$82,000 - $115,000',
      milestones: [
        {
          id: 0,
          phase: 'Phase 1: Diagnostic',
          title: 'Skill & Coursework Baseline',
          subtitle: 'Profile Calibration',
          status: 'completed',
          badge: 'Verified',
          duration: 'Day 0 - 3',
          weeklyHours: '4 hrs',
          level: 'Beginner',
          description: 'Initial intake assessment calibrating academic background, mathematical readiness, and spreadsheet fundamentals.',
          deliverable: 'Verified Skill Matrix & Personalized Learning Profile',
          readinessBoost: '+15% Readiness Baseline',
          salaryMilestone: 'Baseline ($55k - $65k)',
          skills: ['Excel (Core & VLOOKUP)', 'Basic Statistics', 'Spreadsheet Modeling'],
          syllabus: [
            'Mathematical & logical foundations for business intelligence',
            'Data hygiene, cleaning standards, and formatting norms',
            'Gap identification against 14,000+ active junior listings'
          ]
        },
        {
          id: 1,
          phase: 'Phase 1: Foundations',
          title: 'Relational DBs & Core SQL',
          subtitle: 'Query Engineering',
          status: 'completed',
          badge: 'Completed',
          duration: 'Weeks 1 - 2',
          weeklyHours: '10 hrs/wk',
          level: 'Beginner',
          description: 'Structured query formulation, database schema comprehension, and foundational relational data retrieval.',
          deliverable: '100+ Live SQL query solutions across normalized e-commerce schemas',
          readinessBoost: '+20% Role Match',
          salaryMilestone: 'Level 1 ($68,000)',
          skills: ['SELECT & Filtering', 'Multi-Table JOINs', 'Aggregations & GROUP BY', 'Relational Schemas'],
          syllabus: [
            'Relational algebra and entity relationship diagrams (ERD)',
            'INNER, LEFT, RIGHT, and FULL OUTER joins with NULL management',
            'Subqueries, nested queries, and set operations (UNION, INTERSECT)'
          ]
        },
        {
          id: 2,
          phase: 'Phase 2: Core Stack',
          title: 'Advanced SQL & Data Modeling',
          subtitle: 'Enterprise Analytics',
          status: 'in-progress',
          badge: 'In Progress (65%)',
          duration: 'Weeks 3 - 4',
          weeklyHours: '12 hrs/wk',
          level: 'Intermediate',
          description: 'High-performance querying with window functions, Common Table Expressions (CTEs), partitioning, and execution plan optimization.',
          deliverable: 'Financial transaction analysis engine with sub-second execution optimization',
          readinessBoost: '+22% Role Match',
          salaryMilestone: 'Level 2 ($78,000)',
          skills: ['Window Functions (ROW_NUMBER, DENSE_RANK)', 'CTEs & Recursive Queries', 'Query Indexing & Explain Plans', 'Data Warehousing Basics'],
          syllabus: [
            'Window functions: running totals, moving averages, and lead/lag trend analysis',
            'Complex CTE architectures for modular and readable analytics',
            'Query performance profiling: indexing strategies and cost reduction'
          ]
        },
        {
          id: 3,
          phase: 'Phase 2: Core Stack',
          title: 'Python for Data Wrangling',
          subtitle: 'Automated Pipelines',
          status: 'upcoming',
          badge: 'Next Milestone',
          duration: 'Weeks 5 - 6',
          weeklyHours: '12 hrs/wk',
          level: 'Intermediate',
          description: 'Leveraging Pandas, NumPy, and automated scripts to ingest messy CSVs, APIs, and JSON feeds into clean analytical dataframes.',
          deliverable: 'Automated data cleansing pipeline handling 500k+ messy transaction logs',
          readinessBoost: '+14% Role Match',
          salaryMilestone: 'Level 3 ($85,000)',
          skills: ['Python 3', 'Pandas DataFrames', 'NumPy Vectorization', 'API Ingestion'],
          syllabus: [
            'Exploratory data analysis (EDA) techniques and outlier detection',
            'Missing data imputation, type coercion, and regex text normalization',
            'Automated pipeline scripts scheduled with lightweight cron tasks'
          ]
        },
        {
          id: 4,
          phase: 'Phase 3: Visual Analytics',
          title: 'Business Intelligence & DAX',
          subtitle: 'Executive Dashboards',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 7 - 8',
          weeklyHours: '10 hrs/wk',
          level: 'Intermediate',
          description: 'Dimensional modeling (Star & Snowflake schemas), DAX measure calculations, and high-impact Power BI / Tableau visual narratives.',
          deliverable: 'Live interactive SaaS KPI board featuring real-time churn metrics',
          readinessBoost: '+12% Role Match',
          salaryMilestone: 'Level 4 ($92,000)',
          skills: ['Power BI / Tableau', 'DAX Measures & Time Intelligence', 'Star Schema Modeling', 'Executive Storytelling'],
          syllabus: [
            'Dimensional modeling: fact tables, dimension tables, and cardinalities',
            'Advanced DAX: CALCULATE, FILTER, and Year-over-Year time intelligence',
            'UI/UX design principles for executive C-suite dashboard consumption'
          ]
        },
        {
          id: 5,
          phase: 'Phase 3: Capstone',
          title: 'Real-World Production Capstone',
          subtitle: 'End-to-End Delivery',
          status: 'upcoming',
          badge: 'Milestone Capstone',
          duration: 'Weeks 9 - 10',
          weeklyHours: '15 hrs/wk',
          level: 'Advanced',
          description: 'Comprehensive business case project simulating a real company brief: SQL ingest, Python modeling, and executive report presentation.',
          deliverable: 'Published GitHub repository + hosted interactive public dashboard demo',
          readinessBoost: '+16% Role Match',
          salaryMilestone: 'Market Ready ($98,000)',
          skills: ['Full Analytics Pipeline', 'Business Value Translation', 'GitHub Versioning', 'Video Walkthrough'],
          syllabus: [
            'Cross-functional problem formulation and metric definition',
            'End-to-end data pipeline from raw unstructured database to final insight',
            'Professional technical documentation and recruiter-ready README setup'
          ]
        },
        {
          id: 6,
          phase: 'Phase 4: Interview Ready',
          title: 'Technical & Case Interviews',
          subtitle: 'Hiring Calibration',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 11 - 12',
          weeklyHours: '8 hrs/wk',
          level: 'Advanced',
          description: 'AI-assisted live SQL coding screenings, product sense case studies, and salary negotiation simulations.',
          deliverable: '10 Verified mock interview certifications & customized elevator pitch',
          readinessBoost: '+10% Hiring Probability',
          salaryMilestone: 'Negotiated Target ($105,000)',
          skills: ['Live Whiteboard SQL', 'Business Sense & Metrics', 'STAR Behavioral Framework', 'Offer Negotiation'],
          syllabus: [
            'Timed SQL challenges matching Google, Meta, and Stripe interview sets',
            'Analytical case questions: diagnosing drop-offs, A/B testing analysis',
            'Effective communication for stakeholder objections and insights delivery'
          ]
        },
        {
          id: 7,
          phase: 'Phase 5: Job Placement',
          title: 'JOB READY & Partner Matching',
          subtitle: 'Career Acceleration',
          status: 'target',
          badge: 'Final Goal (92%+)',
          duration: 'Hiring Phase',
          weeklyHours: 'Active',
          level: 'Mastery',
          description: 'Direct candidate introduction to CareerIQ verified tech hiring network with referral badge endorsement.',
          deliverable: 'Pre-vetted interview fast-track across 80+ partner hiring teams',
          readinessBoost: 'Top 5% Candidate Tier',
          salaryMilestone: 'Placement Target ($95,000 - $115,000)',
          skills: ['Verified Credentials', 'Warm Partner Referrals', 'Fast-Track Rounds', 'Career Longevity'],
          syllabus: [
            'Direct resume distribution to engineering & analytics directors',
            'Pre-negotiated starting compensation bands and fast-track interviews',
            '30-60-90 day on-the-job onboarding roadmap for rapid promotion'
          ]
        }
      ]
    },
    'fullstack-ai': {
      id: 'fullstack-ai',
      name: 'Full-Stack AI Engineer',
      category: 'Frontier Development',
      badge: '97% High Growth',
      icon: Cpu,
      overallProgress: 35,
      currentPhaseText: 'Phase 2 of 5 • API Architectures & Vector DBs',
      timeRemaining: '~8 Weeks Remaining',
      targetRole: 'AI Software Engineer',
      avgSalary: '$115,000 - $160,000',
      milestones: [
        {
          id: 0,
          phase: 'Phase 1: Diagnostic',
          title: 'TypeScript & React Foundations',
          subtitle: 'Modern Frontend Stack',
          status: 'completed',
          badge: 'Verified',
          duration: 'Weeks 1 - 2',
          weeklyHours: '10 hrs/wk',
          level: 'Beginner',
          description: 'Strict TypeScript typing, reactive UI state machines, and modern modular component architectures.',
          deliverable: 'High-performance interactive design system built in React 19 & Tailwind',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Level 1 ($75,000)',
          skills: ['TypeScript Generics', 'React Hooks', 'Tailwind CSS', 'State Management'],
          syllabus: [
            'Component lifecycles, custom hooks, and memoization patterns',
            'Type safety across client-server boundaries and automated linting',
            'Accessible, mobile-responsive UI design standards'
          ]
        },
        {
          id: 1,
          phase: 'Phase 1: Foundations',
          title: 'Scalable Backend APIs & Auth',
          subtitle: 'Serverless & Node.js',
          status: 'completed',
          badge: 'Completed',
          duration: 'Weeks 3 - 4',
          weeklyHours: '12 hrs/wk',
          level: 'Intermediate',
          description: 'RESTful and GraphQL service development, JWT authentication, rate limiting, and database abstraction layers.',
          deliverable: 'Multi-tenant auth microservice with role-based access control (RBAC)',
          readinessBoost: '+20% Role Match',
          salaryMilestone: 'Level 2 ($90,000)',
          skills: ['Node.js / Express / Fastify', 'PostgreSQL & Prisma', 'JWT & OAuth2', 'API Rate Limiting'],
          syllabus: [
            'Stateless session authentication with cryptographic tokens',
            'Database schema migrations, relational constraints, and connection pooling',
            'Error boundary standards and structured JSON logging'
          ]
        },
        {
          id: 2,
          phase: 'Phase 2: Core Stack',
          title: 'Vector Databases & Embeddings',
          subtitle: 'Semantic Search Engines',
          status: 'in-progress',
          badge: 'In Progress (50%)',
          duration: 'Weeks 5 - 6',
          weeklyHours: '14 hrs/wk',
          level: 'Intermediate',
          description: 'Understanding high-dimensional vector math, tokenization, cosine similarity, and integrating Pinecone / pgvector for enterprise search.',
          deliverable: 'Production semantic document indexing engine with sub-50ms hybrid retrieval',
          readinessBoost: '+24% Role Match',
          salaryMilestone: 'Level 3 ($108,000)',
          skills: ['pgvector & Pinecone', 'Text Embeddings', 'Cosine Similarity', 'Chunking Strategies'],
          syllabus: [
            'Embedding model comparison (OpenAI text-embedding-3, Cohere, open-source)',
            'Document chunking strategies: recursive, semantic, and markdown splitters',
            'Hybrid search combining BM25 keyword matching with dense vector retrieval'
          ]
        },
        {
          id: 3,
          phase: 'Phase 2: Core Stack',
          title: 'LLM Orchestration & RAG',
          subtitle: 'Context-Aware AI Systems',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 7 - 8',
          weeklyHours: '12 hrs/wk',
          level: 'Advanced',
          description: 'Building Production Retrieval-Augmented Generation (RAG) with LangChain / LlamaIndex, streaming outputs, and evaluation metrics.',
          deliverable: 'Enterprise knowledge-base assistant with citation tracing and hallucination guardrails',
          readinessBoost: '+20% Role Match',
          salaryMilestone: 'Level 4 ($120,000)',
          skills: ['LangChain / LlamaIndex', 'Streaming HTTP/SSE', 'RAG Guardrails', 'Prompt Engineering'],
          syllabus: [
            'Context window management and dynamic re-ranking (Cohere Rerank)',
            'Streaming tokens to client interfaces via Server-Sent Events (SSE)',
            'Automated RAG evaluation using Ragas framework (Faithfulness & Relevance)'
          ]
        },
        {
          id: 4,
          phase: 'Phase 3: Autonomous Agents',
          title: 'Multi-Agent Tool Use & Functions',
          subtitle: 'Agentic Workflows',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 9 - 10',
          weeklyHours: '14 hrs/wk',
          level: 'Advanced',
          description: 'Autonomous agents that plan, write code, execute SQL, and call third-party APIs using LangGraph and function calling.',
          deliverable: 'Autonomous financial analyst agent executing live SQL queries and plotting charts',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Level 5 ($132,000)',
          skills: ['Function Calling & Tool Use', 'LangGraph State Machines', 'Human-in-the-Loop Approval', 'Agent Memory'],
          syllabus: [
            'Cyclic graphs, deterministic branching, and state checkpointing',
            'Tool definition schemas, strict JSON validation, and fallback mechanisms',
            'Long-term and short-term memory persistence with Redis'
          ]
        },
        {
          id: 5,
          phase: 'Phase 3: Production Capstone',
          title: 'Full-Stack AI SaaS Platform',
          subtitle: 'Commercial Delivery',
          status: 'upcoming',
          badge: 'Milestone Capstone',
          duration: 'Weeks 11 - 12',
          weeklyHours: '16 hrs/wk',
          level: 'Mastery',
          description: 'Building and shipping a full-scale AI application with billing (Stripe), telemetry, vector caching, and multi-user team workspaces.',
          deliverable: 'Deployed production SaaS platform with live active user onboarding',
          readinessBoost: '+20% Role Match',
          salaryMilestone: 'Market Ready ($140,000)',
          skills: ['Docker & Vercel / Fly.io', 'Stripe Billing Integration', 'OpenTelemetry Tracing', 'Multi-tenant DB'],
          syllabus: [
            'Multi-tenant architecture with tenant isolation in Postgres',
            'Stripe subscription webhooks, usage-based token quotas, and metering',
            'Observability and latency tracing using Langfuse or Helicone'
          ]
        },
        {
          id: 6,
          phase: 'Phase 4: Interview Ready',
          title: 'System Design & Code Rounds',
          subtitle: 'FAANG & Startup Prep',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 13 - 14',
          weeklyHours: '10 hrs/wk',
          level: 'Advanced',
          description: 'Large-scale distributed systems design, data structure algorithms, and live pair-programming interview simulations.',
          deliverable: 'System design portfolio covering 6 real-world distributed architectures',
          readinessBoost: '+12% Hiring Probability',
          salaryMilestone: 'Negotiated Target ($148,000)',
          skills: ['Distributed System Design', 'High-Concurrency Caching', 'Algorithm Drills', 'Code Reviews'],
          syllabus: [
            'Designing rate limiters, distributed web crawlers, and collaborative editors',
            'Optimizing memory, database locks, and asynchronous job queues (BullMQ)',
            'Communicating architectural tradeoffs under real interview pressure'
          ]
        },
        {
          id: 7,
          phase: 'Phase 5: Job Placement',
          title: 'JOB READY & AI Partner Network',
          subtitle: 'Direct Introductions',
          status: 'target',
          badge: 'Final Goal',
          duration: 'Hiring Phase',
          weeklyHours: 'Active',
          level: 'Mastery',
          description: 'Direct introduction to top tier AI startups and enterprise innovation labs looking for verified full-stack AI engineers.',
          deliverable: '3-5 Guaranteed first-round interviews with verified tech partners',
          readinessBoost: 'Top 3% Talent Pool',
          salaryMilestone: 'Placement Target ($135,000 - $165,000)',
          skills: ['Direct Hiring Access', 'Pre-Vetted Portfolio', 'Equity Negotiation', 'Fast-Track Offer'],
          syllabus: [
            'Priority queue placement with partner technical hiring managers',
            'Equity grant vs cash compensation analysis and negotiation coaching',
            'Executive engineering mentorship during your initial 90 days'
          ]
        }
      ]
    },
    'ml-engineer': {
      id: 'ml-engineer',
      name: 'Machine Learning Engineer',
      category: 'Deep Learning & Systems',
      badge: '92% Frontier Tech',
      icon: Layers,
      overallProgress: 28,
      currentPhaseText: 'Phase 2 of 5 • Neural Networks & PyTorch',
      timeRemaining: '~10 Weeks Remaining',
      targetRole: 'Machine Learning Engineer',
      avgSalary: '$130,000 - $180,000',
      milestones: [
        {
          id: 0,
          phase: 'Phase 1: Foundations',
          title: 'Applied Math & Statistical Modeling',
          subtitle: 'Theoretical Foundation',
          status: 'completed',
          badge: 'Completed',
          duration: 'Weeks 1 - 2',
          weeklyHours: '12 hrs/wk',
          level: 'Beginner',
          description: 'Multivariable calculus, linear algebra (eigenvectors, SVD), probability distributions, and statistical hypothesis testing.',
          deliverable: 'Mathematical analysis notebook proving convergence of gradient algorithms',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Level 1 ($80,000)',
          skills: ['Linear Algebra & Matrices', 'Multivariable Calculus', 'Bayesian Probability', 'Hypothesis Testing'],
          syllabus: [
            'Vector spaces, matrix decomposition, and dimensionality reduction',
            'Cost function geometry, partial derivatives, and optimization dynamics',
            'Statistical inference, confidence intervals, and p-value validation'
          ]
        },
        {
          id: 1,
          phase: 'Phase 1: Foundations',
          title: 'Classical ML & Feature Engineering',
          subtitle: 'Scikit-Learn Mastery',
          status: 'completed',
          badge: 'Completed',
          duration: 'Weeks 3 - 4',
          weeklyHours: '14 hrs/wk',
          level: 'Intermediate',
          description: 'Supervised & unsupervised algorithms (XGBoost, Random Forests, K-Means), hyperparameter optimization, and cross-validation.',
          deliverable: 'Ensemble credit risk prediction model scoring in top 5% on benchmark datasets',
          readinessBoost: '+20% Role Match',
          salaryMilestone: 'Level 2 ($95,000)',
          skills: ['XGBoost / LightGBM', 'Feature Engineering', 'Cross-Validation & ROC-AUC', 'Optuna Tuning'],
          syllabus: [
            'Information gain, decision tree pruning, and gradient boosting math',
            'Automated feature selection, categorical encoding, and leakage prevention',
            'Bayesian hyperparameter optimization with Optuna pipelines'
          ]
        },
        {
          id: 2,
          phase: 'Phase 2: Core Stack',
          title: 'Deep Learning with PyTorch',
          subtitle: 'Neural Architectures',
          status: 'in-progress',
          badge: 'In Progress (40%)',
          duration: 'Weeks 5 - 6',
          weeklyHours: '15 hrs/wk',
          level: 'Intermediate',
          description: 'Building custom PyTorch tensors, autograd engines, convolutional networks (CNNs), and recurrent sequence transformers from scratch.',
          deliverable: 'Trained transformer self-attention model written from scratch in pure PyTorch',
          readinessBoost: '+22% Role Match',
          salaryMilestone: 'Level 3 ($115,000)',
          skills: ['PyTorch Tensors & Autograd', 'Custom nn.Module Layers', 'Self-Attention Mechanisms', 'GPU CUDA Training'],
          syllabus: [
            'Backpropagation math, vanishing/exploding gradients, and weight initialization',
            'Multi-head self-attention, positional encodings, and feed-forward blocks',
            'Distributed GPU training setup using PyTorch DDP and mixed precision (FP16)'
          ]
        },
        {
          id: 3,
          phase: 'Phase 2: Core Stack',
          title: 'Fine-Tuning & Quantization (LoRA)',
          subtitle: 'Open Weights Optimization',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 7 - 8',
          weeklyHours: '14 hrs/wk',
          level: 'Advanced',
          description: 'Instruction fine-tuning open foundation models (Llama-3, Mistral) using QLoRA, PEFT, and 4-bit quantization (GGUF / AWQ).',
          deliverable: 'Fine-tuned medical diagnosis LLM achieving 91% accuracy on clinical reasoning',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Level 4 ($130,000)',
          skills: ['HuggingFace Transformers', 'PEFT / QLoRA', 'BitsAndBytes Quantization', 'Dataset Synthetic Curation'],
          syllabus: [
            'Low-Rank Adaptation (LoRA) mathematics and parameter efficiency',
            'Instruction dataset creation, formatting (Alpaca/ShareGPT), and tokenization',
            'Model evaluation with benchmark harnesses (MMLU, GSM8K)'
          ]
        },
        {
          id: 4,
          phase: 'Phase 3: Systems & MLOps',
          title: 'Model Serving & Inference Engines',
          subtitle: 'Production Low-Latency',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 9 - 10',
          weeklyHours: '14 hrs/wk',
          level: 'Advanced',
          description: 'Serving models at scale with vLLM, TensorRT-LLM, continuous batching, dynamic speculative decoding, and Triton Inference Server.',
          deliverable: 'High-throughput inference cluster handling 400+ concurrent token streams',
          readinessBoost: '+16% Role Match',
          salaryMilestone: 'Level 5 ($145,000)',
          skills: ['vLLM & Triton Server', 'Continuous Batching', 'KV Cache PagedAttention', 'Docker & Kubernetes'],
          syllabus: [
            'PagedAttention algorithms and memory optimization for generative inference',
            'Speculative decoding and dynamic request queueing',
            'Prometheus metrics for Time-To-First-Token (TTFT) and throughput'
          ]
        },
        {
          id: 5,
          phase: 'Phase 3: Capstone',
          title: 'Enterprise Autonomous ML Platform',
          subtitle: 'Frontier Production System',
          status: 'upcoming',
          badge: 'Milestone Capstone',
          duration: 'Weeks 11 - 12',
          weeklyHours: '16 hrs/wk',
          level: 'Mastery',
          description: 'Building a complete ML pipeline: data drift detection (Evidently AI), continuous re-training, model registry (MLflow), and live canary rollout.',
          deliverable: 'End-to-end automated MLOps ecosystem deployed on Kubernetes',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Market Ready ($155,000)',
          skills: ['MLflow / Weights & Biases', 'Evidently AI Drift Detection', 'CI/CD Model Registry', 'Canary Rollouts'],
          syllabus: [
            'Automated pipeline triggers on data drift and performance degradation',
            'Reproducible experiment tracking and model artifact lineage',
            'Shadow deployment and automated rollbacks for regression protection'
          ]
        },
        {
          id: 6,
          phase: 'Phase 4: Interview Ready',
          title: 'ML Systems Design & Coding',
          subtitle: 'Technical Rigor',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 13 - 14',
          weeklyHours: '10 hrs/wk',
          level: 'Advanced',
          description: 'Architectural case studies: designing recommendation engines (TikTok), fraud detection systems, and scalable search ranking.',
          deliverable: 'Comprehensive ML Systems Design portfolio spanning 5 large-scale architectures',
          readinessBoost: '+12% Hiring Probability',
          salaryMilestone: 'Negotiated Target ($165,000)',
          skills: ['Recommendation Systems', 'Real-Time Feature Stores (Feast)', 'Latency Budgeting', 'Model Calibration'],
          syllabus: [
            'Candidate generation vs ranking vs re-ranking architectures',
            'Offline training vs online inference feature store synchronization',
            'Communicating trade-offs between model accuracy and inference compute cost'
          ]
        },
        {
          id: 7,
          phase: 'Phase 5: Job Placement',
          title: 'JOB READY & AI Labs Placement',
          subtitle: 'Frontier Matching',
          status: 'target',
          badge: 'Final Goal',
          duration: 'Hiring Phase',
          weeklyHours: 'Active',
          level: 'Mastery',
          description: 'Direct placement with enterprise AI labs, autonomous tech startups, and high-frequency trading ML teams.',
          deliverable: 'Fast-track final interviews with vetted hiring leaders',
          readinessBoost: 'Top 2% Talent Bracket',
          salaryMilestone: 'Placement Target ($145,000 - $185,000)',
          skills: ['Vetted AI Engineers', 'Enterprise Referrals', 'Compensation Advisory', 'Immediate Impact'],
          syllabus: [
            'Tailored technical introductions to VP of AI & Chief Scientists',
            'Portfolio walkthrough coaching for high-conviction offers',
            'Guidance on equity packages, compute budgets, and IP rights'
          ]
        }
      ]
    },
    'cloud-devops': {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Engineer',
      category: 'Infrastructure & SRE',
      badge: '91% Mission Critical',
      icon: Cloud,
      overallProgress: 30,
      currentPhaseText: 'Phase 2 of 5 • Kubernetes & Cloud Infrastructure',
      timeRemaining: '~7 Weeks Remaining',
      targetRole: 'DevOps / Cloud Platform Engineer',
      avgSalary: '$110,000 - $150,000',
      milestones: [
        {
          id: 0,
          phase: 'Phase 1: Diagnostic',
          title: 'Linux Systems & Shell Scripting',
          subtitle: 'Core Foundation',
          status: 'completed',
          badge: 'Verified',
          duration: 'Weeks 1 - 2',
          weeklyHours: '10 hrs/wk',
          level: 'Beginner',
          description: 'Kernel internals, file system hierarchies, process management, networking sockets (TCP/UDP, DNS), and automated Bash scripts.',
          deliverable: 'Automated server hardening and monitoring script suite',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Level 1 ($72,000)',
          skills: ['Linux Kernel & Systemd', 'Bash Scripting', 'SSH Key Management', 'Networking (DNS, Subnets, CIDR)'],
          syllabus: [
            'POSIX permissions, process signals, and systemd service units',
            'Networking protocols, iptables firewalling, and diagnostic tools (curl, tcpdump)',
            'Idempotent shell automation scripts with robust error handling'
          ]
        },
        {
          id: 1,
          phase: 'Phase 1: Foundations',
          title: 'Docker & Microservices',
          subtitle: 'Containerization',
          status: 'completed',
          badge: 'Completed',
          duration: 'Weeks 3 - 4',
          weeklyHours: '12 hrs/wk',
          level: 'Intermediate',
          description: 'Writing minimal multi-stage Dockerfiles, managing container volumes, bridge networking, and Docker Compose development setups.',
          deliverable: 'Zero-vulnerability, sub-50MB multi-stage microservices container cluster',
          readinessBoost: '+20% Role Match',
          salaryMilestone: 'Level 2 ($86,000)',
          skills: ['Multi-Stage Dockerfiles', 'Docker Compose', 'Container Security Scans (Trivy)', 'Rootless Containers'],
          syllabus: [
            'Container layer caching optimization and attack surface reduction',
            'Multi-container composition with internal DNS service discovery',
            'Automated CVE vulnerability scanning in build pipelines'
          ]
        },
        {
          id: 2,
          phase: 'Phase 2: Core Stack',
          title: 'Kubernetes Orchestration & Helm',
          subtitle: 'Cluster Management',
          status: 'in-progress',
          badge: 'In Progress (45%)',
          duration: 'Weeks 5 - 6',
          weeklyHours: '14 hrs/wk',
          level: 'Intermediate',
          description: 'Deployments, ReplicaSets, StatefulSets, Ingress Controllers, Persistent Volumes, and packaging services into production Helm charts.',
          deliverable: 'Production-ready highly available multi-region Kubernetes cluster manifest',
          readinessBoost: '+22% Role Match',
          salaryMilestone: 'Level 3 ($105,000)',
          skills: ['Kubernetes Pods & Services', 'Ingress & TLS (cert-manager)', 'Helm Packaging', 'HPA Auto-scaling'],
          syllabus: [
            'Horizontal Pod Autoscaling (HPA) driven by CPU, memory, and custom metrics',
            'Ingress controllers, automated Let\'s Encrypt TLS certificates, and routing rules',
            'Stateful persistence with CSI drivers and backup strategies'
          ]
        },
        {
          id: 3,
          phase: 'Phase 2: Core Stack',
          title: 'Infrastructure as Code (Terraform)',
          subtitle: 'Cloud Automation',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 7 - 8',
          weeklyHours: '12 hrs/wk',
          level: 'Advanced',
          description: 'Declarative cloud provisioning on AWS/GCP using modular Terraform, state locking via DynamoDB/S3, and automated plan validation.',
          deliverable: 'Complete AWS production VPC, EKS cluster, and RDS database managed entirely via code',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Level 4 ($120,000)',
          skills: ['Terraform Modules', 'Remote State & S3 Locking', 'AWS (VPC, IAM, EKS, RDS)', 'Cost Estimation (Infracost)'],
          syllabus: [
            'Reusable parameterized Terraform modules with strict semantic versioning',
            'IAM least-privilege security policies and role delegation',
            'Automated pull-request cost estimation using Infracost'
          ]
        },
        {
          id: 4,
          phase: 'Phase 3: CI/CD & GitOps',
          title: 'GitOps & Automated Delivery',
          subtitle: 'ArgoCD & GitHub Actions',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 9 - 10',
          weeklyHours: '14 hrs/wk',
          level: 'Advanced',
          description: 'Continuous Integration pipelines running tests, lints, security audits, and continuous deployment via ArgoCD declarative GitOps.',
          deliverable: 'Zero-downtime Canary & Blue-Green deployment pipeline managed by Git commits',
          readinessBoost: '+16% Role Match',
          salaryMilestone: 'Level 5 ($132,000)',
          skills: ['GitHub Actions CI', 'ArgoCD GitOps', 'Canary Rollouts', 'Semantic Release'],
          syllabus: [
            'Automated testing matrices, artifact signing with Cosign, and container registry publishing',
            'Declarative cluster state synchronization with ArgoCD controllers',
            'Automated rollback upon HTTP error spikes or latency regressions'
          ]
        },
        {
          id: 5,
          phase: 'Phase 3: Capstone',
          title: 'Enterprise SRE & Observability',
          subtitle: 'Mission-Critical Capstone',
          status: 'upcoming',
          badge: 'Milestone Capstone',
          duration: 'Weeks 11 - 12',
          weeklyHours: '16 hrs/wk',
          level: 'Mastery',
          description: 'Implementing Prometheus metrics, Grafana dashboards, centralized Loki logging, OpenTelemetry tracing, and automated alert manager routes.',
          deliverable: 'Full Observability Stack with automated Slack/PagerDuty alerting and live SLO dashboards',
          readinessBoost: '+18% Role Match',
          salaryMilestone: 'Market Ready ($140,000)',
          skills: ['Prometheus & Grafana', 'Centralized Logging (Loki)', 'OpenTelemetry Tracing', 'SLO / SLI Error Budgets'],
          syllabus: [
            'Defining service level indicators (SLIs) and service level objectives (SLOs)',
            'Distributed request tracing across microservices to isolate latency bottlenecks',
            'Chaos engineering drills using Chaos Mesh to validate cluster fault tolerance'
          ]
        },
        {
          id: 6,
          phase: 'Phase 4: Interview Ready',
          title: 'Cloud Security & SRE Scenarios',
          subtitle: 'Incident Response Prep',
          status: 'upcoming',
          badge: 'Upcoming',
          duration: 'Weeks 13 - 14',
          weeklyHours: '10 hrs/wk',
          level: 'Advanced',
          description: 'Mock incident post-mortems, live outage debugging scenarios, cloud cost optimization audits, and technical screening rounds.',
          deliverable: 'Documented Post-Mortem & Disaster Recovery Runbook',
          readinessBoost: '+12% Hiring Probability',
          salaryMilestone: 'Negotiated Target ($148,000)',
          skills: ['Incident Response', 'Post-Mortem Authoring', 'Cloud Cost FinOps', 'Disaster Recovery (RPO/RTO)'],
          syllabus: [
            'Real-time debugging of failing pods, network partition simulations, and certificate expirations',
            'Blameless post-mortem writing and preventive action planning',
            'Cloud bill auditing: identifying orphaned volumes, over-provisioned nodes, and NAT costs'
          ]
        },
        {
          id: 7,
          phase: 'Phase 5: Job Placement',
          title: 'JOB READY & Cloud Partner Match',
          subtitle: 'High-Demand Placement',
          status: 'target',
          badge: 'Final Goal',
          duration: 'Hiring Phase',
          weeklyHours: 'Active',
          level: 'Mastery',
          description: 'Direct candidate introductions to enterprise SaaS companies and cloud infrastructure teams hiring verified DevOps engineers.',
          deliverable: 'Vetted introduction to senior infrastructure leaders',
          readinessBoost: 'Top 3% DevOps Talent',
          salaryMilestone: 'Placement Target ($125,000 - $155,000)',
          skills: ['Direct Hiring Referrals', 'Production-Verified Proof', 'High Retention Roles', 'Fast Compensation Growth'],
          syllabus: [
            'Direct interview scheduling with Heads of Infrastructure & Platform Engineering',
            'Vetted proof-of-work portfolio eliminating boilerplate preliminary coding tests',
            'Continuous technical support during first 100 days of cloud infrastructure ownership'
          ]
        }
      ]
    }
  };

  const activeTrack = tracks[activeTrackId];
  // Ensure selected milestone stays within bounds
  const activeMilestone = activeTrack.milestones.find(m => m.id === selectedMilestoneId) || activeTrack.milestones[0];

  const handleTrackChange = (trackId: string) => {
    setActiveTrackId(trackId);
    // Auto-select the first in-progress or next milestone
    const inProgress = tracks[trackId].milestones.find(m => m.status === 'in-progress');
    setSelectedMilestoneId(inProgress ? inProgress.id : 2);
  };

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-[#070B14] border-t border-white/[0.05]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Clear Value Proposition */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-300 mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Clear, Deterministic Career Path Navigation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
            Your career shouldn't be a guess.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              It should be a crystal-clear roadmap.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Eliminate trial-and-error. Every milestone is calibrated to close specific industry skill gaps, build verifiable proof-of-work, and take you directly from your current baseline to job-ready candidate.
          </p>
        </div>

        {/* Track Selector Navigation */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Track Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/[0.08] backdrop-blur-xl">
            {Object.values(tracks).map((track) => {
              const Icon = track.icon;
              const isSelected = track.id === activeTrackId;
              return (
                <button
                  key={track.id}
                  onClick={() => handleTrackChange(track.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  <span>{track.name}</span>
                  {isSelected && (
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-white/20 text-white">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* View Toggle: Visual Journey vs Detailed Syllabus Table */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/[0.08] self-start md:self-auto">
            <button
              onClick={() => setViewMode('visual')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'visual'
                  ? 'bg-blue-600/30 border border-blue-500/40 text-blue-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Visual Path Flow</span>
            </button>
            <button
              onClick={() => setViewMode('curriculum')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'curriculum'
                  ? 'bg-blue-600/30 border border-blue-500/40 text-blue-300 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Curriculum Schedule</span>
            </button>
          </div>
        </div>

        {/* Track Overview Summary Banner */}
        <div className="rounded-2xl p-5 mb-8 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-indigo-950/40 border border-white/[0.08] backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <activeTrack.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl font-bold text-white">{activeTrack.name} Path</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {activeTrack.badge}
                </span>
                <span className="text-xs text-slate-400">Target Role: <strong className="text-slate-200">{activeTrack.targetRole}</strong></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Market Compensation Range: <span className="font-semibold text-emerald-400">{activeTrack.avgSalary}</span> • Total 8 Milestones across 5 Structured Phases
              </p>
            </div>
          </div>

          <div className="w-full lg:w-72 shrink-0">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-400 font-medium">Trajectory Progress</span>
              <span className="font-bold text-blue-400">{activeTrack.overallProgress}% Completed</span>
            </div>
            <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full transition-all duration-500"
                style={{ width: `${activeTrack.overallProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
              <span>{activeTrack.currentPhaseText}</span>
            </div>
          </div>
        </div>

        {/* View Mode 1: Visual Interactive Roadmap */}
        {viewMode === 'visual' ? (
          <div className="space-y-8">
            
            {/* Visual Step Timeline Rail */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-white/[0.08] backdrop-blur-2xl">
              
              {/* Top instruction / legend */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-8">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>Interactive Roadmap Journey</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Click on any milestone node below to examine its syllabus, required deliverables, and market readiness impact.
                  </p>
                </div>
                
                {/* Legend */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Completed
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" /> In Progress
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" /> Upcoming
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-violet-400" /> Job Ready
                  </span>
                </div>
              </div>

              {/* Horizontal / Grid Milestones with Connectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {activeTrack.milestones.map((m, idx) => {
                  const isSelected = selectedMilestoneId === m.id;
                  const isCompleted = m.status === 'completed';
                  const isInProgress = m.status === 'in-progress';
                  const isTarget = m.status === 'target';

                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMilestoneId(m.id)}
                      className={`relative p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between group ${
                        isSelected
                          ? 'bg-gradient-to-b from-blue-900/40 via-slate-900/90 to-slate-900 border-blue-400 shadow-xl shadow-blue-500/20 -translate-y-1.5 ring-2 ring-blue-500/20'
                          : isCompleted
                          ? 'bg-slate-950/60 border-emerald-500/30 hover:border-emerald-400/60 hover:-translate-y-0.5'
                          : isInProgress
                          ? 'bg-slate-950/70 border-blue-500/40 hover:border-blue-400 hover:-translate-y-0.5 ring-1 ring-blue-500/15'
                          : isTarget
                          ? 'bg-slate-950/60 border-violet-500/30 hover:border-violet-400/60 hover:-translate-y-0.5'
                          : 'bg-slate-950/40 border-white/[0.06] hover:border-white/[0.2] hover:-translate-y-0.5'
                      }`}
                    >
                      {/* Top Row: Milestone Step # & Status Icon */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                            isSelected 
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                              : 'bg-white/[0.04] text-slate-400'
                          }`}>
                            Step 0{idx + 1}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {isCompleted && (
                              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="hidden xl:inline">Done</span>
                              </span>
                            )}
                            {isInProgress && (
                              <span className="flex items-center gap-1 text-[11px] font-semibold text-blue-400">
                                <Clock className="w-4 h-4 animate-pulse" />
                                <span className="hidden xl:inline">Active</span>
                              </span>
                            )}
                            {isTarget && (
                              <span className="flex items-center gap-1 text-[11px] font-semibold text-violet-400">
                                <Flag className="w-4 h-4" />
                                <span className="hidden xl:inline">Goal</span>
                              </span>
                            )}
                            {!isCompleted && !isInProgress && !isTarget && (
                              <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                                <Circle className="w-3.5 h-3.5 text-slate-600" />
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Phase pill */}
                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 truncate">
                          {m.phase}
                        </p>

                        {/* Title */}
                        <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 transition-colors leading-snug line-clamp-2">
                          {m.title}
                        </h5>

                        {/* Subtitle */}
                        <p className="text-xs text-slate-400 mt-1 truncate">
                          {m.subtitle}
                        </p>
                      </div>

                      {/* Bottom Row: Duration & Deliverable Indicator */}
                      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {m.duration}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-300 font-medium">
                          {m.weeklyHours}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Milestone Comprehensive Deep Dive Container */}
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-[#0B1120] to-slate-950 border border-blue-500/30 shadow-2xl relative overflow-hidden">
                {/* Glow highlight */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8">
                  
                  {/* Left Column: Milestone Details */}
                  <div className="space-y-5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        activeMilestone.status === 'completed'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : activeMilestone.status === 'in-progress'
                          ? 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                          : activeMilestone.status === 'target'
                          ? 'bg-violet-500/10 border-violet-500/30 text-violet-300'
                          : 'bg-white/[0.05] border-white/[0.1] text-slate-400'
                      }`}>
                        {activeMilestone.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        Pace: {activeMilestone.duration} ({activeMilestone.weeklyHours})
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/[0.08]">
                        Level: {activeMilestone.level}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
                        {activeMilestone.phase} • Step 0{activeMilestone.id + 1}
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {activeMilestone.title}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mt-2">
                        {activeMilestone.description}
                      </p>
                    </div>

                    {/* Deliverable Box (Proof of Competence) */}
                    <div className="rounded-xl p-4 bg-blue-950/30 border border-blue-500/20 flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <FileCode className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                          Proof-of-Work Deliverable
                        </div>
                        <p className="text-sm font-semibold text-white mt-0.5">
                          {activeMilestone.deliverable}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Evaluated and verified automatically against senior employer hiring rubrics.
                        </p>
                      </div>
                    </div>

                    {/* Key Modules & Syllabus */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                        Key Curriculum Modules & Hands-on Labs
                      </h5>
                      <ul className="space-y-2">
                        {activeMilestone.syllabus.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verified Skills Tags */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Verified Skills Acquired in this Step
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {activeMilestone.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-200 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Readiness Boost, Salary Trajectory & Action */}
                  <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
                    
                    {/* Impact Card */}
                    <div className="rounded-2xl p-5 bg-slate-900/90 border border-white/[0.08] space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Career Impact
                        </span>
                        <Award className="w-4 h-4 text-amber-400" />
                      </div>

                      <div>
                        <span className="text-xs text-slate-400 block">Candidate Readiness Boost</span>
                        <div className="flex items-center gap-2 mt-1">
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                          <span className="text-lg font-extrabold text-emerald-400">
                            {activeMilestone.readinessBoost}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-slate-400 block">Projected Salary Tier</span>
                        <span className="text-sm font-bold text-white mt-0.5 block">
                          {activeMilestone.salaryMilestone}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-white/[0.06] text-[11px] text-slate-400 leading-normal">
                        Completion of this step elevates your profile into the top 15th percentile of entry candidates.
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2.5">
                      <button 
                        onClick={onOpenAssessment}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
                      >
                        <span>Generate My Custom Roadmap</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={onOpenAssessment}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/10 transition-colors"
                      >
                        <span>Take Diagnostic Test for this Step</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        ) : (
          /* View Mode 2: Week-by-Week Curriculum Schedule Table */
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-white/[0.08] backdrop-blur-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.06]">
              <div>
                <h4 className="text-lg font-bold text-white">
                  Full Curriculum Schedule: {activeTrack.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Chronological breakdown of milestones, deliverables, weekly hours, and target skills.
                </p>
              </div>
              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-colors"
              >
                <span>Calibrate for My Background</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] text-slate-400 font-semibold uppercase text-[11px] tracking-wider">
                    <th className="pb-3 pr-4">Step</th>
                    <th className="pb-3 pr-4">Phase & Milestone</th>
                    <th className="pb-3 pr-4">Duration</th>
                    <th className="pb-3 pr-4">Proof-of-Work Deliverable</th>
                    <th className="pb-3 pr-4">Core Skills</th>
                    <th className="pb-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {activeTrack.milestones.map((m, idx) => (
                    <tr 
                      key={m.id}
                      onClick={() => {
                        setSelectedMilestoneId(m.id);
                        setViewMode('visual');
                      }}
                      className="hover:bg-white/[0.02] cursor-pointer transition-colors group"
                    >
                      <td className="py-4 pr-4 font-mono font-bold text-blue-400">
                        0{idx + 1}
                      </td>
                      <td className="py-4 pr-4">
                        <div className="font-bold text-white group-hover:text-blue-300 transition-colors">
                          {m.title}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {m.phase} • {m.level}
                        </div>
                      </td>
                      <td className="py-4 pr-4 text-slate-300 font-medium whitespace-nowrap">
                        {m.duration}
                        <span className="block text-[11px] text-slate-500">{m.weeklyHours}</span>
                      </td>
                      <td className="py-4 pr-4 text-slate-300 max-w-xs">
                        <div className="truncate font-medium text-slate-200">
                          {m.deliverable}
                        </div>
                        <div className="text-[11px] text-emerald-400">
                          {m.readinessBoost}
                        </div>
                      </td>
                      <td className="py-4 pr-4 max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {m.skills.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                              {s}
                            </span>
                          ))}
                          {m.skills.length > 3 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded text-slate-500">
                              +{m.skills.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 text-right whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          m.status === 'completed'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : m.status === 'in-progress'
                            ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                            : m.status === 'target'
                            ? 'bg-violet-500/10 border-violet-500/30 text-violet-400'
                            : 'bg-white/[0.04] border-white/[0.08] text-slate-400'
                        }`}>
                          {m.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-center text-xs text-slate-400">
              Click any row to open the deep-dive module view in the interactive flow.
            </div>
          </div>
        )}

        {/* Bottom Guarantee / Action Bar */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Deterministic Outcome Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Each roadmap is dynamically updated in real-time as you complete projects, continuously recalibrating against market hiring trends.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenAssessment}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
            >
              <span>Build My Personalized Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
