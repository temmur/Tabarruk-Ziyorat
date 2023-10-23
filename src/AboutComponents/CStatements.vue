<template>
    <div class="container">
        <CTitleText title="Statements"/>
        <p class="text-center">All countries that we represent</p>
        <div>
        
            <div >
            <CCard class=""/>
        </div>
       
        </div>
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