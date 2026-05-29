/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF3',
          100: '#FAF4E0',
          200: '#F4E5B8',
          300: '#F7D774',
          400: '#E5C158',
          500: '#D4AF37', // metallic gold
          600: '#C69D26',
          700: '#B8860B', // dark goldenrod
          800: '#997200',
          900: '#735600',
        },
        saffron: {
          50: '#FFF3E0',
          100: '#FFDFB0',
          200: '#FFCB7D',
          300: '#FFB74A',
          400: '#FFA726',
          500: '#FF9800',
          600: '#E68900',
          700: '#CC7A00',
          800: '#B36B00',
          900: '#995C00',
        },
        spiritual: {
          dark: '#02040A',
          deeper: '#050712',
          deep: '#0A1128',
          medium: '#151E3D',
          light: '#253565',
          accent: '#3E57A0',
        },
        sacred: {
          red: '#C62828',
          green: '#2E7D32',
          blue: '#1565C0',
          yellow: '#F9A825',
          white: '#FAFAFA',
          vermillion: '#E53935',
        }
      },
      fontFamily: {
        heading: ['Cinzel', '"Noto Serif Telugu"', 'serif'],
        body: ['Poppins', 'Inter', '"Noto Sans Telugu"', 'sans-serif'],
        decorative: ['"Cormorant Garamond"', 'Playfair Display', '"Noto Serif Telugu"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 15s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 197, 38, 0.3), 0 0 10px rgba(255, 197, 38, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 197, 38, 0.6), 0 0 40px rgba(255, 197, 38, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)', boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '50%': { opacity: '.8', transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
