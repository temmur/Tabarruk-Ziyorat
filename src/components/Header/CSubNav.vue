<template>

        <ul class="absolute top-6 w-[400px] bg-blurBack rounded-xl p-4 grid grid-cols-2">
            <li class="flex items-center justify-start my-2 group hover" v-for="(el, idx) in data" :key="idx" >
        <img :src="el.flag" alt="" class="mr-2">
        <div class="">
            <p class="text-base child group-hover:text-redColor">{{ el.country }}</p>
            <p class="text-sm text-grayColor">{{ el.destinations }}</p>
        </div>
    </li>
        </ul>
    
</template>
<script setup lang="ts">
import { defineProps, ref, reactive, inject } from 'vue';
import NavLists from '../Header/NavLists.vue'
interface Props {
    country: string
    flag: string
    des?: string
    data?: {[key: string]: string}[]
  }
  defineProps<Props>()
  const state = ref(false)
// v-for="(el, idx) in CountriesInfo" :key="idx" :country="el.country" :des="el.destinations" :flag="el.flag"
//   const CountriesInfo = reactive(
//         [
//     {
//         country: "Uzbekistan",
//         destinations: "32 destinations",
//         flag: "images/UzbekistanFlag.svg"
//     },
//     {
//         country: "Türkiye",
//         destinations: "27 destinations",
//         flag: "images/TurkiyeFlag.svg"
//     },
//     {
//         country: "Turkmenitan",
//         destinations: "24 destinations",
//         flag: "images/TurkmenistanFlag.svg"
//     },
//     {
//         country: "Azerbaijan",
//         destinations: "12 destinations",
//         flag: "images/UzbekistanFlag.svg"
//     },
//     {
//         country: "Hungary",
//         destinations: "19 destinations",
//         flag: "images/HungaryFlag.svg"
//     },
//     {
//         country: "Kazakhstan",
//         destinations: "21 destinations",
//         flag: "images/KazakhstanFlag.svg"
//     }, 
//     {
//         country: "Kyrgyzstan",
//         destinations: "9 destinations",
//         flag: "images/KyrgyzstanFlag.svg"
//     }

// ]
//     )


</script>
