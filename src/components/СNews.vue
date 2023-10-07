<template>
    <div>
       <div class="container">
        <CTitle title="News"/>
        <p class="text-2xl text-center max-sm:text-base"> Leading news about Turkic states</p>
        <div class="grid grid-cols-2 gap-4 mt-10 grid-rows-2">
            <News v-for="(el, idx) of NewsData" :key="idx" :title="el.title" :subtitle="el.subtitle" :img="el.img" class="grid grid-cols-2"/>
        </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import News from '../components/News/News.vue'
import CTitle from './TitleText/CTitleText.vue'
import NewsData from '../assets/Data/NewsData'
</script>
<style scoped>
    
</style>