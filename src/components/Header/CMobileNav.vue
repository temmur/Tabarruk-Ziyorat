<template>
    <div>
        <ul class="text-2xl font-bold ">
            <li class="mx-4 hover:text-midGray m-4"><RouterLink to="/about">About us</RouterLink></li>
            <li class="relative mx-4 hover:text-midGray mb-4"><a href="" @click.prevent="toggleNav()" @blur="toggleClose()">Countries</a>
                <CSubNav v-if="state" :data="CountriesInfo"/>
            </li>
            <li class="mx-4 hover:text-midGray mb-4"><a href="About us">Religions</a>
                
            </li>
            <li class="mx-4 hover:text-midGray mb-4"><a href="About us">Heritage map</a></li>
            <li class="mx-4 hover:text-midGray"><a href="About us">Help</a></li>
        </ul>
    </div>
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