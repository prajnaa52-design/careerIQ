import React from 'react';
import { GraduationCap, Brain, Compass, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'What You Know',
      icon: GraduationCap,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'group-hover:border-blue-500/40',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      description:
        'Education, degrees, skills, technical projects, certifications, and past experience.',
      features: [
        'Formal & informal course history',
        'Demonstrated GitHub & portfolio projects',
        'Self-taught technical competencies',
        'Industry & internship experience',
      ],
    },
    {
      number: '02',
      title: 'What AI Understands',
      icon: Brain,
      color: 'from-indigo-500/20 to-violet-500/20',
      borderColor: 'group-hover:border-violet-500/40',
      badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      description:
        'Career interests, hidden strengths, critical gaps, cognitive potential, and multi-dimensional skill relationships.',
      features: [
        'Deep skill-market correlation models',
        'Transferable competency mapping',
        'Adjacent skill propensity scoring',
        'Velocity & learning curve forecasting',
      ],
    },
    {
      number: '03',
      title: 'Where You Can Go',
      icon: Compass,
      color: 'from-violet-500/20 to-pink-500/20',
      borderColor: 'group-hover:border-pink-500/40',
      badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      description:
        'High-probability career paths, vetted job opportunities, and tailor-made step-by-step growth plans.',
      features: [
        'Explainable role match percentages',
        'Targeted skill closure recommendations',
        'Direct hiring partner matching',
        'Adaptive milestone progression',
      ],
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Paradigm Shift
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Your degree doesn't define your career.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Your skills do.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Students and professionals often know what they have studied, but not where their skills can take them. CareerIQ bridges this divide with high-precision AI.
          </p>
        </div>

        {/* The 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className={`group relative rounded-3xl p-8 bg-gradient-to-b from-slate-900/90 to-[#0B1120]/90 border border-white/[0.08] ${card.borderColor} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between`}
              >
                {/* Top Subtle Gradient Light */}
                <div className={`absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase font-mono">
                      STEP {card.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-4 border-t border-white/[0.06]">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400/80 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Explore Intelligence Layer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
