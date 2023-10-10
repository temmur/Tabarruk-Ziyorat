<template>
    <header>
        <div class="container xl:w-maxScreen">
            <div class="header-inner">
                <div class="header-logo max-sm:w-[80%]">
                    <img src="../assets/images/Logo.svg" alt="">
                </div>
                <nav class="max-lg:hidden" :class="showSearch? 'hidden' : 'block' ">
                    <ul class="nav-list">
                        <li class="nav-text"><a href="">About us</a></li>
                        <li class="nav-text"><a href="">Countries</a>
                            <ul class="nav-sub-content">
                                <li>
                                    <img src="../assets/images/Uzbekistan.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Uzbekistan</p>
                                        <p>32 destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Uzbekistan.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Uzbekistan</p>
                                        <p>32 destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Uzbekistan.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Uzbekistan</p>
                                        <p>32 destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Uzbekistan.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Uzbekistan</p>
                                        <p>32 destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Uzbekistan.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Uzbekistan</p>
                                        <p>32 destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Uzbekistan.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Uzbekistan</p>
                                        <p>32 destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Uzbekistan.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Uzbekistan</p>
                                        <p>32 destinations</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-text"><a href="">Religions</a>
                            <ul class="nav-sub-content nav-pray">
                                <li>
                                    <img src="../assets/images/Islam.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Islam</p>
                                        <p>32 Destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Christian.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Christian</p>
                                        <p>24 Destinations</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/Budism.svg" alt="">
                                    <div class="nav-subtext">
                                        <p>Buddism</p>
                                        <p>19 Destinations</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-text"><a href="">Heritage map</a></li>
                        <li class="nav-text"><a href="">Help</a></li>
                        <li class="nav-text"><img src="../assets/images/The UK.svg" alt="">
                            <ul class="nav-sub-content nav-language">
                                <li ><img src="../assets/images/russ.svg" alt="">Русский</li>
                                <li><img src="../assets/images/russ.svg" alt="">Русский</li>
                                <li><img src="../assets/images/russ.svg" alt="">Русский</li>
                            </ul>
                        </li>
                        <li class="nav-text" @click="openSearch"><img src="../assets/images/search.svg" alt=""></li>
                        <svg class="nav_active hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.33325 8H26.6666M5.33325 16H26.6666M5.33325 24H26.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </ul>
                </nav>
              <div class="flex items-center">
                <CSearch class="max-lg:'hidden'" v-show="showSearch"/>
                <i class="fa-solid fa-xmark text-xl" :class="showSearch? 'block' : 'hidden'" @click="openSearch"></i>
              </div>
                <i class="fas fa-bars text-2xl hidden max-lg:block"></i>
            </div>
        </div>
    </header>
</template>
<script setup>
import CSearch from '../components/CSearch.vue'
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