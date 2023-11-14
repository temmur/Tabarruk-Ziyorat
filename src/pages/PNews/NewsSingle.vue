<template>
      <div class="min-h-screen flex flex-col bg-bgColor">
        <Header/>
    <div class="flex-1 container">
        <CBreadcrumbs/>
        <div class="max-w-[900px] m-auto my-8">
            <p class="text-40 font-semibold max-md:text-2xl">{{ single?.title }}</p>
            <ul class="flex items-center my-4">
                <li class="flex items-center mr-5"><img src="/images/CNews/calendar.svg" alt="" class="mr-2">20.12.2023</li>
                <li class="flex items-center"><img src="/images/CNews/eye.svg" alt="" class="mr-2">13.201.2023</li>
            </ul>
            <img :src="single?.images[0]" alt="" class="rounded-xl">
            <p class="my-5 text-base">{{single?.subtitle}}</p>
           <div class="grid grid-cols-3 gap-5 max-md:grid-cols-2">
            <img :src="img"
            v-for="img in single?.images"
            :key="img"
            alt="" class="rounded-md">
           </div>
           <p class="my-5 text-base pb-10 border-b border-gray-700">{{single?.subtitle}}</p>
        </div>
    </div>
    <CFooter />
  </div>
</template>
<script setup lang="ts">
import Header from '../../components/Header.vue';
import CFooter from '../../components/CFooter.vue';
import CBreadcrumbs from '../../components/CBreadcrumbs.vue';
import {ref, reactive, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const news = ref(null)
let single = ref(null)


const fetchNews = async () => {
  try {
    const response = await fetch('../../../src/assets/Data/fake.json');
    const data = await response.json();
    single.value = data.find((element) => element.id == route.params.slug)
  } catch (error) {
    console.error('Error fetching news:', error);
  }
  return single
};
onMounted(fetchNews)

</script>