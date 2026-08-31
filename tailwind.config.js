/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#f9fafb',
        accent: '#2563eb',
        text: '#1f2937',
        'text-light': '#6b7280',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        base: '16px',
      },
    },
  },
  plugins: [],
};
