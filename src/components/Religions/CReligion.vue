<template>
    <div class="religionSection ">
       <div class="max-md:flex max-md:items-center">
        <img :src="img" alt="" class="mb-4 mr-3">
        <p class="text-2xl font-bold mb-4">{{religion}}</p>
       </div>
        <p class="mb-4">{{context}}</p>
        <Button title="See more" variant="outline">
            <template #suffix>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M5 9.99992H15M15 9.99992L10.8333 5.83325M15 9.99992L10.8333 14.1666" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </template>
        </Button>
    </div>
</template>
<script setup lang="ts">
import Button from '../Buttons/Button.vue'

import { defineProps } from 'vue';

interface Props{
religion:string
context: string
img:string
}
defineProps<Props>()
</script>
<style scoped>
    .religionSection{
        padding: 32px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        transition: .2s ease-in-out;
    }
    img{
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        padding: 12px;
        transition: .2s ease-in-out;
    }
    .religionSection:hover img{
        background-color: #E54545;
        transition: .2s ease-in-out;
    }
    .religionSection:hover{
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.04);
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(15px);
        transition: .2s ease-in-out;
    }
</style>