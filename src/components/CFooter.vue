<template>
    <div class="relative border-t-[0.6px] border-gray-400 overflow-hidden pb-3">
      <div class="container grid grid-cols-2 max-md:grid-cols-1">
        <img src="images/vectorIcon.svg" alt="" class="absolute left-0 max-md:hidden">
        <div class="max-sm:w-[80%]">
            <img src="images/Logo.svg" alt="">
            <p class="text-sm ">This website is created to share information about historical, unique places located in Turkic states. </p>
        </div>
        <div class="grid grid-cols-2 items-center max-md:flex max-md:flex-col-reverse my-2">
            <div class="flex w-full cursor-pointer">
                <img src="images/telegram.svg" alt="">
                <img src="images/twitter.svg" alt="">
                <img src="images/youtube.svg" alt="">
                <img src="images/instagram.svg" alt="">
            </div>
            <div class="flex justify-start  w-full" >
                <CFooterNav />
            </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import CFooterNav from './Footer/CFooterNav.vue';


</script>