<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: String,
  description1: String,
  description2: String,
  image: String,
  word: String,
});
</script>

<template>
  <article class="banner_content_container">
    <div class="banner_content_box">
      <img
        :src="require(`@/assets/images/${props.image}.svg`)"
        class="banner_content_image"
      />
      <div class="banner_content_top">
        <h2>{{ title }}</h2>
        <p>
          <span>{{ description1 }}</span>
          <span>{{ description2 }}</span>
        </p>
      </div>
      <div class="banner_content_word">{{ word }}</div>
    </div>
  </article>
</template>

<style lang="scss">
.banner_content_container {
  width: 372px;
  height: 284px;
  border-radius: 20px;
  padding: 0 30px;
  background: $BACKGROUND_LIGHTGRAY;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  position: relative;

  .banner_content_box {
    display: flex;
    flex-direction: column;
    gap: 17px;
    padding: 0 0 30px;

    .banner_content_image {
      position: absolute;
      top: 23px;
      right: 30px;
    }

    .banner_content_top {
      display: flex;
      flex-direction: column;
      gap: 10px;
      @extend .label_normal;

      h2 {
        @extend .title4;
        line-height: 38px;
      }

      p {
        display: flex;
        flex-direction: column;

        span {
          @extend .label4;
          line-height: 20px;
        }
      }
    }

    .banner_content_word {
      font-family: 'Pretendard';
      font-weight: 800;
      font-size: 50px;
      line-height: 50px;
      color: rgba(239, 239, 239, 1);
    }
  }
}

@media (max-width: 767px) {
  .banner_content_container {
    width: 335px;
    height: 146px;
    border-radius: 11.28px;
    padding: 0 20px;

    .banner_content_box {
      padding: 0 0 16.93px;
      gap: 9.59px;

      .banner_content_image {
        top: 52px;
        right: 16.97px;
        width: 53.6px;
        height: 53.6px;
      }

      .banner_content_top {
        gap: 5.64px;

        h2 {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: -0.5px;
        }
      }

      .banner_content_word {
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
