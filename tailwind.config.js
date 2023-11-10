
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,vue,jsx,tsx,js}',
  'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
], 
  theme: {
    extend: {
      fontSize:{
        rem5: '5rem',
        title: '40px'
      },
      fontFamily:{
        bannerFont: 'Playfair Display',
        textFont: 'Gilroy-Bold'
      },
      maxWidth:{
        maxScreen: '90%'
      },
      backgroundColor:{
        bgColor: 'rgb(9, 11, 30)',
        grayBack: 'rgba(255, 255, 255, 0.04)',
        inputBack: 'rgba(255, 255, 255, 0.10)',
        blurBack: 'rgba(7, 9, 28, 0.12)',
        inputDefault: "#2C2E3E",
        cardBackground: '#252738;',
        blueBackground: 'rgb(8, 10, 28)',
        mobileSearch: 'rgba(255, 255, 255, 0.12)'
      },
      colors:{
        redColor: '#E54545',
        midGray: 'rgba(255, 255, 255, 0.40)',
        grayColor: "rgba(255, 255, 255, 0.60)",
        searchBorder: 'rgba(255, 255, 255, 0.20)',
        cardColor: 'rgba(255, 255, 255, 0.80)',
        newsBg: "rgb(32, 34, 51)",
        newsSubtitle: "#969696"
      },
      backgroundImage:{
        star: "url('images/Star.svg')",
        map: "url('images/Map.svg')",
        video: "url('images/banner.png')"
      },
      fontSize:{
        40: "40px",
        80: "80px"
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}