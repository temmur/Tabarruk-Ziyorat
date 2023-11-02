<template>
    <div class='rounded-lg inline-flex items-center text-black'>
        <slot name="prefix"></slot>
        <button>{{ title }}</button>
        <slot name="suffix"></slot>
    </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'
const props = defineProps<{
    variant?: 'primary'| 'outline' | 'default'
    title:  String;
}>()

const btnStyle =computed(()=>{
    switch(props.variant){
        case 'primary':
            return 'primary'
        case 'outline': 
            return 'outline'
        default: 
            'default'
    }
})
</script>
<style scoped>
.btnStyle{
    outline: none;
    padding: 4px;
}
.primary{
    color: red;
    background-color: yellow;
    padding: 2px 4px;
}
.default{
    background-color: royalblue;
    color: white;
}
</style>