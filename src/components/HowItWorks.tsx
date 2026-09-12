import React, { useState } from 'react';
import { UserCheck, BrainCircuit, Compass, MapPin, Sparkles, Check, ChevronRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Build Your Profile',
      subtitle: 'Input your raw credentials',
      icon: UserCheck,
      description: 'Add your education, verified skills, GitHub projects, personal interests, and past career experience in under 2 minutes.',
      pill: 'Comprehensive Input',
      detail: 'Supports resume parsing, GitHub repository analysis, and self-assessment of technical tools.'
    },
    {
      number: '02',
      title: 'AI Understands You',
      subtitle: 'Neural graph mapping',
      icon: BrainCircuit,
      description: 'CareerIQ processes your unique skill fingerprint using ML models benchmarked against 1.2M+ live industry job postings.',
      pill: 'Machine Learning',
      detail: 'Discovers adjacent capabilities and evaluates latent potential beyond formal job titles.'
    },
    {
      number: '03',
      title: 'Discover Your Path',
      subtitle: 'Transparent matching',
      icon: Compass,
      description: 'Get personalized career recommendations with transparent, explainable match scores and market compensation data.',
      pill: 'Predictive Fit',
      detail: 'Every percentage match is mathematically justified with exact matching criteria.'
    },
    {
      number: '04',
      title: 'Build Your Roadmap',
      subtitle: 'Actionable execution',
      icon: MapPin,
      description: 'Receive an automated, step-by-step curriculum for closing your exact skill gaps and landing vetted roles.',
      pill: 'Curated Path',
      detail: 'Dynamic milestones adapt as you complete hands-on projects and verify new skills.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#070B14] border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple 4-Step Intelligence Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            From where you are to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              where you want to be.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Eliminate career uncertainty. In four streamlined steps, CareerIQ transforms scattered credentials into an optimized career trajectory.
          </p>
        </div>

        {/* Steps Grid with Connected Path */}
        <div className="relative">
          
          {/* Desktop Connected Energy Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-12 bg-gradient-to-r from-blue-600/40 via-indigo-500/60 to-violet-600/40 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-b from-slate-900 to-[#0B1120] border-blue-500/50 shadow-xl shadow-blue-500/15 -translate-y-2'
                      : 'bg-slate-900/60 border-white/[0.06] hover:border-white/[0.15] hover:-translate-y-1'
                  } backdrop-blur-xl flex flex-col justify-between`}
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                            : 'bg-white/[0.04] text-slate-400 border border-white/[0.08]'
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-2xl font-black text-slate-600 font-mono">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-400 block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro Detail Pill */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-400">
                      {step.pill}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
