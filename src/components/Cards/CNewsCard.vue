<template>
   <router-link to="/news-single">
    <div class="bg-newsBg p-3 rounded-xl">
        <img :src="data.images[0]" alt="" class="rounded-xl">
        <div class="py-3">
            <p class="text-base font-semibold">{{ data.title }}</p>
            <div class="flex">
                <p class="ellipse text-newsSubtitle text-sm font-normal my-2 line-clamp-2">{{ data.subtitle }}</p>
                <!-- truncate overflow-hidden box-border box-orient-vertical break-words -->
            </div>
            <p>{{ data.date }}</p>
        </div>
    </div>
   </router-link>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue'
const props = defineProps<{
    data?: {[key: string]: string}[]
}>()
</script>
