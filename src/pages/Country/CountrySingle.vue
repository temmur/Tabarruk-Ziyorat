<template>
    <div class="min-h-screen flex flex-col bg-bgColor">
    <div class="hello">
        <Header/>
      <div class="flex-1 container">
        <CBreadcrumbs/>
        <div class="text-center">
            <h1 class="text-80 font-bold">{{ country?.name }} </h1>
            <p class="text-xl max-w-[800px] m-auto my-5">{{ country?.subtitle }}</p>
            <Button title="Watch video" variant="primary">
                <template #suffix>
                    <i class="fa-solid fa-play ml-2"></i>
                </template>
            </Button>
        </div>
        <div class="grid grid-cols-2 max-lg:grid-cols-1 mt-32 justify-evenly mb-5">
            <CCountryCard :data="country" :keys="country?.attractions" title="Attractions"/>
            <div class="grid grid-cols-4 max-lg:grid-cols-2">
                <CCountryCard :data="country" :keys="country?.pollution" title="Pollution" class="border-r-0 rounded-r-none border-r-[1.2px] border-gray-50"/>
                <CCountryCard :data="country" :keys="country?.religions?.islam?.statistic" title="Islam" class="rounded-l-none rounded-r-none border-r-[1.2px] border-gray-50 max-lg:border-none"/>
                <CCountryCard :data="country" :keys="country?.religions?.christianity?.statistic" title="Christianity" class=" rounded-l-none rounded-r-none border-r-[1.2px] border-gray-50"/>
                <CCountryCard :data="country" :keys="country?.religions?.buddism?.statistic" title="Buddism" class=" rounded-l-none"/>
            </div>
            
        </div>
      </div>
    </div>
      <CFooter/>
    </div>
</template>
<script setup lang="ts">
import Header from '../../components/Header.vue';
import CFooter from '../../components/CFooter.vue';
import CBreadcrumbs from '../../components/CBreadcrumbs.vue';
import Button from '../../components/Buttons/Button.vue';
import CCountryCard from '../../components/Cards/CCountryCard.vue';
import countryData from '../../../src/assets/Data/CountryData'
import {ref, onMounted, computed} from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const country = ref(null)
const filteredObjects = ref({})
const fetchNews = async () => {
  try {
    const response = await fetch('../../../src/assets/Data/CountryInfo.json');
    const data = await response.json();
    country.value = data.find((element) => element.name == route.params.slug)
  } catch (error) {
    console.error('Error fetching news:', error);
  }
  return country
};
onMounted(fetchNews)
// const objectKeys = computed(() => {
//       return Object.keys(country.value);
//     });


</script>
<style>
    .hello{
        background: url("/images/banner.png");
    }
</style>