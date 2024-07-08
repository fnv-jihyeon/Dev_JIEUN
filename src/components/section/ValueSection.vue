<script setup>
import BannerTitle from '../banner/BannerTitle.vue';

const banner = {
  color: 'label_normal',
  caption: 'VALUE',
  title1: '국내외 기업들과',
  title2: '시너지를 만들어 가고 있습니다.',
  detail: '국내 결제시장을 선도할 기업 피네보 주식회사',
};
</script>

<template>
  <section class="value_container">
    <BannerTitle v-bind="banner" />
    <div class="value_content">
      <div></div>
    </div>
  </section>
</template>

<style lang="scss">
.value_container {
  background-color: $BACKGROUND_NORMAL;
  width: 100%;
  height: 100vh;
  padding: 150px 8px 8px;
}

@media (max-width: 767px) {
  .value_container {
    height: 812px;
    gap: 50px;
    padding: 0;
  }
}
</style>
