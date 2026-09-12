import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Brain, 
  Check, 
  RefreshCw,
  TrendingUp,
  Target
} from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [targetRole, setTargetRole] = useState('Data Analyst');
  const [experienceLevel, setExperienceLevel] = useState('0-2 years (Entry/Associate)');
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Excel', 'Python']);
  const [isCalculating, setIsCalculating] = useState(false);

  if (!isOpen) return null;

  const availableSkills = [
    'Excel',
    'Python',
    'SQL',
    'Power BI',
    'Tableau',
    'Statistics',
    'Machine Learning',
    'Git / GitHub',
    'Data Cleaning',
    'Communication',
    'Financial Modeling',
    'A/B Testing'
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRunAssessment = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setStep(3);
    }, 1200);
  };

  // Compute live match score based on selected skills
  const calculatedMatch = Math.min(
    96,
    Math.max(45, Math.round(50 + (selectedSkills.length * 4.5)))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#0B1120] border border-white/[0.12] shadow-2xl shadow-blue-500/20 p-6 sm:p-8 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            CareerIQ Instant Profiler
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-400">Step {step} of 3</span>
        </div>

        {/* STEP 1: Background */}
        {step === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Define Your Career Goal
              </h3>
              <p className="text-xs text-slate-400">
                Select your intended destination to calibrate market requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Target Role
                </label>
                <select
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Data Analyst">Data Analyst ($85k - $115k)</option>
                  <option value="Business Analyst">Business Analyst ($90k - $125k)</option>
                  <option value="Product Analyst">Product Analyst ($95k - $130k)</option>
                  <option value="Financial Analyst">Financial Analyst ($80k - $110k)</option>
                  <option value="Machine Learning Engineer">Machine Learning Engineer ($120k - $160k)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Current Experience Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Student / Recent Graduate',
                    '0-2 years (Entry/Associate)',
                    '3-5 years (Mid Level)',
                    'Switching Careers',
                  ].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setExperienceLevel(lvl)}
                      className={`text-xs p-3 rounded-xl border text-left transition-all ${
                        experienceLevel === lvl
                          ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                          : 'bg-slate-950/50 border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
              >
                <span>Continue to Skills</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Skill Selection */}
        {step === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Select Your Existing Skills
              </h3>
              <p className="text-xs text-slate-400">
                Tap the tools and methodologies you have practiced or learned.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto p-1">
              {availableSkills.map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                        : 'bg-slate-950/70 text-slate-300 border-white/[0.08] hover:border-white/[0.2]'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    <span>{skill}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={handleRunAssessment}
                disabled={isCalculating}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Mapping Trajectory...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Calculate Intelligence Match</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Live Assessment Output */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/25">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Calibration Complete
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {targetRole} Profile Mapped!
              </h3>
            </div>

            {/* Metric Overview */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.08]">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Computed Match
                </span>
                <p className="text-3xl font-black text-blue-400">{calculatedMatch}%</p>
                <span className="text-[10px] text-emerald-400">Strong market baseline</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.08]">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Gap Closure Time
                </span>
                <p className="text-3xl font-black text-white">~4-6 wks</p>
                <span className="text-[10px] text-indigo-300">At 10h / week pace</span>
              </div>
            </div>

            {/* Key Skills Missing */}
            <div className="text-left p-4 rounded-2xl bg-slate-950/60 border border-white/[0.06]">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Recommended Priority Milestones:
              </span>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Module 1: Advanced SQL Window Functions & Optimization (+8%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Module 2: Power BI Business Dashboard Portfolio (+12%)</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25"
              >
                Access Personalized Dashboard
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl text-sm font-medium text-slate-400 hover:text-white border border-white/[0.08]"
              >
                Re-assess
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
