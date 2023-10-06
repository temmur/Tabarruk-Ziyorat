<template lang="">
    <div class="mt-[64px]">
       <div class="container">
        <p class="text-4xl font-bold text-center my-4">How many Countries</p>
        <p class="text-center text-xl mb-10">All countries that we represent</p>
        <div class="grid grid-cols-4 gap-4">
            <CCountry v-for="(el, idx) in countryList" :key="idx" :country="el.country" :dest="el.destination" :img="el.img"/>
        </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import CCountry from './Countries/CCountry.vue';
import {reactive} from 'vue'

const countryList = reactive(
    [
        {
            country:"Türkiye",
            destination: 27,
            img: '/images/Turkiye.svg'
        },
        {
            country:"Uzbekistan",
            destination: 32,
            img: '/images/Uzbekistan.svg'
        },
        {
            country:"Turkmenistan",
            destination: 24,
            img: '/images/Turkmenistan.svg'
        },
        {
            country:"Azerbaijan",
            destination: 12,
            img: '/images/Azerbaijan.svg'
        },
        {
            country:"Hungary",
            destination: 19,
            img: '/images/Hungary.svg'
        },
        {
            country:"Kazakhstan",
            destination: 21,
            img: '/images/Kazakhstan.svg'
        },
        {
            country:"Kyrgyzistan",
            destination: 9,
            img: '/images/Kyrgyzstan.png'
        }
    ]
)
</script>
<style scoped>
    
</style>