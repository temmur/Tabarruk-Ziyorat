<template>
    <div class="container">
        <CTitleText title="Statements"/>
        <p class="text-center">All countries that we represent</p>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M10 20H30M10 20L18.3333 11.6666M10 20L18.3333 28.3333" stroke="#07091C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <div class="grid grid-cols-3 gap-7 pt-[70px] max-md:grid-cols-1">
            <CCard v-for="i in 3"/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M10 20H30M30 20L21.6667 11.6666M30 20L21.6667 28.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
    </div>
   <div class="container">
    <swiper
    :slides-per-view="4"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide> -->
    <!-- <swiper-slide>Slide 3</swiper-slide> -->
  </swiper>
   </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import CTitleText from '../components/TitleText/CTitleText.vue';
import CCard from './StatementCards/CCard.vue';

const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
</script>