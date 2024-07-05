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
  <section class="box_content_container">
    <div class="label_normal">
      <div class="box_content_title">
        <div class="box_content_caption">{{ props.caption }}</div>
        <div class="box_content_title">{{ props.title }}</div>
      </div>
      <div class="box_content_description">
        <div>{{ props.description1 }}</div>
        <div>{{ props.description2 }}</div>
      </div>
    </div>
    <img :src="require(`@/assets/images/${props.image}_icon.png`)" />
  </section>
</template>

<style lang="scss">
.box_content_container {
  background-color: $BACKGROUND_NORMAL;
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

  .label_normal {
    display: flex;
    position: relative;
    z-index: 10;
    flex-direction: column;
    gap: 8px;
    font-family: 'Pretendard';

    .box_content_title {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .box_content_caption {
        font-weight: 500;
        font-size: 18px;
      }

      .box_content_title {
        font-weight: 700;
        font-size: 32px;
      }
    }

    .box_content_description {
      font-weight: 500;
      font-size: 20px;
    }
  }
}
@media (max-width: 767px) {
  .box_content_container {
    width: 100%;
    min-width: 345px;
    height: 188px;
    border-radius: 19.84px;
    padding: 36px 30.58px 66.12px 30.58px;

    img {
      right: 10px;
      bottom: 8px;
      width: 95px;
      height: 95px;
    }

    .label_normal {
      gap: 19.84px;

      .box_content_title {
        gap: 0;

        .box_content_caption {
          font-weight: 400;
          font-size: 14px;
        }

        .box_content_title {
          font-weight: 800;
          font-size: 26px;
        }
      }

      .box_content_description {
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
}
</style>
