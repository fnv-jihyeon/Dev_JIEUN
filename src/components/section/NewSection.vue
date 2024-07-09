<script setup>
import BannerTitle from '../banner/BannerTitle.vue';

const banner = {
  color: 'label_normal',
  caption: 'NEW',
  title1: '피네보와 함께할',
  title2: '사장님들을 찾습니다.',
  detail: '새로운 시작을 함께하는 금융 파트너 피네보주식회사',
};
</script>

<template>
  <section class="new_container">
    <BannerTitle v-bind="banner" />
    <figure class="new_image">
      <img src="@/assets/images/main_person.png" />
    </figure>
  </section>
</template>

<style lang="scss">
.new_container {
  background-color: $BACKGROUND_LIGHTGRAY;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .new_image {
    display: flex;
    overflow: hidden;
    justify-content: center;
    img {
      width: 928px;
      height: auto;
      object-fit: contain;
    }
  }
}

@media (max-width: 767px) {
  .new_container {
    height: 812px;
    gap: 10px;
    padding-top: 60px;

    .new_image {
      img {
        width: 378px;
        height: 282px;
      }
    }
  }
}
</style>
