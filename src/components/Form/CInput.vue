<template>
    <div class=""
          :class="{ '!border-red-600': error }"
    >
      <slot name="prefix"></slot>
      <input
        class="val" 
        v-bind="{ type, placeholder, minLength, maxLength, id }"
        :value="modelValue"
        @input="(event) => emit('update:modelValue', event.target?.value)"
        @blur="emit('on-blur')"
        @focus="emit('on-focus')"
        @focusout="emit('focus-out')"
      />
      <slot name="suffix"></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  interface Props {
    type: string
    placeholder: string
    modelValue: string | number
    maxLength?: number
    minLength?: number
    id?: string
    inputClass?: string
    error?: boolean
  }
  defineProps<Props>()
  const emit = defineEmits<{
    (e: 'update:modelValue', val: Event): void
    (e: 'on-focus'): void
    (e: 'on-blur'): void
    (e: 'focus-out'): void
  }>()
  </script>
  
  <style lang="css" scoped>
    div{
        width: 100%;
    }
    input{
        width: 100%;
        background-color: tomato;
        outline: none;
        border: 1px solid transparent;
        font-size: 18px;
        padding: 10px 0;
        padding: 5px;
    }
</style>