<template>
   <div class="bg-bgColor">
    <Header/>
    <div class="container">
        <CBreadcrumbs/>
        <div class="grid gird-cols-4">
            <CNewsCard/>
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
</script>