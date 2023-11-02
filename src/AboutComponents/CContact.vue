<template>
    <div class="container flex justify-between py-5 max-md:block">
        <CContactInfo/>
        <CContactMap/>
    </div>
</template>
<script setup lang="ts">
import CContactInfo from './PContact/CContactInfo.vue';
import CContactMap from './PContact/CContactMap.vue';
</script>