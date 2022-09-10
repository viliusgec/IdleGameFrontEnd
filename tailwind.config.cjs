const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["luxury"],
  },
}
