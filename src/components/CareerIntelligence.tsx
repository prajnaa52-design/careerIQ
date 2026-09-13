import React, { useState } from 'react';
import { 
  BarChart3, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle,
  ArrowUpRight,
  PieChart,
  Zap,
  ArrowRight,
  Database,
  Cpu,
  Cloud,
  Briefcase,
  LineChart,
  DollarSign,
  Grid,
  Maximize2
} from 'lucide-react';

interface CareerIntelligenceProps {
  onOpenAssessment?: () => void;
}

type RoleKey = 
  | 'data' 
  | 'bi' 
  | 'business' 
  | 'finance' 
  | 'growth' 
  | 'product' 
  | 'data-eng' 
  | 'ml' 
  | 'fullstack' 
  | 'devops';

type CategoryKey = 'all' | 'analytics' | 'business' | 'engineering' | 'ai' | 'product';

interface RoleDetail {
  id: RoleKey;
  title: string;
  category: string;
  categoryKey: CategoryKey;
  matchScore: number;
  readinessScore: number;
  salaryRange: string;
  openJobs: string;
  demandGrowth: string;
  badge: string;
  topGap: string;
  strongestSkills: { name: string; score: number; benchmark: number }[];
  skillGaps: { name: string; level: string; boost: string }[];
  radarMetrics: { metric: string; user: number; market: number }[];
}

