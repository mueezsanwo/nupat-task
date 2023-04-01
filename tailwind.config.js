/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'Banner': 'url(../src/assets/Banner.png)',
        'NavbarBg': 'url(../src/assets/NavbarBg.png)',
        'AboutBg': 'url(../src/assets/Background.jpg)',
        'TeamBg1': 'url(../src/assets/photo8.png)',
        'TeamBg2': 'url(../src/assets/Photo9.png)',
        'FooterBg': 'url(../src/assets/Image7.png)',
        'ButtonBg': 'url(../src/assets/Pattern.png)'
      },
        
    },
  },
  plugins: [],
}

