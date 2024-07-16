<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  caption: String,
  title: String,
  description1: String,
  description2: String,
  image: String,
});
</script>

<template>
  <article class="box_content_container">
    <div class="box_content_text">
      <header>
        <h2 class="box_content_caption">{{ caption }}</h2>
        <h1 class="box_content_title">{{ title }}</h1>
      </header>
      <p class="box_content_description">
        <span>{{ description1 }}</span>
        <span>{{ description2 }}</span>
      </p>
    </div>
    <img :src="require(`@/assets/images/${props.image}_icon.svg`)" />
  </article>
</template>

<style lang="scss">
.box_content_container {
  background-color: $BACKGROUND_NORMAL;
  min-width: 430px;
  width: 430px;
  height: 368px;
  border-radius: 24px;
  padding: 80px 37px;
  position: relative;

  img {
    position: absolute;
    right: 26px;
    bottom: 22px;
    width: 196px;
    height: 196px;
  }

  .box_content_text {
    color: $LABEL_NORMAL;
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 8px;
    z-index: 10;

    header {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .box_content_caption {
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
      }

      .box_content_title {
        font-weight: 700;
        font-size: 32px;
        line-height: 41.6px;
      }
    }

    .box_content_description {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;

      span {
        display: block;
      }
    }
  }
}
@media (max-width: 767px) {
  .box_content_container {
    min-width: 345px;
    width: 345px;
    height: 188px;
    border-radius: 19.84px;
    padding: 36px 30.58px 66.12px 30.58px;

    img {
      position: absolute;
      right: 10px;
      bottom: 8px;
      width: 95px;
      height: 95px;
    }

    .box_content_text {
      gap: 19.84px;

      header {
        gap: 0;

        .box_content_caption {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }

        .box_content_title {
          font-weight: 800;
          font-size: 26px;
          line-height: 36px;
        }
      }

      .box_content_description {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
</style>
