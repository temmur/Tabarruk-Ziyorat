<template>
    <div class="container py-28 grid grid-cols-12 gap-6">
        <div class="col-span-4 flex flex-col gap-6 rounded border p-6 h-fit">
            <router-link to="/students">About</router-link>
            <router-link to="/students/contact">Contact</router-link>
        </div>
        <div class="col-span-8 rounded border p-6">
            <router-view></router-view>
        </div>
        <!-- <RouterLink 
            :to="{ name: 'StudentsSingle', params: { slug: item?.id } }" 
            class="rounded-lg flex flex-col bg-white shadow-xl mb-4 last:mb-0 group transition duration-200 ease-in-out" 
            v-for="(item, index) in list" :key="index"
        >
            <div class="max-h-[280px] h-full overflow-hidden">
                <img :src="item?.images?.[0]" alt="" class="aspect-square w-full h-full rounded-t-lg">
            </div>
            <div class="px-3 py-4 grow flex flex-col">
                <p class="text-lg text-gray-900"> {{ item?.title }} </p>
                <p class="text-sm text-gray-500 mt-1 mb-4"> {{ item?.description }} </p>
                <p class="text-2xl font-medium mt-auto"> {{ item?.price }} </p>
            </div>
        </RouterLink> -->

    </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter  } from 'vue-router';
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()

console.log(route, router);

const list = ref([])

fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json()).then(res => {
    console.log(res);
    
    list.value = res
})



</script>