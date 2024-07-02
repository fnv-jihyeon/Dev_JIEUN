<script setup>
import { ref } from 'vue';

const message = ref('Hello World!');

function reverseMessage() {
  message.value = message.value.split('').reverse().join('');
}

function notify() {
  alert('navigation was prevented.');
}
</script>

<template>
  <!--템플릿 내부에서는 .value 접근자 사용할 필요 없음-->
  <h1>{{ message }}</h1>

  <!-- v-on:click 과 같음 -->
  <button @click="reverseMessage">Reverse Message</button>

  <button @click="message += '!'">Append "!"</button>

  <!-- 클릭 시 기본 동작 막기 -->
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>
</template>

<style>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style>
