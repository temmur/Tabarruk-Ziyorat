<template>
  <Header class=""/>
   <CAboutHeader class="fixed"/>
  <div class="container">
    <CBreadcrumbs/>
  </div>
   <CAbout/>
   <CMap/>
   <CStatements/>
   <CVideo/>
   <CContact/>
   <CFooter/>


</template>
<script setup lang="ts">''
import Header from "../components/Header.vue";
import { useCustomToast } from "@/composable/useCustomToast"
import { useMounted } from "@/composable/useMounted"
import { formatMoney } from '@/utils'
import CHero from '../AboutComponents/Hero.vue'
import CFooter from "../components/CFooter.vue";
import CAbout from '../AboutComponents/CAbout.vue'
import CMap from "../AboutComponents/CMap.vue";
import CStatements from "../AboutComponents/CStatements.vue";
import CVideo from "../AboutComponents/CVideo.vue";
import CContact from "../AboutComponents/CContact.vue";
import CAboutHeader from "../AboutComponents/CAboutHeader/CAboutHeader.vue";
import CBreadcrumbs from "../components/CBreadcrumbs.vue";
import {ref, reactive} from 'vue'
const { x, y } = useCustomToast()
const { mounted } = useMounted()
const show = ref(false)
const arr = ref<{ id: number, name: string }[]>([])
const add = () => {
    arr.value.push({ id: arr.value.length, name: `John ${arr.value.length}` })
}
formatMoney(340000)


</script>
<style>
body{
    background-color: rgb(7, 9, 28);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>