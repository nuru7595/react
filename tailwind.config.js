/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        text: '#20232A',
        bg: '#61DAFB'
      }
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"]
    },
    container: {
      padding: {
        DEFAULT: "12px"
      },
      center: true
    }
  },
  plugins: [],
}