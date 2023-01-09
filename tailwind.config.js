/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './ app/**/ *.{ js, ts, jsx, tsx }',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'moon': '#1A232E',
        'sun': '#c7c7c7',
      },
    },
  },
  plugins: [],
}
