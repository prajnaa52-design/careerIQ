import React, { useState } from 'react';
import { 
  GraduationCap, 
  Brain, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Award,
  BarChart,
  Target,
  Check,
  RotateCcw
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenAssessment?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenAssessment }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedBackground, setSelectedBackground] = useState<string>('Computer Science / STEM');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Python', 'SQL', 'Git']);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const backgrounds = [
    'Computer Science / STEM',
    'Business & Analytics',
    'Self-Taught / Bootcamp',
    'Career Switcher / Non-Tech'
  ];

  const toggleableSkills = [
    'Python',
    'SQL',
    'React',
    'Machine Learning',
    'AWS / Cloud',
    'Excel & BI',
    'Docker',
    'Statistics'
  ];

  const handleToggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      if (selectedSkills.length > 1) {
        setSelectedSkills(selectedSkills.filter(s => s !== skill));
      }
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleNextStep = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setActiveStep(prev => (prev < 2 ? prev + 1 : 0));
    }, 400);
  };

  const cards = [
    {
      number: '01',
      title: 'What You Know',
      icon: GraduationCap,
      color: 'from-blue-500/20 to-cyan-500/20',
      activeBorder: 'border-blue-400 shadow-blue-500/20',
      glowColor: 'bg-blue-500/15',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      description:
        'Education, degrees, skills, technical projects, certifications, and past experience.',
      features: [
        'Formal & informal course history',
        'Demonstrated GitHub & portfolio projects',
        'Self-taught technical competencies',
        'Industry & internship experience',
      ],
      interactivePrompt: 'Configure Your Credentials'
    },
    {
      number: '02',
      title: 'What AI Understands',
      icon: Brain,
      color: 'from-indigo-500/20 to-violet-500/20',
      activeBorder: 'border-indigo-400 shadow-indigo-500/20',
      glowColor: 'bg-indigo-500/15',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      description:
        'Career interests, hidden strengths, critical gaps, cognitive potential, and multi-dimensional skill relationships.',
      features: [
        'Deep skill-market correlation models',
        'Transferable competency mapping',
        'Adjacent skill propensity scoring',
        'Velocity & learning curve forecasting',
      ],
      interactivePrompt: 'View Neural Graph Diagnostics'
    },
    {
      number: '03',
      title: 'Where You Can Go',
      icon: Compass,
      color: 'from-violet-500/20 to-pink-500/20',
      activeBorder: 'border-violet-400 shadow-violet-500/20',
      glowColor: 'bg-violet-500/15',
      badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      description:
        'High-probability career paths, vetted job opportunities, and tailor-made step-by-step growth plans.',
      features: [
        'Explainable role match percentages',
        'Targeted skill closure recommendations',
        'Direct hiring partner matching',
        'Adaptive milestone progression',
      ],
      interactivePrompt: 'View Executable Implementation Plan'
    },
  ];

  // Dynamic calculations based on selected background and skills
  const skillCount = selectedSkills.length;
  const matchPercentage = Math.min(96, 68 + skillCount * 4);
  const salaryBaseline = 60000 + skillCount * 4500;
  const salaryTarget = 92000 + skillCount * 6500;

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            The 3-Step Intelligence Framework
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
            Your degree doesn't define your career.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Your step-by-step implementation does.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Most students and professionals know what they have studied, but not where their exact skill graph can take them. Explore how CareerIQ transforms raw credentials into an executable, high-conviction career plan.
          </p>
        </div>

        {/* 3 Step Cards with Connected Energy Pipeline */}
        <div className="relative mb-12">
          
          {/* Desktop Connected Energy Pipeline Line */}
          <div className="hidden md:block absolute top-[72px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/30 via-indigo-500/50 to-violet-500/30 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={card.number}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer group relative rounded-3xl p-7 lg:p-8 bg-gradient-to-b from-slate-900/95 to-[#0B1120]/95 border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? `${card.activeBorder} shadow-2xl ${card.glowColor} -translate-y-2 ring-2 ring-blue-500/30`
                      : 'border-white/[0.08] hover:border-white/[0.2] hover:-translate-y-1'
                  } backdrop-blur-xl`}
                >
                  {/* Active Indicator Top Pulse */}
                  {isActive && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-blue-600 text-white shadow-lg shadow-blue-500/40 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      Active Phase
                    </div>
                  )}

                  <div>
                    {/* Card Header: Step & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-extrabold tracking-widest font-mono px-2.5 py-1 rounded-md border ${
                          isActive
                            ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                            : 'bg-white/[0.04] text-slate-400 border-white/[0.08]'
                        }`}>
                          STEP {card.number}
                        </span>
                      </div>

                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-110'
                          : 'bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:scale-105'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2.5 tracking-tight group-hover:text-blue-200 transition-colors">
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
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'
                          }`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Trigger Button */}
                  <div className={`mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold ${
                    isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    <span>{card.interactivePrompt}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'translate-x-1 text-blue-400' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Interactive Implementation Simulator Drawer */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-slate-900/90 via-[#0B1120] to-[#070B14] border border-blue-500/30 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Stepper Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Live Implementation Pipeline Preview</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    Step 0{activeStep + 1} of 03
                  </span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Simulate how your background flows through CareerIQ's neural calibration into a verified execution plan.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep(0)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-colors"
              >
                Reset Flow
              </button>
              <button
                onClick={handleNextStep}
                disabled={isSimulating}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 transition-all"
              >
                <span>{activeStep === 2 ? 'Restart Pipeline' : 'Proceed to Next Step'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step 01 Drawer: Input Studio */}
          {activeStep === 0 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Phase 1: Input Credential Mapping
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  Select Your Current Baseline & Skills
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  CareerIQ doesn't just look at formal credentials. We ingest degrees, self-taught tooling, and GitHub repositories.
                </p>
              </div>

              {/* Background Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 block">
                  1. Current Educational / Career Baseline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {backgrounds.map((bg) => {
                    const isSelected = selectedBackground === bg;
                    return (
                      <button
                        key={bg}
                        onClick={() => setSelectedBackground(bg)}
                        className={`p-3.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-400 text-white shadow-md shadow-blue-500/20 ring-1 ring-blue-500/30'
                            : 'bg-slate-950/60 border-white/[0.08] text-slate-300 hover:border-white/[0.2]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{bg}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Skills Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 block">
                  2. Select Demonstrated Technical Competencies ({selectedSkills.length} selected)
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {toggleableSkills.map((skill) => {
                    const isChecked = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        onClick={() => handleToggleSkill(skill)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-2 ${
                          isChecked
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400 text-white shadow-sm'
                            : 'bg-slate-950/70 border-white/[0.08] text-slate-300 hover:border-white/[0.2]'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${isChecked ? 'bg-white' : 'bg-slate-600'}`} />
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Preview Summary Bar */}
              <div className="rounded-2xl p-4 sm:p-5 bg-slate-950/80 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-slate-400">Calibrated Profile Summary:</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2 flex-wrap">
                    <span>{selectedBackground}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-blue-400">{selectedSkills.length} Technical Skills Verified</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveStep(1)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <span>Analyze in Neural Engine (Step 02)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 02 Drawer: Neural Diagnostic Visualizer */}
          {activeStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Phase 2: AI Neural Understanding & Gap Diagnostic
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  Benchmarking Profile Against 1.2M+ Active Job Openings
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  CareerIQ computes latent transferability, detects hidden adjacency, and isolates high-ROI skill gaps.
                </p>
              </div>

              {/* Neural Graphs / Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Metric 1: Market Correlation */}
                <div className="rounded-2xl p-5 bg-slate-950/80 border border-indigo-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Market Alignment
                    </span>
                    <BarChart className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {matchPercentage}%
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${matchPercentage}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    High correlation with junior data & engineering hiring clusters.
                  </p>
                </div>

                {/* Metric 2: Adjacent Propensity */}
                <div className="rounded-2xl p-5 bg-slate-950/80 border border-indigo-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Hidden Adjacent Strengths
                    </span>
                    <Cpu className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                      + Data Pipelines
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                      + Quantitative Logic
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">
                      + API Design
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1">
                    Latent skills derived from your coursework and technical syntax.
                  </p>
                </div>

                {/* Metric 3: Priority Gaps */}
                <div className="rounded-2xl p-5 bg-slate-950/80 border border-amber-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      High-Priority Gap Closure
                    </span>
                    <Target className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">Production Window Functions</span>
                      <span className="text-amber-400">Top Priority</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">End-to-End Capstone Project</span>
                      <span className="text-amber-400">Crucial</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Closing these 2 items boosts candidate interview rate by 3.8x.
                  </p>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="rounded-2xl p-4 sm:p-5 bg-slate-950/80 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  Ready to map this neural diagnostic into your custom step-by-step career path?
                </div>
                <button
                  onClick={() => setActiveStep(2)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 transition-all"
                >
                  <span>Generate Step-by-Step Plan (Step 03)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 03 Drawer: Executable Implementation Plan */}
          {activeStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                  Phase 3: Tailor-Made Step-by-Step Growth Plan
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  Your Executable Implementation Plan
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Clear timeline, verified deliverables, expected salary progression, and direct partner matching.
                </p>
              </div>

              {/* Implementation Roadmap Timeline Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Milestone 1 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-400">
                        WEEKS 1 - 2
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <h5 className="text-sm font-bold text-white">Diagnostic & Core SQL</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Calibrate baseline & solve 100+ production queries.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.05] text-[11px] text-emerald-400 font-medium">
                    Deliverable: Verified Solution Set
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-blue-400">
                        WEEKS 3 - 6
                      </span>
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    </div>
                    <h5 className="text-sm font-bold text-white">Core Analytics Stack</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Window functions, Python pipelines & DAX modeling.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.05] text-[11px] text-blue-400 font-medium">
                    Deliverable: Live BI Dashboard
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-indigo-400">
                        WEEKS 7 - 10
                      </span>
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <h5 className="text-sm font-bold text-white">Production Capstone</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Real-world churn prediction pipeline & GitHub repo.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.05] text-[11px] text-indigo-400 font-medium">
                    Deliverable: Hosted Case Study
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-violet-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-violet-400">
                        WEEKS 11 - 12
                      </span>
                      <Award className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                    <h5 className="text-sm font-bold text-white">Job Ready & Placement</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      AI technical mock interviews & partner intros.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/[0.05] text-[11px] text-violet-400 font-medium">
                    Deliverable: 80+ Partner Referrals
                  </div>
                </div>
              </div>

              {/* Compensation & Trajectory Bar */}
              <div className="rounded-2xl p-5 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-violet-950/40 border border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Projected Compensation Trajectory
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      ${(salaryBaseline / 1000).toFixed(0)}k Baseline <span className="text-slate-500">→</span> <span className="text-emerald-400">${(salaryTarget / 1000).toFixed(0)}k Job-Ready Target</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Based on current verified technical competencies in {selectedBackground}.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <button
                    onClick={onOpenAssessment}
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Execute This Implementation Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
