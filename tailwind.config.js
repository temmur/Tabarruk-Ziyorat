
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
        grayBack: 'rgba(255, 255, 255, 0.04)'
      },
      colors:{
        redColor: '#E54545',
        grayColor: "rgba(255, 255, 255, 0.60)"
      }
    },
  },
  plugins: [],
}