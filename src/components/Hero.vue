<template>
    <div class="container flex flex-col items-center overflow-hidden">
        <p class="text-xl flex justify-center max-sm:text-sm">
          <img class="max-sm:w-4 max-sm:mr-2" src="../assets/images/map-pin-alt.svg" alt="" />{{ $t('heroLocation') }}
        </p>
        <h1 class="text-center text-[5rem] capitalize font-bannerFont font-bold banner-shadow max-sm:text-[40px]">
          {{ $t('heroTitle') }}
        </h1>
        <p class="text-center text-xl font-medium mt-[40px] w-[60%] max-lg:w-[100%] max-sm:mt-0 max-sm:text-sm leading-[130%] max-sm:mt-4">
         {{ $t('heroText') }}
        </p>
        <div class="text-center mt-10">
          <Button variant="primary" title="Explore" class="inline-flex justify-center text-center">
            <template #suffix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M6.5 12H18.5M18.5 12L13.5 7M18.5 12L13.5 17"
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
    <Carousel class="mt-10"/>

</template>
<script setup>
import Button from './Buttons/Button.vue'
import Carousel from './Hero/Carousel.vue'
</script>
<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Playfair+Display:wght@700&display=swap');
.btn_section {
  display: flex;
  align-items: center;
}
.banner-shadow {
  text-shadow: 0px 10px 50px rgba(12, 15, 48, 0.4);
}
</style>