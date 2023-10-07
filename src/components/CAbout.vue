<template lang="">
    <div class="">
      <div class='container'>
        <div class="grid grid-cols-2 gap-1 max-lg:grid-cols-1">
            <CAbout-Content />
            <CAboutCountriesVue/>
        </div>
        <div class="grid grid-cols-4 gap-5 mt-[65px] max-sm:grid-cols-2">
            <CAboutInfoVue v-for="(el, idx) in countInfo" :key="idx" :mount="el.amount" :name="el.name" :img="el.img"/>
          
        </div>
       </div>
      </div>
</template>
<script setup lang="ts">
import CAboutContent from './About/CAbout-Content.vue';
import CAboutCountriesVue from './About/CAbout-Countries.vue';
import CAboutInfoVue from './About/CAbout-Info.vue';
import {reactive} from 'vue'

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
<style scoped>
    
</style>