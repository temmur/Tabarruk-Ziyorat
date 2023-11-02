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
        variant?: 'primary' | 'outline' | 'secondary' | 'default'
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
    .primary:hover,
    .primary:focus{
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: white;
    }
    .primary:hover{
        transition: .3s ease-in-out;
        background-color: #c93e3e;
        transform: translateY(-1px);
    }
    .primary:active{
        background-color: #bd3232;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: white;
        transform: translateY(0);
    }
    .outline{
        color: white;
        padding: 12px 28px 12px 32px;
    }
    .outline:hover{
        color: #E54545;
    }

    .default{
        background-color: #2C2E3E;
        color: white;
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


/* .button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
} */
</style>