/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      screens: {
        'full-hd': '1920px'
      },
      fontFamily: {
        montserrat: ['Montserrat']
      },
      backgroundSize: {
        '55%': '55%',
        '100%': '100%'
      }
    }
  },
  plugins: []
}
