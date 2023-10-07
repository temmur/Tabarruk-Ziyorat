<template>
    <div>
      <div class="container">
        <CTitle title="Religions" class="mt-10"/>
       <p class="text-2xl text-center max-sm:text-base">This website is created to share information about historical, unique places located in Turkic countries. </p>
       <div class="grid grid-cols-3 gap-3 mt-10 max-md:grid-cols-1">
        <Religions v-for="(el, idx) in Data" key="idx" :religion="el.religion" :context="el.content" :img="el.img"/>
      </div>
       </div>
    </div>
</template>
<script setup lang="ts">
import CTitle from './TitleText/CTitleText.vue'
import Religions from './Religions/CReligion.vue'
import Data from '../assets/Data/Data.ts'

</script>
<style scoped>
    
</style>