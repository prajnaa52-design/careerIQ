import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Cpu, ChevronRight, User, LogOut, Sparkles, ChevronDown, CheckCircle2, FileText, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenAssessment: () => void;
  onOpenScanner?: () => void;
  onOpenBuilder?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment, onOpenScanner, onOpenBuilder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, logout, openLogin, openSignUp } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Scan Resume', href: '#resume-scanner' },
    { name: 'Course Suggestions', href: '#course-suggestions' },
    { name: 'Jobs & Internships', href: '#job-vacancies' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Career Paths', href: '#career-intelligence' },
    { name: 'Simulator', href: '#simulator' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#070B14]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
                  Career<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">IQ</span>
                </span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  AI
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTAs / Profile */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenBuilder && (
              <button
                type="button"
                onClick={onOpenBuilder}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 transition-all shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 text-emerald-400" />
                <span>Build Resume</span>
              </button>
            )}

            {onOpenScanner && (
              <button
                type="button"
                onClick={onOpenScanner}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-blue-300 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 transition-all shadow-sm"
                id="nav-scan-resume-btn"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Scan Resume</span>
              </button>
            )}

            {user ? (
              /* Authenticated User Menu */
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full bg-[#0B1120] border border-white/10 hover:border-blue-500/40 transition-all duration-200"
                  id="user-profile-menu-button"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {getInitials(user.name)}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-white leading-tight">{user.name}</span>
                    <span className="text-[10px] text-blue-400 leading-none">
                      {user.readinessScore ? `${user.readinessScore}% Match` : 'Pro'}
                    </span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-[280px] rounded-2xl bg-[#0B1120] border border-white/10 shadow-2xl shadow-black/80 py-2 z-50 backdrop-blur-xl">
                    <div className="px-5 py-4 border-b border-white/10">
                      <p className="text-[16px] font-bold text-white leading-none mb-1.5">{user.name}</p>
                      <p className="text-[14px] text-slate-400 truncate mb-4">{user.email}</p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[13px] font-medium text-blue-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                        <span>{user.role}</span>
                      </div>
                    </div>

                    <div className="py-2">
                      {onOpenScanner && (
                        <button
                          onClick={() => {
                            setProfileDropdownOpen(false);
                            onOpenScanner();
                          }}
                          className="w-full text-left px-5 py-3 text-[15px] font-medium text-slate-200 hover:text-white hover:bg-white/5 flex items-center justify-between transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-blue-400" />
                            Scan Another Resume
                          </span>
                          <span className="text-[12px] px-2.5 py-1 rounded bg-blue-500/20 text-blue-300">AI</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onOpenAssessment();
                        }}
                        className="w-full text-left px-5 py-3 text-[15px] font-medium text-slate-200 hover:text-white hover:bg-white/5 flex items-center justify-between transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-blue-400" />
                          Skill Assessment
                        </span>
                        <span className="text-[12px] px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300">Live</span>
                      </button>

                      <a
                        href="#course-suggestions"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="block px-5 py-3 text-[15px] font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Course Suggestions & Upskilling
                      </a>

                      <a
                        href="#job-vacancies"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="block px-5 py-3 text-[15px] font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Jobs & Internships Exchange
                      </a>

                      <a
                        href="#roadmap"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="block px-5 py-3 text-[15px] font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Personalized Roadmap
                      </a>

                      <a
                        href="#simulator"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="block px-5 py-3 text-[15px] font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        Career Simulator
                      </a>
                    </div>

                    <div className="pt-2 pb-1 border-t border-white/10">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          logout();
                        }}
                        className="w-full text-left px-5 py-3 text-[15px] font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 flex items-center gap-3 transition-colors"
                        id="logout-btn"
                      >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Non-authenticated CTAs */
              <>
                <button
                  onClick={openLogin}
                  className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                  id="nav-login-btn"
                >
                  Log In
                </button>
                <button
                  onClick={openSignUp}
                  className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 active:scale-[0.98]"
                  id="nav-get-started-btn"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {user && (
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                {getInitials(user.name)}
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {user && (
              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                    {getInitials(user.name)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{user.name}</div>
                    <div className="text-[10px] text-blue-400">{user.role}</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            )}

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-200 py-2 border-b border-white/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {onOpenBuilder && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBuilder();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-emerald-600/20 border border-emerald-500/30 rounded-xl"
                >
                  <Plus className="w-4 h-4 text-emerald-400" />
                  <span>Build Resume</span>
                </button>
              )}

              {onOpenScanner && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenScanner();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600/20 border border-blue-500/30 rounded-xl"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Scan Resume with AI</span>
                </button>
              )}

              {user ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAssessment();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Take AI Assessment</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openLogin();
                    }}
                    className="w-full text-center py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-white/10 rounded-xl"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openSignUp();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
