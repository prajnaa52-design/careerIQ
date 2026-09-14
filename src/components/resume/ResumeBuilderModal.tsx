import React, { useState } from 'react';
import { X, Save, Download, Plus, Trash2, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ResumeBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeBuilderModal: React.FC<ResumeBuilderModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<'personal' | 'experience' | 'education' | 'skills'>('personal');
  const [theme, setTheme] = useState<'professional' | 'modern' | 'classic' | 'minimalist'>('professional');
  
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Alex Mercer',
    email: 'alex.mercer@careeriq.ai',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/alexmercer',
    website: 'alexmercer.dev',
    summary: 'Lead AI Engineer with 6+ years of experience architecting scalable machine learning pipelines and deploying generative AI solutions.'
  });

  const [experience, setExperience] = useState([
    {
      id: '1',
      company: 'DataTech Solutions',
      role: 'Senior Machine Learning Engineer',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: 'Led a team of 4 engineers to rebuild the core recommendation engine, improving user engagement by 24%.\nReduced model inference latency by 40% using ONNX and TensorRT.\nArchitected an automated MLOps pipeline reducing deployment time from days to hours.'
    }
  ]);

  const [education, setEducation] = useState([
    {
      id: '1',
      school: 'University of California, Berkeley',
      degree: 'M.S. Computer Science',
      startDate: 'Aug 2018',
      endDate: 'May 2020',
      description: 'Specialization in Artificial Intelligence and Distributed Systems. GPA: 3.9/4.0'
    }
  ]);

  const [skills, setSkills] = useState('Python, PyTorch, TensorFlow, SQL, Kubernetes, AWS, System Design');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const addExperience = () => {
    setExperience([...experience, { id: Date.now().toString(), company: '', role: '', startDate: '', endDate: '', description: '' }]);
  };

  const removeExperience = (id: string) => {
    setExperience(experience.filter(e => e.id !== id));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setExperience(experience.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  const addEducation = () => {
    setEducation([...education, { id: Date.now().toString(), school: '', degree: '', startDate: '', endDate: '', description: '' }]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(e => e.id !== id));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setEducation(education.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  const getThemeClasses = () => {
    switch(theme) {
      case 'professional':
        return {
          container: 'bg-white w-full max-w-[800px] min-h-[1056px] shadow-2xl p-10 font-sans text-slate-800 print:shadow-none print:p-0',
          name: 'text-[38px] font-bold text-[#0f2e4a] tracking-tight uppercase mb-2',
          contact: 'flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-600 mb-6 border-b-2 border-slate-900 pb-4',
          summary: 'text-[14px] leading-relaxed text-slate-700 mb-6',
          sectionHeader: 'text-[13px] font-bold uppercase tracking-widest text-[#0f2e4a] mb-4 border-b border-slate-300 pb-1',
          roleRow: 'flex justify-between items-baseline mb-1',
          role: 'font-bold text-[#0f2e4a] text-[15px]',
          date: 'text-[11px] font-bold text-slate-500 uppercase',
          company: 'text-[14px] text-slate-700 mb-2',
          bullets: 'list-disc list-outside text-[13px] text-slate-700 space-y-1.5 ml-4',
          bulletItem: 'leading-relaxed pl-1',
          skills: 'text-[13px] text-slate-700 leading-relaxed'
        };
      case 'classic':
        return {
          container: 'bg-white w-full max-w-[800px] min-h-[1056px] shadow-2xl p-12 font-serif text-gray-900 print:shadow-none print:p-0',
          name: 'text-4xl font-normal text-center mb-1 uppercase tracking-wide',
          contact: 'flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[13px] text-gray-600 mb-6',
          summary: 'text-[14px] leading-relaxed text-gray-800 mb-6 text-center italic px-8',
          sectionHeader: 'text-lg font-bold uppercase text-center border-b border-double border-gray-400 pb-1 mb-4 mt-6',
          roleRow: 'flex justify-between items-baseline mb-1',
          role: 'font-bold text-gray-900 text-[15px]',
          date: 'text-[12px] font-medium text-gray-600 italic',
          company: 'text-[14px] text-gray-800 italic mb-2',
          bullets: 'list-disc list-outside text-[13px] text-gray-800 space-y-1 ml-5',
          bulletItem: 'leading-relaxed pl-1',
          skills: 'text-[14px] text-gray-800 leading-relaxed text-center px-4'
        };
      case 'minimalist':
        return {
          container: 'bg-white w-full max-w-[800px] min-h-[1056px] shadow-2xl p-10 font-sans text-gray-800 print:shadow-none print:p-0',
          name: 'text-3xl font-light text-gray-900 mb-2',
          contact: 'flex flex-col gap-1 text-[12px] text-gray-500 mb-8',
          summary: 'text-[13px] leading-relaxed text-gray-600 mb-8',
          sectionHeader: 'text-[11px] font-medium uppercase tracking-widest text-gray-400 mb-4 mt-8',
          roleRow: 'flex justify-between items-baseline mb-1',
          role: 'font-medium text-gray-900 text-[14px]',
          date: 'text-[11px] text-gray-400',
          company: 'text-[13px] text-gray-600 mb-2',
          bullets: 'text-[13px] text-gray-600 space-y-2',
          bulletItem: 'leading-relaxed flex items-start gap-2 before:content-["-"] before:text-gray-400',
          skills: 'text-[13px] text-gray-600 leading-relaxed'
        };
      case 'modern':
      default:
        return {
          container: 'bg-white w-full max-w-[800px] min-h-[1056px] shadow-2xl p-10 font-sans text-slate-900 print:shadow-none print:p-0',
          name: 'text-4xl font-black text-slate-900 tracking-tighter mb-2',
          contact: 'flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-medium text-slate-500 mb-8',
          summary: 'text-[14px] leading-relaxed text-slate-700 mb-8',
          sectionHeader: 'text-[12px] font-black uppercase tracking-widest text-blue-600 mb-4',
          roleRow: 'flex justify-between items-baseline mb-1',
          role: 'font-bold text-slate-900 text-[15px]',
          date: 'text-[12px] font-bold text-slate-400',
          company: 'text-[14px] font-medium text-slate-600 mb-2',
          bullets: 'list-none text-[14px] text-slate-700 space-y-2 border-l-2 border-slate-100 pl-4',
          bulletItem: 'leading-relaxed relative before:content-[""] before:absolute before:-left-[21px] before:top-2 before:w-2 before:h-2 before:bg-blue-100 before:rounded-full',
          skills: 'text-[14px] text-slate-700 leading-relaxed'
        };
    }
  };

  const tc = getThemeClasses();
  const sep = theme === 'minimalist' ? '' : '• ';

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" style={{ printColorAdjust: 'exact' }}>
      
      {/* Hide the modal UI when printing, only show the preview pane */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #resume-preview-pane, #resume-preview-pane * { visibility: visible; }
          #resume-preview-pane { 
            position: absolute; left: 0; top: 0; 
            width: 100%; height: 100%; 
            margin: 0; padding: 20mm; 
            box-shadow: none; border-radius: 0; 
          }
          #builder-modal-container { background: transparent; border: none; box-shadow: none; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div id="builder-modal-container" className="w-full max-w-7xl h-[90vh] bg-[#0B1120] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-blue-500/20">
        
        {/* Header */}
        <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 shrink-0 bg-slate-900/50 no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Save className="w-4 h-4" />
            </div>
            <h2 className="font-bold text-white tracking-wide">Resume Builder</h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handlePrint} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content: Split Pane */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Pane: Form Editor */}
          <div className="w-full lg:w-[45%] h-full overflow-y-auto bg-[#070B14] p-6 border-r border-white/10 scrollbar-thin no-print">
            
            <div className="space-y-4">

              {/* Theme Selector */}
              <div className="border border-white/10 rounded-xl bg-slate-900/40 p-4 mb-4">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Resume Theme</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['professional', 'modern', 'classic', 'minimalist'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t as any)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg capitalize transition-colors ${
                        theme === t ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Personal Info Accordion */}
              <div className="border border-white/10 rounded-xl bg-slate-900/40 overflow-hidden">
                <button onClick={() => setActiveSection(activeSection === 'personal' ? '' as any : 'personal')} className="w-full flex items-center justify-between p-4 bg-slate-900/60 hover:bg-slate-800/60 transition-colors">
                  <span className="font-semibold text-white">Personal Information</span>
                  {activeSection === 'personal' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {activeSection === 'personal' && (
                  <div className="p-4 space-y-4 border-t border-white/5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">Full Name</label>
                        <input type="text" value={personalInfo.fullName} onChange={e => setPersonalInfo({...personalInfo, fullName: e.target.value})} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
                        <input type="email" value={personalInfo.email} onChange={e => setPersonalInfo({...personalInfo, email: e.target.value})} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">Phone</label>
                        <input type="text" value={personalInfo.phone} onChange={e => setPersonalInfo({...personalInfo, phone: e.target.value})} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">LinkedIn</label>
                        <input type="text" value={personalInfo.linkedin} onChange={e => setPersonalInfo({...personalInfo, linkedin: e.target.value})} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-xs font-medium text-slate-400 mb-1">Professional Summary</label>
                        <textarea value={personalInfo.summary} onChange={e => setPersonalInfo({...personalInfo, summary: e.target.value})} rows={3} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Experience Accordion */}
              <div className="border border-white/10 rounded-xl bg-slate-900/40 overflow-hidden">
                <button onClick={() => setActiveSection(activeSection === 'experience' ? '' as any : 'experience')} className="w-full flex items-center justify-between p-4 bg-slate-900/60 hover:bg-slate-800/60 transition-colors">
                  <span className="font-semibold text-white">Work Experience</span>
                  {activeSection === 'experience' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {activeSection === 'experience' && (
                  <div className="p-4 space-y-6 border-t border-white/5">
                    {experience.map((exp, index) => (
                      <div key={exp.id} className="relative p-4 rounded-lg bg-slate-800/30 border border-white/5">
                        <button onClick={() => removeExperience(exp.id)} className="absolute top-3 right-3 text-slate-500 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">Company</label>
                            <input type="text" value={exp.company} onChange={e => updateExperience(exp.id, 'company', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">Role/Title</label>
                            <input type="text" value={exp.role} onChange={e => updateExperience(exp.id, 'role', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">Start Date</label>
                            <input type="text" value={exp.startDate} onChange={e => updateExperience(exp.id, 'startDate', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="e.g. Jan 2020" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">End Date</label>
                            <input type="text" value={exp.endDate} onChange={e => updateExperience(exp.id, 'endDate', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="e.g. Present" />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-xs font-medium text-slate-400 mb-1">Description (Bullet points)</label>
                            <textarea value={exp.description} onChange={e => updateExperience(exp.id, 'description', e.target.value)} rows={4} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button onClick={addExperience} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed border-white/20 text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm">
                      <Plus className="w-4 h-4" /> Add Experience
                    </button>
                  </div>
                )}
              </div>

              {/* Education Accordion */}
              <div className="border border-white/10 rounded-xl bg-slate-900/40 overflow-hidden">
                <button onClick={() => setActiveSection(activeSection === 'education' ? '' as any : 'education')} className="w-full flex items-center justify-between p-4 bg-slate-900/60 hover:bg-slate-800/60 transition-colors">
                  <span className="font-semibold text-white">Education</span>
                  {activeSection === 'education' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {activeSection === 'education' && (
                  <div className="p-4 space-y-6 border-t border-white/5">
                    {education.map((edu) => (
                      <div key={edu.id} className="relative p-4 rounded-lg bg-slate-800/30 border border-white/5">
                        <button onClick={() => removeEducation(edu.id)} className="absolute top-3 right-3 text-slate-500 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">Institution</label>
                            <input type="text" value={edu.school} onChange={e => updateEducation(edu.id, 'school', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">Degree</label>
                            <input type="text" value={edu.degree} onChange={e => updateEducation(edu.id, 'degree', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">Start Date</label>
                            <input type="text" value={edu.startDate} onChange={e => updateEducation(edu.id, 'startDate', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-400 mb-1">End Date</label>
                            <input type="text" value={edu.endDate} onChange={e => updateEducation(edu.id, 'endDate', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-xs font-medium text-slate-400 mb-1">Additional Details (GPA, Honors)</label>
                            <input type="text" value={edu.description} onChange={e => updateEducation(edu.id, 'description', e.target.value)} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button onClick={addEducation} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed border-white/20 text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm">
                      <Plus className="w-4 h-4" /> Add Education
                    </button>
                  </div>
                )}
              </div>

              {/* Skills Accordion */}
              <div className="border border-white/10 rounded-xl bg-slate-900/40 overflow-hidden">
                <button onClick={() => setActiveSection(activeSection === 'skills' ? '' as any : 'skills')} className="w-full flex items-center justify-between p-4 bg-slate-900/60 hover:bg-slate-800/60 transition-colors">
                  <span className="font-semibold text-white">Skills</span>
                  {activeSection === 'skills' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {activeSection === 'skills' && (
                  <div className="p-4 border-t border-white/5">
                    <label className="block text-xs font-medium text-slate-400 mb-1">Comma-separated skills</label>
                    <textarea value={skills} onChange={e => setSkills(e.target.value)} rows={3} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Pane: Live Preview */}
          <div className="hidden lg:flex w-[55%] h-full bg-[#4a5568] p-8 overflow-y-auto items-start justify-center scrollbar-thin">
            <div id="resume-preview-pane" className={tc.container}>
              
              {/* Preview Header */}
              <div className={theme === 'modern' || theme === 'minimalist' ? 'mb-8' : 'mb-6'}>
                <h1 className={tc.name}>{personalInfo.fullName || 'YOUR NAME'}</h1>
                <div className={tc.contact}>
                  {personalInfo.email && <span>{personalInfo.email}</span>}
                  {personalInfo.phone && <span>{sep}{personalInfo.phone}</span>}
                  {personalInfo.linkedin && <span>{sep}{personalInfo.linkedin}</span>}
                  {personalInfo.website && <span>{sep}{personalInfo.website}</span>}
                </div>
              </div>

              {/* Preview Summary */}
              {personalInfo.summary && (
                <div className="mb-6">
                  <p className={tc.summary}>{personalInfo.summary}</p>
                </div>
              )}

              {/* Preview Experience */}
              {experience.some(e => e.company || e.role) && (
                <div className="mb-6">
                  <h2 className={tc.sectionHeader}>Experience</h2>
                  <div className="space-y-4">
                    {experience.map(exp => (
                      <div key={exp.id}>
                        <div className={tc.roleRow}>
                          <h3 className={tc.role}>{exp.role}</h3>
                          <span className={tc.date}>{exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}</span>
                        </div>
                        <h4 className={tc.company}>{exp.company}</h4>
                        {exp.description && (
                          <ul className={tc.bullets}>
                            {exp.description.split('\n').filter(line => line.trim()).map((line, i) => (
                              <li key={i} className={tc.bulletItem}>{line.trim()}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview Education */}
              {education.some(e => e.school || e.degree) && (
                <div className="mb-6">
                  <h2 className={tc.sectionHeader}>Education</h2>
                  <div className="space-y-4">
                    {education.map(edu => (
                      <div key={edu.id}>
                        <div className={tc.roleRow}>
                          <h3 className={tc.role}>{edu.school}</h3>
                          <span className={tc.date}>{edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}</span>
                        </div>
                        <h4 className={tc.company}>{edu.degree}</h4>
                        {edu.description && <p className={tc.skills} style={{marginTop: '2px'}}>{edu.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preview Skills */}
              {skills && (
                <div>
                  <h2 className={tc.sectionHeader}>Skills</h2>
                  <p className={tc.skills}>
                    {skills}
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
