<template>
  <div tabindex="0" @focusout="show = false">
    <div>
      <CInput class="mr-4 rounded-lg" type="text" placeholder="Enter a keyword" v-model="search" @on-focus="show = true" />
    </div>
    <div v-if="show && search.length > 2">
      <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-3 w-[600px] absolute">
        <li v-for="object in filterObjects" :key="object.value" class="p-4 pl-0 border-b border-b-white/[0.08] last:border-none">
          <Highlighter class="my-highlight" :style="{ color: 'white' }"
      highlightClassName="highlight bg-redColor rounded-md py-1"
      :searchWords="keywords"
      :autoEscape="true"
      :textToHighlight="object.name"/>
        </li>
        <div v-if="filterObjects.length === 0" class="text-center py-10">
          <p class="text-xl">No Results Found</p>
          <p class="text-grayColor text-xl mt-4">Oops! We couldn't find any matching <br>
            results for your search</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import CInput from './Form/CInput.vue'
import { countries } from '@/constants/countrySlide.js'
import { ref, reactive, computed } from 'vue'
import Highlighter from 'vue-highlight-words'

const search = ref('')
const show = ref(false)
const text = ref('The dog is chasing the')
const objectList = ref([
  { name: 'Object 1', value: 10 },
  { name: 'Object 2', value: 20 },
  { name: 'Object 3', value: 30 },
]);

const filterObjects = computed(() => {
  return objectList.value.filter((object) =>
    object.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const keywords = computed(()=>{
  return search.value.split('')
})
</script>

