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
        gray:"#777777",
        pureblack:"#000"
      },
      fontFamily:{
        'openSans':['Open Sans', 'sans-serif'],
        'manrope':['Manrope', 'sans-serif'],
      },
      boxShadow:{
        shadowConnect:'0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
        enterPriseCardShadow:'0px 12px 32px 0px rgba(0, 0, 0, 0.12)',
      }
    
    },

    
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}


