<script setup>
import BannerTitle from '../banner/BannerTitle.vue';

const banner = {
  color: 'label_normal',
  caption: 'HISTORY',
  title1: '피네보의 끊임없는 성장과',
  title2: '도전은 계속 됩니다.',
};

const bannerContent = [
  {
    year: 2023,
    content1: '양평군청 결제데이터 공급 계약',
    content2: '한국핀테크지원센터 금융테스트베드 지원 사업 선정',
    content3: 'KT클라우드 공식 MSP 협약 (금융특화)',
    content4: '기술혁신형 중소기업 (INNOBIZ) 인증',
    content5: '한국핀테크지원센터 금융클라우드 지원사업 선정',
  },
  {
    year: 2022,
    content1: '양평군청 결제데이터 공급 계약',
    content2: '한국핀테크지원센터 금융테스트베드 지원 사업 선정',
    content3: 'KT클라우드 공식 MSP 협약 (금융특화)',
    content4: '기술혁신형 중소기업 (INNOBIZ) 인증',
    content5: '한국핀테크지원센터 금융클라우드 지원사업 선정',
  },
  {
    year: 2021,
    content1: '양평군청 결제데이터 공급 계약',
    content2: '한국핀테크지원센터 금융테스트베드 지원 사업 선정',
    content3: 'KT클라우드 공식 MSP 협약 (금융특화)',
    content4: '기술혁신형 중소기업 (INNOBIZ) 인증',
    content5: '한국핀테크지원센터 금융클라우드 지원사업 선정',
  },
];
</script>

<template>
  <section class="history_container">
    <BannerTitle v-bind="banner" />
    <div class="history_content">
      <div
        class="history_contentBox"
        v-for="(content, index) in bannerContent"
        :key="index"
        v-bind="content"
      >
        <div>
          <h1>{{ content.year }}</h1>
          <p>
            <span>{{ content.content1 }}</span>
            <span>{{ content.content2 }}</span>
            <span>{{ content.content3 }}</span>
            <span>{{ content.content4 }}</span>
            <span>{{ content.content5 }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.history_container {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.history_content {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.history_contentBox {
  width: 373px;
  min-width: 373px;
  height: 406px;
  border-radius: 16px;
  padding: 0 36px;
  background: $BACKGROUND_LIGHTGRAY;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
      @extend .display2, .blue_heavy;
      line-height: 62.4px;
    }

    p {
      @extend .body4, .label_normal;
      line-height: 26px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      span:nth-child(2) {
        @extend .blue_strong;
      }
    }
  }
}

@media (max-width: 767px) {
  .history_container {
    height: 721px;
    gap: 4px;
    padding: 0 24px;
  }

  .history_content {
    gap: 12px;
    justify-content: flex-start;
    overflow-x: scroll;
  }

  .history_contentBox {
    width: 327px;
    height: 423px;
  }
}
</style>
