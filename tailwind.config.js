/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(13, 10, 75)', // Blue foncé
        secondary: 'rgb(58, 109, 140)', // Bleu clair
        accent: 'white', // blanc
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

