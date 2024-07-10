<script setup>
import BalanceContent from '@/components/content/BalanceContent.vue';

const balanceContents = [
  {
    title: '시차 출근제',
    description1: '코어타임 10시 ~ 4시 외에 출퇴근',
    description2: '시간을 개인이 조정 합니다.',
    image: 'work',
  },
  {
    title: '건강검진',
    description1: '종합검진비 2년마다 1회씩',
    description2: '지원 합니다.',
    image: 'health',
  },
  {
    title: '주 35시간',
    description1: '주 35시간 근무를 지향 합니다.',
    image: 'time',
  },
  {
    title: '즐거운 점심시간',
    description1: '매일 1시간 30분',
    description2: '점심시간을 제공 합니다.',
    image: 'lunch',
  },
];
</script>

<template>
  <section class="balance_container">
    <div class="balance_title">
      <h1>워라벨</h1>
      <p>임직원의 휴식, 건강, 워라벨 까지도 책임지겠습니다.</p>
    </div>
    <div class="balance_content">
      <div class="balance_grid">
        <BalanceContent
          v-for="(content, index) in balanceContents"
          :key="index"
          v-bind="content"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.balance_container {
  width: 100%;
  height: 100vh;
  padding: 74px 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 78px;

  .balance_title {
    width: 100%;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.99px;
    @extend .label_normal;
    white-space: nowrap;

    h1 {
      @extend .title2;
      line-height: 41.6px;
    }

    p {
      @extend .body2;
      line-height: 28px;
      text-align: center;
    }
  }

  .balance_content {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;

    .balance_grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }
  }
}

@media (max-width: 767px) {
  .balance_container {
    height: 1093px;
    padding: 161px 20px 57px 20px;
    gap: 60px;

    .balance_title {
      h1 {
        font-size: 24px;
        line-height: 28.64px;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
    }

    .balance_content {
      .balance_grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 20px;
      }
    }
  }
}
</style>
