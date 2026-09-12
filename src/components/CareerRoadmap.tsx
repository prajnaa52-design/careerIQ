import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Award, 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  FileCode2, 
  BarChart, 
  Briefcase,
  Flag
} from 'lucide-react';

export const CareerRoadmap: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(2);

  const milestones = [
    {
      id: 0,
      title: 'Today',
      subtitle: 'Starting Point',
      status: 'completed',
      badge: 'Completed',
      percent: '100%',
      icon: CheckCircle2,
      duration: 'Day 0',
      description: 'Profile created with initial college degree and coursework baseline.',
      skills: ['Excel (Core)', 'Python (Basics)'],
    },
    {
      id: 1,
      title: 'Skill Assessment',
      subtitle: 'AI Diagnostic',
      status: 'completed',
      badge: 'Verified',
      percent: '100%',
      icon: CheckCircle2,
      duration: 'Day 1-2',
      description: 'AI calibrated your current skill matrix against 14,000+ active Data Analyst openings.',
      skills: ['Diagnostic Test Passed', 'Gap Map Generated'],
    },
    {
      id: 2,
      title: 'SQL Fundamentals',
      subtitle: 'Core Foundation',
      status: 'in-progress',
      badge: 'In Progress (60%)',
      percent: '60%',
      icon: Clock,
      duration: '2 Weeks',
      description: 'Intermediate querying, window functions (ROW_NUMBER, RANK), Common Table Expressions, and indexing.',
      skills: ['Window Functions', 'CTEs', 'Query Plans'],
    },
    {
      id: 3,
      title: 'Power BI',
      subtitle: 'Business Intelligence',
      status: 'upcoming',
      badge: 'Upcoming',
      percent: '0%',
      icon: Circle,
      duration: '3 Weeks',
      description: 'DAX measures, star schema dimensional modeling, and interactive KPI executive dashboards.',
      skills: ['DAX Calculations', 'Data Modeling', 'Visual Analytics'],
    },
    {
      id: 4,
      title: 'Real-world Project',
      subtitle: 'Applied Hands-On',
      status: 'upcoming',
      badge: 'Upcoming',
      percent: '0%',
      icon: FileCode2,
      duration: '2 Weeks',
      description: 'End-to-end customer churn analysis using SQL pipeline, Python cleansing, and Power BI visualization.',
      skills: ['End-to-End Pipeline', 'Business Value Creation'],
    },
    {
      id: 5,
      title: 'Portfolio',
      subtitle: 'Proof of Competence',
      status: 'upcoming',
      badge: 'Upcoming',
      percent: '0%',
      icon: BarChart,
      duration: '1 Week',
      description: 'Interactive GitHub repository and hosted live dashboard demo for recruiters.',
      skills: ['GitHub Documentation', 'Live Demo Hosting'],
    },
    {
      id: 6,
      title: 'Interview Preparation',
      subtitle: 'Role Readiness',
      status: 'upcoming',
      badge: 'Upcoming',
      percent: '0%',
      icon: Briefcase,
      duration: '1 Week',
      description: 'AI-assisted behavioral & technical mock interviews targeting top hiring partners.',
      skills: ['SQL Live Coding', 'Product Sense Questions'],
    },
    {
      id: 7,
      title: 'JOB READY',
      subtitle: 'Target Met (92%)',
      status: 'target',
      badge: 'Final Goal',
      percent: 'Target',
      icon: Flag,
      duration: 'Hire Stage',
      description: 'Direct candidate introduction to CareerIQ verified tech company hiring partners.',
      skills: ['Active Referrals', 'Fast-Track Interviews'],
    },
  ];

  const active = milestones[selectedMilestone];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-[#070B14] border-t border-white/[0.05]">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Deterministic Career Navigation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Your career shouldn't be a guess.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              It should be a roadmap.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Eliminate trial-and-error. Every milestone is calibrated to close specific skill gaps and take you directly from current student to job-ready candidate.
          </p>
        </div>

        {/* Roadmap Interactive Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900/80 border border-white/[0.08] backdrop-blur-2xl">
          
          {/* Top Progress Bar Timeline */}
          <div className="relative mb-12">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-medium">
              <span>Overall Roadmap Progress</span>
              <span className="font-bold text-blue-400">Phase 3 of 8 • ~6 Weeks Remaining</span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full w-[38%] transition-all duration-500" />
            </div>
          </div>

          {/* Horizontal / Grid Milestones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
            {milestones.map((m) => {
              const isSelected = selectedMilestone === m.id;
              const isCompleted = m.status === 'completed';
              const isInProgress = m.status === 'in-progress';
              const isTarget = m.status === 'target';

              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMilestone(m.id)}
                  className={`p-3 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20 -translate-y-1'
                      : isCompleted
                      ? 'bg-slate-950/70 border-emerald-500/30 hover:border-emerald-500/60'
                      : isInProgress
                      ? 'bg-slate-950/70 border-blue-500/30 hover:border-blue-500/60'
                      : isTarget
                      ? 'bg-slate-950/70 border-violet-500/30 hover:border-violet-500/60'
                      : 'bg-slate-950/40 border-white/[0.05] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      0{m.id + 1}
                    </span>
                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    {isInProgress && <Clock className="w-3.5 h-3.5 text-blue-400 animate-pulse" />}
                    {isTarget && <Flag className="w-3.5 h-3.5 text-violet-400" />}
                    {!isCompleted && !isInProgress && !isTarget && (
                      <Circle className="w-3.5 h-3.5 text-slate-600" />
                    )}
                  </div>

                  <p className="text-xs font-bold text-white leading-tight truncate">
                    {m.title}
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block truncate">
                    {m.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Deep Dive Card */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-950/70 border border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                    active.status === 'completed'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : active.status === 'in-progress'
                      ? 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                      : active.status === 'target'
                      ? 'bg-violet-500/10 border-violet-500/30 text-violet-300'
                      : 'bg-white/[0.05] border-white/[0.1] text-slate-400'
                  }`}
                >
                  {active.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">Estimated Pace: {active.duration}</span>
              </div>

              <h4 className="text-2xl font-bold text-white">{active.title}</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {active.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {active.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <div className="text-right hidden lg:block mr-2">
                <span className="text-xs text-slate-500 block">Milestone Status</span>
                <span className="text-sm font-bold text-white capitalize">{active.status.replace('-', ' ')}</span>
              </div>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25">
                <span>View Learning Syllabus</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
