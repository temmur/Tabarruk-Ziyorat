
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,vue,jsx,tsx,js}'],
  theme: {
    extend: {
      fontSize:{
        rem5: '5rem',
        title: '40px'
      },
      fontFamily:{
        bannerFont: 'Bangers',
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
        inputDefault: "#2C2E3E"
      },
      colors:{
        redColor: '#E54545',
        midGray: 'rgba(255, 255, 255, 0.40)',
        grayColor: "rgba(255, 255, 255, 0.60)",
        searchBorder: 'rgba(255, 255, 255, 0.20)',
        
      },
      backgroundImage:{
        "star": "url('images/Star.svg')"
      }
    },
  },
  plugins: [],
}