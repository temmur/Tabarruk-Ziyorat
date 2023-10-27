<template>
    <div tabindex="0" @focusout="show = false">
      <div>
        <CInput class="mr-4 rounded-lg" type="text" placeholder="Enter a key word" v-model="search" @on-focus="show = true" />
      </div>
      <div v-if="show && search.length > 2">
        <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-3 w-[600px] absolute">
          <li
          v-for="object in filterObjects" :key="object.country"
            class="p-4 pl-0 border-b border-b-white/[0.08] last:border-none"
          >
          {{ object.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import CInput from './Form/CInput.vue'
  import { countries } from '@/constants/countrySlide.js'
  import { ref, reactive, computed } from 'vue'
  const search = ref('')
  const show = ref(false)

  const objectList = ref([
      { name: 'Object 1', value: 10 },
      { name: 'Object 2', value: 20 },
      { name: 'Object 3', value: 30 },
      
    ]);
  const filterObjects = computed(()=>{
      return objectList.value.filter((object)=>
      object.name.toLowerCase().includes(search.value.toLowerCase())
      );
  })

  
  
  </script>
