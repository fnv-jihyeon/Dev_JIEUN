<template>
  <section class="finevoIn_container">
    <div class="finevoIn_title">
      <h1>
        <span>Shift Finance, </span>
        <span>Shift the World!</span>
      </h1>
      <p>도전하는 당신에게 무한한 기회를!</p>
    </div>
    <div class="finevoIn_content">
      <div class="finevoIn_grid">
        <div class="finevoIn_skillBox"></div>
        <div class="finevoIn_cultureBox"></div>
        <div class="finevoIn_teamBox"></div>
        <div class="finevoIn_applyBox"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.finevoIn_container {
  width: 100%;
  height: 1599px;
  padding: 235px 0 0;
  background: $BACKGROUND_LIGHTGRAY;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .finevoIn_title {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    @extend .label_normal;
    white-space: nowrap;

    h1 {
      @extend .display2;
      line-height: 62.4px;
    }

    p {
      @extend .body2;
      line-height: 28px;
      text-align: center;
    }
  }

  .finevoIn_content {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;

    .finevoIn_grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;

      > div {
        width: 472px;
        border-radius: 20px;
        padding: 40px 40px 0 40px;
      }

      .finevoIn_skillBox {
        height: 430px;
      }

      .finevoIn_cultureBox {
        height: 510px;
      }
    }
  }
}
</style>
