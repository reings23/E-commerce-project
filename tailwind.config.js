/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      screens: {
        'xl2':'1440px',
      },
      backgroundImage: {
        'custom-image': "url('/path-to-image.jpg')",
      },
      fontFamily:{
        myCustomFont: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

