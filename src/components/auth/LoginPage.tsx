import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Cpu, 
  ArrowLeft, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  AlertCircle,
  Briefcase,
  Phone,
  ChevronDown,
  X,
  Star,
  Quote,
  BarChart3,
  Target,
  Shield,
  Check
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// ─── COUNTRY CODES ──────────────────────────────────────────────────────
const COUNTRIES = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
];

// ─── POPULAR ROLES ──────────────────────────────────────────────────────
const POPULAR_ROLES = [
  'AI Engineer', 'ML Engineer', 'Data Scientist', 'MLOps Engineer',
  'AI Systems Architect', 'Full Stack Developer', 'Cloud Architect',
  'DevOps Engineer', 'Product Manager', 'Engineering Manager',
  'Backend Engineer', 'Frontend Engineer',
];

// ─── TESTIMONIALS ───────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Staff ML Engineer @ Meta',
    text: 'CareerIQ\'s skill-gap analysis helped me identify exactly what I needed for my Staff promotion. The AI roadmap saved me months of guesswork.',
    avatar: 'PS',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Principal Engineer @ Stripe',
    text: 'The compensation trajectory prediction was within 5% of my actual offer. This platform genuinely understands the tech career landscape.',
    avatar: 'JR',
    rating: 5,
  },
  {
    name: 'Anika Patel',
    role: 'VP of AI Products @ Scale AI',
    text: 'From Senior PM to VP in 18 months — CareerIQ mapped every milestone and kept me accountable. Absolutely indispensable for career growth.',
    avatar: 'AP',
    rating: 5,
  },
];

// ─── TRUSTED COMPANIES ─────────────────────────────────────────────────
const TRUSTED_COMPANIES = ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix', 'Stripe', 'OpenAI', 'Anthropic', 'Databricks'];

// ─── COUNTER ANIMATION HOOK ────────────────────────────────────────────
function useCountUp(target: number, duration: number = 2000, start: boolean = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration, start]);
  return count;
}

