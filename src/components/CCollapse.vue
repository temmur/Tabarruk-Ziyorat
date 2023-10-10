<template>
    <div>
        <ul class="py-10 max-md:py-2">
            <li class=" p-3 border border-grayBack rounded-md">
               <p class="flex items-center font-bold"> <img src="images/collapseIcon1.svg" alt="">
                How many countries in  Organization of Turkic states?
                <img src="images/CollapseFalse.svg" alt="" class="ml-4">
               
            </p>
            <ul class=" border-t py-4 " :class="show? 'block' : 'hidden'" >
                <li>In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan</li>
            </ul>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { defineProps } from 'vue';
interface Props{
    idx: number
    text: string
    show: boolean
}
defineProps<Props>()
const status = ref(false)
const toggleStatus =()=>{
    status.value = !status.value

}

</script>
<style>
    
</style>