<script setup>
import { shuffle as _shuffle } from 'lodash-es';
import { ref } from 'vue';

const getInitialItems = () => [1, 2, 3, 4, 5];
const items = ref(getInitialItems());
let id = items.value.length + 1;

function insert() {
  const i = Math.round(Math.random() * items.value.length);
  items.value.splice(i, 0, id++);
}

function reset() {
  items.value = getInitialItems();
  id = items.value.length + 1;
}

/* 아에팀 목록을 무작위로 섞음 */
function shuffle() {
  items.value = _shuffle(items.value);
}

function remove(item) {
  const i = items.value.indexOf(item);
  if (i > -1) {
    items.value.splice(i, 1);
  }
}
</script>

<template>
  <button @click="insert">Insert at random index</button>
  <button @click="reset">Reset</button>
  <button @click="shuffle">Shuffle</button>

  <!-- 아이템 추가, 삭제, 순서 변경 시 애니메이션 효과 -->
  <TransitionGroup tag="ul" name="fade" class="container">
    <li v-for="item in items" class="item" :key="item">
      {{ item }}
      <button @click="remove(item)">x</button>
    </li>
  </TransitionGroup>
</template>

<style>
.container {
  position: relative;
  padding: 0;
  list-style-type: none;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
