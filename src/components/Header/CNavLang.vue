<template>
   <ul>
    <li class="relative border-l border-r px-3"  @blur="toggleClose('language')">
      <img src="images/UkLang.svg" alt="" @click="toggleNav('language')">
   <Transition name="fade" mode="out-in">
    <CSubNav v-if="currentDropdown === 'language'" class="left-[-300px] grid-cols-3 " :data="language"/>
   </Transition>
    </li>
   </ul>
</template>
<script setup lang="ts">
import CSubNav from '../Header/CSubNav.vue';
import {ref, reactive} from 'vue'
import { P } from 'flowbite-vue';
const state = ref(false)
const currentDropdown = ref(null)
const toggleNav=(dropDownName)=>{
  if(currentDropdown.value === dropDownName){
    currentDropdown.value = null
  }else{
    currentDropdown.value = dropDownName
  }
}
const toggleClose=(dropDownName)=>{
   currentDropdown.value = null
}


const language = reactive([
    {
        title: "Русский",
        img: 'images/languageLogo/russLang.svg',
        lang: "ru"
    },
    {
        title: "Қазақша",
        img: 'images/languageLogo/kazLang.svg',
        lang: 'kz'
    },
    {
        title: "Türkmen",
        img: "images/languageLogo/turLang.svg",
        lang: 'tr'
    },
    {
        title: "English",
        img: "images/languageLogo/ukLang.svg",
        lang: 'en'
    },
    {
        title: 'Қыргызча',
        img: 'images/languageLogo/kyrLang.svg',
        lang: 'qz'
    },
    {
        title: "Azərbaycan",
        img: 'images/languageLogo/azerLang.svg',
        lang: 'azr'
    },
    {
        title: 'O’zbekcha',
        img: 'images/languageLogo/uzbLang.svg',
        lang: 'uz'
    },
    {
        title: 'Türk',
        img: 'images/languageLogo/turkLang.svg',
        lang: 'turk'
    },
    {
        title: 'Magyar', 
        img: 'images/languageLogo/hungLang.svg',
        lang: 'hg'
    }
])


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