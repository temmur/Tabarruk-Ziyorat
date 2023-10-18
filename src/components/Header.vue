<template>
    <header>
        <div class="container xl:w-maxScreen">
            <div class="header-inner">
                <div class="header-logo max-sm:w-[80%]">
                    <img src="../assets/images/Logo.svg" alt="">
                </div>
                <nav class="max-lg:hidden" :class="showSearch? 'hidden' : 'block' ">
                   <CNav/>
                </nav>
              <!-- <div class="flex items-center">
                <CSearch class="max-lg:'hidden'" v-show="showSearch"/>
                <i class="fa-solid fa-xmark text-xl" :class="showSearch? 'block' : 'hidden'" @click="openSearch"></i>
              </div> -->
                <i class="fas fa-bars text-2xl hidden max-lg:block"></i> {{  list  }}
            </div>
        </div>
    </header>
</template>
<script setup>
import CSearch from '../components/CSearch.vue'
import CNav from './Header/CNav.vue';
import { ref, reactive } from 'vue';
const showSearch = ref(false)
function openSearch(){
    showSearch.value = !showSearch.value
}
</script>
<style scoped>

header{
}
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
    grid-template-columns: 1 fr 1fr 1fr;
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
</style>