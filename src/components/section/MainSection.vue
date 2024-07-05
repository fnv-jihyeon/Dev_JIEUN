<script setup></script>

<template>
  <section class="main_container">
    <div>
      <div class="main_text">
        <div class="main_title">
          <div>사업을 위한 첫 걸음</div>
          <div>최선의 선택, 피네보</div>
        </div>
        <div class="main_description">
          <div>결제, 매장관리, 정산 등 서비스에</div>
          <div>맞게 활용해 보세요</div>
        </div>
      </div>
      <figure><img src="@/assets/images/finevo_main.png" /></figure>
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

  > div {
    display: flex;
    width: 1311px;
    justify-content: space-between;
    align-items: center;
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
  }
  .main_description {
    font-weight: 500;
    font-size: 20px;
    color: $LABEL_ALTERNATIVE;
    display: flex;
    flex-direction: row;
  }
}

@media (max-width: 767px) {
  .main_container {
    height: 852px;
    align-items: flex-start;

    > div {
      flex-direction: column;
      gap: 0;

      figure img {
        width: 430.7px;
        height: 387.75px;
      }
    }
  }

  .main_text {
    padding: 190px 24px 0;
    align-items: center;
    gap: 10px;

    .main_title {
      font-weight: 800;
      font-size: 34px;
    }
    .main_description {
      font-weight: 400;
      font-size: 14px;
      flex-direction: column;
      align-items: center;
      color: $LABEL_NORMAL;
    }
  }
}
</style>
