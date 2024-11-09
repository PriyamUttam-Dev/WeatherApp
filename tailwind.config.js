/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       color1: '#5d69f6',
       color2:'#ffc655',
       color3: '#505ef6',
       color4: '#F2AEFA',
      },
      fontFamily:{
       TiddiFont : ['Anton SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

