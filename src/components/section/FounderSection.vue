<script setup>
import BannerTitle from '../banner/BannerTitle.vue';

const banner = {
  color: 'label_normal',
  caption: 'CEO&FOUNDER',
  title1: '금융의 새로운 혁신을',
  title2: '만들어내는 피네보',
  direction: 'row',
};
</script>

<template>
  <section class="founder_container" id="ceo">
    <BannerTitle v-bind="banner" />
    <div class="founder_content">
      <figure class="founder_image">
        <h4>CEO&FOUNDER</h4>
        <h3>심정석</h3>
      </figure>
      <div class="founder_description">
        <div>
          <h3>금융의 새로운 혁신을 만들어가는 피네보</h3>
          <p>
            안녕하세요. 금융의 새로운 혁신을 만들어내는 피네보를 찾아주셔서
            감사합니다.<br />
            피네보는 Cloud-Native 역량을 기반으로 급변하는 환경에 적극 대응하고
            있으며, 시장을 주도할 기술력과 역량을 바탕으로 더 큰 도약을 준비하고
            있습니다.<br /><br />
            국내를 넘어 글로벌을 향해 금융 Core-Business의 새로운 기준을
            만들어갈 피네보에 많은 관심과 응원 부탁드립니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.founder_container {
  width: 100%;
  height: 1080px;
  background: $BACKGROUND_LIGHTGRAY;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .founder_content {
    display: flex;
    gap: 12px;
    justify-content: center;

    .founder_image {
      width: 476px;
      height: 476px;
      border-radius: 8px;
      background-image: url('@/assets/images/ceo.png');
      background-size: cover;
      padding: 35px 85px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      color: $BACKGROUND_NORMAL;

      h4 {
        font-size: 20px;
        font-weight: 500;
        line-height: 38px;
      }

      h3 {
        @extend .title2;
        line-height: 41.6px;
      }
    }

    .founder_description {
      width: 476px;
      height: 476px;
      border-radius: 8px;
      padding: 8px 40px;
      background: $BACKGROUND_NEUTRAL;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      div {
        display: flex;
        flex-direction: column;
        gap: 40px;
        color: $BACKGROUND_NORMAL;
        min-width: 396px;

        h3 {
          @extend .title5;
          line-height: 28.64px;
        }

        p {
          @extend .body4;
          line-height: 26px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .founder_container {
    height: 1156px;
    gap: 4px;

    .founder_content {
      flex-direction: column;
      align-items: center;

      .founder_image {
        width: 340px;
        height: 340px;
        padding: 13.94px 51px;

        h4 {
          font-size: 15.03px;
          line-height: 28.57px;
        }

        h3 {
          font-size: 24.06px;
          font-weight: 700;
          line-height: 31.27px;
        }
      }

      .founder_description {
        width: 340px;
        height: 476px;

        div {
          min-width: 260px;
        }
      }
    }
  }
}
</style>
