/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#1D1714',
          'merlot': '#5E192B',
          'terracotta': '#B3583E',
          'amber': '#E09F3E',
          'vellum': '#F7F3EB',
          'muted': '#9E978E',
          'border': 'rgba(224, 159, 62, 0.18)'
        }
      },
      fontFamily: {
        'display': ['Newsreader', 'serif'],
        'body': ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
