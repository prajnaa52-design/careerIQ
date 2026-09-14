import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Download, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Lock, 
  User, 
  ExternalLink, 
  FileText, 
  Check, 
  Briefcase, 
  Clock, 
  Award,
  Layers,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface PlanExecutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  background: string;
  selectedSkills: string[];
  salaryBaseline: number;
  salaryTarget: number;
}

interface MilestoneTask {
  id: string;
  phase: string;
  weekRange: string;
  title: string;
  description: string;
  deliverable: string;
  skills: string[];
  completed: boolean;
}

export const PlanExecutionModal: React.FC<PlanExecutionModalProps> = ({
  isOpen,
  onClose,
  background,
  selectedSkills,
  salaryBaseline,
  salaryTarget,
}) => {
  const { user, openLogin, demoLogin } = useAuth();

  const initialTasks: MilestoneTask[] = [
    {
      id: 'task-1',
      phase: 'Sprint 01: Foundations',
      weekRange: 'Weeks 1 - 2',
      title: 'Diagnostic Benchmark & Production SQL',
      description: 'Initialize PostgreSQL container, run indexing benchmarks, and solve 100+ production queries involving Window Functions and CTEs.',
      deliverable: 'Verified Solution Set & Performance Audit',
      skills: ['PostgreSQL', 'Window Functions', 'Query Optimization'],
      completed: true,
    },
    {
      id: 'task-2',
      phase: 'Sprint 02: Core Analytics Stack',
      weekRange: 'Weeks 3 - 6',
      title: 'Automated Python Pipelines & BI Modeling',
      description: 'Build robust ETL data ingestion scripts in Python (Polars/Pandas), design a star-schema model, and publish an executive dashboard.',
      deliverable: 'Live Interactive BI Dashboard & Pipeline',
      skills: ['Python', 'ETL Pipelines', 'Power BI / Tableau', 'DAX'],
      completed: false,
    },
    {
      id: 'task-3',
      phase: 'Sprint 03: Production Capstone',
      weekRange: 'Weeks 7 - 10',
      title: 'End-to-End Predictive Pipeline & API Deployment',
      description: 'Train a high-accuracy churn prediction model with Scikit-learn, package into a FastAPI microservice, and write comprehensive pytest suites.',
      deliverable: 'Hosted Capstone Repo & Live REST API',
      skills: ['Machine Learning', 'FastAPI', 'Docker', 'CI/CD'],
      completed: false,
    },
    {
      id: 'task-4',
      phase: 'Sprint 04: Placement & Partner Matching',
      weekRange: 'Weeks 11 - 12',
      title: 'AI Mock Interviews & Partner Intros',
      description: 'Pass 3 simulated technical interviews with CareerIQ AI, calibrate compensation negotiation targets, and unlock direct referrals.',
      deliverable: '80+ Partner Referrals & Verified Placement Badge',
      skills: ['System Design', 'Interview Calibration', 'Negotiation'],
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState<MilestoneTask[]>(initialTasks);
  const [activeTab, setActiveTab] = useState<'sprints' | 'overview' | 'deliverables'>('sprints');
  const [isActivated, setIsActivated] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  // Dynamic unlocked value
  const potentialUplift = salaryTarget - salaryBaseline;
  const currentEarnedPotential = Math.round(salaryBaseline + (potentialUplift * (progressPercent / 100)));

  // Download Calendar ICS file
  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CareerIQ//Implementation Plan//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:CareerIQ 12-Week Implementation Plan
X-WR-TIMEZONE:UTC
BEGIN:VEVENT
SUMMARY:CareerIQ Sprint 1: Diagnostic Benchmark & SQL
DESCRIPTION:Calibrate baseline & solve 100+ production queries.
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
SUMMARY:CareerIQ Sprint 2: Core Analytics & BI Dashboard
DESCRIPTION:Window functions, Python pipelines & DAX modeling.
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
SUMMARY:CareerIQ Sprint 3: Production Capstone Repo
DESCRIPTION:Real-world churn prediction pipeline & GitHub repo.
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
SUMMARY:CareerIQ Sprint 4: Job Ready & 80+ Partner Referrals
DESCRIPTION:AI technical mock interviews & partner intros.
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CareerIQ_12_Week_Plan.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  // Download Executive Plan Syllabus Markdown
  const handleDownloadSummary = () => {
    const summaryText = `# CareerIQ Executable Implementation Plan
Target Track: ${background}
Baseline Salary: $${(salaryBaseline / 1000).toFixed(0)}k -> Target Salary: $${(salaryTarget / 1000).toFixed(0)}k
Projected Uplift: +$${(potentialUplift / 1000).toFixed(0)}k

## Sprints & Milestones
${tasks.map(t => `### ${t.weekRange}: ${t.title}
- Phase: ${t.phase}
- Deliverable: ${t.deliverable}
- Core Skills: ${t.skills.join(', ')}
- Status: ${t.completed ? 'COMPLETED' : 'IN PROGRESS'}
`).join('\n')}

Generated by CareerIQ AI Career Intelligence Platform
© 2026 CareerIQ AI Inc.`;

    const blob = new Blob([summaryText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CareerIQ_Executable_Plan.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0B1120] border border-white/10 rounded-3xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Glow accent */}
        <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-950/40 via-slate-900 to-violet-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  12-Week Implementation Plan
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Execution Active
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Calibrated for <span className="text-blue-400 font-medium">{background}</span> with {selectedSkills.length} verified competencies
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* User Session Banner */}
          {!user ? (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">
                    Save this execution plan to your CareerIQ account
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Sign in to track daily sprint completion, sync GitHub commits, and unlock partner referrals.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    onClose();
                    openLogin();
                  }}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/30 transition-all"
                  id="modal-login-btn"
                >
                  Sign In / Register
                </button>
                <button
                  onClick={() => {
                    demoLogin('engineer');
                    setIsActivated(true);
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  id="modal-quick-demo-btn"
                >
                  Quick Demo
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white flex items-center gap-2">
                    <span>Plan Active for {user.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                      Cloud Synced
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    All deliverables will be evaluated by CareerIQ Neural Benchmarking.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-emerald-400">
                  {progressPercent}% Completed
                </span>
              </div>
            </div>
          )}

          {/* Compensation Trajectory & Progress Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
              <div className="text-[11px] text-slate-400 font-medium">Calibrated Baseline</div>
              <div className="text-xl font-bold text-white mt-1">${(salaryBaseline / 1000).toFixed(0)}k/year</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Current verified baseline</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10">
              <div className="text-[11px] text-slate-400 font-medium">Job-Ready Target</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">${(salaryTarget / 1000).toFixed(0)}k/year</div>
              <div className="text-[10px] text-emerald-400/80 mt-0.5">+${(potentialUplift / 1000).toFixed(0)}k potential (+{Math.round((potentialUplift / salaryBaseline) * 100)}%)</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>Execution Progress</span>
                  <span className="text-blue-400 font-bold">{progressPercent}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Active Value: <span className="text-white font-semibold">${(currentEarnedPotential / 1000).toFixed(0)}k</span>
              </div>
            </div>
          </div>

          {/* Sprints Interactive Checklist */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>4 Execution Sprints (Click task to mark completed)</span>
              </h4>
              <span className="text-xs text-slate-500">{completedCount} of {tasks.length} Deliverables verified</span>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    task.completed
                      ? 'bg-emerald-950/20 border-emerald-500/30'
                      : 'bg-slate-900/50 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask(task.id);
                      }}
                      className={`mt-0.5 w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                          : 'border-white/20 hover:border-blue-400 bg-slate-950'
                      }`}
                    >
                      {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-blue-400">
                            {task.weekRange}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs font-semibold text-slate-300">
                            {task.phase}
                          </span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          task.completed 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                        }`}>
                          {task.completed ? 'Delivered & Verified' : 'In Progress'}
                        </span>
                      </div>

                      <h5 className={`text-sm font-bold ${task.completed ? 'text-slate-200 line-through decoration-slate-600' : 'text-white'}`}>
                        {task.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {task.description}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                        <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                          <Award className="w-3 h-3 text-emerald-400" />
                          <span>Deliverable: {task.deliverable}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {task.skills.map((skill) => (
                            <span key={skill} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Execution Tooling Buttons */}
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              <span>Sprint Tooling & Calendar Integration</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handleDownloadCalendar}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-white/10 hover:border-blue-500/40 hover:bg-slate-900 transition-all text-left text-xs"
                id="export-calendar-btn"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-semibold text-white">Sync 12-Week Milestones (.ics)</div>
                    <div className="text-[10px] text-slate-400">Google Calendar, Apple, Outlook</div>
                  </div>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={handleDownloadSummary}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-white/10 hover:border-violet-500/40 hover:bg-slate-900 transition-all text-left text-xs"
                id="export-summary-btn"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-violet-400" />
                  <div>
                    <div className="font-semibold text-white">Export Executive Plan (.md)</div>
                    <div className="text-[10px] text-slate-400">Markdown syllabus & milestones</div>
                  </div>
                </div>
                <Download className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {downloadSuccess && (
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>File downloaded successfully! Ready to import into your workflow.</span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#070B14] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>AI Verified Syllabus • 80+ Partner Referrals Included</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                setIsActivated(true);
                setTimeout(() => {
                  onClose();
                  // Scroll to roadmap section
                  const roadmapEl = document.getElementById('roadmap');
                  if (roadmapEl) {
                    roadmapEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 800);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 transition-all"
              id="confirm-execute-plan-btn"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isActivated ? 'Plan Initialized!' : 'Deploy Plan to Roadmap'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
