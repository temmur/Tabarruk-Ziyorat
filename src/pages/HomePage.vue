<template>
  <div class="bg-bgColor">
    <div id="breadcrumb"></div>
    <!-- <COptions @click="myButton" class="mt-4" :list="[{item: 'ad', status: 'accepted'}]"  v-slot="data">
      <div :class="{ 'text-red-600': data.count === 1 }">lalaku</div>
      {{ data.text }} {{ data.count }} -->
      <!-- <template v-slot:[activeSlot]>
        <p> hey bro, this is content </p>
      </template> -->
    <!-- </COptions> -->
    <div class="home h-screen">
        <Header class="mb-10"/>
        <Hero/>
    </div>
    <CAbout/>
    <CCountries/>
    <CReligions/>
   <div class="py-10">
    <CNews/>
   </div>
   <CInstagram/>
   <CPartners/>
  <CFooter/>
   <!-- <div class="grid grid-cols-3 max-md:grid max-md:grid-cols-1">
    <CCollpase v-for="(el, idx) in CData" :key="idx" :show="active === idx" @click="openItem(idx)"/>
   </div> -->

  </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import Hero from '../components/hero.vue';
import CAbout from '../components/CAbout.vue';
import CCountries from '../components/CCountries.vue';
import CReligions from '../components/CReligions.vue'
import CNews from '../components/СNews.vue'
import CCollpase from '../components/CCollapse.vue'
import CData from '../assets/Data/NewsData'
import COptions from '../components/COptions.vue';
import Button from '../components/Buttons/Button.vue';
import CInstagram from '../components/CInstagram.vue';
import {ref, provide, defineAsyncComponent} from 'vue'
import CPartners from '../components/CPartners.vue';
import CFooter from '../components/CFooter.vue'
const AsyncComp = defineAsyncComponent({
  loader: () => import('../components/COptions.vue'),
  loadingComponent: CData,
  delay: 200,
}
  
)
const activeSlot = ref('content')
const active = ref(0)
provide(/* key */ 'message', /* value */ 'hello!')
function openItem(id: number) {
  if(active.value === id) {
    active.value = null
  } else {
    active.value = id
  }
}
const myButton = () => {
  console.log('my button');
  
}
</script>
<style>
    .home{
        padding-bottom: 50px;
        background:linear-gradient(180deg, #07091C -4.12%, rgba(7, 9, 28, 0.60) 49.39%, rgba(7, 9, 28, 0.20) 85.78%, #07091C 100%), url(../assets/images/banner.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>