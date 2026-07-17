/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foundation: {
          bg: '#EDE7DA',       // Warm temple plaster / limewash stone
          ink: '#2B2622',      // Deep manuscript charcoal
          line: '#B8AD98',     // Muted stone-grey for hairlines/borders
        },
        accent: {
          kathakar: '#8C2F1B',   // Deep sindoor / vermilion-brick red
          astrologer: '#3D4A3A', // Deep temple-brass verdigris green
          vastu: '#6B5433',      // Raw sandalwood / architectural teak brown
        }
      },
      fontFamily: {
        display: ['Fraunces', 'serif'], // Warm, classical serif weight
        body: ['Inter', 'sans-serif'],   // Clean humanist sans
      }
    }
  },
  plugins: [],
}
