<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  description1: String,
  description2: String,
  image: String,
});
</script>

<template>
  <article class="balance_content_container">
    <div class="balance_content_box">
      <figure class="balance_content_image">
        <img :src="require(`@/assets/images/${props.image}.svg`)" alt="image" />
      </figure>
      <div class="balance_content_text">
        <h2 class="balance_content_title">{{ title }}</h2>
        <p class="balance_content_description">
          <span>{{ description1 }}</span>
          <span v-if="props.description2">{{ description2 }}</span>
        </p>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.balance_content_container {
  width: 568px;
  height: 160px;
  border-radius: 12px;
  padding: 16px;
  background: $BACKGROUND_LIGHTGRAY;

  .balance_content_box {
    display: flex;
    align-items: center;
    gap: 40px;

    figure {
      width: 128px;
      height: 128px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
    }

    .balance_content_text {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .balance_content_title {
        @extend .title5, .label_normal;
        line-height: 28.64px;
      }

      .balance_content_description {
        display: flex;
        flex-direction: column;

        span {
          @extend .body2, .label_alternative;
          line-height: 28px;
          word-break: keep-all;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .balance_content_container {
    width: 335px;
    height: 160px;

    .balance_content_box {
      gap: 20px;

      .balance_content_text {
        .balance_content_title {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: -0.5px;
        }

        .balance_content_description {
          span {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
