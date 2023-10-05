<template>
  <div class="bg-bgColor">
    <div class="home h-screen">
        <Header class="mb-20"/>
        <Hero/>
    </div>
    <CAbout/>
    <CCountries/>
  </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import Hero from '../components/hero.vue';
import CAbout from '../components/CAbout.vue';
import CCountries from '../components/CCountries.vue';
</script>
<style>
    .home{
        padding-bottom: 50px;
        background:linear-gradient(180deg, #07091C -4.12%, rgba(7, 9, 28, 0.60) 49.39%, rgba(7, 9, 28, 0.20) 85.78%, #07091C 100%), url(../assets/images/banner.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>