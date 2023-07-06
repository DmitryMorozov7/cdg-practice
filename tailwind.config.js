/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, css}'],
  theme: {
    extend: {
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
      spacing: {
        '1': '16',
        '1,56': '25',
        '1': '16',
        '1': '16',
        '1': '16',
      },
      backgroungImage: {
        'send': "url('/img/Send.svg')"
      }
    },
  },
  plugins: [],
}

