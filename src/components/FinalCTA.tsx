import React from 'react';
import { ArrowRight, Sparkles, Shield, Zap, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenAssessment: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAssessment }) => {
  return (
    <section className="py-28 relative overflow-hidden bg-[#070B14] border-t border-white/[0.05]">
      {/* Background glowing mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-300 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Launch Your Intelligence Assessment</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
          Stop wondering what comes next.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
            Start building it.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Discover your strengths. Identify your gaps. Build your future with CareerIQ.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onOpenAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-2xl shadow-blue-500/35 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Started — It's Free</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Secondary Trust statement */}
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          No complicated setup. Start with your profile. Free lifetime baseline mapping.
        </p>

        {/* Security & Confidence Highlights */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant 2-Minute Diagnostic</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Encrypted & Private Profile Data</span>
          </div>
        </div>

      </div>
    </section>
  );
};
