<script setup>
import { ref } from 'vue';

const show = ref(true);
const list = ref([1, 2, 3]);
</script>

<template>
  <button @click="show = !show">Toggle List</button>
  <button @click="list.push(list.length + 1)">Push Number</button>
  <button @click="list.pop()">Pop Number</button>
  <button @click="list.reverse()">Reverse List</button>

  <!-- v-if, v-else-if, v-else: 조건부 렌더링 -->
  <!-- v-for : 배열 데이터를 반복적으로 렌더링 -->
  <ul v-if="show && list.length">
    <li v-for="(item, index) of list" :key="index">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>
