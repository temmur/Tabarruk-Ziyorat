<template>
    <div class="">
        student single page
        <pre>single: {{ single }}</pre>
    </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const router = useRouter()
const single = ref({})
console.log(route, router);
fetch(`https://api.escuelajs.co/api/v1/products/${route.params.slug}`, {
    method: "GET"
}).then((res) => res.json())
.then((res) => {
    single.value = res
    console.log(res);
})
</script>