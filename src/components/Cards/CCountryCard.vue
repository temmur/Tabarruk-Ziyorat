<template>
    <div class="p-4 bg-inputBack backdrop-blur-md rounded-xl">
        <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<rect width="36" height="36" rx="8" transform="matrix(-1 0 0 1 36 0)" fill="#E64545"/>
<path d="M29 25C29 25.5522 28.5074 26 27.9 26H25.7C25.0926 26 24.6 25.5522 24.6 25V15H29V25ZM9.09138 19C8.47744 18.4566 8.1 17.8331 8.1 17.1591C8.1 15.5072 9.53653 14.2281 11.1222 13.3184C12.5639 12.4913 13.8939 11.5131 14.9709 10.3116L15.25 10L15.5291 10.3116C16.6061 11.5131 17.9357 12.4916 19.3777 13.3184C20.9635 14.2281 22.4 15.5072 22.4 17.1591C22.4 17.8331 22.0226 18.4566 21.4086 19H9.09138ZM8.1 20H22.4C23.0074 20 23.5 20.4478 23.5 21V25C23.5 25.5522 23.0074 26 22.4 26H21.3V24C21.3 23.4478 20.8074 23 20.2 23C19.5926 23 19.1 23.4478 19.1 24V26H16.9V23.75C16.9 22.25 15.25 21.5 15.25 21.5C15.25 21.5 13.6 22.25 13.6 23.75V26H11.4V24C11.4 23.4478 10.9074 23 10.3 23C9.69259 23 9.2 23.4478 9.2 24V26H8.1C7.49259 26 7 25.5522 7 25V21C7 20.4478 7.49259 20 8.1 20ZM26.8 10C26.8 10 29 11 29 13V14H24.6V13C24.6 11 26.8 10 26.8 10Z" fill="white"/>
</svg>
            <p class="text-2xl ml-3">{{ keys }}</p>
        </div>
        <p class="text-grayColor text-2xl">{{ title }}</p>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps<{
    data?: {[key: string]: string}[]
    title?: string
    keys?: string
}>()
</script>