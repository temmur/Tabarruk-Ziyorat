<template>
    <li class="flex items-center justify-start my-2 group hover">
        <img :src="flag" alt="" class="mr-2">
        <div class="">
            <p class="text-base child group-hover:text-redColor">{{ country }}</p>
            <p class="text-sm text-grayColor">{{ des }}</p>
        </div>
    </li>
</template>
<script setup lang="ts">
import { defineProps, ref, reactive } from 'vue';
interface Props {
    country: string
    flag: string
    des?: string
    data?: {[key: string]: string}[]
  }
  defineProps<Props>()
  const state = ref(false)


</script>
