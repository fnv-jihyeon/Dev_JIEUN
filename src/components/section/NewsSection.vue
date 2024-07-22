<template>
  <section class="news_container">
    <div class="news_box">
      <div class="news_boxTitle">
        <h1>피네보 성과 보러가기</h1>
        <p>
          <span>꿈꾸는 대로 일하고 프로다운 결과를 만드는</span>
          <span>Imagineers들의 여정에 함께하세요!</span>
        </p>
      </div>
      <button>Finevo News</button>
    </div>
  </section>
</template>

<style lang="scss">
.news_container {
  width: 100%;
  height: 452px;
  padding-top: 74px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  .news_box {
    width: 1160px;
    height: 240px;
    border-radius: 20px;
    padding: 50px 100px;
    background-color: $BACKGROUND_NEUTRAL;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .news_boxTitle {
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: $BACKGROUND_NORMAL;
      white-space: nowrap;

      h1 {
        @extend .title4;
        line-height: 38px;
      }

      p {
        @extend .body2;
        font-weight: 400;
        line-height: 28px;
      }
    }

    button {
      width: 173px;
      height: 48px;
      border-radius: 100px;
      padding: 8px;
      border: none;
      background: $BACKGROUND_NORMAL;
      color: $BACKGROUND_DARK;
      @extend .title7;
      line-height: 32px;
      cursor: pointer;
    }
  }
}

@media (max-width: 767px) {
  .news_container {
    height: auto;
    padding: 43.36px 0 94px;

    .news_box {
      width: 355px;
      height: 240px;
      padding: 50px 20px;
      align-items: center;

      .news_boxTitle {
        align-items: center;
        h1 {
          font-weight: 600;
          font-size: 24px;
          line-height: 28.64px;
        }

        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}
</style>
