<template>
   <div class="flex items-center bg-grayBack w-[423px] p-3 rounded-xl my-4 relative">
                <img :src="logo" alt="" class="mr-2">
                <p class="text-sm">{{ name }}</p>
                <img :src="logo2" alt="" class="absolute right-0 bottom-0">
            </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
interface Props{
    name: string,
    logo: string,
    logo2: string
}
defineProps<Props>()
</script>