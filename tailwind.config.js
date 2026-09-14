/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#070B14',
          surface: '#0B1120',
          card: '#0F172A',
          hover: '#131D33',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.14)',
        },
        electric: {
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          'blue-dark': '#1D4ED8',
          cyan: '#38BDF8',
          violet: '#8B5CF6',
          purple: '#A855F7',
          pink: '#EC4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
        'fade-in-up-delay-4': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-orb': 'floatOrb 8s ease-in-out infinite',
        'float-orb-alt': 'floatOrbAlt 10s ease-in-out infinite',
        'float-orb-slow': 'floatOrb 14s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'breathe-glow': 'breatheGlow 4s ease-in-out infinite',
        'breathe-glow-alt': 'breatheGlow 5s ease-in-out 1s infinite',
        'marquee': 'marquee 25s linear infinite',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        floatOrb: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(15px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-10px, 10px) scale(0.95)' },
        },
        floatOrbAlt: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-20px, 15px) scale(1.1)' },
          '50%': { transform: 'translate(10px, -10px) scale(0.9)' },
          '75%': { transform: 'translate(-5px, -20px) scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        breatheGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-blue-lg': '0 0 45px -5px rgba(59, 130, 246, 0.45)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
