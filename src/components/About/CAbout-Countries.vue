<template lang="">
        <div class="flex items-center">
            <img class="countries" :src="i" alt="" v-for="i in countImages">
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
  background-size: auto 110%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
 object-fit: cover;
  width: 25%;
  height: 100%;
  margin: 5px;
  transition: flex 0.3s ease-in;
  cursor: pointer;
    }
.countries:active {
  flex: 5;
}
</style>