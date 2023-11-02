<template lang="">
    <div class="max-lg:mb-10">
        <p class="text-title border-b-2  border-red-500 inline-block mb-3 pb-3">About us</p>
        <p class="text-lg ">Explore the valuable, historical, and heritage places of Turkic countries through our curated selection of articles, photos, and videos. Discover the beauty of ancient ruins, stunning mosques, medieval fortresses, and intricate tilework.</p>
        <p class="text-xl mt-8 font-semibold">Our supporters</p>
        <div class="flex items-center p-2 max-sm:block">
            <div class="block max-sm:flex items-center my-2">
                <img class="mr-3" src="/images/coat-arm.svg" alt="">
                <p class="hidden max-sm:block">Ministry of Tourism and Cultural Heritage of the Republic of Uzbekistan</p>
            </div>
         <div class="block max-sm:flex items-center my-2">
            <img class="mr-3" src="/images/emblem-turk.svg" alt="">
            <p class="hidden max-sm:block">Organization of Turkic states</p>
        </div>
        </div>
        <div class="mt-8">
            <Button title="Explore" variant="primary" class="mb-3 mr-4">
                <template #suffix>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 12C21 10.3431 16.9706 9 12 9C7.02944 9 3 10.3431 3 12M12 21C7.02944 21 3 16.9706 3 12M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </template>
            </Button>
            <Button title="More about us" variant="secondary">
                <template #suffix>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 12H18M18 12L13 7M18 12L13 17"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
            </Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import Button from '../Buttons/Button.vue'
</script>
<style scoped>
</style>