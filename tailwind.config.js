/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome': 'url(/src/assets/welcome.png)'
      },
      fontFamily: {
        'monteserrat': ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

