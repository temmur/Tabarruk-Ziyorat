<template>
    <div>
        <ul class="flex items-center justify-between">
            <li class="mx-4 hover:text-midGray"><RouterLink to="/about" class="text-base font-bold" >About us</RouterLink></li>
            <li class="relative mx-4 hover:text-midGray"><a href="" class="text-base font-bold" @click.prevent="toggleNav()" @blur="toggleClose()">Countries</a>
                <CSubNav v-if="state" />
            </li>
            <li class="mx-4 hover:text-midGray"><a href="About us" class="text-base font-bold">Religions</a>
                
            </li>
            <li class="mx-4 hover:text-midGray"><a href="About us" class="text-base font-bold">Heritage map</a></li>
            <li class="mx-4 hover:text-midGray"><a href="About us" class="text-base font-bold">Help</a></li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import CSubNav from '../Header/CSubNav.vue';
const state = ref(false)
const toggleNav=(e)=>{
    state.value = !state.value
    console.log(state.value)
}
const toggleClose=(e)=>{
    if(state.value === true) {
        state.value = !state.value
        console.log(state)
    }
}
</script>


