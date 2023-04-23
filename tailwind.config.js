/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B274',
          hover: '#01C983',
          bg: '#F3FFFB',
        },
        secondary: {
          DEFAULT: '#FAB900',
        },
        text: {
          DEFAULT: '#8C8C8C',
        },
        heading: {
          DEFAULT: '#27282B',
        },
      },
      fontFamily:{
        poppins: 'var(--font-poppins)'
      }
    },
  },
  plugins: [],
}
