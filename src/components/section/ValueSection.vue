<script setup>
import BannerTitle from '../banner/BannerTitle.vue';

const banner = {
  color: 'label_normal',
  caption: 'VALUE',
  title1: '국내외 기업들과',
  title2: '시너지를 만들어 가고 있습니다.',
  detail: '국내 결제시장을 선도할 기업 피네보 주식회사',
};

const partners = ['naver', 'kt', 'sc', 'smartro'];
</script>

<template>
  <section class="value_container">
    <BannerTitle v-bind="banner" />
    <div class="value_content">
      <div class="value_boxes">
        <figure
          class="value_images"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <img :src="require(`@/assets/images/${partner}.png`)" />
        </figure>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.value_container {
  background-color: $BACKGROUND_NORMAL;
  width: 100%;
  height: 100vh;
}

.value_content {
  padding: 70px 8px 8px;
  display: flex;
  justify-content: center;

  .value_boxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 18px;

    .value_images {
      width: 340px;
      height: 98px;
      border-radius: 12px;
      background: #f7f7f8;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (max-width: 767px) {
  .value_container {
    height: 842px;
  }

  .value_content {
    padding-top: 33px;

    .value_boxes {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
