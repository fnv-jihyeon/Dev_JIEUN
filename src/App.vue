<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="app_container">
    <TheHeader v-if="route.name !== 'test'" />
    <div class="app_content">
      <router-view />
    </div>
    <TheFooter v-if="route.name !== 'test'" />
  </div>
</template>

<style lang="scss">
@import 'style.scss';
.app_container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app_content {
  flex: 1;
}
</style>
