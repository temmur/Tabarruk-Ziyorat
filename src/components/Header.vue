<template>
    <header class="header" :class="{'fixed bg-blueBackground z-50 top-0 transition ease-in-out delay-100 w-full' : isSticky}">
        <div class="container flex items-center justify-between">
                <div class="header-logo max-sm:w-[80%]">
                  <router-link to="/"><img src="../assets/images/Logo.svg" alt=""></router-link>
                </div>
                <nav class="max-lg:hidden" >
                   <CHeaderNav/>
                </nav>
                <i class="fas fa-bars text-2xl hidden max-lg:block" :class="state? 'fas fa-bars' : 'fa-solid fa-xmark'" @click="state = !state"></i> 
        </div>
    </header>
    <CResponseNav :class="state? 'hidden' : 'fixed'"/>
</template>
<script setup lang="ts">
import CSearch from '../components/CSearch.vue'
import CNav from './Header/CNav.vue';
import CHeaderNav from './Header/CHeaderNav.vue';
import {ref, reactive, onMounted} from 'vue'
import CResponseNav from './Header/CResponseNav.vue';
const state = ref(true)

const isSticky = ref(false)
const handleScroll = () => {
      if (window.pageYOffset > 75 ) {
        isSticky.value = true;
      } else {
        isSticky.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
</script>
