<template>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>   
<style scoped>
button {
    font-size: 1.2em;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}       
button:hover {
    background-color: #369870;
}   
</style>
