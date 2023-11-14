<template>
    <div class="flex items-center">
        <CNav v-if="!showSearch"/>
        <CNavLangVue v-if="!showSearch"/>
        <CSearch v-if="showSearch"/>
      <CSearchIconVue @click="openSearch()"/>
    </div>
</template>
<script setup lang="ts">
import CNav from './CNav.vue';
import CNavLangVue from './CNavLang.vue';
import CSearch from '../CSearch.vue';
import CSearchIconVue from '../Header/CSearchIcon.vue'
import { ref, reactive } from 'vue';


const showSearch = ref(false)
function openSearch(){
    showSearch.value = !showSearch.value
}
</script>