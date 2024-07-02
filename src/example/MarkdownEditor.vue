<script setup>
import { marked } from 'marked';
import { debounce } from 'lodash-es';
import { ref, computed } from 'vue';

const input = ref('# hello');

/* input 변수의 Markdown 텍스트를 HTML로 변환 */
const output = computed(() => marked(input.value));

/* 사용자의 입력 이벤트를 100mx동안 지연 */
/* 사용자가 빠르게 입력할 때 발생하는 불필요한 렌더링 방지 */
const update = debounce((e) => {
  input.value = e.target.value;
}, 100);
</script>

<template>
  <div class="editor">
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
