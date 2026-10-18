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
        highlight: 'rgb(156, 195, 220)', // Bleu très clair, lisible sur fond sombre
        surface: 'rgb(11, 8, 63)', // Fond des cartes
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

