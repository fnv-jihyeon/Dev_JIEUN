<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
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
.app_container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app_content {
  flex: 1;
}
</style>
