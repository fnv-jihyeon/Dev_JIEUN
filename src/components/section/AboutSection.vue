<template>
  <section class="about_container">
    <div class="about_text">
      <h2>Financial Evolution, FINEVO</h2>
      <div>
        <h1>금융 시장에서 클라우드와 결제 데이터를 통해</h1>
        <h1>더 확장적이고, 최적화된 생태계를 만들어갑니다</h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about_container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  background-image: url('@/assets/images/about.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}

.about_text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  white-space: nowrap;

  h2 {
    @extend .body2, .blue_normal;
    line-height: 28px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    @extend .display2, .bg_normal;
    line-height: 62.4px;
  }
}

@media (max-width: 767px) {
  .about_container {
    height: 812px;
    background-image: url('@/assets/images/about_mobile.png');
  }

  .about_text {
    gap: 10px;

    h1,
    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      text-align: center;
    }
  }
}
</style>
