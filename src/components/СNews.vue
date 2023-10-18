<template>
    <div class="my-10">
       <div class="container">
        <CTitle title="News"/>
        <p class="text-2xl text-center max-sm:text-base"> Leading news about Turkic states</p>
        <div class="grid grid-cols-2 gap-4 mt-10 grid-rows-2 max-md:grid-cols-1">
            <News v-for="(el, idx) of NewsData" :key="idx" :title="el.title" :subtitle="el.subtitle" :img="el.img" class="grid grid-cols-2 "/>
        </div>
       <div  class="flex justify-end mt-5">
        <CButton variant="default" title="All news">
            <template #suffix>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M5 9.99992H15M15 9.99992L10.8333 5.83325M15 9.99992L10.8333 14.1666" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </template>
        </CButton>
       </div>
        <div>
        </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import News from '../components/News/News.vue'
import CTitle from './TitleText/CTitleText.vue'
import NewsData from '../assets/Data/NewsData'
import CButton from '../components/Buttons/Button.vue'
import { WatchEffect, ref, watchEffect } from 'vue';
const count = ref(0)
function multiplyMe(num: number){
    console.log(num*2)
    return num * 2
}
watchEffect(()=>{
    multiplyMe(count.value)
})

</script>