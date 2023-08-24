/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary:{
          100:"#47afff",
          200:"#33a7ff",
          300:"#1f9eff",
          400:"#0496ff"
        },
        secondary:{
          100:"#ffcb47",
          200:"#ffc533",
          300:"#ffbf1f",
          400:"#ffb703"
        },
        tersary:{
          100:"#ffa947",
          200:"#ffa033",
          300:"#ff961f",
          400:"#fb8500"
        },
        fourth:{
          100:"#cde8f4",
          200:"#bce0f0",
          300:"#abd8ed",
          400:"#8ecae6"
        },
        fifth:{
          100:"#74cefb",
          200:"#0586ct",
          300:"#046b97",
          400:"#023047"
        },
      }
    },
  },
  plugins: [],
}
