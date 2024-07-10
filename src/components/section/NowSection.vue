<script setup>
import BannerTitle from '@/components/banner/BannerTitle.vue';

const banner = {
  color: 'label_normal',
  caption: 'NOW WE ARE',
  title1: '금융의 새로운 생태계를',
  title2: '개척하고 있습니다.',
};

const contents = [
  {
    image: 'van',
    step: '01',
    title: '클라우드 빅데이터 VAN',
    list: [
      '• 높은 수수료를 지급하는 가맹점',
      '• 매출관리 등 다양한 서비스가 필요한 소상공인',
      '• 인프라 운영비용 절감이 필요한 기존 VAN사',
    ],
  },
  {
    image: 'saas',
    step: '02',
    title: '결제 SaaS',
    list: [
      '• 직승인/EDI 등 인프라 비용 절감 가능',
      '• 중대형 가맹점 대상 시스템 위탁운영 및 결제 Saas',
    ],
  },
  {
    image: 'core',
    step: '03',
    title: 'Core Banking SaaS',
    list: [
      '• 주요 금융기관의 주요기능에 대한 클라우드 전환 (디지털 전환 유도)',
      '• 양질의 결제 빅데이터에 대한 수요가 높은 리테일 및 이커머스 기업',
    ],
  },
];
</script>

<template>
  <section class="now_container">
    <BannerTitle v-bind="banner" />
    <div class="now_content">
      <div
        class="now_contentBox"
        v-for="content in contents"
        :key="content.step"
      >
        <figure class="now_image">
          <img :src="require(`@/assets/images/${content.image}.png`)" />
        </figure>
        <h2 class="now_step">Step{{ content.step }}</h2>
        <h1 class="now_title">{{ content.title }}</h1>
        <ul class="now_list">
          <li v-for="item in content.list" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.now_container {
  width: 100%;
  height: 100vh;
  background: $BACKGROUND_LIGHTGRAY;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .now_content {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: -10px;

    .now_contentBox {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .now_image {
        width: 300px;
        height: 230px;
        background: #ffffff;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .now_step {
        @extend .body2, .blue_heavy;
      }

      .now_title {
        @extend .title6, .label_normal;
      }

      .now_list {
        li {
          @extend .label2, .label_alternative;
          line-height: 32px;
          word-break: keep-all;
          padding-left: 1em;
          text-indent: -1em;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .now_container {
    height: 1846px;
    padding: 0 24px;

    .now_content {
      flex-direction: column;
      align-items: center;
      gap: 24px;
      margin-top: 0;

      .now_contentBox {
        height: 486px;

        .now_image {
          height: 260px;
        }

        .now_step {
          line-height: 28px;
        }

        .now_title {
          line-height: 38px;
        }
      }
    }
  }
}
</style>
