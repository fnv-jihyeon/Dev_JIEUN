<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  show: Boolean,
  url: String,
  close: Function,
});
</script>

<template>
  <Teleport to="body">
    <div v-if="props.show" class="modal_overlay" @click="close">
      <div class="modal_content">
        <iframe :src="props.url" frameborder="0" class="modal_iframe"></iframe>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal_content {
  background: white;
  padding: 20px;
  width: 80%;
  height: 80%;
  border-radius: 8px;
  overflow-y: auto;
}

.modal_iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
