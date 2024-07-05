<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  color: String,
  caption: String,
  title1: String,
  title2: String,
  detail: String,
});
</script>

<template>
  <section class="banner_title_container">
    <div class="banner_title_text" :class="props.color">
      <div class="blue_heavy">{{ props.caption }}</div>
      <div class="banner_title_title">
        <div>{{ props.title1 }}</div>
        <div>{{ props.title2 }}</div>
      </div>
      <div class="banner_title_detail">{{ props.detail }}</div>
    </div>
  </section>
</template>

<style lang="scss">
.banner_title_container {
  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

.banner_title_text {
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 20px;

  .banner_title_title {
    font-weight: 700;
    font-size: 48px;
  }
  .banner_title_detail {
    font-size: 20px;
  }
}

@media (max-width: 767px) {
  .banner_title_container {
    > div {
      gap: 10px;
    }
  }

  .banner_title_text {
    font-size: 16px;

    .banner_title_title {
      font-weight: 800;
      font-size: 28px;
    }
    .banner_title_detail {
      font-weight: 400;
      font-size: 14px;
    }
  }
}
</style>
