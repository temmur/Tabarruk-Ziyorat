<template lang="">
    <div class="p-4 flex items-center flex-col hover:bg-grayBack hover:rounded-lg">
        <img :src="img" alt="">
        <p class="text-xl mt-4">{{country}}</p>
        <p class="text-sm text-grayColor mt-1">{{dest}} destinations</p>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
interface Props{
    country: string
    dest: number
    img: string
}
defineProps<Props>()
</script>
<style scoped>
    
</style>