import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  CheckCircle2, 
  Star, 
  Clock, 
  Award, 
  ExternalLink, 
  BookOpen, 
  TrendingUp, 
  Target, 
  Plus, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  ChevronRight, 
  GraduationCap, 
  ArrowRight, 
  Zap, 
  X,
  Layers,
  HelpCircle,
  MessageSquare,
  Cpu,
  BarChart3,
  FileText,
  CheckSquare,
  AlertCircle,
  RotateCcw,
  Code,
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';
import { COURSES_CATALOG, CourseSuggestion, CourseModuleNote, CourseQuizQuestion } from '../data/resumeData';

export interface CourseSuggestionsPageProps {
  initialRoleId?: string;
  onOpenAssessment?: () => void;
}

interface TargetRoleOption {
  id: string;
  title: string;
  baselineMatch: number;
  salary: string;
  gapClosureTime: string;
  demand: string;
  priorityCourseIds: string[];
}

const TARGET_ROLES: TargetRoleOption[] = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    baselineMatch: 66,
    salary: '$85k - $115k',
    gapClosureTime: '~4-6 wks',
    demand: 'High Demand',
    priorityCourseIds: ['course-sql-beginner', 'course-excel-beginner', 'course-sql-advanced', 'course-powerbi-mastery', 'course-tableau-storytelling', 'course-stats-data-analysis', 'course-python-data-wrangling']
  },
  {
    id: 'bi-engineer',
    title: 'Business Intelligence (BI) Engineer',
    baselineMatch: 70,
    salary: '$95k - $130k',
    gapClosureTime: '~4-6 wks',
    demand: 'Surging Demand',
    priorityCourseIds: ['course-excel-beginner', 'course-powerbi-mastery', 'course-sql-advanced', 'course-tableau-storytelling', 'course-dbt-snowflake']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    baselineMatch: 62,
    salary: '$115k - $155k',
    gapClosureTime: '~6-8 wks',
    demand: 'High Growth',
    priorityCourseIds: ['course-python-beginner', 'course-stats-data-analysis', 'course-ml-specialization', 'course-python-data-wrangling', 'course-pytorch-deep-learning']
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    baselineMatch: 64,
    salary: '$110k - $155k',
    gapClosureTime: '~5-7 wks',
    demand: 'Fast Growing',
    priorityCourseIds: ['course-sql-beginner', 'course-sql-advanced', 'course-dbt-snowflake', 'course-flink-streaming-expert', 'course-kafka-expert', 'course-k8s-docker']
  },
  {
    id: 'ai-engineer',
    title: 'AI Application & LLM Systems Engineer',
    baselineMatch: 68,
    salary: '$145k - $195k',
    gapClosureTime: '~4-6 wks',
    demand: 'Top Market Pick',
    priorityCourseIds: ['course-ai-prompt-beginner', 'course-rag-llm', 'course-llm-finetuning-expert', 'course-cuda-gpu-expert', 'course-pytorch-deep-learning']
  },
  {
    id: 'fullstack-cloud',
    title: 'Senior Full Stack & Cloud Architect',
    baselineMatch: 72,
    salary: '$135k - $180k',
    gapClosureTime: '~4-5 wks',
    demand: 'High Demand',
    priorityCourseIds: ['course-web-dev-beginner', 'course-cloud-aws-beginner', 'course-system-design', 'course-kafka-expert', 'course-zero-trust-cloud-expert']
  },
  {
    id: 'mlops-engineer',
    title: 'MLOps & Distributed Infrastructure Engineer',
    baselineMatch: 60,
    salary: '$150k - $210k',
    gapClosureTime: '~6-8 wks',
    demand: 'Surging Premium',
    priorityCourseIds: ['course-cloud-aws-beginner', 'course-k8s-docker', 'course-llm-finetuning-expert', 'course-cuda-gpu-expert', 'course-zero-trust-cloud-expert']
  }
];

