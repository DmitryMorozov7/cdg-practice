/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, css}"],
  theme: {
    extend: {
      screens: {
        lg: "1280px",
        md: "792px",
        sm: "320px",
      },
      fontFamily: {
        Monteserrat: ["Monteserrat", "sans-serif"],
      },
      colors: {
        black: '#27272A',
        greyDark: '#696969',
        greyWhite: '#27272A',
        white: '#FCFBFA',
        lavender: '#7E3AF2',
        red: '#E02424'
      },
      backgroungImage: {
        'send': "url('/img/Send.svg')"
      }
    },
  },
  plugins: [],
}

