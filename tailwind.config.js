/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Hind', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['DM Sans', 'Hind', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: '#0B3B2E',
        primaryAccent: '#1A535C',
        ink: '#0A0F0C',
        sunshine: '#F9B233',
        background: '#F4F1E6',
        white: '#FFFFFF',
        'light-gray': '#E0E0E0',
        success: '#4CAF50',
        error: '#D32F2F',
      },
    },
  },
  plugins: [],
}

