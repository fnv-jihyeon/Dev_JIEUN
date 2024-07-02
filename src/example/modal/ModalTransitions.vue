<script setup>
import Modal from './AppModal.vue';
import { ref } from 'vue';

const showModal = ref(false);
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <!-- Teleport: DOM의 특정 위치에 자식을 렌더링-->
  <!-- Modal 컴포넌트를 body 태그 아래에 렌더링 -->
  <Teleport to="body">
    <!-- Modal이 닫힐 때 showModal을 false로 설정 -->
    <modal :show="showModal" @close="showModal = false">
      <!--Modal 컴포넌트의 헤더 부분에 커스텀 헤더 전달 -->
      <template #header>
        <h3>Custom Header</h3>
      </template>
    </modal>
  </Teleport>
</template>
