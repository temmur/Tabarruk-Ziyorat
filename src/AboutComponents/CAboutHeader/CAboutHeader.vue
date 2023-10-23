<template>
    <div class="banner flex justify-start overflow-hidden relative" >
        <img :src="`${image}`" alt="" v-for="(image, id) in dynamicImages" :key="id" class="border " >
    </div>
    <!-- :class="`bg-[url(/images/PAbout/${image})]`" -->
    <!-- <img :src="`images/PAbout/${image}`" alt="" v-for="(image, id) in dynamicImages" :key="id" class="border" > -->
    <!-- <div :class="`bg-[url('${image}')]`" alt="" v-for="(image, id) in dynamicImages" :key="id" class="border" >
        </div> -->
</template>
<script setup lang="ts">
import Header from '../../components/Header.vue';
import { defineProps, ref, reactive } from 'vue';
defineProps ({image:String})
const dynamicImages = reactive(['images/PAbout/dynamicImg1.svg', 'images/PAbout/dynamicImg2.svg', 'images/PAbout/dynamicImg3.svg', 'images/PAbout/dynamicImg4.svg', 'images/PAbout/dynamicImg5.svg', 'images/PAbout/dynamicImg6.svg'])
</script>
<style scoped>
.banner{

  height: 500px;
}
</style>