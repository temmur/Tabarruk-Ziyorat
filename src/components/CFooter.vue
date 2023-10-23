<template>
    <div class="relative border-t-[0.6px] border-gray-400 overflow-hidden pb-3">
      <div class="container grid grid-cols-2 max-md:grid-cols-1">
       <img src="images/vectorIcon.svg" alt="" class="absolute left-0 max-md:hidden">
        <div class="max-sm:w-[80%]">
            <router-link to="/"><img src="images/Logo.svg" alt="Tabarruk Ziyorat Logo"></router-link>
            <p class="text-sm ">This website is created to share information about historical, unique places located in Turkic states. </p>
        </div>
        <div class="grid grid-cols-2 items-center max-md:flex max-md:flex-col-reverse my-2">
            <div class="flex w-full cursor-pointer text-2xl">
                <i class="fa-brands fa-telegram mr-2 hover:text-blue-500"></i>
                <i class="fa-brands fa-twitter mx-2 hover:text-blue-400"></i>
                <i class="fa-brands fa-youtube mx-2 hover:text-red-600"></i>
                <i class="fa-brands fa-instagram ml-2 hover:text-red-500"></i>
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