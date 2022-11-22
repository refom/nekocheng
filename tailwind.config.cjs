/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./index.html",
  	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
      }
    },
  },
  plugins: [],
}
