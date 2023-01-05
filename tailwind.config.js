/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
        '4xl': '2700px',
        '5xl': '3300px',
      },
      colors: {
        platinum: {
          500: '#E6E3E4'
        },
        beaublue: {
          500: '#BDD4F1'
        },
        paletaupe: {
          500: '#BAA287'
        },
        htmlgray: {
          500: '#7C8584'
        },
        darkjunglegreen: {
          500: '#121B28'
        },
      },
      fontFamily: {
        grestal: 'grestal',
        WorkSans: 'WorkSans'
      },
    },
  },
  plugins: [],
}
