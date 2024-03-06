/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      'textblack':'#3E424A',
      'white': '#ffffff',
      'silver': '#ecebff',
      'blue':'#2870EA',
      'darkblue':'#1B4AEF',
      'gray':'#3E5765',
      'black':'#0B1426',
      'lightgray':'#5D667B',
      'gray2':'#808A9D',
      'darkgreen':'#14B079',
      'lightgreen':'#EBF9F4',
      'grey':'#768396',

    },
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
  
    extend: {},
  },
  plugins: [],
}

