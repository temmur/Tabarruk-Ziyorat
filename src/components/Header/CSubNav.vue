<template>
        <ul class="absolute w-[400px] top-6  bg-blurBack rounded-xl p-4 grid grid-cols-2 backdrop-blur-lg">
            <li class="flex items-center justify-start my-2 group hover"
             v-for="(el, idx) in data" :key="idx" >
        <img :src="el.img" 
        alt="" 
        class="mr-2"
        @click="$i18n.locale = el.lang">
        <div class="">
            <p class="text-base child group-hover:text-redColor">{{ el.title }}</p>
            <p class="text-sm text-grayColor">{{ el?.destination }} </p>
        </div>
    </li>
        </ul>
        
</template>
<script setup lang="ts">
import { defineProps, ref, reactive, inject, defineEmits } from 'vue';
import NavLists from '../Header/NavLists.vue'
interface Props {
  country: string
    flag: string
    des?: string
    data?: {[key: string]: string}[]
  }
  defineProps<Props>()
  const state = ref(false)

  const emit = defineEmits<{
    (e: 'update:modelValue', val: Event): void
    (e: 'on-focus'): void
    (e: 'on-blur'): void
    (e: 'focus-out'): void
  }>()
  function changeLocal(){
  localStorage.setItem('locale', 'ru' )
  window.location.reload()
}
</script>
