/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue - primary color
          dark: '#2563EB',    // Darker blue for dark mode
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber
          dark: '#D97706',
        },
        dark: {
          DEFAULT: '#1F2937', // Gray-800
          light: '#374151',   // Gray-700
          lighter: '#4B5563', // Gray-600
        },
        light: {
          DEFAULT: '#F9FAFB', // Gray-50
          dark: '#F3F4F6',    // Gray-100
          darker: '#E5E7EB', // Gray-200
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(11) forwards',
        'cursor': 'cursor .7s infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '11ch' },
        },
        cursor: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}