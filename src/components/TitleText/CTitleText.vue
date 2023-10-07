<template>
    <div class="text-center my-5 after:content-[''] after:absolute after:border-[1px] after:bottom-0 after:left-[50%] after:w-10% after:origin-[-50%, 0px]">
        <p class="text-[40px] font-bold :max-ms:text-[28px]">{{title}}</p>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
interface Props{
title:string
}
defineProps<Props>()
</script>
<style scoped>
    .text-center{
        position: relative;
        padding-bottom: 10px;
    }
    .text-center::after{
        content: '';
        position: absolute;
        border: 2px solid #E54545;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0px);
        width: 200px;

    }
</style>