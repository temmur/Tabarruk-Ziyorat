<template>
    <div class="bg-bgColor">
        <Header/>
        <CBreadCrumb/>
        <div class="container ">
            <p class="my-4 text-[40px] font-bold">News</p>
            <div class="grid grid-cols-4 gap-5 max-md:grid-cols-1 max-lg:grid-cols-3">
                <CNewsCardVue v-for="(element, index) in CNews" :key="index" :data="element" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import CBreadCrumb from '../components/CBreadCrumb.vue';
import CNewsCardVue from '../components/Cards/CNewsCard.vue';
import CNews from '@/assets/Data/CNews';
</script>