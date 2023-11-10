<template>
  <div class="bg-bgColor">
    <div class="container">
      <Header />
      <CBreadCrumb />
      <div class="w-full max-w-[900px] m-auto my-5">
        <p class="text-40 font-semibold">
          Hungary is in talks with Turkey on gas <br />
          purchases and transit
        </p>
        <ul class="flex items-center my-5">
          <li class="mr-4 flex items-center">
            <img src="images/PNews/calendar.svg" alt="" class="mr-2" />
            05.05.2023
          </li>
          <li class="flex items-center">
            <img src="images/PNews/eye.svg" alt="" class="mr-2" />
            05.05.2023
          </li>
        </ul>
        <img src="images/PNews/news3.jpeg" alt="" class="w-full rounded-xl" />
      </div>
      <CFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import CFake from '@/assets/Data/fake.json'
import NewsData from '../../assets/Data/NewsData'
import CBreadCrumb from '../../components/CBreadCrumb.vue'
import Header from '../../components/Header.vue'
import CFooter from '../../components/CFooter.vue'
import { ref, reactive, onMounted } from 'vue'
const news = ref(null);

    const fetchNews = async () => {
      try {
        const response = await fetch(NewsData);
        const data = await response.json();
        news.value = data[0];
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    onMounted(fetchNews);

</script>