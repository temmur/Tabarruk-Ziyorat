<template>
<router-link to="/news-single">
    <div class="bg-newsCardColor p-3 rounded-xl mb-5 min-h-[400px] max-md:min-h-0">
    <img class="rounded-xl min-h-[150px] max-h-[150px] w-full object-cover" :src="data.image" alt="" />
    <div class="pt-4 ">
      <p class="text-base font-semibold">{{ data.title }}</p>
      <p
        class="text-lightGray text-sm pt-2  overflow-hidden text-ellipsis w-ful"
        style="display: inline;
  -webkit-line-clamp: 2; display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;"
      >
        {{ data.subtitle }}
      </p>
      <p class="text-lightGray text-sm pt-2">14.12.2023</p>
    </div>
  </div>
</router-link>
</template>
<script setup lang="ts">
import CNews from '@/assets/Data/CNews'
import NewsSingle from '../../pages/PNews/NewsSingle.vue';
const props = defineProps<{
  data?: { [key: string]: string }[]
  title: string
  img: string
  subtitle: string
}>()

</script>