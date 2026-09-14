import React, { useState, useMemo } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Brain, 
  Check, 
  RefreshCw, 
  TrendingUp, 
  Target,
  Search,
  Briefcase,
  Layers,
  Award,
  DollarSign
} from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole?: (roleId: string) => void;
}

interface CareerGoal {
  id: string;
  title: string;
  domain: 'data' | 'ai' | 'software' | 'product';
  domainLabel: string;
  salary: string;
  demand: string;
  recommendedSkills: string[];
  milestones: string[];
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose, onSelectRole }) => {
  const [step, setStep] = useState(1);
  const [targetRoleId, setTargetRoleId] = useState('data-analyst');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<'all' | 'data' | 'ai' | 'software' | 'product'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('0-2 years (Entry/Associate)');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Excel', 'SQL', 'Python']);
  const [isCalculating, setIsCalculating] = useState(false);

  const careerGoals: CareerGoal[] = useMemo(() => [
    // 📊 Data & Analytics (6 roles)
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      domain: 'data',
      domainLabel: 'Data & Analytics',
      salary: '$85k - $115k',
      demand: 'High Demand',
      recommendedSkills: ['Excel', 'SQL', 'Python', 'Power BI', 'Tableau', 'Statistics', 'Data Cleaning', 'Communication'],
      milestones: [
        'Module 1: Advanced SQL Window Functions & CTEs (+9%)',
        'Module 2: Power BI Star Schema Executive Dashboard (+12%)'
      ]
    },
    {
      id: 'bi-engineer',
      title: 'Business Intelligence (BI) Engineer',
      domain: 'data',
      domainLabel: 'Data & Analytics',
      salary: '$95k - $130k',
      demand: 'Surging Demand',
      recommendedSkills: ['SQL', 'Power BI', 'Tableau', 'DAX Calculations', 'Data Modeling', 'ETL Pipelines', 'Data Warehousing'],
      milestones: [
        'Module 1: Star Schema & Snowflake Data Modeling (+10%)',
        'Module 2: Advanced DAX Time Intelligence Pipelines (+11%)'
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      domain: 'data',
      domainLabel: 'Data & Analytics',
      salary: '$115k - $155k',
      demand: 'High Growth',
      recommendedSkills: ['Python', 'SQL', 'Scikit-Learn', 'Statistics', 'A/B Testing', 'Hypothesis Testing', 'Data Wrangling'],
      milestones: [
        'Module 1: Statistical Inference & Predictive Regression Models (+11%)',
        'Module 2: End-to-End Customer Churn Machine Learning Pipeline (+13%)'
      ]
    },
    {
      id: 'data-engineer',
      title: 'Data Engineer',
      domain: 'data',
      domainLabel: 'Data & Analytics',
      salary: '$110k - $155k',
      demand: 'Fast Growing',
      recommendedSkills: ['SQL', 'Python', 'Apache Spark', 'Airflow', 'Snowflake / BigQuery', 'Database Indexing', 'Git / GitHub'],
      milestones: [
        'Module 1: Distributed Data Processing with Apache Spark (+12%)',
        'Module 2: Production Airflow DAGs & Data Lake Architecture (+10%)'
      ]
    },
    {
      id: 'analytics-engineer',
      title: 'Analytics Engineer',
      domain: 'data',
      domainLabel: 'Data & Analytics',
      salary: '$105k - $145k',
      demand: 'High Demand',
      recommendedSkills: ['SQL', 'dbt (data build tool)', 'Data Modeling', 'Snowflake', 'Git / GitHub', 'Business Context'],
      milestones: [
        'Module 1: dbt Transformation Models & Automated Testing (+11%)',
        'Module 2: Dimensional Warehouse Versioning & CI/CD (+9%)'
      ]
    },
    {
      id: 'dba-architect',
      title: 'Database Administrator & Architect',
      domain: 'data',
      domainLabel: 'Data & Analytics',
      salary: '$90k - $130k',
      demand: 'Steady Demand',
      recommendedSkills: ['PostgreSQL / MySQL', 'SQL', 'Database Tuning', 'Replication & Sharding', 'Backup / Disaster Recovery'],
      milestones: [
        'Module 1: Query Execution Plan Profiling & B-Tree Indexing (+10%)',
        'Module 2: High-Availability Failover & WAL Archiving (+10%)'
      ]
    },

    // 🤖 AI & Machine Learning (6 roles)
    {
      id: 'ml-engineer',
      title: 'Machine Learning Engineer',
      domain: 'ai',
      domainLabel: 'AI & Machine Learning',
      salary: '$125k - $170k',
      demand: 'Very High Demand',
      recommendedSkills: ['Python', 'PyTorch', 'Scikit-Learn', 'Math & Calculus', 'Feature Engineering', 'Docker', 'MLflow'],
      milestones: [
        'Module 1: Deep Neural Networks & Custom PyTorch Layers (+14%)',
        'Module 2: Production Model Serving & Low-Latency APIs (+11%)'
      ]
    },
    {
      id: 'genai-engineer',
      title: 'Generative AI & LLM Engineer',
      domain: 'ai',
      domainLabel: 'AI & Machine Learning',
      salary: '$135k - $185k',
      demand: 'Surging Demand',
      recommendedSkills: ['Python', 'LangChain / LlamaIndex', 'Vector DBs (pgvector)', 'Fine-Tuning (LoRA)', 'Prompt Engineering', 'RAG Architectures'],
      milestones: [
        'Module 1: Production RAG with Vector Search & Citation Guardrails (+15%)',
        'Module 2: Open-Source Model Quantization & PEFT Fine-Tuning (+12%)'
      ]
    },
    {
      id: 'ai-architect',
      title: 'AI Solutions Architect',
      domain: 'ai',
      domainLabel: 'AI & Machine Learning',
      salary: '$140k - $190k',
      demand: 'Executive Tier',
      recommendedSkills: ['Cloud AI (AWS/Azure/GCP)', 'LLM Orchestration', 'System Design', 'Enterprise Security', 'Cost Optimization (FinOps)'],
      milestones: [
        'Module 1: Enterprise Multi-Tenant AI Infrastructure Design (+14%)',
        'Module 2: Latency Budgeting & GPU Cost Optimization Architecture (+11%)'
      ]
    },
    {
      id: 'cv-nlp-engineer',
      title: 'Computer Vision & NLP Specialist',
      domain: 'ai',
      domainLabel: 'AI & Machine Learning',
      salary: '$130k - $175k',
      demand: 'High Demand',
      recommendedSkills: ['Python', 'PyTorch', 'HuggingFace', 'Transformers', 'OpenCV', 'Image Segmentation', 'Embeddings'],
      milestones: [
        'Module 1: Self-Attention Transformer Fine-Tuning on Custom Datasets (+13%)',
        'Module 2: Real-time Object Detection Pipeline with ONNX Runtime (+10%)'
      ]
    },
    {
      id: 'mlops-engineer',
      title: 'MLOps Platform Engineer',
      domain: 'ai',
      domainLabel: 'AI & Machine Learning',
      salary: '$120k - $165k',
      demand: 'High Growth',
      recommendedSkills: ['Docker', 'Kubernetes', 'Python', 'MLflow / Kubeflow', 'CI/CD Pipelines', 'Model Monitoring (Evidently AI)'],
      milestones: [
        'Module 1: Automated Continuous Re-Training on Data Drift Triggers (+12%)',
        'Module 2: Canary Model Rollouts & Triton Inference Clustering (+11%)'
      ]
    },
    {
      id: 'ai-prompt-eval',
      title: 'AI Prompt & Evaluation Specialist',
      domain: 'ai',
      domainLabel: 'AI & Machine Learning',
      salary: '$95k - $140k',
      demand: 'Rapid Growth',
      recommendedSkills: ['Prompt Engineering', 'Python', 'Ragas Framework', 'Benchmarking (MMLU)', 'LLM Red-Teaming', 'Communication'],
      milestones: [
        'Module 1: Synthetic Benchmark Generation & Automated Ragas Audits (+10%)',
        'Module 2: Hallucination Mitigation & Prompt Defense Security (+9%)'
      ]
    },

    // 💻 Software Engineering & Cloud (6 roles)
    {
      id: 'fullstack-engineer',
      title: 'Full-Stack Software Engineer',
      domain: 'software',
      domainLabel: 'Software & Cloud',
      salary: '$105k - $150k',
      demand: 'High Demand',
      recommendedSkills: ['React / Next.js', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'REST / GraphQL APIs', 'Tailwind CSS', 'Git / GitHub'],
      milestones: [
        'Module 1: Scalable Microservices Architecture & Database Connection Pooling (+12%)',
        'Module 2: Full-Stack Multi-Tenant SaaS with Stripe Billing Integration (+13%)'
      ]
    },
    {
      id: 'frontend-engineer',
      title: 'Frontend Developer (React/Next.js)',
      domain: 'software',
      domainLabel: 'Software & Cloud',
      salary: '$95k - $135k',
      demand: 'High Demand',
      recommendedSkills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'UI State Management', 'Web Performance & Core Vitals'],
      milestones: [
        'Module 1: Complex Reactive State Machines & Custom Hook Libraries (+10%)',
        'Module 2: Server Components, Streaming SSR & Zero-Layout-Shift Optimizations (+11%)'
      ]
    },
    {
      id: 'backend-engineer',
      title: 'Backend Engineer (Node/Python/Go)',
      domain: 'software',
      domainLabel: 'Software & Cloud',
      salary: '$105k - $150k',
      demand: 'High Demand',
      recommendedSkills: ['Node.js / Python / Go', 'PostgreSQL', 'Redis Caching', 'System Design', 'Docker', 'JWT Authentication'],
      milestones: [
        'Module 1: High-Concurrency Job Queues with BullMQ & Redis (+11%)',
        'Module 2: Distributed Database Partitioning & ACID Transaction Guarantees (+12%)'
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Engineer',
      domain: 'software',
      domainLabel: 'Software & Cloud',
      salary: '$110k - $155k',
      demand: 'Mission Critical',
      recommendedSkills: ['Docker', 'Kubernetes', 'Terraform', 'AWS / GCP', 'Linux / Bash', 'GitHub Actions CI/CD'],
      milestones: [
        'Module 1: Multi-Region Kubernetes Orchestration & Helm Packaging (+13%)',
        'Module 2: Declarative Infrastructure as Code with Reusable Terraform Modules (+11%)'
      ]
    },
    {
      id: 'sre-engineer',
      title: 'Site Reliability Engineer (SRE)',
      domain: 'software',
      domainLabel: 'Software & Cloud',
      salary: '$120k - $165k',
      demand: 'High Compensation',
      recommendedSkills: ['Prometheus & Grafana', 'Kubernetes', 'Linux Internals', 'SLO / SLI Error Budgets', 'Chaos Engineering', 'Incident Response'],
      milestones: [
        'Module 1: Centralized Observability & OpenTelemetry Distributed Tracing (+12%)',
        'Module 2: Automated Chaos Engineering Drills & Fault-Tolerant Failovers (+12%)'
      ]
    },
    {
      id: 'cybersecurity-analyst',
      title: 'Cybersecurity Analyst & Engineer',
      domain: 'software',
      domainLabel: 'Software & Cloud',
      salary: '$98k - $145k',
      demand: 'High Security Need',
      recommendedSkills: ['Network Security', 'Linux', 'Vulnerability Scanning', 'SIEM & SOC Tools', 'Identity & Access Mgmt (IAM)', 'Python Scripting'],
      milestones: [
        'Module 1: Cloud Security Posture Management (CSPM) & IAM Least Privilege (+11%)',
        'Module 2: Automated Threat Detection & Incident Triage Pipeline (+10%)'
      ]
    },

    // 📈 Product, Growth & Finance (6 roles)
    {
      id: 'product-analyst',
      title: 'Product Analyst',
      domain: 'product',
      domainLabel: 'Product & Finance',
      salary: '$95k - $130k',
      demand: 'High Demand',
      recommendedSkills: ['SQL', 'Python', 'Mixpanel / Amplitude', 'A/B Testing', 'Cohort Retention', 'Excel', 'Product Sense'],
      milestones: [
        'Module 1: User Onboarding Funnel Diagnostics & Drop-Off Isolation (+11%)',
        'Module 2: Statistical A/B Experimentation & Variant Significance Testing (+10%)'
      ]
    },
    {
      id: 'technical-pm',
      title: 'Technical Product Manager (TPM)',
      domain: 'product',
      domainLabel: 'Product & Finance',
      salary: '$115k - $165k',
      demand: 'Strategic Leadership',
      recommendedSkills: ['Product Strategy', 'SQL', 'Agile / Scrum', 'System Architecture Basics', 'User Research', 'Roadmap Prioritization'],
      milestones: [
        'Module 1: PRD Specification Authoring & Engineering Sprint Backlogs (+11%)',
        'Module 2: Data-Informed Feature ROI Tradeoffs & Executive Pitching (+12%)'
      ]
    },
    {
      id: 'business-analyst',
      title: 'Business Analyst',
      domain: 'product',
      domainLabel: 'Product & Finance',
      salary: '$90k - $125k',
      demand: 'Large Market Volume',
      recommendedSkills: ['Excel (Advanced)', 'Communication', 'Process Mapping (BPMN)', 'SQL Basics', 'Requirements Gathering (BRD)', 'Cost-Benefit Analysis'],
      milestones: [
        'Module 1: Enterprise Requirements Documentation & Stakeholder Discovery (+9%)',
        'Module 2: Operational Bottleneck Modeling & Cost-Benefit Justification (+10%)'
      ]
    },
    {
      id: 'financial-analyst',
      title: 'Financial Data Analyst',
      domain: 'product',
      domainLabel: 'Product & Finance',
      salary: '$85k - $120k',
      demand: 'High Corporate Need',
      recommendedSkills: ['Excel (Three-Statement)', 'Financial Modeling', 'SQL', 'Python for Finance', 'Variance Analysis', 'DCF Valuation'],
      milestones: [
        'Module 1: Discounted Cash Flow (DCF) & Sensitivity Scenario Models (+10%)',
        'Module 2: Automated Financial Variance Reporting with Python & SQL (+10%)'
      ]
    },
    {
      id: 'quant-analyst',
      title: 'Quantitative Analyst',
      domain: 'product',
      domainLabel: 'Product & Finance',
      salary: '$130k - $185k',
      demand: 'Top Compensation',
      recommendedSkills: ['Python / C++', 'Stochastic Calculus', 'Time-Series Analysis', 'Risk Modeling (VaR)', 'Linear Algebra', 'SQL'],
      milestones: [
        'Module 1: Monte Carlo Simulation & Stochastic Risk Modeling (+14%)',
        'Module 2: Algorithmic Alpha Factor Backtesting Pipeline (+13%)'
      ]
    },
    {
      id: 'growth-specialist',
      title: 'Growth & Experimentation Specialist',
      domain: 'product',
      domainLabel: 'Product & Finance',
      salary: '$88k - $125k',
      demand: 'High Growth',
      recommendedSkills: ['A/B Testing', 'SQL', 'Google Analytics 4', 'Conversion Rate Optimization (CRO)', 'Customer Acquisition Cost (CAC) Modeling'],
      milestones: [
        'Module 1: Multi-Touch Marketing Attribution & LTV/CAC Engine (+11%)',
        'Module 2: High-Velocity Growth Loops & Landing Page CRO Experiments (+10%)'
      ]
    }
  ], []);

  if (!isOpen) return null;

  const currentGoal = careerGoals.find(g => g.id === targetRoleId) || careerGoals[0];

  // Filter career goals based on domain and search query
  const filteredGoals = careerGoals.filter(goal => {
    const matchesDomain = selectedDomainFilter === 'all' || goal.domain === selectedDomainFilter;
    const matchesSearch = goal.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          goal.domainLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      if (selectedSkills.length > 1) {
        setSelectedSkills(selectedSkills.filter(s => s !== skill));
      }
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRunAssessment = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setStep(3);
    }, 1200);
  };

  // Compute live match score based on selected skills
  const calculatedMatch = Math.min(
    96,
    Math.max(48, Math.round(52 + (selectedSkills.length * 4.8)))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0B1120] border border-white/[0.12] shadow-2xl shadow-blue-500/20 p-6 sm:p-8 text-left overflow-hidden max-h-[90vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors z-10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Bar */}
        <div className="flex items-center gap-2 mb-5 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            CareerIQ Instant Profiler
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-400">Step {step} of 3</span>
        </div>

        {/* STEP 1: Define Career Goal */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn overflow-y-auto pr-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Define Your Career Goal
              </h3>
              <p className="text-xs text-slate-400">
                Choose from 24+ tech and business destinations to calibrate real-time market requirements.
              </p>
            </div>

            {/* Domain Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {[
                { key: 'all' as const, label: 'All (24)' },
                { key: 'data' as const, label: 'Data & BI (6)' },
                { key: 'ai' as const, label: 'AI & ML (6)' },
                { key: 'software' as const, label: 'Software & Cloud (6)' },
                { key: 'product' as const, label: 'Product & Finance (6)' },
              ].map(cat => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedDomainFilter(cat.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedDomainFilter === cat.key
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'bg-slate-950/70 text-slate-400 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search target role (e.g. AI, DevOps, Data Analyst, Product)..."
                className="w-full rounded-xl bg-slate-950 border border-white/[0.1] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Select Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Target Role Selector
              </label>
              <select
                value={targetRoleId}
                onChange={(e) => setTargetRoleId(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <optgroup label="📊 Data & Analytics">
                  {careerGoals.filter(g => g.domain === 'data').map(g => (
                    <option key={g.id} value={g.id}>{g.title} ({g.salary})</option>
                  ))}
                </optgroup>
                <optgroup label="🤖 AI & Machine Learning">
                  {careerGoals.filter(g => g.domain === 'ai').map(g => (
                    <option key={g.id} value={g.id}>{g.title} ({g.salary})</option>
                  ))}
                </optgroup>
                <optgroup label="💻 Software Engineering & Cloud">
                  {careerGoals.filter(g => g.domain === 'software').map(g => (
                    <option key={g.id} value={g.id}>{g.title} ({g.salary})</option>
                  ))}
                </optgroup>
                <optgroup label="📈 Product, Growth & Finance">
                  {careerGoals.filter(g => g.domain === 'product').map(g => (
                    <option key={g.id} value={g.id}>{g.title} ({g.salary})</option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Visual Role Cards Grid (Scrollable) */}
            <div className="max-h-48 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
              {filteredGoals.map((goal) => {
                const isSelected = targetRoleId === goal.id;
                return (
                  <div
                    key={goal.id}
                    onClick={() => setTargetRoleId(goal.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-400 text-white shadow-md shadow-blue-500/15'
                        : 'bg-slate-950/60 border-white/[0.06] text-slate-300 hover:border-white/[0.2] hover:bg-slate-900/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs sm:text-sm text-white">{goal.title}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/[0.06] text-slate-400 font-medium">
                          {goal.domainLabel}
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-medium mt-0.5 block">
                        {goal.salary} • {goal.demand}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <span className="text-[11px] font-bold text-blue-400 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Selected
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500">Select</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Current Experience Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  'Student / Recent Graduate',
                  '0-2 years (Entry)',
                  '3-5 years (Mid)',
                  'Switching Careers',
                ].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setExperienceLevel(lvl)}
                    className={`text-xs p-2.5 rounded-xl border text-center transition-all ${
                      experienceLevel === lvl
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                        : 'bg-slate-950/50 border-white/[0.08] text-slate-400 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  // Seed selected skills with top recommended skills for this career goal
                  setSelectedSkills(currentGoal.recommendedSkills.slice(0, 3));
                  setStep(2);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
              >
                <span>Continue to Skills ({currentGoal.title})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Skill Selection */}
        {step === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Target: {currentGoal.title}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                  {currentGoal.salary}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Select Your Existing Skills
              </h3>
              <p className="text-xs text-slate-400">
                Tap the tools, frameworks, and methodologies you currently know or are learning.
              </p>
            </div>

            {/* Dynamically Calibrated Skills */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-300 block">
                Recommended Core Skills for {currentGoal.title}:
              </span>
              <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto p-1 scrollbar-thin">
                {currentGoal.recommendedSkills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                          : 'bg-slate-950/70 text-slate-300 border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                      <span>{skill}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] text-xs text-slate-400">
              Selected <span className="font-bold text-blue-400">{selectedSkills.length} competencies</span>. The neural model will benchmark these against {currentGoal.title} hiring requirements.
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white"
              >
                ← Back to Goals
              </button>

              <button
                type="button"
                onClick={handleRunAssessment}
                disabled={isCalculating}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Mapping Trajectory for {currentGoal.title}...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Calculate Intelligence Match</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Live Assessment Output */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/25">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Calibration Complete
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {currentGoal.title} Trajectory Mapped!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Market Band: <strong className="text-emerald-400 font-semibold">{currentGoal.salary}</strong> • {currentGoal.demand}
              </p>
            </div>

            {/* Metric Overview */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.08]">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Computed Match
                </span>
                <p className="text-3xl font-black text-blue-400">{calculatedMatch}%</p>
                <span className="text-[10px] text-emerald-400">Competitive candidate baseline</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.08]">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Gap Closure Time
                </span>
                <p className="text-3xl font-black text-white">~4-6 wks</p>
                <span className="text-[10px] text-indigo-300">At 10-12 hrs / week pace</span>
              </div>
            </div>

            {/* Tailored Recommended Priority Milestones */}
            <div className="text-left p-4 rounded-2xl bg-slate-950/60 border border-white/[0.06]">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Recommended Priority Milestones for {currentGoal.title}:
              </span>
              <ul className="text-xs text-slate-300 space-y-2">
                {currentGoal.milestones.map((m, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  if (onSelectRole) {
                    onSelectRole(currentGoal.id);
                  }
                  onClose();
                  const el = document.getElementById('course-suggestions');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.hash = 'course-suggestions';
                  }
                }}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25"
                id="access-role-roadmap-btn"
              >
                Access {currentGoal.title} Roadmap & Courses
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl text-sm font-medium text-slate-400 hover:text-white border border-white/[0.08]"
              >
                Change Career Goal
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
