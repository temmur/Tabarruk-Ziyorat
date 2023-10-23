<template>
   <ul>
    <li class="relative border-l border-r px-3" @click="toggleNav()" @blur="toggleClose()"><img src="images/UkLang.svg" alt="">
    <CSubNav v-if="state" class="left-[-300px]"/>
    </li>
   </ul>
</template>
<script setup lang="ts">
import CSubNav from '../Header/CSubNav.vue';
import {ref, reactive} from 'vue'
const state = ref(false)
function toggleNav(e){
        state.value = !state.value
}
const toggleClose=(e)=>{
    if(state.value === true) {
        state.value = !state.value
    }
}

const language = reactive([
    {
        name: "Русский"
        
    }
])
</script>
