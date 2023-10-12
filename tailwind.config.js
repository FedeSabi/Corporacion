/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'azul-joginere': '#035AA6',
        'violeta-joginere': '#0E0C40',
      },
    },
  },
  plugins: [],
}

