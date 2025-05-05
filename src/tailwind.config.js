/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./src/**/*.{html,js,ejs}",
    "./public/**/*.{html,js}",
    "./views/**/*.{html,ejs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

  