<script setup>
import { ref } from 'vue';

// ref로 변수를 감싸 반응형 데이터로
const message = ref('Hello World!');
</script>

<template>
  <h1>{{ message }}</h1>
</template>
