<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  color: String,
  caption: String,
  title1: String,
  title2: String,
  detail: String,
  direction: {
    type: String,
    default: 'column',
  },
});
</script>

<template>
  <section class="banner_title_container">
    <div class="banner_title_text" :class="props.color">
      <h1 v-show="props.caption" class="banner_caption">{{ caption }}</h1>
      <div class="banner_title" :class="props.direction">
        <h2 v-show="props.title1">
          {{ title1 }}<span v-show="direction">&nbsp;</span>
        </h2>
        <h2 v-show="props.title2">{{ title2 }}</h2>
      </div>
      <p v-show="props.detail" class="banner_detail">{{ detail }}</p>
    </div>
  </section>
</template>

<style lang="scss">
.banner_title_container {
  padding: 190px 8px 60px;
}

.banner_title_text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;

  .banner_caption {
    color: $BLUE_HEAVY;
  }

  .banner_title {
    display: flex;
    flex-direction: column;

    &.row {
      flex-direction: row;
    }
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
    padding: 60px 8px;
  }

  .banner_title_text {
    gap: 10px;
    font-size: 16px;
    line-height: 24px;

    .banner_caption {
      font-size: 16px;
    }

    .banner_title {
      &.row {
        flex-direction: column;
      }

      h2 {
        font-weight: 800;
        font-size: 28px;
        line-height: 38px;
      }
    }

    .banner_detail {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
