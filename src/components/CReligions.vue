<template>

      <div class="container">
        <CTitle :title="$t('religions')" class="mt-10"/>
       <p class="text-2xl text-center max-sm:text-base">{{ $t('CReligionsSub') }}</p>
       <div class="grid grid-cols-3 gap-3 mt-10 max-md:grid-cols-1">
        <Religions v-for="(el, idx) in ReligionData" :key="idx" :religion="el.religion" :context="el.content" :img="el.img"/>
      </div>
       </div>   
</template>
<script setup lang="ts">
import CTitle from './TitleText/CTitleText.vue'
import Religions from './Religions/CReligion.vue'
import { ReligionData } from '../assets/Data/Data'

</script>
<style scoped>
    
</style>