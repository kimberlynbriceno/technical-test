/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        rose:{
          500:'#fc758c'
        }
      },
    },
    fontFamily:{
      abc:['Montserrat', 'sans-serif'],
      dfg:[ 'Questrial', 'sans-serif'],
    }
  },
  plugins: [],
}
