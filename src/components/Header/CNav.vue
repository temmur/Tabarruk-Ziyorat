<template>
   
        <ul class="flex items-center justify-between">
            <li class="mx-4 hover:text-midGray"><RouterLink to="/about" class="text-base font-bold" >About us</RouterLink></li>
            <li class="relative mx-4 hover:text-midGray"><a href="" class="text-base font-bold" @click.prevent="toggleNav()" @blur="toggleClose()">Countries</a>
                <CSubNav v-if="state" :data="CountriesInfo"/>
            </li>
            <li class="mx-4 hover:text-midGray"><a href="About us" class="text-base font-bold">Religions</a>
                
            </li>
            <li class="mx-4 hover:text-midGray"><a href="About us" class="text-base font-bold">Heritage map</a></li>
            <li class="mx-4 hover:text-midGray"><a href="About us" class="text-base font-bold">Help</a></li>
        </ul>

</template>
<script setup lang="ts">
import { ref, reactive, provide } from 'vue';
import CSubNav from '../Header/CSubNav.vue';
import NavLists from '../Header/NavLists.vue'
const state = ref(false)
const toggleNav=(e)=>{
    state.value = !state.value
}
const toggleClose=(e)=>{
    if(state.value === true) {
        state.value = !state.value
    }
}
const CountriesInfo = reactive(
        [
    {
        country: "Uzbekistan",
        destinations: "32 destinations",
        flag: "images/UzbekistanFlag.svg"
    },
    {
        country: "Türkiye",
        destinations: "27 destinations",
        flag: "images/TurkiyeFlag.svg"
    },
    {
        country: "Turkmenitan",
        destinations: "24 destinations",
        flag: "images/TurkmenistanFlag.svg"
    },
    {
        country: "Azerbaijan",
        destinations: "12 destinations",
        flag: "images/UzbekistanFlag.svg"
    },
    {
        country: "Hungary",
        destinations: "19 destinations",
        flag: "images/HungaryFlag.svg"
    },
    {
        country: "Kazakhstan",
        destinations: "21 destinations",
        flag: "images/KazakhstanFlag.svg"
    }, 
    {
        country: "Kyrgyzstan",
        destinations: "9 destinations",
        flag: "images/KyrgyzstanFlag.svg"
    }

]
    )

</script>


