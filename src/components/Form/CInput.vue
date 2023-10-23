<template>
    <div class="w-[600px] bg-grayBack"
          :class="{ '!border-red-600': error }"
    >
      <slot name="prefix"></slot>
      <input
        class="val w-[100%] outline-none text-white pl-5 py-2 rounded-xl bg-inputBack border borde-searchBorder" 
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
  
  <style scoped>
    
</style>