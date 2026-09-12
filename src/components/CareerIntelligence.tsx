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
  Zap
} from 'lucide-react';

export const CareerIntelligence: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'data' | 'business' | 'product'>('data');

  const roleData = {
    data: {
      title: 'Data Analyst',
      matchScore: 91,
      readinessScore: 74,
      salaryRange: '$82,000 - $115,000',
      openJobs: '14,280 active positions',
      demandGrowth: '+28% YoY',
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
    business: {
      title: 'Business Analyst',
      matchScore: 84,
      readinessScore: 79,
      salaryRange: '$88,000 - $122,000',
      openJobs: '18,650 active positions',
      demandGrowth: '+22% YoY',
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
    product: {
      title: 'Product Analyst',
      matchScore: 78,
      readinessScore: 68,
      salaryRange: '$95,000 - $130,000',
      openJobs: '9,420 active positions',
      demandGrowth: '+31% YoY',
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
    }
  };

  const current = roleData[selectedRole];

  return (
    <section id="career-intelligence" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            Continuous Market Calibration
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Not just recommendations.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Career intelligence.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            CareerIQ combines your personal profile with real-time career market requirements to understand where you fit — and where you need to grow.
          </p>
        </div>

        {/* Product Analytics Dashboard Container */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-[#0A0F1D]/95 border border-white/[0.12] backdrop-blur-2xl shadow-2xl shadow-blue-950/40">
          
          {/* Role Switcher Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Active Career Profile
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                Target Role Analytics
              </h3>
            </div>

            {/* Switcher Buttons */}
            <div className="flex items-center p-1.5 rounded-2xl bg-slate-950/80 border border-white/[0.08] w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setSelectedRole('data')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedRole === 'data'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Data Analyst (91%)
              </button>
              <button
                onClick={() => setSelectedRole('business')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedRole === 'business'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Business Analyst (84%)
              </button>
              <button
                onClick={() => setSelectedRole('product')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedRole === 'product'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Product Analyst (78%)
              </button>
            </div>
          </div>

          {/* Top Metric Cards Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06]">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Career Match
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">
                {current.matchScore}%
              </p>
              <span className="text-[11px] text-emerald-400 font-medium">Top 5% candidate fit</span>
            </div>

            <div className="rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06]">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Career Readiness
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {current.readinessScore} <span className="text-base text-slate-500 font-normal">/ 100</span>
              </p>
              <span className="text-[11px] text-slate-400 font-medium">+18 pts needed for elite</span>
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
                  <h4 className="text-base font-bold text-white">Your Strongest Skills</h4>
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
                <div className="grid grid-cols-5 gap-2 text-center">
                  {current.radarMetrics.map((r, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
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
                  Acquiring these specific competencies unlocks the remaining 26% readiness score.
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

              {/* Bottom Insight Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
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
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
