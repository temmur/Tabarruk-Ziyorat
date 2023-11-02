<template>
 <Vue3Marquee class="w-[100%] " :pause-on-hover="true">
   <div class="flex item-center justify-between p-3 bg-inputBack rounded-md mx-10 backdrop-blur-sm" v-for="n in 5">
    <img src="images/Carousel.svg" alt="">
   <div class="ml-4 flex flex-col item-center">
    <p class="font-normal text-base text-grayColor">Baku, Azerbaijan</p>
    <p class="font-semibold text-xl">Old City (Icherisheher)</p>
   </div>
   </div>
  </Vue3Marquee>
  
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'

</script>
<style scoped>
    
</style>