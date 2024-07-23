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
        <div class="finevoIn_box finevoIn_skillBox">
          <div class="finevoIn_boxLabel"># 기술력</div>
          <div class="finevoIn_boxContent more">
            <div class="finevoIn_contentTop">
              <h1>가장 어려운 과제를 해결하는 기술력</h1>
              <h2>All-conquering Expertise</h2>
            </div>
            <img src="@/assets/images/underline.svg" />
            <p>
              피네보는 기존 산업의 틀을 넘어서 새로운 생태계를 구축하고
              있습니다. 글로벌 정보보안인증 최고등급, 대기업 빅데이터 컨설팅
              계약 등의 경쟁력을 가지고 있습니다. 개개인의 도전을 지지하며 이미
              많은 성공경험을 쌓아 오고 있습니다.
            </p>
          </div>
        </div>
        <div class="finevoIn_box finevoIn_cultureBox">
          <div class="finevoIn_boxLabel"># 능동적이고 자유로운 문화</div>
          <div class="finevoIn_boxContent">
            <div class="finevoIn_contentTop">
              <h1>능동적으로 일하는 자유로운 문화</h1>
              <h2>Light Foot</h2>
            </div>
            <p>
              성과에 대한 압박 보다는 스스로 계획하고 충분히 실험하고 도전해 볼
              수 있도록 격려하는 자율적인 문화를 지향합니다.
            </p>
          </div>
        </div>
        <div class="finevoIn_box finevoIn_teamBox">
          <div class="finevoIn_box finevoIn_teamOverlay">
            <div class="finevoIn_boxLabel"># 팀 간의 상호 신뢰</div>
            <div class="finevoIn_boxContent">
              <div class="finevoIn_contentTop">
                <h1>서로를 믿고 따르는 능력 있는 팀</h1>
                <h2>Admiring Alliance</h2>
              </div>
              <p>
                능력 있는 리더와 팀구성원 그리고 서로에 대한 상호 신뢰를
                기반으로 성장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div class="finevoIn_box finevoIn_applyBox">
          <h1>피네보 지원하기!</h1>
          <figure>
            <img src="@/assets/images/apply_icon.svg" />
          </figure>
        </div>
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
  align-items: center;
  gap: 100px;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 2100px;
    padding: 103px 0 0;
    gap: 34px;
  }

  .finevoIn_title {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    @extend .label_normal;

    h1 {
      @extend .display2;
      line-height: 62.4px;
    }

    p {
      @extend .body2;
      line-height: 28px;
      text-align: center;
    }

    @media (max-width: 767px) {
      gap: 10px;

      h1 {
        font-weight: 800;
        font-size: 28px;
        line-height: 38px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  .finevoIn_content {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;

    .finevoIn_grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
      max-width: 965px;
      min-width: 965px;

      .finevoIn_box {
        width: 472px;
        border-radius: 20px;
        padding: 40px 40px 0 40px;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .finevoIn_skillBox {
        height: 430px;
        background: $BACKGROUND_NORMAL;
      }

      .finevoIn_cultureBox {
        height: 510px;
        background-image: url('@/assets/images/finevoIn_culture.png');
      }

      .finevoIn_teamBox {
        margin-top: -80px;
        height: 508px;
        background-image: url('@/assets/images/finevoIn_team.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        .finevoIn_teamOverlay {
          width: 100%;
          height: 508px;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(255, 255, 255, 0.3);
          z-index: 100;
        }
      }

      .finevoIn_applyBox {
        width: 472px;
        height: 260px;
        background: $BACKGROUND_NEUTRAL;
        padding: 60px 40px 0;
        border-radius: 20px;
        cursor: pointer;

        h1 {
          @extend .title4, .bg_normal;
        }

        figure {
          display: flex;
          justify-content: flex-end;
        }
      }

      .finevoIn_boxLabel {
        width: max-content;
        height: 48px;
        border-radius: 100px;
        padding: 8px 30px;
        background: $BLUE_STRONG;
        @extend .title7;
        line-height: 32px;
        color: #fff;
      }

      .finevoIn_boxContent {
        display: flex;
        flex-direction: column;
        gap: 20px;
        @extend .label_normal;

        .finevoIn_contentTop {
          display: flex;
          flex-direction: column;
          gap: 4px;

          h1 {
            @extend .title5;
            line-height: 28.64px;
            word-break: keep-all;
          }

          h2 {
            @extend .body2;
            line-height: 28px;
          }
        }

        p {
          @extend .label1;
          line-height: 24px;
        }
      }

      .more {
        gap: 60px;
        position: relative;

        img {
          position: absolute;
          top: 61px;
          left: -27px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .finevoIn_content {
      padding: 0;

      .finevoIn_grid {
        flex-direction: column;
        gap: 30px;
        max-width: 355px;
        min-width: 355px;

        .finevoIn_box {
          width: 355px;
          padding: 40px 20px 0;
        }

        .finevoIn_teamBox {
          margin: 0;
        }

        .finevoIn_applyBox {
          height: 220px;
          padding: 40px 40px 0;

          h1 {
            font-weight: 600;
            font-size: 24px;
            line-height: 28.64px;
          }

          figure {
            img {
              width: 130px;
              height: 124px;
            }
          }
        }

        .finevoIn_boxLabel {
          height: 42px;
          font-size: 18px;
          line-height: 26px;
        }

        .more {
          img {
            width: 299px;
            height: 19px;
            top: 117px;
            left: 8px;
          }
        }
      }
    }
  }
}
</style>
