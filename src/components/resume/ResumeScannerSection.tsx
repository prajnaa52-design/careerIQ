import React from 'react';
import { 
  FileText, 
  Upload, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Layers,
  Award
} from 'lucide-react';

interface ResumeScannerSectionProps {
  onOpenScanner: () => void;
}

export const ResumeScannerSection: React.FC<ResumeScannerSectionProps> = ({ onOpenScanner }) => {
  return (
    <section id="resume-scanner" className="py-24 relative overflow-hidden bg-[#070B14] border-t border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[450px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-400 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>AI Resume Intelligence Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Send your resume.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              Unlock career matches & courses.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Our neural parser reads your real-world experience, pinpoints top market opportunities, and curates high-yield university & industry courses to bridge your exact skill gaps.
          </p>
        </div>

        {/* Interactive Feature Showcase Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-violet-950/40 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Explanatory 3-Step Flow */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 flex items-start gap-4 hover:border-blue-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Step 01 • Ingest</div>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">Resume Extraction & Competency Calibration</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Upload PDF/Word or paste text. CareerIQ maps your programming languages, cloud tooling, and projects against 100+ technical frameworks.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 flex items-start gap-4 hover:border-violet-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">Step 02 • Match</div>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">Ranked High-Growth Career Opportunities</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Receive explainable match percentages, projected salary uplift, market demand trajectories, and direct partner interview pipelines.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 flex items-start gap-4 hover:border-emerald-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Step 03 • Upskill</div>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">Targeted Course Suggestions for Skill Development</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Don't guess what to learn. We curate certified courses (DeepLearning.AI, Coursera, Stanford Online) that specifically close your exact gaps.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Instant Action Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-white/10 shadow-xl space-y-6 text-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-500/30">
                  <Upload className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Instant AI Resume Scan
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                    Get an instant breakdown of your career match score and personalized course syllabus in under 10 seconds.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={onOpenScanner}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    id="hero-scan-resume-btn"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Upload Resume & Get Suggestions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Analysis
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sample Resumes Included
                    </span>
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
