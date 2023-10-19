<template lang="">
    <div class="countryBox relative p-4 flex items-center flex-col hover:bg-grayBack hover:rounded-lg after:content-[''] after:border-[1px] after:border-grayColor after:w-[20%] after:absolute after:bottom-0 hover:after:w-[100%] hover:after:border-white">
        <img :src="img" alt="" class="countryImg">
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
.countryBox:hover  .countryImg{
    border-radius: 90px;
    box-shadow:0px 0px 9px rgb(46, 34, 34);
}

</style>