/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f1f7f4',
          100: '#dcebe2',
          200: '#bbd6c7',
          300: '#8fb9a2',
          400: '#5e9275',
          500: '#3f7558',
          600: '#2e5d45',
          700: '#264a38',
          800: '#1f3a2d',
          900: '#152820',
          950: '#0b1712',
        },
        teal: {
          50: '#effcf8',
          100: '#cbf5ea',
          200: '#97e9d6',
          300: '#5dd5bd',
          400: '#31b89e',
          500: '#1c9c87',
          600: '#157c6d',
          700: '#146358',
          800: '#135049',
          900: '#11423d',
        },
        charcoal: {
          50: '#f6f7f7',
          100: '#e3e6e5',
          200: '#c7ccc9',
          300: '#a3aba6',
          400: '#7e8782',
          500: '#646c68',
          600: '#4f5652',
          700: '#404642',
          800: '#333835',
          900: '#232724',
          950: '#131614',
        },
        sand: {
          50: '#fbf9f4',
          100: '#f4efe2',
          200: '#e9ddc4',
          300: '#dcc79c',
          400: '#cfae74',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(19,22,20,0.04), 0 8px 24px -8px rgba(19,22,20,0.12)',
        cardHover: '0 2px 4px rgba(19,22,20,0.06), 0 18px 40px -12px rgba(19,22,20,0.22)',
        lift: '0 24px 60px -20px rgba(21,40,32,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
