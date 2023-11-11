<template>
   <div class="bg-bgColor min-h-[740px]">
    <Header/>
    <div class="container">
        <CBreadcrumbs/>
        <div class="grid grid-cols-4 gap-5 my-5 max-md:grid-cols-1 max-lg:grid-cols-2">
            <CNewsCard v-for="(element, index) in fetchedData" :key="index" :data="element"/>
        </div>
    </div>
    <CFooter/>
   </div>
</template>
<script setup lang="ts">
import Header from '../components/Header.vue';
import CFooter from '../components/CFooter.vue';
import CNewsCard from '../components/Cards/CNewsCard.vue';
import CBreadcrumbs from '../components/CBreadcrumbs.vue';
import {ref, reactive} from 'vue'
const fetchedData = ref('')

fetch('../../../src/assets/Data/fake.json').then(response => response.json()).then(data => fetchedData.value = data)

</script>