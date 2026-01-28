<script setup>
let name = ['John', 'Jane', 'Doe', 'Smith'];
// import Counter from './components/Couner.vue';
</script>

<template>
<h2> What is vue v-</h2>
<ul>
  <li v-for="(n, index) in name" :key="index">{{ n }}</li>
</ul>
<!-- <Counter />
<Counter /> -->
</template>

<style scoped>

</style>

