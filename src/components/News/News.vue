<template>
    <div class="newsBox rounded-xl p-3 border border-gray-600 block hover:bg-grayBack hover:border-grayBack">
        <div class="mr-2">
            <img :src="img" alt="" class="w-[100%] h-[100%]">
        </div>
        <div>
            <p class="text-lg font-semibold max-md:text-base">{{title}}</p>
            <p class="text-base text-grayColor max-md:hidden">{{ subtitle }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import Button from '../Buttons/Button.vue';
interface Props{
title:string
subtitle?:string
img:string
}
defineProps<Props>()
</script>
<style scoped>
.newsBox:first-child{
    grid-row: 1 / span 2;
}
.newsBox:first-child img{
  height: 100%;
  object-fit: cover;
}
.newsBox p:last-child{
    transform: translateY(20px);
}
</style>