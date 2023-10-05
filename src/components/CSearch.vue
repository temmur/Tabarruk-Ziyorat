<template>
    <div tabindex="0" @focusout="show = false">
      <div>
        <CInput type="text" placeholder="Enter a key word" v-model="search" @on-focus="show = true" />
      </div>
      <div v-if="show && search.length > 2">
        <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-3">
          <li
            v-for="(country, idx) in countries"
            :key="idx"
            class="p-4 pl-0 border-b border-b-white/[0.08] last:border-none"
          >
            <p class="text-white">{{ country.country }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import CInput from './Form/CInput.vue'
  import { countries } from '@/constants/countrySlide.js'
  import { ref } from 'vue'
  const search = ref('')
  const show = ref(false)

  
  </script>