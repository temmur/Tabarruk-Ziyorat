<template>
    <div class="video w-full h-[500px] bg-no-repeat bg-center bg-cover relative ">
        <i @click="showModal"  class="fa-solid fa-play absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-6xl bg-redColor py-6 px-8 rounded-full"></i>
    </div>
    <div>
    <Modal size="5xl" v-if="isShowModal" @close="closeModal" class="" >
      <template #header>
        <div class="flex items-center text-lg text-gray-700">
          Terms of Service
        </div>
      </template>
      <template #body >
        <iframe v-if="url" width="100%" height="515" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </template>
    </Modal>
    </div>
</template>
<script setup lang="ts">
import { Modal } from 'flowbite-vue'
import { ref, computed, watch } from 'vue'

const isShowModal = ref(false)
function closeModal() {
  isShowModal.value = false
  document.body.style.overflow = 'scroll'
}
function showModal() {
  isShowModal.value = true
  document.body.style.overflow = 'hidden'
}
const link = ref('https://www.youtube.com/watch?v=4j2Uzwv4L2g')
// https://www.youtube.com/watch?v=4j2Uzwv4L2g
// https://www.youtube.com/embed/LQNCEQ1zzpk?si=goDVtrRcvY_X_gH3

const url = computed(() => {
    if(link.value.includes('watch')){
        const list = link.value?.split('watch?v=')
        return list?.[0] + 'embed/' + list?.[1]
    }else{
        return link.value
    }
})
</script>
<style scoped>
    .video{
        background: linear-gradient(180deg, #07091C -4.12%, rgba(7, 9, 28, 0.60) 49.39%, rgba(7, 9, 28, 0.20) 85.78%, #07091C 100%), url(../assets/images/banner.png);
        background-position: center;
        background-size: cover;
    }
</style>