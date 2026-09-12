import React, { useState } from 'react';
import { 
  Check, 
  AlertTriangle, 
  X, 
  Sparkles, 
  ArrowRight, 
  Info, 
  Clock, 
  TrendingUp,
  Target
} from 'lucide-react';

export const SkillGap: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(2); // Default to SQL

  const skills = [
    {
      name: 'Excel',
      category: 'Data Analysis',
      userStatus: 'check',
      userLabel: 'YOU ✓',
      requiredLabel: 'REQUIRED ✓',
      score: 92,
      tag: 'Mastered',
      details: 'Advanced Formulas, PivotTables, Power Pivot, and nested Lookups fully verified.',
      impact: 'Core prerequisite satisfied',
      hoursToBridge: '0h',
      color: 'emerald'
    },
    {
      name: 'Python',
      category: 'Programming',
      userStatus: 'check',
      userLabel: 'YOU ✓',
      requiredLabel: 'REQUIRED ✓',
      score: 78,
      tag: 'Proficient',
      details: 'Data manipulation with Pandas, NumPy, and basic data cleaning scripts.',
      impact: 'Strong baseline for data automation',
      hoursToBridge: '0h',
      color: 'emerald'
    },
    {
      name: 'SQL',
      category: 'Database Querying',
      userStatus: 'warning',
      userLabel: 'YOU ⚠',
      requiredLabel: 'REQUIRED ✓',
      score: 61,
      tag: 'Foundational',
      details: 'Knows SELECT, GROUP BY, and simple JOINs. Missing Window Functions (OVER, PARTITION BY) and CTE optimizations.',
      impact: '+8% Career Match once leveled up',
      hoursToBridge: '~14 hours',
      color: 'amber'
    },
    {
      name: 'Power BI',
      category: 'Business Intelligence',
      userStatus: 'cross',
      userLabel: 'YOU ✕',
      requiredLabel: 'REQUIRED ✓',
      score: 18,
      tag: 'Missing',
      details: 'No verified projects or reports. Role requires interactive executive dashboards, DAX measures, and data modeling.',
      impact: '+12% Career Match once acquired',
      hoursToBridge: '~20 hours',
      color: 'rose'
    },
    {
      name: 'Statistics',
      category: 'Quantitative Analysis',
      userStatus: 'warning',
      userLabel: 'YOU ⚠',
      requiredLabel: 'REQUIRED ✓',
      score: 54,
      tag: 'Intermediate',
      details: 'Comfortable with descriptive metrics. Needs hypothesis testing, p-values, regression analysis, and sample sizing.',
      impact: '+6% Career Match once leveled up',
      hoursToBridge: '~10 hours',
      color: 'amber'
    }
  ];

  const activeSkill = hoveredSkill !== null ? skills[hoveredSkill] : skills[2];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070B14] border-t border-white/[0.05]">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[450px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Target className="w-3.5 h-3.5" />
            Precision Differential Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            See the gap.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Close the gap.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Know exactly what stands between your current skills and your target career. Hover over any skill to see exact learning hours and impact.
          </p>
        </div>

        {/* Comparison Grid & Interactive Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table / Cards: Your Skills vs Required Skills */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <h3 className="text-lg font-bold text-white">Your Skills vs Required Skills</h3>
              <span className="text-xs text-slate-400 font-medium">Target: Data Analyst</span>
            </div>

            <div className="space-y-3">
              {skills.map((skill, index) => {
                const isHovered = hoveredSkill === index;
                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(index)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isHovered
                        ? 'bg-slate-800/90 border-blue-500/40 shadow-lg shadow-blue-500/10'
                        : 'bg-slate-950/40 border-white/[0.05] hover:bg-slate-950/70 hover:border-white/[0.12]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Status Icon */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          skill.userStatus === 'check'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : skill.userStatus === 'warning'
                            ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                            : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {skill.userStatus === 'check' && <Check className="w-5 h-5" />}
                        {skill.userStatus === 'warning' && <AlertTriangle className="w-4 h-4" />}
                        {skill.userStatus === 'cross' && <X className="w-5 h-5" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm sm:text-base">{skill.name}</span>
                          <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400">
                            {skill.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{skill.tag}</p>
                      </div>
                    </div>

                    {/* Right side: Badge comparisons */}
                    <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-center">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                          skill.userStatus === 'check'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                            : skill.userStatus === 'warning'
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                            : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                        }`}
                      >
                        {skill.userLabel}
                      </span>
                      <span className="text-slate-600 text-xs font-bold">/</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300">
                        {skill.requiredLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Readiness Summary */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400 font-medium">Current Baseline</p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-white">Current Career Readiness:</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-400">64%</span>
                </div>
              </div>

              <a
                href="#simulator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Recommended next steps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Card: Dynamic Skill Gap Deep Dive */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-[#0B1120] border border-blue-500/30 shadow-xl shadow-blue-900/20 backdrop-blur-xl sticky top-28">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                Skill Diagnostic Inspector
              </span>
              <Info className="w-4 h-4 text-blue-400" />
            </div>

            <h4 className="text-2xl font-bold text-white mb-1">{activeSkill.name}</h4>
            <p className="text-xs text-slate-400 mb-6">{activeSkill.category} Module Analysis</p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/[0.06]">
                <span className="text-xs font-medium text-slate-400 block mb-1">Diagnostic Detail</span>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {activeSkill.details}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Est. Time</span>
                  </div>
                  <p className="text-base font-bold text-white">{activeSkill.hoursToBridge}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Impact Score</span>
                  </div>
                  <p className="text-xs font-bold text-emerald-400">{activeSkill.impact}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-xs text-blue-300 leading-relaxed">
                💡 <strong className="text-white">AI Suggestion:</strong> Prioritize {activeSkill.name} first to experience the fastest leap in recruiter search visibility.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
