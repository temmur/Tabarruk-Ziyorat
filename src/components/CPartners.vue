<template>
    <div>
        <div class="container">
            <div class="container">
                    <CTitleText title="Partners"/>
            <p class="text-base text-center text-xl">This website is created to share information about historical, unique places located in Turkic countries. </p>
            </div>
        </div>
       <div class="relative my-8">
        <div class="overflow-hidden">
                <Vue3Marquee :pause-on-hover="true" class="flex mx-5">
                    <CPartnersCarousel v-for="(el, idx) of partners" :key="idx" :el="el"/>
                </Vue3Marquee>
                </div>
                <img class="absolute z-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-md:w-[170px] max-md:h-[180px]" src="images/partnerStar.svg" alt="">
           <div class="flex gap-3 overflow-hidden">
            <Vue3Marquee :pause-on-hover="true" class="flex gap-3">
            <CPartnersCarousel v-for="(el, idx) of partners" :key="idx" :el="el"/>
        </Vue3Marquee>
           </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import CTitleText from './TitleText/CTitleText.vue';
import CPartnersCarousel from './CPartnersCarousel.vue';
import { Vue3Marquee } from 'vue3-marquee'

import {ref, reactive} from 'vue'
const partners = reactive(['images/Partner1.svg', 'images/Partner2.svg', 'images/Partner3.svg', 'images/Partner4.svg', 'images/Partner5.svg'])
</script>