<template lang="">
    <div class="relative flex items-center justify-between bg-grayBack  rounded-xl" >
        <div class="p-4">
            <p class='text-[40px] font-bold'>{{mount}}</p>
            <p class="text-grayColor text-xl">{{name}}</p>
        </div>
        <div class="absolute bottom-0 right-0">
            <img :src="img" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue'

interface Props {
    mount:number
    name?:string
    img:string
}
defineProps<Props>()
    
</script>
<style scoped>
    
</style>