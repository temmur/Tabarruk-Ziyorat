<template>
     <Vue3Marquee class="w-[100%]" :pause-on-hover="true" >
    <div class="p-2 bg-inputBack rounded-xl mx-5 max-md:w-[200px] max-md:text-sm max-md:mx-2"  v-for="items of 5">
       <img src="images/Instagram_img.svg" alt="Instagram Photo" class="w-full rounded-xl"> 
       <div class="p-2">
        <p class="text-xs">205 147 likes</p>
        <p>History about how this building was build </p>
        <p>2 days</p>
       </div>
    </div>
</Vue3Marquee>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
</script>
<style>
    
</style>