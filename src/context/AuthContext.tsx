import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
  targetCareer?: string;
  readinessScore?: number;
  joinDate: string;
}

export type AuthView = 'home' | 'login' | 'signup' | 'reset-password';

interface AuthContextType {
  user: UserProfile | null;
  authView: AuthView;
  setAuthView: (view: AuthView) => void;
  openLogin: () => void;
  openSignUp: () => void;
  openResetPassword: () => void;
  closeAuth: () => void;
  login: (email: string, password?: string) => Promise<boolean>;
  signup: (name: string, email: string, role: string, password?: string) => Promise<boolean>;
  logout: () => void;
  demoLogin: (type?: 'engineer' | 'product') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'careeriq_user_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [authView, setAuthViewState] = useState<AuthView>('home');

  // Sync with URL hash for browser history & direct links (#login, #signup, #reset-password)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#login') {
        setAuthViewState('login');
      } else if (hash === '#signup' || hash === '#register') {
        setAuthViewState('signup');
      } else if (hash === '#reset-password' || hash === '#forgot-password') {
        setAuthViewState('reset-password');
      } else if (authView !== 'home' && (hash === '' || hash === '#')) {
        setAuthViewState('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [authView]);

  const setAuthView = (view: AuthView) => {
    setAuthViewState(view);
    if (view === 'login') {
      window.location.hash = 'login';
    } else if (view === 'signup') {
      window.location.hash = 'signup';
    } else if (view === 'reset-password') {
      window.location.hash = 'reset-password';
    } else {
      if (window.location.hash && (window.location.hash === '#login' || window.location.hash === '#signup' || window.location.hash === '#reset-password')) {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  const openLogin = () => setAuthView('login');
  const openSignUp = () => setAuthView('signup');
  const openResetPassword = () => setAuthView('reset-password');
  const closeAuth = () => setAuthView('home');

  const saveUserSession = (userData: UserProfile) => {
    setUser(userData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  };

  const login = async (email: string, _password?: string): Promise<boolean> => {
    // Simulated network authentication delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const loggedUser: UserProfile = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      role: 'Staff AI Practitioner',
      targetCareer: 'Principal AI Engineer',
      readinessScore: 88,
      joinDate: 'Joined Sep 2026',
    };

    saveUserSession(loggedUser);
    closeAuth();
    return true;
  };

  const signup = async (name: string, email: string, role: string, _password?: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newUser: UserProfile = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name,
      email,
      role: role || 'Tech Professional',
      targetCareer: role || 'Principal AI Systems Architect',
      readinessScore: 92,
      joinDate: 'Joined Sep 2026',
    };

    saveUserSession(newUser);
    closeAuth();
    return true;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const demoLogin = (type: 'engineer' | 'product' = 'engineer') => {
    const demoUser: UserProfile = type === 'engineer' 
      ? {
          id: 'demo_alex',
          name: 'Alex Mercer',
          email: 'alex.mercer@careeriq.ai',
          role: 'Lead AI Engineer',
          targetCareer: 'Staff AI Systems Architect',
          readinessScore: 94,
          joinDate: 'Member since 2025',
        }
      : {
          id: 'demo_sarah',
          name: 'Sarah Chen',
          email: 'sarah.chen@careeriq.ai',
          role: 'Senior Product Manager',
          targetCareer: 'VP of AI Products',
          readinessScore: 91,
          joinDate: 'Member since 2025',
        };

    saveUserSession(demoUser);
    closeAuth();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authView,
        setAuthView,
        openLogin,
        openSignUp,
        openResetPassword,
        closeAuth,
        login,
        signup,
        logout,
        demoLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
