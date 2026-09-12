import React, { useState } from 'react';
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  DollarSign, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface JobMatchingProps {
  onOpenAssessment: () => void;
}

export const JobMatching: React.FC<JobMatchingProps> = ({ onOpenAssessment }) => {
  const [expandedJob, setExpandedJob] = useState<string | null>('job-1');

  const jobs = [
    {
      id: 'job-1',
      title: 'Data Analyst',
      company: 'ABC Technologies',
      location: 'San Francisco, CA (Hybrid / Remote)',
      salary: '$92,000 - $118,000 / yr',
      matchScore: 92,
      type: 'Full-time',
      verifiedSkills: ['Excel', 'Python', 'SQL'],
      missingSkills: ['Power BI'],
      whyMatch:
        'Your demonstrated mastery in advanced Excel and automated Python analysis aligns with 85% of their daily workflows. Completing the introductory Power BI dashboard will put you in the top 3 candidate shortlist.',
      perks: ['Equity options', '$3,500 learning stipend', 'Flexible hours'],
    },
    {
      id: 'job-2',
      title: 'Business Analyst',
      company: 'XYZ Corporation',
      location: 'New York, NY (Hybrid)',
      salary: '$95,000 - $125,000 / yr',
      matchScore: 87,
      type: 'Full-time',
      verifiedSkills: ['Excel', 'Communication', 'Python'],
      missingSkills: ['Business Analysis (BRD/UML)'],
      whyMatch:
        'Strong fit due to proven analytical modeling and cross-functional communication history. The team specifically values your Python scripting capabilities for automating manual business reports.',
      perks: ['Comprehensive healthcare', 'Annual performance bonus', 'Mentorship program'],
    },
    {
      id: 'job-3',
      title: 'Product Operations Analyst',
      company: 'NovaCloud Systems',
      location: 'Austin, TX (Remote)',
      salary: '$88,000 - $110,000 / yr',
      matchScore: 81,
      type: 'Full-time',
      verifiedSkills: ['Python', 'SQL', 'Data Cleaning'],
      missingSkills: ['Mixpanel / Product Analytics'],
      whyMatch:
        'Your SQL querying and quantitative background match their operations triage pipeline. They provide internal onboarding for their product tracking toolset.',
      perks: ['100% remote', 'Home office budget', 'Unlimited PTO'],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[550px] h-[450px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Verified Talent Exchange
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            From skills to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              opportunities.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Find opportunities that match your actual skills — not just your degree. Transparent match scores show exactly why employers want your profile.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {jobs.map((job) => {
            const isExpanded = expandedJob === job.id;
            return (
              <div
                key={job.id}
                className="rounded-3xl p-6 sm:p-7 bg-slate-900/85 border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Company & Match Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-blue-400 block mb-1">
                        {job.company}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {job.title}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-blue-400 shadow-sm shadow-blue-500/20">
                        {job.matchScore}% Match
                      </span>
                    </div>
                  </div>

                  {/* Location & Salary */}
                  <div className="space-y-1.5 text-xs text-slate-400 mb-5 pb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-slate-300">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  {/* Skills Verified vs Gaps */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Skill Breakdown
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {job.verifiedSkills.map((s, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {s}
                          </span>
                        ))}
                        {job.missingSkills.map((s, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300"
                          >
                            <AlertCircle className="w-3 h-3 text-amber-400" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expandable "Why this matches you" */}
                  <div className="mb-6">
                    <button
                      onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white py-2 border-t border-b border-white/[0.06]"
                    >
                      <span className="flex items-center gap-1.5 text-blue-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        Why this matches you
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.05] text-xs text-slate-300 leading-relaxed animate-fadeIn">
                        {job.whyMatch}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenAssessment}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800/80 hover:bg-blue-600 border border-white/[0.08] hover:border-blue-500/50 transition-all duration-200 group"
                >
                  <span>View Opportunity</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
