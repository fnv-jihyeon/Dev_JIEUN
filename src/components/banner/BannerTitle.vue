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
      <h1 class="banner_caption">{{ props.caption }}</h1>
      <div class="banner_title">
        <h2>{{ props.title1 }}</h2>
        <h2>{{ props.title2 }}</h2>
      </div>
      <p class="banner_detail">{{ props.detail }}</p>
    </div>
  </section>
</template>

<style lang="scss">
.banner_title_container {
  padding: 80px 8px 40px;
}

.banner_title_text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  .banner_caption {
    font-size: 20px;
    font-weight: 500;
    color: $BLUE_HEAVY;
  }

  .banner_title h2 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    line-height: 62.4px;
  }
}

@media (max-width: 767px) {
  .banner_title_container {
    padding: 120px 24px 0;
  }

  .banner_title_text {
    gap: 10px;
    font-size: 16px;
    line-height: 24px;

    .banner_caption {
      font-size: 16px;
    }

    .banner_title h2 {
      font-weight: 800;
      font-size: 28px;
      line-height: 38px;
    }

    .banner_detail {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
