/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBg:"#0A2640",
        darkBlue:"#0A2640",
        circle:"#1C3D5B",
      }
    },
    fontfamily:{
      openSans:["Open Sans", "sans-serif"],
      manrope:['Manrope', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
}