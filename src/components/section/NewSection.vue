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
    <div class="new_image">
      <img src="@/assets/images/main_person.png" />
    </div>
  </section>
</template>

<style lang="scss">
.new_container {
  background-color: $BACKGROUND_LIGHTGRAY;
  width: 100%;
  height: 100vh;
  padding: 60px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .new_image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

@media (max-width: 767px) {
  .new_container {
    height: 812px;
    gap: 50px;
    padding: 0;
    justify-content: center;

    .new_image {
      width: 393px;
      height: 340.01px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
