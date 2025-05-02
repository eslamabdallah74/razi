/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'razi-red': '#b82025',
        'razi-red-dark': '#9a1b1f',
        'razi-blue': '#1e3a8a',
        'razi-blue-light': '#3b5ac9',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        arabic: ['Markazi Text', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'sponsor-scroll': 'sponsor-scroll 1s linear infinite',
        'marquee': 'marquee 30s linear infinite',

      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};