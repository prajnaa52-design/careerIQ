import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Search, 
  MapPin, 
  DollarSign, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Filter, 
  GraduationCap, 
  Calendar, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight, 
  X, 
  Zap, 
  Award,
  Clock,
  ArrowRight,
  UserCheck,
  CheckSquare
} from 'lucide-react';
import { JOB_VACANCIES_CATALOG, JobVacancy } from '../data/jobsData';

export interface JobVacanciesPageProps {
  onOpenAssessment?: () => void;
  onOpenScanner?: () => void;
}

export const JobVacanciesPage: React.FC<JobVacanciesPageProps> = ({ 
  onOpenAssessment,
  onOpenScanner
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'internship' | 'fulltime' | 'highmatch'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWorkModel, setSelectedWorkModel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Selected job for deep-dive application modal
  const [activeJobModal, setActiveJobModal] = useState<JobVacancy | null>(null);

  // Filtered jobs evaluation
  const filteredJobs = useMemo(() => {
    return JOB_VACANCIES_CATALOG.filter(job => {
      // Type Tab filter
      if (activeTab === 'internship') {
        if (job.employmentType !== 'Internship' && job.employmentType !== 'Co-op') return false;
      } else if (activeTab === 'fulltime') {
        if (job.employmentType !== 'Full-Time') return false;
      } else if (activeTab === 'highmatch') {
        if (job.matchScore < 85) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.company.toLowerCase().includes(q);
        const matchesSkills = job.requiredSkills.some(s => s.toLowerCase().includes(q));
        const matchesLoc = job.location.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCompany && !matchesSkills && !matchesLoc) return false;
      }

      // Domain Category Filter
      if (selectedCategory !== 'all') {
        if (job.category !== selectedCategory) return false;
      }

      // Work Model Filter
      if (selectedWorkModel !== 'all') {
        if (job.workModel !== selectedWorkModel) return false;
      }

      return true;
    });
  }, [activeTab, searchQuery, selectedCategory, selectedWorkModel]);

  const internshipsCount = useMemo(() => {
    return JOB_VACANCIES_CATALOG.filter(j => j.employmentType === 'Internship' || j.employmentType === 'Co-op').length;
  }, []);

  const fulltimeCount = useMemo(() => {
    return JOB_VACANCIES_CATALOG.filter(j => j.employmentType === 'Full-Time').length;
  }, []);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="job-vacancies">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-violet-600/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-emerald-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">

        {/* HERO HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-indigo-500/15 border border-blue-500/25 text-xs font-semibold text-blue-300 shadow-sm">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>Verified Opportunities & Internships</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Internship & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">Job Vacancy Suggestions</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Discover verified positions at Google, OpenAI, Meta, Stripe, Netflix, and NVIDIA tailored directly to your verified skills. View AI match scores, skill gap bridges, and direct application portals.
              </p>
            </div>

            {/* Top Hiring Companies Carousel / Badges */}
            <div className="p-5 rounded-2xl bg-[#070B14]/90 border border-white/10 shadow-inner flex flex-col gap-3 min-w-[280px]">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                Featured Hiring Partners
              </span>
              <div className="flex flex-wrap gap-2">
                {['Google', 'OpenAI', 'Meta', 'Stripe', 'Netflix', 'NVIDIA', 'Microsoft', 'Databricks'].map((co) => (
                  <span key={co} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                    {co}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Verified Match Pipeline</span>
                <span className="text-emerald-400 font-bold">100% Direct Apply</span>
              </div>
            </div>
          </div>
        </div>

        {/* TABS & SEARCH CONTROLS */}
        <div className="space-y-4">
          
          {/* Main Navigation Tabs */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 overflow-x-auto gap-4">
            <div className="flex items-center gap-2 min-w-max">
              <button
                onClick={() => setActiveTab('all')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-all-jobs"
              >
                <Briefcase className="w-4 h-4 text-blue-300" />
                <span>All Openings</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-white/20 text-white font-bold">
                  {JOB_VACANCIES_CATALOG.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('internship')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'internship'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-internships"
              >
                <GraduationCap className="w-4 h-4 text-emerald-300" />
                <span>🎓 Internships & Co-Ops</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {internshipsCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('fulltime')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'fulltime'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-fulltime-jobs"
              >
                <Building2 className="w-4 h-4 text-indigo-300" />
                <span>💼 Full-Time Roles</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  {fulltimeCount}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('highmatch')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'highmatch'
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-highmatch-jobs"
              >
                <TrendingUp className="w-4 h-4 text-amber-300" />
                <span>⭐ High Match (85%+)</span>
              </button>
            </div>

            {onOpenScanner && (
              <button
                onClick={onOpenScanner}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-blue-300 hover:text-white bg-blue-500/10 border border-blue-500/25 hover:bg-blue-500/20 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Scan Resume for Match</span>
              </button>
            )}
          </div>

          {/* Search & Multi-Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search vacancies by title, company, skill, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0B1120] text-sm text-slate-200 pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-500"
                id="vacancy-search-input"
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

            {/* Domain Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#0B1120] text-sm text-slate-300 px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none cursor-pointer"
                id="job-category-select"
              >
                <option value="all">All Domains & Categories</option>
                <option value="Data & Analytics">📊 Data & Analytics</option>
                <option value="AI & Machine Learning">🤖 AI & Machine Learning</option>
                <option value="Software & Cloud">☁️ Software & Cloud</option>
                <option value="Product & Strategy">🎯 Product & Strategy</option>
              </select>
            </div>

            {/* Work Model Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedWorkModel}
                onChange={(e) => setSelectedWorkModel(e.target.value)}
                className="w-full bg-[#0B1120] text-sm text-slate-300 px-3.5 py-2.5 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none cursor-pointer"
                id="job-workmodel-select"
              >
                <option value="all">All Work Models</option>
                <option value="Remote">🌐 Remote</option>
                <option value="Hybrid">🏢 Hybrid</option>
                <option value="On-Site">📍 On-Site</option>
              </select>
            </div>
          </div>
        </div>

        {/* VACANCY CARDS GRID */}
        {filteredJobs.length === 0 ? (
          <div className="p-12 text-center bg-[#0B1120]/60 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No job or internship vacancies match your filters</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Try broadening your work model, domain category, or clearing search keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedWorkModel('all');
                setActiveTab('all');
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl bg-[#0B1120]/90 border border-white/10 hover:border-blue-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group relative"
              >
                <div className="space-y-4">
                  {/* Company Logo & Match Score */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.companyLogoBg} flex items-center justify-center text-white font-extrabold text-sm shadow-md`}>
                        {job.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white group-hover:text-blue-300 transition-colors">
                          {job.company}
                        </h4>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {job.location.split('(')[0]}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <TrendingUp className="w-3 h-3" />
                      {job.matchScore}% Match
                    </span>
                  </div>

                  {/* Title & Type Badge */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        job.employmentType === 'Internship' || job.employmentType === 'Co-op'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                          : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                      }`}>
                        {job.season ? `${job.season} ${job.employmentType}` : job.employmentType}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 px-2 py-0.5 rounded-full bg-white/5">
                        {job.workModel}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white leading-snug">
                      {job.title}
                    </h3>
                  </div>

                  {/* Salary Band */}
                  <div className="p-2.5 rounded-xl bg-[#070B14] border border-white/5 flex items-center gap-2 text-xs">
                    <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-bold text-emerald-400">{job.salary}</span>
                  </div>

                  {/* Skills Match Summary */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Skill Alignment:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {job.matchedSkills.map(skill => (
                        <span key={skill} className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          {skill}
                        </span>
                      ))}
                      {job.missingSkills.map(skill => (
                        <span key={skill} className="px-2 py-0.5 rounded text-[11px] font-medium bg-rose-500/10 border border-rose-500/25 text-rose-300 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-rose-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Why Match AI Snippet */}
                  <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-200 line-clamp-2">
                    <strong className="text-blue-300 font-semibold">AI Match Reason:</strong> {job.whyMatch}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => setActiveJobModal(job)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors text-center border border-white/10"
                  >
                    View Details
                  </button>

                  <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Apply</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* JOB VACANCY APPLICATION & DETAIL MODAL */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1120] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveJobModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 pr-8">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeJobModal.companyLogoBg} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                  {activeJobModal.company.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{activeJobModal.company}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {activeJobModal.location} • <span className="text-emerald-400 font-semibold">{activeJobModal.workModel}</span>
                  </p>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {activeJobModal.title}
              </h2>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  ⚡ {activeJobModal.matchScore}% Match Score
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-slate-300">
                  {activeJobModal.employmentType}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  💰 {activeJobModal.salary}
                </span>
              </div>
            </div>

            {/* Why You Match AI Breakdown */}
            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-blue-300 font-bold">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>CareerIQ AI Compatibility Analysis:</span>
              </div>
              <p className="text-slate-200 leading-relaxed">{activeJobModal.whyMatch}</p>
            </div>

            {/* Responsibilities List */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
                Key Role Responsibilities:
              </h4>
              <ul className="space-y-1.5 pl-1">
                {activeJobModal.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="text-xs text-slate-200 flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks & Compensation */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Compensation & Perks:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeJobModal.perks.map((perk, pIdx) => (
                  <span key={pIdx} className="px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs font-medium">
                    ✨ {perk}
                  </span>
                ))}
              </div>
            </div>

            {/* Application Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span>Posted: <strong>{activeJobModal.postedDate}</strong></span>
                {activeJobModal.deadline && <span> • Deadline: <strong className="text-rose-400">{activeJobModal.deadline}</strong></span>}
              </div>

              <a
                href={activeJobModal.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
              >
                <span>Apply on {activeJobModal.company} Career Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default JobVacanciesPage;