// ─── CAPTCHA GENERATOR ─────────────────────────────────────────────────
function generateCaptcha() {
  const a = Math.floor(Math.random() * 12) + 2;
  const b = Math.floor(Math.random() * 12) + 2;
  return { question: `${a} + ${b}`, answer: a + b };
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────
export const LoginPage: React.FC = () => {
  const { authView, setAuthView, closeAuth, login, signup, demoLogin } = useAuth();

  const [mode, setMode] = useState<'login' | 'signup' | 'reset-password'>(
    authView === 'signup' ? 'signup' : authView === 'reset-password' ? 'reset-password' : 'login'
  );

  // Login method tabs
  type LoginMethod = 'email' | 'otp' | 'phone';
  const [loginMethod, setLoginMethod] = useState<LoginMethod>('email');

  // ─── Form States ────────────────────────────────
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [showRoleSuggestions, setShowRoleSuggestions] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  // Field errors (inline)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // ─── OTP States ─────────────────────────────────
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [otpCountdown, setOtpCountdown] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // ─── Phone States ───────────────────────────────
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [phoneSent, setPhoneSent] = useState(false);

  // ─── Captcha States ─────────────────────────────
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const showCaptcha = failedAttempts >= 2;

  // ─── Testimonial State ──────────────────────────
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // ─── Touched State (for inline validation) ──────
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const roleDropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // ─── Animated Stats ─────────────────────────────
  const memberCount = useCountUp(42000, 2200);
  const salaryLift = useCountUp(45000, 2400);
  const placementRate = useCountUp(968, 2600); // 96.8 -> display as 96.8

  // ─── Testimonial Auto-rotate ────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ─── OTP Countdown Timer ────────────────────────
  useEffect(() => {
    if (otpCountdown > 0) {
      const timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpCountdown]);

  // ─── Close dropdowns on outside click ───────────
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(e.target as Node)) {
        setShowRoleSuggestions(false);
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // ─── VALIDATION HELPERS ─────────────────────────
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
  const passwordStrength = Object.values(passwordChecks).filter(Boolean).length;
  const strengthLabels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-rose-500', 'bg-rose-400', 'bg-amber-400', 'bg-blue-400', 'bg-emerald-400'];

  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const validateField = useCallback((field: string, value: string) => {
    const errors: Record<string, string> = {};
    switch (field) {
      case 'email':
        if (value && !emailRegex.test(value)) errors.email = 'Please enter a valid email address';
        break;
      case 'password':
        if (value && value.length < 6) errors.password = 'Password must be at least 6 characters';
        break;
      case 'confirmPassword':
        if (value && password !== value) errors.confirmPassword = 'Passwords do not match';
        break;
      case 'firstName':
        if (value !== undefined && !value.trim()) errors.firstName = 'First name is required';
        break;
      case 'phone':
        if (value && !/^\d{7,15}$/.test(value.replace(/\D/g, ''))) errors.phone = 'Enter a valid phone number';
        break;
    }
    return errors;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const handleBlur = (field: string, value: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const errors = validateField(field, value);
    setFieldErrors(prev => {
      const newErrors = { ...prev };
      if (errors[field]) {
        newErrors[field] = errors[field];
      } else {
        delete newErrors[field];
      }
      return newErrors;
    });
  };

  // ─── ROLE FILTERING ─────────────────────────────
  const filteredRoles = POPULAR_ROLES.filter(r =>
    r.toLowerCase().includes(targetRole.toLowerCase())
  );

  // ─── OTP HANDLERS ──────────────────────────────
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otpCode];
    newOtp[index] = value.slice(-1);
    setOtpCode(newOtp);
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = () => {
    if (loginMethod === 'otp' && !isEmailValid) {
      setFieldErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
      return;
    }
    if (loginMethod === 'phone' && !phoneNumber) {
      setFieldErrors(prev => ({ ...prev, phone: 'Please enter a phone number' }));
      return;
    }
    setOtpSent(true);
    setPhoneSent(loginMethod === 'phone');
    setOtpCountdown(60);
    setOtpCode(['', '', '', '', '', '']);
    setTimeout(() => otpRefs.current[0]?.focus(), 100);
  };

  const handleResendOtp = () => {
    if (otpCountdown > 0) return;
    setOtpCountdown(60);
    setOtpCode(['', '', '', '', '', '']);
    otpRefs.current[0]?.focus();
  };

  // ─── PHONE FORMAT ───────────────────────────────
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  // ─── MAIN SUBMIT ───────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    // ─── Reset Password Mode ──────
    if (mode === 'reset-password') {
      if (!email || !isEmailValid) {
        setFieldErrors({ email: 'Please enter a valid email address.' });
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setResetSuccess(true);
      }, 700);
      return;
    }

    // ─── Signup Mode ──────────────
    if (mode === 'signup') {
      const errors: Record<string, string> = {};
      if (!firstName.trim()) errors.firstName = 'First name is required';
      if (!lastName.trim()) errors.lastName = 'Last name is required';
      if (!email || !isEmailValid) errors.email = 'Please enter a valid email address';
      if (password.length < 6) errors.password = 'Password must be at least 6 characters';
      if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
      if (!agreeTerms) errors.terms = 'You must agree to the terms';

      if (showCaptcha) {
        if (parseInt(captchaAnswer) !== captcha.answer) {
          errors.captcha = 'Incorrect answer. Try again.';
          setCaptcha(generateCaptcha());
          setCaptchaAnswer('');
        }
      }

      if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        return;
      }

      setIsLoading(true);
      try {
        const fullName = `${firstName.trim()} ${lastName.trim()}`;
        await signup(fullName, email, targetRole || 'AI Specialist', password);
      } catch {
        setFieldErrors({ form: 'Failed to create account. Please try again.' });
        setIsLoading(false);
      }
      return;
    }

    // ─── Login Mode ───────────────
    if (loginMethod === 'otp' || loginMethod === 'phone') {
      // OTP / Phone verification
      if (!otpSent && !phoneSent) {
        handleSendOtp();
        return;
      }
      const code = otpCode.join('');
      if (code.length !== 6) {
        setFieldErrors({ otp: 'Please enter the full 6-digit code' });
        return;
      }

      setIsLoading(true);
      try {
        const demoEmail = loginMethod === 'otp' ? email : `${phoneNumber}@phone.careeriq.ai`;
        await login(demoEmail, code);
      } catch {
        setFailedAttempts(prev => prev + 1);
        setFieldErrors({ form: 'Verification failed. Please try again.' });
        setIsLoading(false);
      }
      return;
    }

    // Email + password login
    if (!email || !isEmailValid) {
      setFieldErrors({ email: 'Please enter a valid email address.' });
      return;
    }
    if (!password) {
      setFieldErrors({ password: 'Please enter your password.' });
      return;
    }
    if (showCaptcha) {
      if (parseInt(captchaAnswer) !== captcha.answer) {
        setFieldErrors({ captcha: 'Incorrect answer. Try again.' });
        setCaptcha(generateCaptcha());
        setCaptchaAnswer('');
        return;
      }
    }

    setIsLoading(true);
    try {
      await login(email, password);
    } catch {
      setFailedAttempts(prev => prev + 1);
      setCaptcha(generateCaptcha());
      setCaptchaAnswer('');
      setFieldErrors({ form: 'Invalid credentials. Please try again.' });
      setIsLoading(false);
    }
  };

  const switchMode = (newMode: 'login' | 'signup' | 'reset-password') => {
    setMode(newMode);
    setFieldErrors({});
    setResetSuccess(false);
    setOtpSent(false);
    setPhoneSent(false);
    setOtpCode(['', '', '', '', '', '']);
    setTouched({});
    setAuthView(newMode);
  };

  // ─── INLINE ERROR COMPONENT ─────────────────────
  const FieldError = ({ field }: { field: string }) => {
    if (!fieldErrors[field]) return null;
    return (
      <div className="flex items-center gap-1.5 mt-1.5 text-rose-400 text-xs" role="alert" aria-live="polite">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
        <span>{fieldErrors[field]}</span>
      </div>
    );
  };

  // ─── RENDER ─────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col relative overflow-hidden selection:bg-blue-600/40 selection:text-white">
      {/* ═══ ANIMATED BACKGROUND ORBS ═══ */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[140px] pointer-events-none animate-float-orb" />
      <div className="absolute bottom-[-5%] right-[10%] w-[600px] h-[600px] bg-violet-600/[0.07] rounded-full blur-[160px] pointer-events-none animate-float-orb-alt" />
      <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none animate-float-orb-slow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* ═══ TOP BAR HEADER ═══ */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <button
          onClick={closeAuth}
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
          id="back-to-home-btn"
          aria-label="Back to CareerIQ home"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to CareerIQ</span>
        </button>

        {/* Logo */}
        <div
          onClick={closeAuth}
          className="flex items-center gap-2.5 cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label="CareerIQ Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-xl tracking-tight text-white">
              Career<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">IQ</span>
            </span>
            <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              AI
            </span>
          </div>
        </div>

        {/* Security Badge */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Enterprise 256-bit Encrypted</span>
        </div>
      </header>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ═══ LEFT COLUMN: Feature Showcase ═══ */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-center space-y-7 pr-4">
            {/* Header Badge */}
            <div className="opacity-0 animate-fade-in-up space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>Next-Generation Career Navigation</span>
              </div>
              <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Architect your career with{' '}
                <span className="animated-gradient-text">real-time AI intelligence</span>
              </h1>
              <p className="text-base text-slate-300 max-w-xl leading-relaxed">
                Unlock automated skill-gap telemetry, personalized compensation trajectories, and 1-on-1 AI mentorship tailored to high-growth tech roles.
              </p>
            </div>

            {/* ─── Animated Career Trajectory Chart ─── */}
            <div className="opacity-0 animate-fade-in-up-delay-1 p-5 rounded-2xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40 hover:border-blue-500/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Career Trajectory</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Live</span>
              </div>
              {/* Mini SVG Chart */}
              <svg viewBox="0 0 400 100" className="w-full h-20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                {/* Area fill */}
                <path d="M0 90 Q50 80, 80 70 T160 55 T240 38 T320 25 T400 12 L400 100 L0 100 Z" fill="url(#chartGrad)">
                  <animate attributeName="d" dur="3s" values="M0 90 Q50 85, 80 78 T160 65 T240 48 T320 35 T400 22 L400 100 L0 100 Z;M0 90 Q50 80, 80 70 T160 55 T240 38 T320 25 T400 12 L400 100 L0 100 Z" fill="freeze" />
                </path>
                {/* Line */}
                <path d="M0 90 Q50 80, 80 70 T160 55 T240 38 T320 25 T400 12" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round">
                  <animate attributeName="d" dur="3s" values="M0 90 Q50 85, 80 78 T160 65 T240 48 T320 35 T400 22;M0 90 Q50 80, 80 70 T160 55 T240 38 T320 25 T400 12" fill="freeze" />
                </path>
                {/* Endpoint dot */}
                <circle cx="400" cy="12" r="4" fill="#3B82F6">
                  <animate attributeName="cy" dur="3s" values="22;12" fill="freeze" />
                  <animate attributeName="opacity" dur="0.5s" values="0;1" fill="freeze" />
                </circle>
                <circle cx="400" cy="12" r="8" fill="rgba(59, 130, 246, 0.2)">
                  <animate attributeName="cy" dur="3s" values="22;12" fill="freeze" />
                  <animate attributeName="r" dur="2s" values="8;12;8" repeatCount="indefinite" />
                  <animate attributeName="opacity" dur="2s" values="0.3;0.6;0.3" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>Current</span>
                <span>6 months</span>
                <span>12 months</span>
                <span>18 months</span>
                <span>24 months</span>
              </div>
            </div>

            {/* ─── Role Benchmark Card ─── */}
            <div className="opacity-0 animate-fade-in-up-delay-2 p-4 rounded-2xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40 hover:border-blue-500/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Active Benchmark</div>
                    <div className="text-sm font-semibold text-white">Staff AI Systems Architect</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  +18.4% YoY
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-amber-400" />AI Readiness</span>
                  <span className="font-bold text-blue-400">94%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000" style={{ width: '94%' }} />
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1"><Target className="w-3.5 h-3.5 text-cyan-400" />Market Fit</span>
                  <span className="font-bold text-cyan-400">89%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000" style={{ width: '89%' }} />
                </div>
              </div>
            </div>

            {/* ─── Testimonial Carousel ─── */}
            <div className="opacity-0 animate-fade-in-up-delay-3 p-5 rounded-2xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40 relative overflow-hidden">
              <Quote className="absolute top-3 right-3 w-8 h-8 text-blue-500/10" />
              <div className="min-h-[120px] relative">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ${i === 0 ? '' : 'absolute inset-x-0 top-0'} ${
                      i === activeTestimonial
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-xs font-bold text-white">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{t.name}</div>
                        <div className="text-xs text-slate-400">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Dots */}
              <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeTestimonial ? 'bg-blue-500 w-5' : 'bg-slate-600 hover:bg-slate-500 w-2'
                    }`}
                    aria-label={`Show testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* ─── Animated Stats ─── */}
            <div className="opacity-0 animate-fade-in-up-delay-4 pt-2 border-t border-white/10 flex items-center gap-6 text-slate-400 text-xs">
              <div>
                <span className="block text-lg font-bold text-white">{memberCount.toLocaleString()}+</span>
                <span>Active Tech Members</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="block text-lg font-bold text-white">${salaryLift.toLocaleString()}</span>
                <span>Avg. Compensation Lift</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="block text-lg font-bold text-white">{(placementRate / 10).toFixed(1)}%</span>
                <span>Placement Alignment</span>
              </div>
            </div>

            {/* ─── Trusted By Marquee ─── */}
            <div className="opacity-0 animate-fade-in-up-delay-4 overflow-hidden">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-medium">Trusted by professionals at</div>
              <div className="relative overflow-hidden">
                <div className="marquee-track">
                  {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, i) => (
                    <span key={i} className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ MOBILE FEATURE STRIP (visible only on < lg) ═══ */}
          <div className="lg:hidden mb-4">
            <div className="mobile-feature-strip gap-3 pb-2">
              <div className="min-w-[140px] p-3 rounded-xl bg-[#0B1120]/80 border border-white/10 text-center">
                <div className="text-lg font-bold text-white">{memberCount.toLocaleString()}+</div>
                <div className="text-[10px] text-slate-400">Active Members</div>
              </div>
              <div className="min-w-[140px] p-3 rounded-xl bg-[#0B1120]/80 border border-white/10 text-center">
                <div className="text-lg font-bold text-white">${salaryLift.toLocaleString()}</div>
                <div className="text-[10px] text-slate-400">Avg. Salary Lift</div>
              </div>
              <div className="min-w-[140px] p-3 rounded-xl bg-[#0B1120]/80 border border-white/10 text-center">
                <div className="text-lg font-bold text-white">{(placementRate / 10).toFixed(1)}%</div>
                <div className="text-[10px] text-slate-400">Placement Rate</div>
              </div>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: AUTH FORM ═══ */}
          <div className="w-full lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md auth-card-glass rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 relative animate-scale-in opacity-0" style={{ animationDelay: '0.15s' }}>
              {/* Glow accent line */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80" />
              
              {/* ─── TAB NAVIGATION (Login vs Sign Up) ─── */}
              {mode !== 'reset-password' && (
                <div className="relative grid grid-cols-2 p-1 mb-6 rounded-xl bg-[#070B14] border border-white/10">
                  {/* Animated sliding indicator */}
                  <div
                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-blue-600 rounded-lg shadow-md shadow-blue-600/30 tab-indicator"
                    style={{ transform: mode === 'signup' ? 'translateX(calc(100% + 8px))' : 'translateX(4px)' }}
                  />
                  <button
                    type="button"
                    onClick={() => switchMode('login')}
                    className={`relative z-10 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      mode === 'login' ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    id="tab-login"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => switchMode('signup')}
                    className={`relative z-10 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      mode === 'signup' ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    id="tab-signup"
                  >
                    Create Account
                  </button>
                </div>
              )}

              {/* ─── HEADER TITLE ─── */}
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {mode === 'login' && 'Welcome back'}
                  {mode === 'signup' && 'Create your account'}
                  {mode === 'reset-password' && 'Reset your password'}
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  {mode === 'login' && 'Sign in to access your AI roadmap and career analytics.'}
                  {mode === 'signup' && 'Join top tech talent using AI to accelerate career mobility.'}
                  {mode === 'reset-password' && 'Enter your email to receive recovery instructions.'}
                </p>
              </div>

              {/* ─── LOGIN METHOD TABS (Login mode only) ─── */}
              {mode === 'login' && (
                <div className="flex gap-1 mb-5 p-1 rounded-xl bg-[#070B14]/60 border border-white/5">
                  {([
                    { key: 'email' as LoginMethod, label: 'Email', icon: Mail },
                    { key: 'otp' as LoginMethod, label: 'OTP', icon: Shield },
                    { key: 'phone' as LoginMethod, label: 'Phone', icon: Phone },
                  ]).map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => { setLoginMethod(key); setOtpSent(false); setPhoneSent(false); setFieldErrors({}); }}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                        loginMethod === key
                          ? 'bg-white/10 text-white border border-white/10'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      id={`login-method-${key}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </button>
                  ))}
                </div>
              )}

              {/* ─── DEMO SIGN-IN (Login mode only, email method) ─── */}
              {mode === 'login' && loginMethod === 'email' && (
                <div className="mb-5 p-3 rounded-xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border border-blue-500/20 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-blue-300 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      Instant Demo Sign-In:
                    </span>
                    <span className="text-[10px] text-slate-400">One-click test</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => demoLogin('engineer')}
                      className="text-xs text-left px-2.5 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-200 hover:text-white transition-all duration-150 flex items-center justify-between min-h-[44px]"
                      id="demo-login-alex"
                    >
                      <span className="truncate">Alex (AI Lead)</span>
                      <ArrowRight className="w-3 h-3 text-blue-400 shrink-0 ml-1" />
                    </button>
                    <button
                      type="button"
                      onClick={() => demoLogin('product')}
                      className="text-xs text-left px-2.5 py-2 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 text-violet-200 hover:text-white transition-all duration-150 flex items-center justify-between min-h-[44px]"
                      id="demo-login-sarah"
                    >
                      <span className="truncate">Sarah (Product)</span>
                      <ArrowRight className="w-3 h-3 text-violet-400 shrink-0 ml-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* ─── SOCIAL LOGIN BUTTONS ─── */}
              {mode !== 'reset-password' && loginMethod === 'email' && (
                <div className="space-y-3 mb-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* Google */}
                    <button
                      type="button"
                      onClick={() => demoLogin('engineer')}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all duration-200 text-xs font-medium text-slate-300 hover:text-white min-h-[44px]"
                      title="Continue with Google"
                      id="social-google"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                      </svg>
                      <span>Google</span>
                    </button>

                    {/* GitHub */}
                    <button
                      type="button"
                      onClick={() => demoLogin('engineer')}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all duration-200 text-xs font-medium text-slate-300 hover:text-white min-h-[44px]"
                      title="Continue with GitHub"
                      id="social-github"
                    >
                      <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </button>

                    {/* LinkedIn */}
                    <button
                      type="button"
                      onClick={() => demoLogin('product')}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all duration-200 text-xs font-medium text-slate-300 hover:text-white min-h-[44px]"
                      title="Continue with LinkedIn"
                      id="social-linkedin"
                    >
                      <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span>LinkedIn</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative flex items-center justify-center my-3">
                    <div className="border-t border-white/10 w-full" />
                    <span className="bg-[#0B1120] px-3 text-[11px] uppercase tracking-wider text-slate-400 font-medium whitespace-nowrap">
                      Or continue with email
                    </span>
                    <div className="border-t border-white/10 w-full" />
                  </div>
                </div>
              )}

              {/* ─── FORM-LEVEL ERROR ─── */}
              {fieldErrors.form && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center gap-2.5 text-rose-300 text-xs" role="alert">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{fieldErrors.form}</span>
                  <button onClick={() => setFieldErrors(prev => { const n = {...prev}; delete n.form; return n; })} className="ml-auto text-rose-400 hover:text-rose-300">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* ─── RESET SUCCESS ─── */}
              {resetSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-sm space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    Reset link dispatched!
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We have sent password reset instructions to <span className="text-white font-medium">{email}</span>. Please check your inbox and spam folder.
                  </p>
                  <button type="button" onClick={() => switchMode('login')} className="mt-3 text-xs font-semibold text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">
                    Back to Sign In
                  </button>
                </div>
              )}

              {/* ═══ FORM ═══ */}
              {!resetSuccess && (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* ─── SIGNUP: First & Last Name ─── */}
                  {mode === 'signup' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5 input-glow-focus rounded-xl">
                        <label htmlFor="signup-first-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          First Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            onBlur={() => handleBlur('firstName', firstName)}
                            placeholder="First"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-all outline-none min-h-[44px]"
                            id="signup-first-name"
                          />
                        </div>
                        <FieldError field="firstName" />
                      </div>
                      <div className="space-y-1.5 input-glow-focus rounded-xl">
                        <label htmlFor="signup-last-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Last Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            onBlur={() => handleBlur('lastName', lastName)}
                            placeholder="Last"
                            className="w-full px-4 py-2.5 rounded-xl bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-all outline-none min-h-[44px]"
                            id="signup-last-name"
                          />
                        </div>
                        <FieldError field="lastName" />
                      </div>
                    </div>
                  )}

                  {/* ─── SIGNUP: Target Role Dropdown ─── */}
                  {mode === 'signup' && (
                    <div className="space-y-1.5" ref={roleDropdownRef}>
                      <label htmlFor="signup-target-role" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Target Role / Domain
                      </label>
                      <div className="relative input-glow-focus rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={targetRole}
                          onChange={(e) => { setTargetRole(e.target.value); setShowRoleSuggestions(true); }}
                          onFocus={() => setShowRoleSuggestions(true)}
                          placeholder="Search or type a role..."
                          className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-all outline-none min-h-[44px]"
                          id="signup-target-role"
                          autoComplete="off"
                        />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        {showRoleSuggestions && filteredRoles.length > 0 && (
                          <div className="absolute top-full left-0 right-0 mt-1 py-1 rounded-xl bg-[#0B1120] border border-white/10 shadow-xl shadow-black/60 z-50 country-dropdown">
                            {filteredRoles.map((role) => (
                              <button
                                key={role}
                                type="button"
                                onClick={() => { setTargetRole(role); setShowRoleSuggestions(false); }}
                                className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                              >
                                {role}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ─── PHONE LOGIN: Country + Number ─── */}
                  {mode === 'login' && loginMethod === 'phone' && !phoneSent && (
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        {/* Country selector */}
                        <div className="relative" ref={countryDropdownRef}>
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#070B14] border border-white/10 hover:border-white/20 text-sm text-white transition-all min-h-[44px] min-w-[90px]"
                            id="country-selector"
                          >
                            <span>{selectedCountry.flag}</span>
                            <span className="text-xs text-slate-300">{selectedCountry.code}</span>
                            <ChevronDown className="w-3 h-3 text-slate-500 ml-auto" />
                          </button>
                          {showCountryDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-56 py-1 rounded-xl bg-[#0B1120] border border-white/10 shadow-xl shadow-black/60 z-50 country-dropdown">
                              {COUNTRIES.map((country, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => { setSelectedCountry(country); setShowCountryDropdown(false); }}
                                  className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2"
                                >
                                  <span>{country.flag}</span>
                                  <span className="flex-1">{country.name}</span>
                                  <span className="text-xs text-slate-500">{country.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        {/* Phone input */}
                        <div className="flex-1 input-glow-focus rounded-xl">
                          <input
                            type="tel"
                            inputMode="numeric"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(formatPhone(e.target.value))}
                            onBlur={() => handleBlur('phone', phoneNumber)}
                            placeholder="123-456-7890"
                            className="w-full px-4 py-2.5 rounded-xl bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-all outline-none min-h-[44px]"
                            id="phone-input"
                          />
                        </div>
                      </div>
                      <FieldError field="phone" />
                    </div>
                  )}

                  {/* ─── EMAIL FIELD (all modes except phone login) ─── */}
                  {!(mode === 'login' && loginMethod === 'phone') && (
                    <div className="space-y-1.5">
                      <label htmlFor="auth-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Work or Personal Email
                      </label>
                      <div className="relative input-glow-focus rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={() => handleBlur('email', email)}
                          placeholder="you@domain.com"
                          className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-all outline-none min-h-[44px]"
                          id="auth-email"
                        />
                        {/* Email validation indicator */}
                        {touched.email && email && (
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                            {isEmailValid ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-rose-400" />
                            )}
                          </div>
                        )}
                      </div>
                      <FieldError field="email" />
                    </div>
                  )}

                  {/* ─── OTP SECTION (after sending) ─── */}
                  {mode === 'login' && (loginMethod === 'otp' || loginMethod === 'phone') && (otpSent || phoneSent) && (
                    <div className="space-y-3">
                      <div className="text-xs text-slate-300">
                        We sent a 6-digit code to{' '}
                        <span className="text-white font-medium">
                          {loginMethod === 'otp' ? email : `${selectedCountry.code} ${phoneNumber}`}
                        </span>
                      </div>
                      {/* OTP Digit Inputs */}
                      <div className="flex justify-center gap-2 sm:gap-3">
                        {otpCode.map((digit, i) => (
                          <input
                            key={i}
                            ref={(el) => { otpRefs.current[i] = el; }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(i, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(i, e)}
                            className={`otp-digit-input ${digit ? 'filled' : ''}`}
                            id={`otp-digit-${i}`}
                            aria-label={`OTP digit ${i + 1}`}
                          />
                        ))}
                      </div>
                      <FieldError field="otp" />
                      {/* Countdown / Resend */}
                      <div className="text-center text-xs text-slate-400">
                        {otpCountdown > 0 ? (
                          <span>Resend code in <span className="text-blue-400 font-semibold">{otpCountdown}s</span></span>
                        ) : (
                          <button type="button" onClick={handleResendOtp} className="text-blue-400 hover:text-blue-300 font-semibold transition-colors" id="resend-otp-btn">
                            Resend Code
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ─── PASSWORD FIELD (email login + signup only) ─── */}
                  {((mode === 'login' && loginMethod === 'email') || mode === 'signup') && mode !== 'reset-password' && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="auth-password" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Password
                        </label>
                        {mode === 'login' && (
                          <button type="button" onClick={() => switchMode('reset-password')} className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors" id="forgot-password-btn">
                            Forgot password?
                          </button>
                        )}
                      </div>
                      <div className="relative input-glow-focus rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onBlur={() => handleBlur('password', password)}
                          placeholder="••••••••••••"
                          className="w-full pl-10 pr-11 py-2.5 rounded-xl bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-all outline-none min-h-[44px]"
                          id="auth-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      <FieldError field="password" />

                      {/* Password Requirements Checklist (Signup) */}
                      {mode === 'signup' && password.length > 0 && (
                        <div className="pt-2 space-y-2">
                          {/* Strength Bar */}
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">Strength:</span>
                            <span className="font-semibold text-slate-300">{strengthLabels[passwordStrength]}</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1 h-1.5">
                            {[1, 2, 3, 4].map((step) => (
                              <div key={step} className={`rounded-full strength-bar-segment ${passwordStrength >= step ? strengthColors[passwordStrength] : 'bg-slate-800'}`} />
                            ))}
                          </div>
                          {/* Requirements Checklist */}
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 pt-1">
                            {[
                              { label: '8+ characters', met: passwordChecks.length },
                              { label: 'Uppercase letter', met: passwordChecks.uppercase },
                              { label: 'Number', met: passwordChecks.number },
                              { label: 'Special character', met: passwordChecks.special },
                            ].map(({ label, met }) => (
                              <div key={label} className={`flex items-center gap-1.5 text-[11px] transition-colors ${met ? 'text-emerald-400' : 'text-slate-500'}`}>
                                {met ? <Check className="w-3 h-3" /> : <div className="w-3 h-3 rounded-full border border-slate-600" />}
                                {label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ─── CONFIRM PASSWORD (Signup) ─── */}
                  {mode === 'signup' && (
                    <div className="space-y-1.5">
                      <label htmlFor="auth-confirm-password" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Confirm Password
                      </label>
                      <div className="relative input-glow-focus rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          onBlur={() => handleBlur('confirmPassword', confirmPassword)}
                          placeholder="Re-enter password"
                          className="w-full pl-10 pr-11 py-2.5 rounded-xl bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-all outline-none min-h-[44px]"
                          id="auth-confirm-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
                          aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        {/* Match indicator */}
                        {confirmPassword && (
                          <div className="absolute right-10 top-1/2 -translate-y-1/2">
                            {passwordsMatch ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-rose-400" />
                            )}
                          </div>
                        )}
                      </div>
                      <FieldError field="confirmPassword" />
                    </div>
                  )}

                  {/* ─── REMEMBER ME (Login email) ─── */}
                  {mode === 'login' && loginMethod === 'email' && (
                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                          id="remember-me"
                        />
                        <span className="text-xs text-slate-300">Remember me on this device</span>
                      </label>
                    </div>
                  )}

                  {/* ─── TERMS (Signup) ─── */}
                  {mode === 'signup' && (
                    <div className="pt-1 space-y-1">
                      <label className="flex items-start gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          id="agree-terms"
                        />
                        <span className="text-xs text-slate-400">
                          I agree to CareerIQ's{' '}
                          <span className="text-blue-400 hover:underline cursor-pointer">Terms of Service</span> and{' '}
                          <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>.
                        </span>
                      </label>
                      <FieldError field="terms" />
                    </div>
                  )}

                  {/* ─── CAPTCHA (after 2 failed attempts) ─── */}
                  {showCaptcha && mode !== 'reset-password' && (
                    <div className="captcha-container space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                        <Shield className="w-4 h-4 text-blue-400" />
                        Security Verification
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-white bg-[#070B14] px-4 py-2 rounded-lg border border-white/10">
                          {captcha.question} = ?
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={captchaAnswer}
                          onChange={(e) => setCaptchaAnswer(e.target.value.replace(/\D/g, '').slice(0, 3))}
                          placeholder="?"
                          className="w-20 px-3 py-2 rounded-lg bg-[#070B14] border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white text-center outline-none"
                          id="captcha-input"
                          aria-label="Captcha answer"
                        />
                      </div>
                      <FieldError field="captcha" />
                    </div>
                  )}

                  {/* ─── SUBMIT BUTTON ─── */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="shimmer-overlay w-full relative group inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none min-h-[48px]"
                      id="auth-submit-btn"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span className="text-white/70">Processing...</span>
                        </div>
                      ) : (
                        <>
                          <span>
                            {mode === 'login' && loginMethod === 'email' && 'Sign In to CareerIQ'}
                            {mode === 'login' && loginMethod === 'otp' && !otpSent && 'Send OTP Code'}
                            {mode === 'login' && loginMethod === 'otp' && otpSent && 'Verify & Sign In'}
                            {mode === 'login' && loginMethod === 'phone' && !phoneSent && 'Send Verification Code'}
                            {mode === 'login' && loginMethod === 'phone' && phoneSent && 'Verify & Sign In'}
                            {mode === 'signup' && 'Create Free CareerIQ Account'}
                            {mode === 'reset-password' && 'Send Reset Instructions'}
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* ─── BOTTOM TOGGLE LINKS ─── */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-slate-400">
                {mode === 'login' && (
                  <p>
                    Don't have a CareerIQ account?{' '}
                    <button type="button" onClick={() => switchMode('signup')} className="font-semibold text-blue-400 hover:text-blue-300 transition-colors py-2" id="switch-to-signup">
                      Sign up for free
                    </button>
                  </p>
                )}
                {mode === 'signup' && (
                  <p>
                    Already have an account?{' '}
                    <button type="button" onClick={() => switchMode('login')} className="font-semibold text-blue-400 hover:text-blue-300 transition-colors py-2" id="switch-to-login">
                      Sign In
                    </button>
                  </p>
                )}
                {mode === 'reset-password' && (
                  <p>
                    Remember your credentials?{' '}
                    <button type="button" onClick={() => switchMode('login')} className="font-semibold text-blue-400 hover:text-blue-300 transition-colors py-2" id="switch-to-login-reset">
                      Return to Sign In
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative z-10 py-4 text-center text-xs text-slate-500 border-t border-white/5">
        <p>© 2026 CareerIQ AI Inc. All rights reserved. Empowering modern technology careers.</p>
      </footer>
    </div>
  );
};
