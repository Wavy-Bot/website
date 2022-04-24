const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.stone,
      amber: colors.amber
    },
    extend: {
      fontFamily: {
        'sans': ['Oxygen']
      }
    }
  },
  plugins: [],
}
