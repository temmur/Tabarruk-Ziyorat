<template>
      <div class="p-6 bg-grayBack rounded-md w-[280px] h-[117px] my-5 mx-2 flex items-center max-md:w-[201px] max-md:h-[84px]">
       <img :src="el" alt="" class="mx-auto"> 
    </div>
</template>
<script setup lang="ts">
import {defineProps} from 'vue'
import { defineComponent } from 'vue'
interface Props{
key: String | Number
el:string
}
defineProps<Props>()

</script>