export const CourseSuggestionsPage: React.FC<CourseSuggestionsPageProps> = ({ 
  initialRoleId = 'data-analyst',
  onOpenAssessment
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(initialRoleId);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'recommended' | 'catalog' | 'my-plan'>('recommended');
  
  // Simulator state: selected course IDs for calculating target readiness boost
  const [selectedSimCourses, setSelectedSimCourses] = useState<string[]>(['course-sql-advanced', 'course-powerbi-mastery']);
  
  // Saved courses for "My Study Plan"
  const [savedCourseIds, setSavedCourseIds] = useState<string[]>(['course-sql-advanced', 'course-powerbi-mastery']);
  
  // Modal state for viewing full syllabus & study view
  const [activeModalCourse, setActiveModalCourse] = useState<CourseSuggestion | null>(null);
  const [modalTab, setModalTab] = useState<'syllabus' | 'notes' | 'test'>('syllabus');

  // Test / Quiz State
  const [userQuizAnswers, setUserQuizAnswers] = useState<Record<string, number>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);

  // AI Assistant Widget State
  const [aiQuestion, setAiQuestion] = useState<string>('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [isAiThinking, setIsAiThinking] = useState<boolean>(false);

  const activeRole = useMemo(() => {
    return TARGET_ROLES.find(r => r.id === selectedRoleId) || TARGET_ROLES[0];
  }, [selectedRoleId]);

  // Calculate simulated match score
  const computedSimulatedMatch = useMemo(() => {
    const base = activeRole.baselineMatch;
    const additionalUplift = selectedSimCourses.reduce((sum, courseId) => {
      const course = COURSES_CATALOG.find(c => c.id === courseId);
      return sum + (course ? course.matchUplift : 0);
    }, 0);
    return Math.min(99, base + additionalUplift);
  }, [activeRole, selectedSimCourses]);

  // Filter courses based on role priority or catalog filters
  const filteredCourses = useMemo(() => {
    return COURSES_CATALOG.filter(course => {
      // Tab filter
      if (activeTab === 'recommended') {
        const isPriority = activeRole.priorityCourseIds.includes(course.id) || (course.targetRoles && course.targetRoles.includes(activeRole.id));
        const hasExplicitFilter = selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedProvider !== 'all' || searchQuery.trim() !== '';
        // If the user has applied explicit category, difficulty, or provider filters, show matching catalog courses
        if (!isPriority && !hasExplicitFilter) return false;
      } else if (activeTab === 'my-plan') {
        if (!savedCourseIds.includes(course.id)) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesSkill = course.skillTarget.toLowerCase().includes(q);
        const matchesProvider = course.provider.toLowerCase().includes(q);
        const matchesSyllabus = course.syllabusHighlights.some(s => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSkill && !matchesProvider && !matchesSyllabus) return false;
      }

      // Category Filter
      if (selectedCategory !== 'all') {
        if (course.category !== selectedCategory) return false;
      }

      // Provider Filter
      if (selectedProvider !== 'all') {
        if (course.provider !== selectedProvider) return false;
      }

      // Difficulty Filter
      if (selectedDifficulty !== 'all') {
        if (course.difficulty !== selectedDifficulty) return false;
      }

      return true;
    });
  }, [activeTab, activeRole, searchQuery, selectedCategory, selectedProvider, selectedDifficulty, savedCourseIds]);

  const toggleSimCourse = (id: string) => {
    if (selectedSimCourses.includes(id)) {
      setSelectedSimCourses(selectedSimCourses.filter(cId => cId !== id));
    } else {
      setSelectedSimCourses([...selectedSimCourses, id]);
    }
  };

  const toggleBookmarkCourse = (id: string) => {
    if (savedCourseIds.includes(id)) {
      setSavedCourseIds(savedCourseIds.filter(cId => cId !== id));
    } else {
      setSavedCourseIds([...savedCourseIds, id]);
    }
  };

  const openCourseModal = (course: CourseSuggestion, defaultTab: 'syllabus' | 'notes' | 'test' = 'syllabus') => {
    setActiveModalCourse(course);
    setModalTab(defaultTab);
    setUserQuizAnswers({});
    setIsQuizSubmitted(false);
  };

  const handleAskAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    setIsAiThinking(true);
    setAiAnswer(null);

    setTimeout(() => {
      let response = `To achieve your goal of becoming a top 5% ${activeRole.title}, we recommend starting with "${COURSES_CATALOG.find(c => c.id === activeRole.priorityCourseIds[0])?.title}". Completing this 3-4 week path will boost your match score from ${activeRole.baselineMatch}% to over 85% with recruiters!`;
      if (aiQuestion.toLowerCase().includes('time') || aiQuestion.toLowerCase().includes('fast') || aiQuestion.toLowerCase().includes('hours')) {
        response = `Pacing strategy for ${activeRole.title}: Committing 10 hours/week allows you to finish the two high-yield modules in 3.5 weeks. Focus first on hands-on project assignments rather than passive video watching!`;
      } else if (aiQuestion.toLowerCase().includes('sql') || aiQuestion.toLowerCase().includes('data')) {
        response = `SQL & Data Modeling are critical for ${activeRole.title}. Taking "Advanced SQL Window Functions" provides an immediate +9% match uplift and is heavily tested in live technical interviews.`;
      }
      setAiAnswer(response);
      setIsAiThinking(false);
    }, 700);
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case 'DeepLearning.AI':
        return 'from-purple-500/20 to-violet-600/20 text-purple-300 border-purple-500/30';
      case 'Coursera':
        return 'from-blue-500/20 to-indigo-600/20 text-blue-300 border-blue-500/30';
      case 'Stanford Online':
        return 'from-rose-500/20 to-red-600/20 text-rose-300 border-rose-500/30';
      case 'Harvard Online':
        return 'from-amber-500/20 to-orange-600/20 text-amber-300 border-amber-500/30';
      case 'MIT OpenCourseWare':
        return 'from-emerald-500/20 to-teal-600/20 text-emerald-300 border-emerald-500/30';
      case 'edX':
        return 'from-cyan-500/20 to-blue-600/20 text-cyan-300 border-cyan-500/30';
      default:
        return 'from-slate-500/20 to-slate-600/20 text-slate-300 border-slate-500/30';
    }
  };

  // Helper to generate dynamic brief notes with important points if a course doesn't have custom ones
  const getCourseNotes = (course: CourseSuggestion): CourseModuleNote[] => {
    if (course.detailedNotes && course.detailedNotes.length > 0) {
      return course.detailedNotes;
    }
    return course.syllabusHighlights.map((highlight, idx) => {
      const topicName = highlight.split(':')[0] || highlight;
      return {
        moduleNumber: idx + 1,
        moduleTitle: `Module ${idx + 1}: ${topicName}`,
        keyTakeaways: [
          `📌 Core Objective: Master ${highlight} to achieve enterprise production standards in ${course.skillTarget}.`,
          `⚡ Key Syntax & Rule: Ensure strict data type validation, zero unhandled errors, and optimal query/code execution indexing.`,
          `🛠️ Real-World Pattern: Implements scalable microservice decoupling, low-latency caching, and automated testing pipelines.`,
          `📊 Business Impact: Directly improves operational efficiency, reduces processing bottlenecks, and boosts model/analytics accuracy.`
        ],
        codeSnippet: `// 💡 High-Yield Code Blueprint for ${course.skillTarget}\n// Focus: ${topicName}\n\nasync function process${topicName.replace(/[^a-zA-Z0-9]/g, '')}(payload) {\n  // 1. Validate incoming parameters & handle edge cases\n  if (!payload || !payload.id) throw new Error("Invalid payload contract");\n  \n  // 2. Execute optimized ${topicName} pipeline\n  const result = await executePipelineStep(payload);\n  return { status: "SUCCESS", data: result, timestamp: Date.now() };\n}`,
        cheatSheetSummary: `Interview Hotspot: Always explain the trade-offs of ${topicName.toLowerCase()} regarding memory usage, execution speed, and error resilience.`
      };
    });
  };

  // Helper to generate dynamic quiz questions ensuring 20 full questions for any course
  const getCourseQuiz = (course: CourseSuggestion): CourseQuizQuestion[] => {
    if (course.practiceQuiz && course.practiceQuiz.length >= 20) {
      return course.practiceQuiz;
    }

    const baseQuestions: CourseQuizQuestion[] = course.practiceQuiz || [];
    const highlights = course.syllabusHighlights;

    const templates = [
      {
        q: (topic: string) => `In production implementation of ${topic}, what is the primary architecture best practice?`,
        opts: (topic: string) => [
          `Architect ${topic} with decoupled error boundaries, scalable caching, and explicit monitoring.`,
          `Bypass type validation and state checks to minimize code size.`,
          `Store unencrypted credentials directly inside source code repositories.`,
          `Disable memory allocation limits on worker processes.`
        ],
        exp: (topic: string) => `Production standard requires decoupled error boundaries, monitoring, and proper state validation when deploying ${topic}.`
      },
      {
        q: (topic: string) => `When optimizing latency and throughput for ${topic}, which technique yields the highest performance uplift?`,
        opts: (topic: string) => [
          `Utilize vectorization, efficient indexing/caching, and batch payload aggregation.`,
          `Re-run execution loops in infinite while loops until complete.`,
          `Disable asynchronous event processing and use single-threaded blocking I/O.`,
          `Increase log verbosity to max output level on production servers.`
        ],
        exp: (topic: string) => `Batching, vectorization, and caching consistently minimize operational latency for ${topic}.`
      },
      {
        q: (topic: string) => `What common anti-pattern should be strictly avoided when working with ${topic}?`,
        opts: (topic: string) => [
          `Tightly coupling state mutations across independent service components without interface contracts.`,
          `Writing automated regression unit tests before major version releases.`,
          `Configuring health check probes for cloud service orchestration.`,
          `Setting up automated schema validation on incoming API requests.`
        ],
        exp: (topic: string) => `Tightly coupled state mutations introduce cascading failures across service architectures.`
      },
      {
        q: (topic: string) => `In senior technical interviews, how is ${topic} typically evaluated during system design rounds?`,
        opts: (topic: string) => [
          `Evaluating trade-offs between consistency, availability, throughput, and error resilience.`,
          `Checking if the candidate can memorize raw hexadecimal memory addresses.`,
          `Evaluating how fast the candidate types without looking at the keyboard.`,
          `Asking to write a CSS rule for font size.`
        ],
        exp: (topic: string) => `System design interviews evaluate trade-offs between CAP theorem bounds, latency, and fault tolerance.`
      },
      {
        q: (topic: string) => `Which debugging metric provides the immediate root-cause insight when ${topic} experiences bottleneck degradation?`,
        opts: (topic: string) => [
          `Execution time telemetry, p99 latency distributions, and CPU/memory utilization trace logs.`,
          `Count of lines of code written in the source file.`,
          `Color scheme of the developer IDE.`,
          `Number of comments in the README file.`
        ],
        exp: (topic: string) => `P99 latency profiles and telemetry trace logs pinpoint exact bottleneck locations in production.`
      }
    ];

    const generated: CourseQuizQuestion[] = [...baseQuestions];
    let qIdCounter = generated.length + 1;

    while (generated.length < 20) {
      const highlight = highlights[(generated.length) % highlights.length] || course.skillTarget;
      const tmpl = templates[(generated.length) % templates.length];
      const cleanTopic = highlight.split(':')[0] || highlight;

      generated.push({
        id: `q-${course.id}-${qIdCounter}`,
        question: `Q${qIdCounter}: ${tmpl.q(cleanTopic)}`,
        options: tmpl.opts(cleanTopic),
        correctOptionIndex: 0,
        explanation: tmpl.exp(cleanTopic)
      });
      qIdCounter++;
    }

    return generated;
  };

  // Quiz evaluation helper
  const calculateQuizScore = (course: CourseSuggestion) => {
    const quiz = getCourseQuiz(course);
    let correctCount = 0;
    quiz.forEach((q) => {
      if (userQuizAnswers[q.id] === q.correctOptionIndex) {
        correctCount += 1;
      }
    });
    const percentage = Math.round((correctCount / quiz.length) * 100);
    return { correctCount, total: quiz.length, percentage, isPassed: percentage >= 75 };
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="course-suggestions">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-emerald-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* TOP HERO HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
            <GraduationCap className="w-64 h-64 text-blue-400" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-violet-500/15 border border-blue-500/25 text-xs font-semibold text-blue-300 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <span>CareerIQ AI Course & Test Engine</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Curated Upskilling, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">Study Notes & Practice Tests</span>
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Study comprehensive module notes and test your real-world skills with instant quizzes for Stanford, DeepLearning.AI, Coursera, and MIT certified courses.
              </p>
            </div>

            {/* Target Role Calibration Selector Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#070B14]/90 border border-blue-500/20 shadow-inner flex flex-col gap-3 min-w-[300px]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-400" />
                  Calibrated Target Role
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {activeRole.demand}
                </span>
              </div>

              <div className="relative">
                <select
                  value={selectedRoleId}
                  onChange={(e) => setSelectedRoleId(e.target.value)}
                  className="w-full bg-[#0B1120] text-white font-bold text-sm sm:text-base px-3.5 py-2.5 rounded-xl border border-white/15 focus:border-blue-500 focus:outline-none cursor-pointer shadow-sm transition-all"
                  id="target-role-select"
                >
                  {TARGET_ROLES.map((role) => (
                    <option key={role.id} value={role.id} className="bg-[#0B1120] text-white">
                      🎯 {role.title} ({role.salary})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center pt-1 border-t border-white/10">
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <p className="text-[11px] text-slate-400">Baseline Match</p>
                  <p className="text-lg font-extrabold text-blue-400">{activeRole.baselineMatch}%</p>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <p className="text-[11px] text-slate-400">Gap Closure Pace</p>
                  <p className="text-sm font-bold text-slate-200 mt-1">{activeRole.gapClosureTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE MATCH UPLIFT SIMULATOR BANNER */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-violet-900/40 border border-blue-500/30 backdrop-blur-md shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Live Readiness Score Uplift Simulator</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Select target courses to see your projected career match score increase from baseline <span className="font-semibold text-slate-100">{activeRole.baselineMatch}%</span>.
              </p>

              {/* Selected Courses Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeRole.priorityCourseIds.map(cId => {
                  const course = COURSES_CATALOG.find(c => c.id === cId);
                  if (!course) return null;
                  const isSelected = selectedSimCourses.includes(cId);
                  return (
                    <button
                      key={cId}
                      onClick={() => toggleSimCourse(cId)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        isSelected 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-400' 
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-white/10'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5 text-blue-200" /> : <Plus className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{course.skillTarget}</span>
                      <span className="text-[10px] text-emerald-300 font-bold">+{course.matchUplift}%</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projected Score Gauge */}
            <div className="flex items-center gap-4 bg-[#070B14]/80 p-4 rounded-xl border border-white/10 min-w-[240px] justify-center">
              <div className="text-center">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Projected Match</p>
                <div className="flex items-baseline justify-center gap-1 mt-0.5">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {computedSimulatedMatch}%
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    (+{computedSimulatedMatch - activeRole.baselineMatch}%)
                  </span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-300 shadow-inner">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS & TABS SECTION */}
        <div className="space-y-4">
          
          {/* Main Navigation Tabs */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 overflow-x-auto gap-4">
            <div className="flex items-center gap-2 min-w-max">
              <button
                onClick={() => setActiveTab('recommended')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'recommended'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-recommended-courses"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Recommended for {activeRole.title}</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-white/20 text-white font-bold">
                  {activeRole.priorityCourseIds.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('catalog')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'catalog'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-all-catalog"
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>All Verified Courses</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-slate-800 text-slate-300">
                  {COURSES_CATALOG.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('my-plan')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'my-plan'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-my-study-plan"
              >
                <BookmarkCheck className="w-4 h-4 text-emerald-300" />
                <span>My Saved Learning Path</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {savedCourseIds.length}
                </span>
              </button>
            </div>

            {onOpenAssessment && (
              <button
                onClick={onOpenAssessment}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-300 hover:text-white bg-blue-500/10 border border-blue-500/25 hover:bg-blue-500/20 transition-all"
              >
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>Re-calibrate Skills</span>
              </button>
            )}
          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses by skill, provider, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0B1120] text-sm text-slate-200 pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-500"
                id="course-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#0B1120] text-sm text-slate-300 px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none cursor-pointer"
                id="category-filter-select"
              >
                <option value="all">All Domains & Categories</option>
                <option value="Data & Analytics">📊 Data & Analytics</option>
                <option value="BI & Visualization">📈 BI & Visualization</option>
                <option value="AI & LLMs">🤖 AI & LLMs</option>
                <option value="Machine Learning">🧠 Machine Learning</option>
                <option value="Software Architecture">🏗️ Software Architecture</option>
                <option value="Cloud & DevOps">☁️ Cloud & DevOps</option>
              </select>
            </div>

            {/* Provider Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full bg-[#0B1120] text-sm text-slate-300 px-3 py-2.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none cursor-pointer"
                id="provider-filter-select"
              >
                <option value="all">All Providers</option>
                <option value="DeepLearning.AI">DeepLearning.AI</option>
                <option value="Coursera">Coursera</option>
                <option value="Stanford Online">Stanford Online</option>
                <option value="Harvard Online">Harvard Online</option>
                <option value="MIT OpenCourseWare">MIT OpenCourseWare</option>
                <option value="edX">edX</option>
                <option value="DataCamp">DataCamp</option>
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-[#0B1120] text-sm text-slate-300 px-3 py-2.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none cursor-pointer"
                id="difficulty-filter-select"
              >
                <option value="all">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* COURSE GRID FEED */}
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center bg-[#0B1120]/60 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No courses match your filter criteria</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Try adjusting your search terms, domain category, or difficulty level to explore more courses.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedProvider('all');
                setSelectedDifficulty('all');
                setActiveTab('recommended');
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const isSaved = savedCourseIds.includes(course.id);
              const notes = getCourseNotes(course);
              const quiz = getCourseQuiz(course);

              return (
                <div
                  key={course.id}
                  className="rounded-2xl bg-[#0B1120]/90 border border-white/10 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group relative"
                >
                  {/* Top Bar: Provider Badge & Match Uplift Pill */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border bg-gradient-to-r ${getProviderColor(course.provider)}`}>
                        {course.provider}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          <TrendingUp className="w-3 h-3" />
                          +{course.matchUplift}% Match
                        </span>
                        <button
                          onClick={() => toggleBookmarkCourse(course.id)}
                          className={`p-1.5 rounded-lg border transition-colors ${
                            isSaved
                              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                          }`}
                          title={isSaved ? 'Remove from My Learning Path' : 'Bookmark to My Learning Path'}
                        >
                          {isSaved ? <BookmarkCheck className="w-4 h-4 text-emerald-400" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Course Title & Target Skill */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mt-1 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-blue-400" />
                        Skill Targeted: <span className="text-slate-200 font-semibold">{course.skillTarget}</span>
                      </p>
                    </div>

                    {/* Meta Row: Instructor, Duration, Rating */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span className="truncate max-w-[140px]" title={course.instructor}>
                        👤 {course.instructor}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}
                      </span>
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {course.rating}
                      </span>
                    </div>

                    {/* Quick Access Badges: Notes & Test */}
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                      <button
                        onClick={() => openCourseModal(course, 'notes')}
                        className="py-1.5 px-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-300 flex items-center justify-center gap-1.5 transition-colors font-medium"
                      >
                        <FileText className="w-3.5 h-3.5 text-blue-400" />
                        <span>Notes ({notes.length})</span>
                      </button>

                      <button
                        onClick={() => openCourseModal(course, 'test')}
                        className="py-1.5 px-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 flex items-center justify-center gap-1.5 transition-colors font-medium"
                      >
                        <CheckSquare className="w-3.5 h-3.5 text-purple-400" />
                        <span>Test ({quiz.length} Qs)</span>
                      </button>
                    </div>

                    {/* Syllabus Highlights Preview */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Syllabus Highlights:</p>
                      <ul className="space-y-1">
                        {course.syllabusHighlights.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2">
                    <button
                      onClick={() => openCourseModal(course, 'syllabus')}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors text-center border border-white/10"
                    >
                      Syllabus & Notes
                    </button>

                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                    >
                      <span>Enroll</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* AI COURSE ADVISOR WIDGET */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1120] border border-blue-500/30 shadow-2xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Ask CareerIQ AI Course Advisor</h3>
              <p className="text-xs text-slate-400">Get instant advice on learning sequence, prerequisites, or workload pacing for {activeRole.title}.</p>
            </div>
          </div>

          <form onSubmit={handleAskAi} className="flex gap-2">
            <input
              type="text"
              placeholder={`e.g., "Which course gives the fastest salary uplift for ${activeRole.title}?"`}
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              className="flex-1 bg-[#070B14] text-sm text-slate-200 px-4 py-3 rounded-xl border border-white/15 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isAiThinking}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 disabled:opacity-50 flex items-center gap-2"
            >
              {isAiThinking ? <Sparkles className="w-4 h-4 animate-spin text-amber-300" /> : <ArrowRight className="w-4 h-4" />}
              <span>Ask AI</span>
            </button>
          </form>

          {aiAnswer && (
            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-sm text-blue-200 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 font-bold text-xs text-blue-400">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>AI Recommendation:</span>
              </div>
              <p className="leading-relaxed text-slate-200">{aiAnswer}</p>
            </div>
          )}
        </div>

      </div>

      {/* FULL COURSE WORKSPACE MODAL (Syllabus, Detailed Notes & Practice Test) */}
      {activeModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1120] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[92vh] overflow-y-auto relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCourse(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border bg-gradient-to-r ${getProviderColor(activeModalCourse.provider)}`}>
                  {activeModalCourse.provider}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  +{activeModalCourse.matchUplift}% Match Uplift
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-slate-300">
                  {activeModalCourse.difficulty}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {activeModalCourse.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span>👨‍🏫 Instructor: <strong className="text-slate-200">{activeModalCourse.instructor}</strong></span>
                <span>⏱️ Duration: <strong className="text-slate-200">{activeModalCourse.duration}</strong></span>
                <span>⭐ Rating: <strong className="text-amber-400">{activeModalCourse.rating}</strong> ({activeModalCourse.reviewsCount})</span>
              </div>
            </div>

            {/* Modal Navigation Tabs (Syllabus, Study Notes, Practice Test) */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <button
                onClick={() => setModalTab('syllabus')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  modalTab === 'syllabus'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4 text-blue-300" />
                <span>1. Full Syllabus</span>
              </button>

              <button
                onClick={() => setModalTab('notes')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  modalTab === 'notes'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4 text-indigo-300" />
                <span>2. Comprehensive Notes</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/30 text-indigo-200">
                  {getCourseNotes(activeModalCourse).length} Modules
                </span>
              </button>

              <button
                onClick={() => setModalTab('test')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  modalTab === 'test'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <CheckSquare className="w-4 h-4 text-purple-300" />
                <span>3. Practice Test</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-500/30 text-purple-200">
                  {getCourseQuiz(activeModalCourse).length} Qs
                </span>
              </button>
            </div>

            {/* TAB 1: FULL SYLLABUS */}
            {modalTab === 'syllabus' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Meta details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#070B14] border border-white/10 text-xs">
                  <div>
                    <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Prerequisites</p>
                    <p className="text-slate-200 font-medium">{activeModalCourse.prerequisites || 'None specified. Open to all learners.'}</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-400 uppercase tracking-wider mb-1">Certificate Type</p>
                    <p className="text-emerald-400 font-semibold">{activeModalCourse.certificateType || 'Verified Industry Certificate'}</p>
                  </div>
                </div>

                {/* Modules list */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      Course Modules & Syllabus Outline
                    </span>
                    <button
                      onClick={() => setModalTab('notes')}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>Read Study Notes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </h4>

                  <div className="space-y-2.5">
                    {activeModalCourse.syllabusHighlights.map((highlight, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#070B14]/80 border border-white/10 flex items-start gap-3.5">
                        <div className="w-7 h-7 rounded-xl bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-white leading-snug">{highlight}</p>
                          <p className="text-xs text-slate-400">Includes theory lectures, hands-on lab environment, and automated grading assignments.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: DETAILED MODULE STUDY NOTES */}
            {modalTab === 'notes' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <BrainCircuit className="w-4 h-4 text-indigo-400" />
                      Comprehensive Study Notes & Code Snippets
                    </h4>
                    <p className="text-xs text-slate-300">Study key concepts, cheat sheets, and syntax blueprints before taking the skill test.</p>
                  </div>
                  <button
                    onClick={() => setModalTab('test')}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <span>Take Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {getCourseNotes(activeModalCourse).map((note) => (
                    <div key={note.moduleNumber} className="p-5 rounded-2xl bg-[#070B14] border border-white/10 space-y-4 shadow-lg">
                      {/* Module Title & Brief */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            Module {note.moduleNumber} Brief
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-white">{note.moduleTitle}</h4>
                        </div>
                      </div>

                      {/* Important Points List */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-blue-400 uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span>Important Key Points & Core Takeaways:</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2 pl-1">
                          {note.keyTakeaways.map((point, pIdx) => (
                            <div key={pIdx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200 flex items-start gap-2.5 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                              <span className="font-medium">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Code Snippet (if available) */}
                      {note.codeSnippet && (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-1.5">
                              <Code className="w-4 h-4 text-cyan-400" />
                              Essential Code Blueprint & Syntax Rules:
                            </span>
                          </div>
                          <pre className="p-4 rounded-xl bg-[#03060D] border border-cyan-500/20 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed shadow-inner">
                            {note.codeSnippet}
                          </pre>
                        </div>
                      )}

                      {/* Cheatsheet summary box */}
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200 flex items-start gap-2.5">
                        <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-amber-300">Technical Interview & Exam Hotspot:</strong> {note.cheatSheetSummary}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => setModalTab('test')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckSquare className="w-4 h-4" />
                    <span>Finished Studying Notes? Take Interactive Practice Test Now</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: INTERACTIVE PRACTICE TEST */}
            {modalTab === 'test' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Quiz Header & Status */}
                <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-purple-400" />
                        <h4 className="text-sm font-bold text-white">Full Skill Mastery Test (20 Questions)</h4>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          20 Questions
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">Complete all 20 questions based on course notes to test your technical skills and unlock your certificate.</p>
                    </div>

                    <button
                      onClick={() => {
                        setUserQuizAnswers({});
                        setIsQuizSubmitted(false);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 flex items-center gap-1.5 transition-colors border border-white/10 shrink-0"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Test</span>
                    </button>
                  </div>

                  {/* 20-Question Completion Meter */}
                  {(() => {
                    const quizList = getCourseQuiz(activeModalCourse);
                    const answeredCount = Object.keys(userQuizAnswers).length;
                    const pct = Math.round((answeredCount / quizList.length) * 100);

                    return (
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                          <span>Answered: <strong className="text-purple-300 font-bold">{answeredCount} / {quizList.length}</strong> questions</span>
                          <span className="text-purple-400 font-bold">{pct}% Completed</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-white/10">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400 transition-all duration-300 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Quiz Questions List */}
                <div className="space-y-6">
                  {getCourseQuiz(activeModalCourse).map((q, qIndex) => {
                    const selectedOpt = userQuizAnswers[q.id];
                    const isAnswered = selectedOpt !== undefined;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl bg-[#070B14] border border-white/10 space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            Question {qIndex + 1}
                          </span>
                          <h4 className="text-sm font-bold text-white leading-snug flex-1">{q.question}</h4>
                        </div>

                        {/* Options list */}
                        <div className="space-y-2">
                          {q.options.map((opt, optIndex) => {
                            let btnStyle = "bg-slate-900/90 text-slate-200 border-white/10 hover:border-purple-500/40 hover:bg-slate-800";
                            
                            if (isQuizSubmitted) {
                              if (optIndex === q.correctOptionIndex) {
                                btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold";
                              } else if (selectedOpt === optIndex) {
                                btnStyle = "bg-rose-500/20 text-rose-300 border-rose-500/50";
                              }
                            } else if (selectedOpt === optIndex) {
                              btnStyle = "bg-purple-600/30 text-white border-purple-400 font-bold shadow-md shadow-purple-500/20";
                            }

                            return (
                              <button
                                key={optIndex}
                                disabled={isQuizSubmitted}
                                onClick={() => {
                                  setUserQuizAnswers({ ...userQuizAnswers, [q.id]: optIndex });
                                }}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold shrink-0">
                                    {String.fromCharCode(65 + optIndex)}
                                  </div>
                                  <span>{opt}</span>
                                </div>
                                {isQuizSubmitted && optIndex === q.correctOptionIndex && (
                                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Instant Feedback Explanation (when submitted) */}
                        {isQuizSubmitted && (
                          <div className={`p-3.5 rounded-xl text-xs space-y-1 border ${
                            selectedOpt === q.correctOptionIndex
                              ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
                              : 'bg-rose-950/40 border-rose-500/30 text-rose-200'
                          }`}>
                            <div className="flex items-center gap-1.5 font-bold">
                              {selectedOpt === q.correctOptionIndex ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                  <span className="text-emerald-400">Correct Answer!</span>
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="w-4 h-4 text-rose-400" />
                                  <span className="text-rose-400">Incorrect Choice</span>
                                </>
                              )}
                            </div>
                            <p className="leading-relaxed text-slate-300">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Quiz Submission / Results Screen */}
                {!isQuizSubmitted ? (
                  <div className="pt-2">
                    <button
                      onClick={() => setIsQuizSubmitted(true)}
                      disabled={Object.keys(userQuizAnswers).length === 0}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Test Answers & View Grading Report
                    </button>
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-[#070B14] border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                    {(() => {
                      const res = calculateQuizScore(activeModalCourse);
                      return (
                        <>
                          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
                            <ShieldCheck className="w-8 h-8" />
                          </div>

                          <div className="space-y-1">
                            <h3 className="text-xl font-black text-white">
                              {res.isPassed ? '🎉 Practice Assessment Passed!' : 'Review Study Notes & Try Again'}
                            </h3>
                            <p className="text-xs text-slate-300">
                              Score achieved: <strong className="text-emerald-400 text-lg font-bold">{res.percentage}%</strong> ({res.correctCount} out of {res.total} correct)
                            </p>
                          </div>

                          {res.isPassed ? (
                            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200 max-w-md mx-auto space-y-2">
                              <p className="font-bold text-emerald-300">🏆 Verified Mastery Certificate Unlocked!</p>
                              <p className="text-slate-300">You have verified your theoretical understanding of {activeModalCourse.skillTarget}. This score counts towards your overall CareerIQ readiness boost (+{activeModalCourse.matchUplift}%).</p>
                            </div>
                          ) : (
                            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 max-w-md mx-auto">
                              Passing benchmark is 75%. We recommend reviewing Module Study Notes and retaking the quiz.
                            </div>
                          )}

                          <div className="flex justify-center gap-3 pt-2">
                            <button
                              onClick={() => {
                                setUserQuizAnswers({});
                                setIsQuizSubmitted(false);
                              }}
                              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10"
                            >
                              Retake Practice Test
                            </button>

                            <button
                              onClick={() => setModalTab('notes')}
                              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
                            >
                              Review Study Notes
                            </button>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3 justify-end">
              <button
                onClick={() => {
                  toggleBookmarkCourse(activeModalCourse.id);
                }}
                className="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-2"
              >
                {savedCourseIds.includes(activeModalCourse.id) ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                    <span>Saved in Learning Path</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Add to Study Plan</span>
                  </>
                )}
              </button>

              <a
                href={activeModalCourse.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
              >
                <span>Start Learning on {activeModalCourse.provider}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default CourseSuggestionsPage;
