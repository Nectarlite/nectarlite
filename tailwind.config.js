/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
      'xl': { 'max': '1115px' },
      // => @media (max-width: 1279px) { ... }
      'lg': { 'max': '1107px' },
      'lgg': { 'max': '1075px' },
      'lgb': { 'max': '1035px' },
      // => @media (max-width: 1023px) { ... }
      'mdl': { 'max': '900px' },
      'md': { 'max': '850px' },
      'mdd': { 'max': '800px' },
      'mdb': { 'max': '760px' },
      'mdn': { 'max': '700px' },
      // => @media (max-width: 767px) { ... }
      'sm': { 'max': '669px' },
      'sml': { 'max': '549px' },
      'smd': { 'max': '420px' },
      'smg': { 'max': '465px' },
      'smlx': { 'max': '380px' },
      'smm': { 'max': '590px' },
      'smn': { 'max': '600px' },
      'sma': { 'max': '390px' },
      'smb': { 'max': '340px' },
      'smc': { 'max': '296px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
     
    },
  },
  plugins: [],
};
