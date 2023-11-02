<template>
    <header class="header" :class="{'fixed bg-blueBackground z-50 top-0 transition ease-in-out delay-100 w-full' : isSticky}">
        <div class="container flex items-center justify-between">
                <div class="header-logo max-sm:w-[80%]">
                  <router-link to="/"><img src="../assets/images/Logo.svg" alt=""></router-link>
                </div>
                <nav class="max-lg:hidden" :class="showSearch? 'hidden' : 'block'">
                   <CHeaderNav/>
                </nav>
                <i class="fas fa-bars text-2xl hidden max-lg:block" :class="state? 'fas fa-bars' : 'fa-solid fa-xmark'" @click="state = !state"></i> 
        </div>
    </header>
    <CResponseNav :class="state? 'hidden' : 'fixed'"/>
</template>
<script setup>
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
<!-- <style scoped>
.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-list {
    display: flex;
    align-items: center;
}

.nav-text {
    margin-left: 24px;
}

.nav-text a {
    color: var(--White, #FFF);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    /* 20.8px */
}

.nav-text:hover .nav-sub-content, .nav-pray, .nav-language{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.nav-sub-content {
    display: none;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.20);
    background: rgba(7, 9, 28, 0.12);
    backdrop-filter: blur(15px);
    position: absolute;
    gap: 16px;
    padding: 16px;
}

.nav-sub-content li {
    display: flex;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.nav-sub-content li:hover{
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.04);
}
.nav-sub-content li:hover .nav-subtext p:first-child{
    color: rgb(226, 68, 68);
    transition: .2s ease-in-out;
}

.nav-sub-content li img {
    margin-right: 10px;
}
.nav-sub-content li p:first-child{
color: var(--White, #FFF);
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 20.8px */
}
.nav-sub-content li p:last-child{
    color: rgba(255, 255, 255, 0.60);
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
}
.nav-pray{
    display: none;
    grid-template-columns: 1fr;
}
.nav-language{
    display: none;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    right: 100px;
}
.nav-language li{
    display: flex;
    align-items: center;
}
.nav-language li:hover{
    color: rgb(226, 68, 68);
    transition: .2s ease-in-out;
}
</style> -->