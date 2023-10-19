<template>
    <div class="container py-10">
       <p class="text-4xl font-bold mb-4">About us</p> 
       <p class="text-lg">Explore the valuable, historical, and heritage places of Turkic countries through our curated selection of articles, photos, and videos. Discover the beauty of ancient ruins, stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary rulers, artists, and architects who left their mark on the region.</p>
       <div class="grid grid-cols-4 gap-5 mt-10 max-md:grid-cols-1">
        <CAboutInfo v-for="(el, idx) in countInfo" :key="idx" :mount="el.amount" :name="el.name" :img="el.img"/>
       </div>
    </div>
</template>
<script setup lang="ts">
import CAboutInfo from '../components/About/CAbout-Info.vue';

import {ref,reactive} from 'vue'

    const countInfo = reactive(
        [
        {name: "Attractions",
         amount: 142,
         img: "./images/mosque.svg"
         },
          {name: "Destinations",
         amount: 254,
         img: "./images/Mask2.svg"
         },
         {name: "Countries",
         amount: 7,
         img: "./images/Mask4.svg"
         },
         {name: "Religions",
         amount: 3,
         img: "./images/Mask3.svg"
         }
    ]
    )
</script>