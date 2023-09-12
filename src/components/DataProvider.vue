<script setup>
import {ref} from 'vue';
const props = defineProps({
    url:String,
})

const data = ref(null)
const loading = ref(true)
const error = ref(null)

fetch(props.url)
    .then(res=>res.json())
    .then(json=>{
        data.value=json;
    })
    .catch(e=> error.value=e)
    .finally(()=>loading.value = false)



</script>

<template>    
    <slot :data="data" :loading="loading" :error="error"/>
</template>