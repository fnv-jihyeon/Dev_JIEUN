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
    details: [
      '양평군청 결제데이터 공급 계약',
      '한국핀테크지원센터 금융테스트베드 지원 사업 선정',
      'KT클라우드 공식 MSP 협약 (금융특화)',
      '기술혁신형 중소기업 (INNOBIZ) 인증',
      '한국핀테크지원센터 금융클라우드 지원사업 선정',
    ],
  },
  {
    year: 2022,
    details: [
      '양평군청 결제데이터 공급 계약',
      '한국핀테크지원센터 금융테스트베드 지원 사업 선정',
      'KT클라우드 공식 MSP 협약 (금융특화)',
      '기술혁신형 중소기업 (INNOBIZ) 인증',
      '한국핀테크지원센터 금융클라우드 지원사업 선정',
    ],
  },
  {
    year: 2021,
    details: [
      '양평군청 결제데이터 공급 계약',
      '한국핀테크지원센터 금융테스트베드 지원 사업 선정',
      'KT클라우드 공식 MSP 협약 (금융특화)',
      '기술혁신형 중소기업 (INNOBIZ) 인증',
      '한국핀테크지원센터 금융클라우드 지원사업 선정',
    ],
  },
];
</script>

<template>
  <section class="history_container" id="history">
    <BannerTitle v-bind="banner" />
    <div class="history_content">
      <div
        class="history_contentBox"
        v-for="(content, index) in bannerContent"
        :key="index"
      >
        <div>
          <h1 class="history_year">{{ content.year }}</h1>
          <p class="history_details">
            <span
              v-for="(detail, detailIndex) in content.details"
              :key="detailIndex"
            >
              {{ detail }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.history_container {
  width: 100%;
  height: 1080px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .history_content {
    display: flex;
    justify-content: center;
    gap: 21px;

    .history_contentBox {
      width: 373px;
      min-width: 373px;
      height: 423px;
      border-radius: 16px;
      padding: 0 36px;
      background: $BACKGROUND_LIGHTGRAY;
      display: flex;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .history_year {
          @extend .display2, .blue_heavy;
          line-height: 62.4px;
        }

        .history_details {
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
  }
}

@media (max-width: 767px) {
  .history_container {
    height: 721px;
    gap: 4px;

    .history_content {
      gap: 12px;
      justify-content: flex-start;
      overflow-x: scroll;
      padding: 0 24px;

      .history_contentBox {
        width: 327px;
        height: 423px;
      }
    }
  }
}
</style>