export const CareerIntelligence: React.FC<CareerIntelligenceProps> = ({ onOpenAssessment }) => {
  const [selectedRole, setSelectedRole] = useState<RoleKey>('data');
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [viewMode, setViewMode] = useState<'deepdive' | 'compare'>('deepdive');

  const roleData: Record<RoleKey, RoleDetail> = {
    data: {
      id: 'data',
      title: 'Data Analyst',
      category: 'Analytics & BI',
      categoryKey: 'analytics',
      matchScore: 91,
      readinessScore: 74,
      salaryRange: '$82,000 - $115,000',
      openJobs: '14,280 active positions',
      demandGrowth: '+28% YoY',
      badge: 'Highest Match',
      topGap: 'Advanced SQL (Window Functions)',
      strongestSkills: [
        { name: 'Excel (Advanced Modeling)', score: 92, benchmark: 85 },
        { name: 'Python (Pandas / NumPy)', score: 78, benchmark: 70 },
        { name: 'Communication & Storytelling', score: 85, benchmark: 80 },
        { name: 'Data Visualization (Tableau)', score: 72, benchmark: 65 },
      ],
      skillGaps: [
        { name: 'Advanced SQL (Window functions, CTEs)', level: 'Priority High', boost: '+9%' },
        { name: 'Power BI (DAX queries)', level: 'Priority Medium', boost: '+7%' },
        { name: 'Applied Statistics & A/B Testing', level: 'Priority Medium', boost: '+5%' },
      ],
      radarMetrics: [
        { metric: 'Data Wrangling', user: 88, market: 80 },
        { metric: 'Statistical Analysis', user: 64, market: 85 },
        { metric: 'Dashboard Design', user: 70, market: 82 },
        { metric: 'Business Context', user: 85, market: 75 },
        { metric: 'Query Optimization', user: 58, market: 80 },
      ]
    },
    bi: {
      id: 'bi',
      title: 'Business Intelligence Engineer',
      category: 'Analytics & BI',
      categoryKey: 'analytics',
      matchScore: 88,
      readinessScore: 72,
      salaryRange: '$94,000 - $130,000',
      openJobs: '11,400 active positions',
      demandGrowth: '+34% YoY',
      badge: 'High Salary ROI',
      topGap: 'Star Schema Dimensional Modeling',
      strongestSkills: [
        { name: 'Dashboard Design (Power BI)', score: 86, benchmark: 82 },
        { name: 'SQL Query Construction', score: 84, benchmark: 80 },
        { name: 'Data Pipeline Scripting', score: 76, benchmark: 75 },
        { name: 'Executive Presentation', score: 82, benchmark: 78 },
      ],
      skillGaps: [
        { name: 'Star Schema & Snowflake Modeling', level: 'Priority High', boost: '+10%' },
        { name: 'Advanced DAX Time Intelligence', level: 'Priority High', boost: '+8%' },
        { name: 'Automated ELT Pipeline Schedulers', level: 'Priority Medium', boost: '+6%' },
      ],
      radarMetrics: [
        { metric: 'Data Modeling', user: 70, market: 86 },
        { metric: 'DAX Calculations', user: 65, market: 84 },
        { metric: 'SQL Pipelines', user: 82, market: 85 },
        { metric: 'Executive BI', user: 84, market: 80 },
        { metric: 'Data Warehousing', user: 62, market: 82 },
      ]
    },
    business: {
      id: 'business',
      title: 'Business Analyst',
      category: 'Business & Strategy',
      categoryKey: 'business',
      matchScore: 84,
      readinessScore: 79,
      salaryRange: '$88,000 - $122,000',
      openJobs: '18,650 active positions',
      demandGrowth: '+22% YoY',
      badge: 'Most Open Positions',
      topGap: 'Requirements Documentation (BRD/PRD)',
      strongestSkills: [
        { name: 'Communication & Stakeholder Mgmt', score: 94, benchmark: 85 },
        { name: 'Excel (Financial Modeling)', score: 92, benchmark: 80 },
        { name: 'Process Flow (BPMN / Agile)', score: 76, benchmark: 70 },
        { name: 'Python (Exploratory Data Analysis)', score: 78, benchmark: 60 },
      ],
      skillGaps: [
        { name: 'Requirements Documentation (BRD/PRD)', level: 'Priority High', boost: '+8%' },
        { name: 'Enterprise ERP Fundamentals', level: 'Priority Medium', boost: '+5%' },
        { name: 'Cost-Benefit Analysis', level: 'Priority Low', boost: '+4%' },
      ],
      radarMetrics: [
        { metric: 'Stakeholder Strategy', user: 92, market: 85 },
        { metric: 'Financial Analysis', user: 78, market: 80 },
        { metric: 'Process Mapping', user: 74, market: 82 },
        { metric: 'Data Literacy', user: 82, market: 70 },
        { metric: 'Agile Ceremonies', user: 80, market: 85 },
      ]
    },
    finance: {
      id: 'finance',
      title: 'Financial Data Analyst',
      category: 'Business & Strategy',
      categoryKey: 'business',
      matchScore: 82,
      readinessScore: 76,
      salaryRange: '$85,000 - $120,000',
      openJobs: '12,300 active positions',
      demandGrowth: '+19% YoY',
      badge: 'Corporate Finance',
      topGap: 'DCF & Three-Statement Modeling',
      strongestSkills: [
        { name: 'Financial Statement Modeling', score: 88, benchmark: 82 },
        { name: 'Advanced Excel & Macros', score: 92, benchmark: 85 },
        { name: 'Variance Analysis', score: 80, benchmark: 78 },
        { name: 'Python for Risk Scoring', score: 74, benchmark: 65 },
      ],
      skillGaps: [
        { name: 'Discounted Cash Flow (DCF) Valuation', level: 'Priority High', boost: '+9%' },
        { name: 'SQL for Financial Ledger Systems', level: 'Priority Medium', boost: '+6%' },
        { name: 'Bloomberg / Refinitiv Terminal Tools', level: 'Priority Low', boost: '+4%' },
      ],
      radarMetrics: [
        { metric: 'Financial Modeling', user: 86, market: 85 },
        { metric: 'Risk Forecasting', user: 72, market: 82 },
        { metric: 'SQL Accounting', user: 68, market: 80 },
        { metric: 'Variance Reporting', user: 82, market: 78 },
        { metric: 'Quantitative Math', user: 80, market: 75 },
      ]
    },
    growth: {
      id: 'growth',
      title: 'Growth & Marketing Analyst',
      category: 'Product & Growth',
      categoryKey: 'product',
      matchScore: 80,
      readinessScore: 71,
      salaryRange: '$82,000 - $118,000',
      openJobs: '8,900 active positions',
      demandGrowth: '+25% YoY',
      badge: 'High Conversion Focus',
      topGap: 'Multi-Touch Attribution Modeling',
      strongestSkills: [
        { name: 'A/B Testing & Hypothesis Testing', score: 82, benchmark: 75 },
        { name: 'Funnel Drop-Off Analysis', score: 80, benchmark: 74 },
        { name: 'Customer Acquisition Cost (CAC) Modeling', score: 78, benchmark: 70 },
        { name: 'Python Segmentation (K-Means)', score: 74, benchmark: 65 },
      ],
      skillGaps: [
        { name: 'Multi-Touch Attribution Modeling', level: 'Priority High', boost: '+10%' },
        { name: 'Google Analytics 4 & BigQuery Export', level: 'Priority Medium', boost: '+7%' },
        { name: 'Cohort Retention Modeling', level: 'Priority Medium', boost: '+5%' },
      ],
      radarMetrics: [
        { metric: 'Experimentation', user: 82, market: 80 },
        { metric: 'Attribution Math', user: 64, market: 82 },
        { metric: 'Cohort Retention', user: 72, market: 80 },
        { metric: 'SQL Event Queries', user: 74, market: 78 },
        { metric: 'CAC / LTV Analysis', user: 80, market: 75 },
      ]
    },
    product: {
      id: 'product',
      title: 'Product Analyst',
      category: 'Product & Growth',
      categoryKey: 'product',
      matchScore: 78,
      readinessScore: 68,
      salaryRange: '$95,000 - $130,000',
      openJobs: '9,420 active positions',
      demandGrowth: '+31% YoY',
      badge: 'Product Led',
      topGap: 'Mixpanel / Amplitude Event Streaming',
      strongestSkills: [
        { name: 'User Metrics & Cohort Analysis', score: 81, benchmark: 75 },
        { name: 'Python (Automated Scripting)', score: 78, benchmark: 70 },
        { name: 'Communication & Presentation', score: 85, benchmark: 80 },
        { name: 'Excel (Pivot & Lookups)', score: 92, benchmark: 75 },
      ],
      skillGaps: [
        { name: 'Mixpanel / Amplitude Analytics', level: 'Priority High', boost: '+11%' },
        { name: 'Product Experimentation & CRO', level: 'Priority High', boost: '+8%' },
        { name: 'SQL for Event Streaming', level: 'Priority Medium', boost: '+6%' },
      ],
      radarMetrics: [
        { metric: 'Funnel Optimization', user: 65, market: 85 },
        { metric: 'Feature Analytics', user: 72, market: 80 },
        { metric: 'SQL Pipelines', user: 60, market: 85 },
        { metric: 'Hypothesis Testing', user: 68, market: 82 },
        { metric: 'Cross-functional Comms', user: 86, market: 78 },
      ]
    },
    'data-eng': {
      id: 'data-eng',
      title: 'Data Engineer',
      category: 'Engineering & Cloud',
      categoryKey: 'engineering',
      matchScore: 75,
      readinessScore: 64,
      salaryRange: '$112,000 - $155,000',
      openJobs: '16,800 active positions',
      demandGrowth: '+38% YoY',
      badge: 'High Technical Demand',
      topGap: 'Apache Spark & Distributed Pipelines',
      strongestSkills: [
        { name: 'Relational Schema Design & SQL', score: 85, benchmark: 80 },
        { name: 'Python Scripting & Automation', score: 80, benchmark: 78 },
        { name: 'Git & Version Control', score: 78, benchmark: 75 },
        { name: 'Database Indexing Basics', score: 74, benchmark: 72 },
      ],
      skillGaps: [
        { name: 'Distributed Compute (Apache Spark)', level: 'Priority High', boost: '+12%' },
        { name: 'Airflow / dbt Workflow Orchestration', level: 'Priority High', boost: '+9%' },
        { name: 'Cloud Data Lakes (Snowflake / S3)', level: 'Priority Medium', boost: '+7%' },
      ],
      radarMetrics: [
        { metric: 'Distributed Systems', user: 55, market: 86 },
        { metric: 'Data Warehousing', user: 68, market: 84 },
        { metric: 'Pipeline Orchestration', user: 60, market: 82 },
        { metric: 'SQL Tuning', user: 82, market: 85 },
        { metric: 'Cloud Infrastructure', user: 58, market: 80 },
      ]
    },
    ml: {
      id: 'ml',
      title: 'Machine Learning / AI Engineer',
      category: 'AI & Data Science',
      categoryKey: 'ai',
      matchScore: 72,
      readinessScore: 58,
      salaryRange: '$128,000 - $175,000',
      openJobs: '21,500 active positions',
      demandGrowth: '+45% YoY',
      badge: 'Fastest Growing Tech',
      topGap: 'PyTorch Deep Learning & LLM Fine-Tuning',
      strongestSkills: [
        { name: 'Python Core & Vectorization', score: 82, benchmark: 80 },
        { name: 'Linear Algebra & Statistics', score: 78, benchmark: 82 },
        { name: 'Scikit-Learn Regression & Trees', score: 76, benchmark: 78 },
        { name: 'Analytical Problem Framing', score: 84, benchmark: 75 },
      ],
      skillGaps: [
        { name: 'Deep Learning with PyTorch & Autograd', level: 'Priority High', boost: '+14%' },
        { name: 'LLM Fine-Tuning (PEFT / LoRA)', level: 'Priority High', boost: '+11%' },
        { name: 'Model Serving & vLLM Infrastructure', level: 'Priority Medium', boost: '+8%' },
      ],
      radarMetrics: [
        { metric: 'Deep Learning Math', user: 60, market: 88 },
        { metric: 'PyTorch Architecture', user: 52, market: 86 },
        { metric: 'Classical ML', user: 74, market: 82 },
        { metric: 'Feature Engineering', user: 72, market: 80 },
        { metric: 'MLOps Serving', user: 48, market: 84 },
      ]
    },
    fullstack: {
      id: 'fullstack',
      title: 'Full-Stack Software Engineer',
      category: 'Engineering & Cloud',
      categoryKey: 'engineering',
      matchScore: 70,
      readinessScore: 62,
      salaryRange: '$105,000 - $148,000',
      openJobs: '24,100 active positions',
      demandGrowth: '+29% YoY',
      badge: 'Broadest Market Fit',
      topGap: 'Production REST/GraphQL Backend Microservices',
      strongestSkills: [
        { name: 'Algorithm Fundamentals & Python', score: 82, benchmark: 75 },
        { name: 'SQL & Database Querying', score: 84, benchmark: 78 },
        { name: 'Frontend React / UI State', score: 72, benchmark: 78 },
        { name: 'Git Workflow & Collaboration', score: 80, benchmark: 76 },
      ],
      skillGaps: [
        { name: 'Scalable Node / Python Microservices', level: 'Priority High', boost: '+11%' },
        { name: 'PostgreSQL Connection Pooling & ORMs', level: 'Priority Medium', boost: '+8%' },
        { name: 'System Design & High Concurrency', level: 'Priority Medium', boost: '+7%' },
      ],
      radarMetrics: [
        { metric: 'Backend Architecture', user: 62, market: 85 },
        { metric: 'Frontend React', user: 70, market: 82 },
        { metric: 'API Protocols', user: 66, market: 84 },
        { metric: 'Database Scaling', user: 72, market: 80 },
        { metric: 'System Design', user: 54, market: 82 },
      ]
    },
    devops: {
      id: 'devops',
      title: 'Cloud & DevOps Engineer',
      category: 'Engineering & Cloud',
      categoryKey: 'engineering',
      matchScore: 67,
      readinessScore: 55,
      salaryRange: '$110,000 - $150,000',
      openJobs: '15,200 active positions',
      demandGrowth: '+33% YoY',
      badge: 'Infrastructure Focus',
      topGap: 'Kubernetes Cluster Orchestration & Terraform',
      strongestSkills: [
        { name: 'Linux Command Line & Bash Basics', score: 76, benchmark: 80 },
        { name: 'Python System Scripting', score: 80, benchmark: 72 },
        { name: 'Git CI/CD Pipeline Basics', score: 74, benchmark: 75 },
        { name: 'Networking Protocols (TCP/IP, DNS)', score: 70, benchmark: 78 },
      ],
      skillGaps: [
        { name: 'Kubernetes & Helm Chart Deployment', level: 'Priority High', boost: '+13%' },
        { name: 'Infrastructure as Code (Terraform)', level: 'Priority High', boost: '+10%' },
        { name: 'Prometheus & Grafana Observability', level: 'Priority Medium', boost: '+7%' },
      ],
      radarMetrics: [
        { metric: 'Containerization', user: 65, market: 86 },
        { metric: 'Kubernetes Clusters', user: 50, market: 85 },
        { metric: 'Infrastructure as Code', user: 52, market: 84 },
        { metric: 'CI/CD Automation', user: 70, market: 82 },
        { metric: 'Site Reliability (SRE)', user: 48, market: 80 },
      ]
    }
  };

  const categories = [
    { key: 'all' as CategoryKey, label: 'All Opportunities', count: 10 },
    { key: 'analytics' as CategoryKey, label: 'Analytics & BI', count: 2 },
    { key: 'business' as CategoryKey, label: 'Business & Strategy', count: 2 },
    { key: 'engineering' as CategoryKey, label: 'Engineering & Cloud', count: 3 },
    { key: 'ai' as CategoryKey, label: 'AI & Data Science', count: 1 },
    { key: 'product' as CategoryKey, label: 'Product & Growth', count: 2 },
  ];

  const filteredRoles = Object.values(roleData).filter(
    r => selectedCategory === 'all' || r.categoryKey === selectedCategory
  );

  const current = roleData[selectedRole];

  return (
    <section id="career-intelligence" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5" />
            Continuous Market Calibration across 10 Tech Careers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
            Not just recommendations.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Complete career market intelligence.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            CareerIQ benchmarks your skill graph against real-time market data across 10 high-growth roles, exposing where you match today and the exact gaps to close.
          </p>
        </div>

        {/* Category Filters Bar & View Switcher */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/[0.08] backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  // Ensure active role is within filtered set
                  const validRoles = Object.values(roleData).filter(
                    r => cat.key === 'all' || r.categoryKey === cat.key
                  );
                  if (validRoles.length > 0 && !validRoles.some(r => r.id === selectedRole)) {
                    setSelectedRole(validRoles[0].id);
                  }
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.key ? 'bg-white/20 text-white' : 'bg-white/[0.06] text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Single Role Deep-Dive vs Compare All 10 Roles */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/[0.08] self-start md:self-auto">
            <button
              onClick={() => setViewMode('deepdive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'deepdive'
                  ? 'bg-blue-600/30 border border-blue-500/40 text-blue-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Deep-Dive View</span>
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'compare'
                  ? 'bg-blue-600/30 border border-blue-500/40 text-blue-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Compare All 10 Roles</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Single Role Deep Dive Dashboard */}
        {viewMode === 'deepdive' ? (
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-[#0A0F1D]/95 border border-white/[0.12] backdrop-blur-2xl shadow-2xl shadow-blue-950/40">
            
            {/* Header & Horizontal Scrollable Role Switcher */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08] mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Active Career Profile
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5 flex items-center gap-2">
                  <span>Target Role Analytics</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {filteredRoles.length} Matching Roles Found
                  </span>
                </h3>
              </div>

              {/* Dynamic Scrollable Role Pills */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-white/[0.08] w-full lg:w-auto overflow-x-auto scrollbar-none pb-2 sm:pb-1.5">
                {filteredRoles.map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2 shrink-0 ${
                        isSelected
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{role.title}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-white/[0.06] text-blue-400'
                      }`}>
                        {role.matchScore}%
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Top 4 Key Metric Cards Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Career Match
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">
                  {current.matchScore}%
                </p>
                <span className="text-[11px] text-emerald-400 font-medium">
                  {current.matchScore >= 80 ? 'Top 5% candidate fit' : 'High growth trajectory'}
                </span>
              </div>

              <div className="rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06]">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Career Readiness
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {current.readinessScore} <span className="text-base text-slate-500 font-normal">/ 100</span>
                </p>
                <span className="text-[11px] text-slate-400 font-medium">
                  +{100 - current.readinessScore} pts needed for mastery
                </span>
              </div>

              <div className="rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06]">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Estimated Salary
                </span>
                <p className="text-lg sm:text-xl font-bold text-white mt-1 truncate">
                  {current.salaryRange}
                </p>
                <span className="text-[11px] text-emerald-400 font-medium">{current.demandGrowth}</span>
              </div>

              <div className="rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06]">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Market Liquidity
                </span>
                <p className="text-lg sm:text-xl font-bold text-white mt-1 truncate">
                  {current.openJobs}
                </p>
                <span className="text-[11px] text-blue-400 font-medium">Hiring surge this month</span>
              </div>
            </div>

            {/* Deep Analytics: Skills vs Market & Gap Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left 7 cols: Strongest Skills & Benchmarks */}
              <div className="lg:col-span-7 rounded-2xl p-6 bg-slate-950/50 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-base font-bold text-white">Your Strongest Skills for {current.title}</h4>
                    <p className="text-xs text-slate-400">Benchmarked against median successful hire profiles</p>
                  </div>
                  <span className="text-xs text-blue-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> Verified High
                  </span>
                </div>

                <div className="space-y-4">
                  {current.strongestSkills.map((skill, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-[11px]">Market benchmark: {skill.benchmark}%</span>
                          <span className="font-bold text-blue-400">{skill.score}%</span>
                        </div>
                      </div>
                      {/* Comparison bar */}
                      <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden relative">
                        {/* Market marker */}
                        <div 
                          className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10" 
                          style={{ left: `${skill.benchmark}%` }}
                        />
                        {/* User score */}
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500" 
                          style={{ width: `${skill.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Radar comparison metrics table */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Competency Spectrum Matrix
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                    {current.radarMetrics.map((r, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <p className="text-[10px] text-slate-400 truncate font-medium mb-1">{r.metric}</p>
                        <p className="text-sm font-bold text-white">{r.user}%</p>
                        <span className="text-[9px] text-slate-500">Target: {r.market}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 5 cols: Skill Gaps & Precision Action */}
              <div className="lg:col-span-5 rounded-2xl p-6 bg-slate-950/50 border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-white">Targeted Skill Gaps</h4>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-semibold text-amber-400">
                      High Impact
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-5">
                    Acquiring these specific competencies unlocks the remaining {100 - current.readinessScore}% readiness score for {current.title}.
                  </p>

                  <div className="space-y-3">
                    {current.skillGaps.map((gap, i) => (
                      <div 
                        key={i} 
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-white/[0.06] hover:border-amber-500/30 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-start gap-2.5">
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors">
                              {gap.name}
                            </p>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {gap.level}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md shrink-0">
                          {gap.boost}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer with Modal Assessment Integration */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-xs text-blue-200 font-medium">
                        Simulate closing these gaps in real-time
                      </span>
                    </div>
                    <a
                      href="#simulator"
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0 ml-2"
                    >
                      Launch <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    onClick={onOpenAssessment}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <span>Calibrate Full Assessment for {current.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* View Mode 2: Compare All 10 Roles Overview Matrix */
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-white/[0.12] backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Comparing All 10 Matching Career Opportunities
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Side-by-side market benchmarks for salary, active open jobs, candidate match, and primary gap.
                </p>
              </div>
              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-colors shrink-0"
              >
                <span>Run Diagnostic Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.values(roleData).map((role) => (
                <div
                  key={role.id}
                  onClick={() => {
                    setSelectedRole(role.id);
                    setViewMode('deepdive');
                  }}
                  className="p-5 rounded-2xl bg-slate-950/70 border border-white/[0.08] hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        {role.category}
                      </span>
                      <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                        {role.matchScore}% Match
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {role.title}
                    </h4>

                    <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Estimated Salary:</span>
                        <span className="font-semibold text-white">{role.salaryRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Market Liquidity:</span>
                        <span className="font-semibold text-blue-300">{role.openJobs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Readiness Score:</span>
                        <span className="font-semibold text-emerald-400">{role.readinessScore}/100</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px]">
                      <span className="text-slate-400 block mb-0.5 font-medium">Top Priority Gap:</span>
                      <span className="text-amber-300 font-semibold truncate block">
                        ⚠️ {role.topGap}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                    <span>Inspect Deep Analytics</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
