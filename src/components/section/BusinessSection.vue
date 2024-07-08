<script setup>
import BannerTitle from '../banner/BannerTitle.vue';
import BoxContent from '../content/BoxContent.vue';

const banner = {
  color: 'bg_normal',
  caption: 'BUSINESS',
  title1: '안전하고 다양한',
  title2: '결제서비스를 제공하겠습니다',
  detail: '국내 결제시장을 선도할 기업 피네보 주식회사',
};

const paymentBox = {
  caption: '전자결제 사업',
  title: 'Payment Contents',
  description1: '고객이 원하는',
  description2: '온라인 결제 서비스',
  image: 'payment',
};
const sassBox = {
  caption: 'VAN 사업',
  title: 'SaaS',
  description1: '국내최초',
  description2: '금융 클라우드 기반',
  image: 'saas',
};
const solutionBox = {
  caption: '앱 솔루션',
  title: '사장님 앱',
  description1: '사장님들을 위한',
  description2: '매장 종합 솔루션 서비스',
  image: 'solution',
};

const boxContents = [paymentBox, sassBox, solutionBox];
</script>

<template>
  <section class="business_container">
    <BannerTitle v-bind="banner" />
    <div class="business_content">
      <div class="boxes_wrapper">
        <BoxContent
          v-for="(box, index) in boxContents"
          :key="index"
          v-bind="box"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.business_container {
  background-color: $BACKGROUND_NEUTRAL;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.business_content {
  width: 100%;

  .boxes_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .business_container {
    height: 928px;
    gap: 60px;
  }

  .business_content {
    width: 100%;
    padding: 0 24px;

    .boxes_wrapper {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }
}
</style>
