/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      'textblack':'#3E424A',
      'white': '#ffffff',
      'silver': '#D3E0E6',
      'blue':'#2870EA',
      'darkblue':'#1B4AEF',
      'gray':'#3E5765',
      'black':'#0B1426',
      'lightgray':'#5D667B',
      'gray2':'#808A9D',
      'darkgreen':'#14B079',
      'lightgreen':'#EBF9F4',
      'grey':'#768396',
      'bblue':'#0052FE',
      'black':'#0F1629',
      'black2':'#44475B',
      'lightblue':'#E8F4FD',
      'darkblack':'#191C1F',
      'black3':'#111827',
      'gradientlightgreen':'#79F1A4',
      'gradientblue':'#0E5CAD',
      'gradientlred':'#FF9865',
      'gradientdred':'#EF3031',
      'blue':'#0082FF',
      'yellow':'#FAA002',
      
      
      
      
      
      
      
      

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

