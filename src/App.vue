<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div class="app_container">
    <TheHeader />
    <div class="app_content">
      <router-view />
    </div>
    <TheFooter />
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
