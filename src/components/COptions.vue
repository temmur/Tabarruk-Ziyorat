<template>
    <div class="p-4 border">
       <!-- <slot></slot> -->
       <slot text="greetingMessage" :count="1"></slot>
       table header

       table body

       table footer
       <!-- <div>
            <slot name="content"></slot>
       </div>
       <slot name="header"></slot> -->
    </div>
</template>
<script setup lang="ts">
import {  inject } from 'vue'

const message = inject('message')

function clickMe() {
    console.log(message, 'inside');

}
function clickLi(e, a) {
    console.log('bubling: ', e);

}
</script>