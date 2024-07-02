<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  model: Object,
});

const localModel = ref(JSON.parse(JSON.stringify(props.model))); // Props의 사본 생성

const isOpen = ref(false);
const isFolder = computed(() => {
  return localModel.value.children && localModel.value.children.length;
});

function toggle() {
  isOpen.value = !isOpen.value;
}

function changeType() {
  if (!isFolder.value) {
    localModel.value.children = [];
    addChild();
    isOpen.value = true;
  }
}

function addChild() {
  localModel.value.children.push({ name: 'new stuff' });
}
</script>

<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeItem
        class="item"
        v-for="(model, index) in model.children"
        :model="model"
        :key="index"
      >
      </TreeItem>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
