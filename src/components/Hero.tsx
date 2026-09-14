import React from 'react';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  TrendingUp, 
  AlertCircle, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  Zap,
  Target,
  FileText
} from 'lucide-react';

interface HeroProps {
  onOpenAssessment: () => void;
  onOpenScanner?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment, onOpenScanner }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden radial-mesh-hero">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-background opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Top Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-8 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span className="text-xs font-semibold text-blue-300 tracking-wide">
                Next-Gen Career & Skill Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Your Career.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                Intelligently Mapped.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Upload your resume or enter your goals. CareerIQ analyzes your skills to discover high-match career opportunities and recommend targeted courses to bridge your gaps.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6">
              {onOpenScanner && (
                <button
                  onClick={onOpenScanner}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  id="hero-scan-resume-btn"
                >
                  <FileText className="w-5 h-5" />
                  <span>Scan Resume for Career & Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-base text-slate-200 hover:text-white bg-slate-900/70 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-200"
              >
                <span>Interactive Assessment</span>
              </button>
            </div>

            {/* Trust / Value Statement */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 pt-2">
              <span className="text-blue-400 font-bold">Discover your strengths</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-300 font-bold">Identify your gaps</span>
              <span className="text-slate-600">•</span>
              <span className="text-violet-400 font-bold">Build your roadmap</span>
            </div>
          </div>

          {/* Right Floating Career Intelligence Dashboard Column */}
          <div className="lg:col-span-6 relative">
            
            {/* Floating Card: +12% Career Match (Top Left) */}
            <div className="absolute -top-6 -left-6 sm:-left-10 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-emerald-500/30 shadow-xl shadow-emerald-500/10 animate-float-slow">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Projection</p>
                <p className="text-sm font-bold text-emerald-400">+12% Career Match</p>
              </div>
            </div>

            {/* Floating Card: 3 Skills to Improve (Bottom Left) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-amber-500/30 shadow-xl shadow-amber-500/10 animate-float-delayed">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Gap Analysis</p>
                <p className="text-sm font-bold text-amber-300">3 Skills to Improve</p>
              </div>
            </div>

            {/* Floating Card: 5 Recommended Roles (Top Right) */}
            <div className="absolute -top-6 -right-4 sm:-right-6 z-20 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-blue-500/30 shadow-xl shadow-blue-500/10 animate-float-slow">
              <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Active Matches</p>
                <p className="text-sm font-bold text-blue-300">5 Recommended Roles</p>
              </div>
            </div>

            {/* Main Product Intelligence Dashboard Container */}
            <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/95 to-[#070B14]/95 border border-white/[0.12] backdrop-blur-2xl shadow-2xl shadow-blue-900/30">
              
              {/* Dashboard Top Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-medium text-slate-400 font-mono">
                    careeriq.ai/dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold text-blue-400">
                    <Zap className="w-3 h-3" /> Live Engine
                  </span>
                </div>
              </div>

              {/* Upper Section: Readiness & Top Recommended Careers */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 mb-6">
                
                {/* Career Readiness Circular Indicator */}
                <div className="sm:col-span-5 rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06] flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Career Readiness
                  </p>
                  
                  {/* Circular Gauge */}
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="text-slate-800"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#blueIndigoGradient)"
                        strokeWidth="8"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 * (1 - 0.78)}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                      <defs>
                        <linearGradient id="blueIndigoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-extrabold text-white">78</span>
                      <span className="text-[10px] text-slate-400 font-medium">/ 100</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-emerald-400 font-medium mt-3 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 inline" /> High Market Fit
                  </p>
                </div>

                {/* Recommended Careers Column */}
                <div className="sm:col-span-7 rounded-2xl p-4 bg-slate-950/60 border border-white/[0.06] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Recommended Careers
                    </p>
                    <span className="text-[11px] text-blue-400 font-semibold">AI Match</span>
                  </div>

                  <div className="space-y-3">
                    {/* Role 1 */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-white">Data Analyst</span>
                        <span className="font-bold text-blue-400">91% Match</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[91%]" />
                      </div>
                    </div>

                    {/* Role 2 */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-200">Business Analyst</span>
                        <span className="font-bold text-indigo-400">84% Match</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[84%]" />
                      </div>
                    </div>

                    {/* Role 3 */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-slate-300">Financial Analyst</span>
                        <span className="font-bold text-violet-400">76% Match</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[76%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Section: Skill Strengths vs Skill Gaps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Skill Strengths */}
                <div className="rounded-2xl p-4 bg-slate-950/40 border border-white/[0.05]">
                  <p className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Skill Strengths
                  </p>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">Excel</span>
                        <span className="text-emerald-400 font-semibold">92%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[92%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">Python</span>
                        <span className="text-blue-400 font-semibold">78%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[78%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">SQL</span>
                        <span className="text-indigo-400 font-semibold">61%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full w-[61%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Gaps */}
                <div className="rounded-2xl p-4 bg-slate-950/40 border border-white/[0.05] flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Identified Skill Gaps
                    </p>
                    <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                      Targeted competencies needed to hit 95%+ match:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-300">
                        Power BI
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-300">
                        Advanced SQL
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-300">
                        Statistics
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Roadmap Ready</span>
                    <span className="text-blue-400 font-semibold">3 Modules Generated →</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
