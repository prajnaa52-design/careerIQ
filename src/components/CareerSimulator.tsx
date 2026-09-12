import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Sliders, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Award, 
  RefreshCw,
  Zap,
  Flame
} from 'lucide-react';

interface CareerSimulatorProps {
  onOpenAssessment: () => void;
}

export const CareerSimulator: React.FC<CareerSimulatorProps> = ({ onOpenAssessment }) => {
  const [learnedSQL, setLearnedSQL] = useState(false);
  const [learnedPowerBI, setLearnedPowerBI] = useState(false);
  const [builtProjects, setBuiltProjects] = useState(false);
  const [studyHours, setStudyHours] = useState(10);

  // Compute live score
  const baseScore = 64;
  const sqlBoost = learnedSQL ? 8 : 0;
  const powerBiBoost = learnedPowerBI ? 12 : 0;
  const projectsBoost = builtProjects ? 8 : 0;
  const currentScore = baseScore + sqlBoost + powerBiBoost + projectsBoost;

  // Calculate estimated weeks to reach currentScore
  const totalRemainingHours = 
    (!learnedSQL ? 14 : 0) + 
    (!learnedPowerBI ? 20 : 0) + 
    (!builtProjects ? 24 : 0);
  
  const estimatedWeeks = Math.max(1, Math.ceil(totalRemainingHours / studyHours));

  const resetSimulation = () => {
    setLearnedSQL(false);
    setLearnedPowerBI(false);
    setBuiltProjects(false);
    setStudyHours(10);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-violet-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/30 text-xs font-semibold text-blue-300 mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            Interactive Career Trajectory Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            What could you{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              become?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Explore how learning new skills directly upgrades your hiring probability. Toggle skills below to witness the real-time algorithm recalculation.
          </p>
        </div>

        {/* Simulator Main Interactive Canvas */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-slate-900/95 via-[#0B1120]/95 to-[#070B14]/95 border border-white/[0.12] backdrop-blur-2xl shadow-2xl shadow-blue-900/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Upgrade Checklist & Slider */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Skill Transformation Lab</h3>
                  <p className="text-xs text-slate-400">Select simulated actions to see immediate readiness impact</p>
                </div>
                <button
                  onClick={resetSimulation}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] transition-colors"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Toggle 1: Learn SQL */}
              <div
                onClick={() => setLearnedSQL(!learnedSQL)}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border flex items-center justify-between ${
                  learnedSQL
                    ? 'bg-blue-600/15 border-blue-500/50 shadow-md shadow-blue-500/15'
                    : 'bg-slate-950/40 border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      learnedSQL
                        ? 'bg-blue-500 text-white'
                        : 'border border-slate-600 text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-base">Learn Advanced SQL</span>
                    <p className="text-xs text-slate-400">Master Window Functions, CTEs, & Query Plans</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    +8% Boost
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">~14 hrs estimated</p>
                </div>
              </div>

              {/* Toggle 2: Learn Power BI */}
              <div
                onClick={() => setLearnedPowerBI(!learnedPowerBI)}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border flex items-center justify-between ${
                  learnedPowerBI
                    ? 'bg-indigo-600/15 border-indigo-500/50 shadow-md shadow-indigo-500/15'
                    : 'bg-slate-950/40 border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      learnedPowerBI
                        ? 'bg-indigo-500 text-white'
                        : 'border border-slate-600 text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-base">Learn Power BI & DAX</span>
                    <p className="text-xs text-slate-400">Build Interactive Enterprise Dashboards</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    +12% Boost
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">~20 hrs estimated</p>
                </div>
              </div>

              {/* Toggle 3: Build 2 Projects */}
              <div
                onClick={() => setBuiltProjects(!builtProjects)}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border flex items-center justify-between ${
                  builtProjects
                    ? 'bg-violet-600/15 border-violet-500/50 shadow-md shadow-violet-500/15'
                    : 'bg-slate-950/40 border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      builtProjects
                        ? 'bg-violet-500 text-white'
                        : 'border border-slate-600 text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-base">Build 2 Production Projects</span>
                    <p className="text-xs text-slate-400">E-commerce churn model + Executive dashboard</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-md border border-violet-500/20">
                    +8% Boost
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">Portfolio verified</p>
                </div>
              </div>

              {/* Weekly Study Pace Slider */}
              <div className="rounded-2xl p-5 bg-slate-950/50 border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-blue-400" />
                    Weekly Study Commitment
                  </span>
                  <span className="font-bold text-blue-400 text-sm">{studyHours} hrs / week</span>
                </div>
                
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="5"
                  value={studyHours}
                  onChange={(e) => setStudyHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />

                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>5 hrs (Casual)</span>
                  <span>15 hrs (Focused)</span>
                  <span>25 hrs (Intensive)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Gauge & Trajectory Result */}
            <div className="lg:col-span-5 rounded-3xl p-8 bg-slate-950/80 border border-white/[0.08] flex flex-col items-center justify-center text-center relative">
              
              <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                <Flame className="w-3 h-3" /> Real-time
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
                Projected Career Match
              </span>

              {/* Big Animated Score Gauge */}
              <div className="relative w-48 h-48 flex items-center justify-center my-2">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    className="text-slate-800"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="url(#simScoreGrad)"
                    strokeWidth="10"
                    strokeDasharray={301.6}
                    strokeDashoffset={301.6 * (1 - currentScore / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient id="simScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-white transition-all duration-300">
                    {currentScore}%
                  </span>
                  <span className="text-xs text-blue-400 font-semibold mt-1">
                    {currentScore >= 90 ? 'Top Tier Hire' : currentScore >= 75 ? 'Strong Candidate' : 'Baseline Fit'}
                  </span>
                </div>
              </div>

              {/* Progress Progression Pills */}
              <div className="w-full space-y-2 mt-4 text-xs">
                <div className="flex items-center justify-between text-slate-300 py-1.5 px-3 rounded-lg bg-white/[0.03]">
                  <span>Baseline Start:</span>
                  <span className="font-semibold text-slate-400">64%</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 py-1.5 px-3 rounded-lg bg-white/[0.03]">
                  <span>Total Simulated Gain:</span>
                  <span className="font-bold text-emerald-400">+{currentScore - 64}%</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 py-1.5 px-3 rounded-lg bg-white/[0.03]">
                  <span>Est. Time to Goal:</span>
                  <span className="font-bold text-white">
                    {totalRemainingHours === 0 ? 'Goal Reached!' : `~${estimatedWeeks} weeks`}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenAssessment}
                className="w-full mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
              >
                <span>Explore Your Career</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
