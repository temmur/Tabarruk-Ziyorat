<template lang="">
        <div class="flex items-center justify-between">
            <img class="countries rounded-xl" :src="i" alt="" v-for="i in countImages">
        </div>

</template>
<script setup lang="ts">
const countImages = [
    '/images/count11.png',
    "/images/count2.png",
    "/images/count3.png",
    "/images/count4.png"
]
</script>
<style scoped>

    .countries{
      width: 24%;
      height: 342px;
      object-fit: cover;
    }
</style>