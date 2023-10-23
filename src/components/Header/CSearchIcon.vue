<template>
    <div @click="state = !state" class="ml-2">
        <i 
        class="text-lg"
        :class="[state ? 'fa-solid fa-magnifying-glass' : 'fa-solid fa-xmark' ]"></i>
       
    </div>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue'
const state = ref(true)

</script>