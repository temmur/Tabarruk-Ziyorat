<template>
   <div class="relative overflow-hidden w-full h-[200px] lg:h-[550px]" loading="false" data-v-fdb8a45c="">
    <div class="w-full h-full flex -y-center relative">
      <div v-for="(image, idx) in dynamicImages" :key="idx" class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]">
        <img class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6] opacity-1" alt="banner-image" lazy="loaded" :src="`${image}`">
      </div>
      <img class="w-full h-full absolute left-0 max-w-[30%] object-cover" alt="banner-image" lazy="loaded" src="images/PAbout/dynamicImg6.jpeg">
      <img class="w-full h-full absolute right-0 max-w-[30%] object-cover" alt="banner-image" lazy="loaded" src="images/PAbout/dynamicImg7.jpeg">
      <div class="w-full h-full absolute inset-0 bg-dark/20 z-[2]">
      </div>
    </div>
  </div>
    <!-- :class="`bg-[url(/images/PAbout/${image})]`" -->
    <!-- <img :src="`images/PAbout/${image}`" alt="" v-for="(image, id) in dynamicImages" :key="id" class="border" > -->
    <!-- <div :class="`bg-[url('${image}')]`" alt="" v-for="(image, id) in dynamicImages" :key="id" class="border" >
        </div> -->
</template>
<script setup lang="ts">
import Header from '../../components/Header.vue';
import { defineProps, ref, reactive } from 'vue';
defineProps ({image:String})
const dynamicImages = reactive(['images/PAbout/dynamicImg8.jpeg', 'images/PAbout/dynamicImg2.jpeg', 'images/PAbout/dynamicImg3.jpeg', 'images/PAbout/dynamicImg4.jpeg', 'images/PAbout/dynamicImg5.jpeg', 'images/PAbout/dynamicImg6.jpeg',])
</script>
<style scoped>
.banner{
  height: 500px;
}
</style>
<style>

</style>