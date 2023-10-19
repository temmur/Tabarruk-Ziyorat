<template>
    <div class="py-10 map bg-map max-md:bg-none">
        <div class="container my-5 w-50% ">
        <p class="text-4xl font-bold max-md:text-center">Our Mission</p>
        <p class="text-lg my-4 w-[60%] max-md:text-center max-md:w-full">Explore the valuable, historical, and heritage places of Turkic countries through our curated selection of articles, photos, and videos. Discover the beauty of ancient ruins, stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary rulers, artists, and architects who left their mark on the region.</p>
        <p class="text-xl">Our supporters</p>
        <div >
           <CSupporter v-for="(el, idx) in supporterData" :key="idx" :name="el.name" :logo="el.logo" :logo2="el.logo2" class="max-md:w-full"/>
        </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import CSupporter from './CSupporters/CSupporter.vue';
import {ref, reactive} from 'vue'
const supporterData = reactive([
    {
        name: 'Ministry of Tourism and Cultural Heritage of the Republic of Uzbekistan',
        logo: 'images/coat-arm.svg',
        logo2: 'images/goldenBird.svg'
    },
    {
        name: "Organization of Turkic states",
        logo: 'images/emblem-turk.svg',
        logo2: 'images/emblemTurk.svg'
    }
])
</script>
<style scoped>
.map{
    
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 60%;
}
</style>