<script setup></script>

<template>
  <section class="main_container">
    <div class="main_wrapper">
      <div class="main_text">
        <h1 class="main_title">
          <span>사업을 위한 첫 걸음</span>
          <span>최선의 선택, 피네보</span>
        </h1>
        <p class="main_description">
          <span>결제, 매장관리, 정산 등 서비스에&nbsp;</span>
          <span>맞게 활용해 보세요</span>
        </p>
      </div>
      <figure class="main_image">
        <img src="@/assets/images/finevo_main.png" />
      </figure>
    </div>
  </section>
</template>

<style lang="scss">
.main_container {
  background-color: $BACKGROUND_NORMAL;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .main_wrapper {
    display: flex;
    gap: 163px;
    align-items: center;
    justify-content: center;
  }
}

.main_text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Pretendard';
  white-space: nowrap;

  .main_title {
    font-weight: 700;
    font-size: 60px;
    color: $LABEL_NORMAL;
    line-height: 78px;

    span {
      display: block;
    }
  }
}

.main_description {
  font-weight: 500;
  font-size: 20px;
  color: $LABEL_ALTERNATIVE;
  line-height: 28px;
}

.main_image {
  display: flex;
  overflow: hidden;
  img {
    height: 100%;
    width: 702.22px;
    max-height: 100%;
  }
}

@media (max-width: 767px) {
  .main_container {
    height: 852px;
    align-items: flex-start;

    .main_wrapper {
      flex-direction: column;
      gap: 0;
    }
  }

  .main_text {
    padding: 190px 24px 0;
    align-items: center;
    gap: 10px;

    .main_title {
      font-weight: 800;
      font-size: 34px;
      line-height: 41.6px;
    }

    .main_description {
      font-weight: 400;
      font-size: 14px;
      color: $LABEL_NORMAL;
      line-height: 20px;

      span {
        display: block;
        text-align: center;
      }
    }
  }

  .main_image {
    img {
      width: 100%;
      max-width: 430.7px;
      max-height: 387.75px;
    }
  }
}
</style>
