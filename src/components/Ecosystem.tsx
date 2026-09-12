import React, { useState } from 'react';
import { 
  User, 
  Cpu, 
  Compass, 
  AlertCircle, 
  BookOpen, 
  FolderGit2, 
  Briefcase, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Ecosystem: React.FC = () => {
  const [activeNode, setActiveNode] = useState(2);

  const nodes = [
    {
      id: 0,
      title: 'Profile',
      icon: User,
      subtitle: 'Raw Credentials',
      description: 'Your verified education, certificates, past internships, and interests mapped into standardized vectors.',
      color: 'blue'
    },
    {
      id: 1,
      title: 'Skills',
      icon: Cpu,
      subtitle: 'Granular Graph',
      description: 'Decomposed competencies with validated proficiencies across tools, frameworks, and domain knowledge.',
      color: 'indigo'
    },
    {
      id: 2,
      title: 'Careers',
      icon: Compass,
      subtitle: 'Target Horizons',
      description: 'Dynamic matching against real market trajectories with explainable readiness percentages.',
      color: 'violet'
    },
    {
      id: 3,
      title: 'Skill Gaps',
      icon: AlertCircle,
      subtitle: 'Precise Differential',
      description: 'Mathematical delta between current capabilities and requirements for high-compensation roles.',
      color: 'amber'
    },
    {
      id: 4,
      title: 'Learning',
      icon: BookOpen,
      subtitle: 'Targeted Curriculum',
      description: 'Bite-sized, high-leverage learning modules directly engineered to bridge verified shortcomings.',
      color: 'emerald'
    },
    {
      id: 5,
      title: 'Projects',
      icon: FolderGit2,
      subtitle: 'Applied Proof',
      description: 'Industry-standard production repositories demonstrating tangible business impact to hiring teams.',
      color: 'cyan'
    },
    {
      id: 6,
      title: 'Jobs',
      icon: Briefcase,
      subtitle: 'Direct Placement',
      description: 'Automated referral and direct placement into vetted tech companies actively seeking your skill profile.',
      color: 'pink'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070B14] border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connected Intelligence Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            The CareerIQ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Ecosystem
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Not isolated features — a continuous, closed-loop machine learning flywheel that transforms learning directly into job offers.
          </p>
        </div>

        {/* Connected Node Network Diagram */}
        <div className="rounded-3xl p-8 sm:p-10 bg-slate-900/70 border border-white/[0.08] backdrop-blur-2xl">
          
          {/* Horizontal Interconnected Node Track */}
          <div className="relative mb-10 overflow-x-auto pb-4">
            
            {/* SVG Connector Wave */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 opacity-30 z-0" />

            <div className="flex items-center justify-between min-w-[700px] relative z-10 gap-3">
              {nodes.map((n) => {
                const Icon = n.icon;
                const isSelected = activeNode === n.id;
                return (
                  <div key={n.id} className="flex flex-col items-center group cursor-pointer" onClick={() => setActiveNode(n.id)}>
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-2 ${
                        isSelected
                          ? 'bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-xl shadow-blue-500/30 scale-110'
                          : 'bg-slate-950 border border-white/[0.1] text-slate-400 group-hover:border-blue-500/40 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold transition-colors ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      {n.title}
                    </span>
                    <span className="text-[10px] text-slate-500 truncate max-w-[80px]">
                      {n.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Node Detail Card */}
          <div className="rounded-2xl p-6 bg-slate-950/80 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono font-bold text-blue-400">
                  NODE {activeNode + 1} OF 7
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400 font-semibold">{nodes[activeNode].subtitle}</span>
              </div>
              <h4 className="text-xl font-bold text-white">{nodes[activeNode].title} Engine</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                {nodes[activeNode].description}
              </p>
            </div>

            <button
              onClick={() => setActiveNode((activeNode + 1) % nodes.length)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/25 hover:bg-blue-500/20 transition-colors shrink-0"
            >
              <span>Next Loop Node</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
