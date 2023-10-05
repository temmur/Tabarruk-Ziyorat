<template lang="">
    <div class='rounded-lg inline-flex items-center' :class="btnStyle">
        <slot name='prefix'></slot>
        <button class="">{{title}}</button>
        <slot name='suffix'></slot>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
        variant?: 'primary' | 'outline' | 'secondary'
        title: String
    }>()
    const btnStyle = computed(()=>{
        switch(props.variant){
            case 'primary' : 
            return 'primary'
            case 'outline' : 
            return 'outline'
            case 'secondary' :
            return 'secondary'
            default:
             return 'default'
        }
    })
</script>
<style scoped>
    .btn_style{
        padding-right: 4px;
        outline: none;
        border: transparent;
        margin-left: 10px;
        
    }
    .primary{
        background-color: #E54545;
        padding: 12px 28px 12px 32px;
    }
    .primary:hover{
        transition: .3s ease-in-out;
    }
    .outline{
        background-color: transparent;
        border: 1px solid royalblue ;
        color: royalblue;
        transition: .3s ease-in-out;
    }
    .outline:hover{
        background-color: royalblue;
        color: white;
        border-radius: 8px;
        transition: .3s ease-in-out;
    }
    .default{
        background-color: gainsboro;
        color: black;
        padding: 12px 28px 12px 32px;
    }
    .secondary{
        background-color: #2C2E3E;;
        color: white;
        border-radius: 8px;
        transition: .3s ease-in-out;
        padding: 12px 28px 12px 32px;
        
    }
    .secondary:hover{
        background-color: white;
        color: royalblue;
        transition: .3s ease-in-out;
    }
</style>