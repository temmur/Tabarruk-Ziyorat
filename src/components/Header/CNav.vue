<template>
   
        <ul class="flex items-center justify-between">
            <li class="mx-4 cursor-pointer hover:text-midGray"><RouterLink to="/about" class="text-base font-bold" >{{ $t('about') }}</RouterLink></li>
            <li class="relative cursor-pointer mx-4 text-base font-bold hover:text-midGray" @click.prevent="toggleNav('countries')" @blur="toggleClose()">{{ $t('countries') }}
               <Transition name="fade" mode="out-in">
                <CSubNav v-if="currentDropdown === 'countries'" :data="CountriesInfo" />
               </Transition>
            </li>
            <li class="relative mx-4 text-base font-bold cursor-pointer hover:text-midGray" @click.prevent="toggleNav('religions')" @focusout="toggleClose('religions')" >{{ $t('religions') }}
               <Transition name="fade">
                <CSubNav v-if="currentDropdown === 'religions'" :data="ReligionData" class="grid grid-cols-1"/>
               </Transition>
            </li>
            <li class="mx-4 text-base font-bold hover:text-midGray cursor-pointer"><RouterLink to="/exam">{{ $t('map') }}</RouterLink></li>
            <li class="mx-4 text-base font-bold hover:text-midGray cursor-pointer">{{ $t('map') }}</li>
        </ul>

</template>
<script setup lang="ts">
import { Dropdown } from 'flowbite-vue';
import { ref, reactive, provide } from 'vue';
import CSubNav from '../Header/CSubNav.vue';
import NavLists from '../Header/NavLists.vue'
const currentDropdown = ref(null)
const toggleNav=(dropDownName)=>{
  if(currentDropdown.value === dropDownName){
    currentDropdown.value = null
  }else{
    currentDropdown.value = dropDownName
  }
}
const toggleClose=()=>{
   
}
const CountriesInfo = reactive(
        [
    {
        title: "Uzbekistan",
        destination: 32,
        img: "images/UzbekistanFlag.svg"
    },
    {
        title: "Türkiye",
        destination: 27,
        img: "images/TurkiyeFlag.svg"
    },
    {
        title: "Turkmenitan",
        destination: 24,
        img: "images/TurkmenistanFlag.svg"
    },
    {
        title: "Azerbaijan",
        destination: 12,
        img: "images/UzbekistanFlag.svg"
    },
    {
        title: "Hungary",
        destination: 19,
        img: "images/HungaryFlag.svg"
    },
    {
        title: "Kazakhstan",
        destination: 21,
        img: "images/KazakhstanFlag.svg"
    }, 
    {
        title: "Kyrgyzstan",
        destination: 9,
        img: "images/KyrgyzstanFlag.svg"
    }

]
    );

const ReligionData = ref(
    [
    {
        title: "Islam",
        content: "This website is created to share information about historical, unique places located in Turkic countries.",
        img: 'images/religion1.svg',
        destination: 32
    },
    {
        title: "Christianity",
        content: "This website is created to share information about historical, unique places located in Turkic countries.",
        img: 'images/religion2.svg',
        destination: 24,
    },
    {
        title: "Buddism",
        content: "This website is created to share information about historical, unique places located in Turkic countries.",
        img: 'images/religion3.svg',
        destination: 19
    }
]
)
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>


