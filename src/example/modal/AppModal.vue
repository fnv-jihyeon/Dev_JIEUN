<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <!--Transition 컴포넌트를 사용하여 Modal 표시/숨김 시 CSS 트랜지션 효과 적용 -->
  <Transition name="app-modal">
    <div v-if="props.show" class="app-modal-mask">
      <div class="app-modal-container">
        <div class="app-modal-header">
          <!-- 슬롯으로 부모 컴포넌트에서 컨텐츠 전달받음 -->
          <slot name="header">default header</slot>
        </div>

        <div class="app-modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="app-modal-footer">
          <slot name="footer">
            default footer
            <!-- 부모 컴포넌트에 Modal 닫기 요청 전달 -->
            <button class="app-modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.app-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.app-modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.app-modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.app-modal-body {
  margin: 20px 0;
}

.app-modal-default-button {
  float: right;
}

.app-modal-enter-from {
  opacity: 0;
}

.app-modal-leave-to {
  opacity: 0;
}

.app-modal-enter-from .app-modal-container,
.app-modal-leave-to .app-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
