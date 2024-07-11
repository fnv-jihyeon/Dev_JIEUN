<script setup>
import BannerTitle from '../banner/BannerTitle.vue';

const banner = {
  color: 'label_normal',
  caption: '오시는 길',
  title1: '든든한 사업파트너가 되실',
  title2: '분들을 환영합니다',
  direction: 'row',
};

const contents = [
  {
    image: 'location',
    title: '주소',
    description1: '서울 특별시 서초구 서초대로 77길 55',
    description2: '에이프로 스퀘어(워워크) 6층 A106',
  },
  {
    image: 'subway',
    title: '지하철',
    description1: '지하철 9호선 신논현역 8번 출구',
    description2: '지하철 신분당선 신논현역 7번 출구',
  },
  {
    image: 'call',
    title: '고객센터',
    description1: '070-4647-1575',
    description2: 'contact@finevo.io',
  },
];
</script>

<template>
  <section class="path_container">
    <div class="path_banner">
      <BannerTitle v-bind="banner" />
    </div>
    <div class="path_content">
      <figure class="path_map"></figure>
      <div class="path_box">
        <div
          class="path_contentBox"
          v-for="(content, index) in contents"
          :key="index"
        >
          <div class="path_contentWrapper">
            <img
              :src="require(`@/assets/images/${content.image}.svg`)"
              :alt="content.title"
            />
            <div class="path_contentText">
              <h2>{{ content.title }}</h2>
              <p>
                <span>{{ content.description1 }}</span>
                <span>{{ content.description2 }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.path_container {
  width: 100%;
  height: 1080px;
  background: $BACKGROUND_NORMAL;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .path_banner {
    margin-top: -100px;
    margin-bottom: 30px;
  }

  .path_content {
    width: 1160px;
    display: flex;
    flex-direction: column;
    gap: 13px;

    .path_map {
      width: 100%;
      height: 518px;
      border-radius: 24px;
      background-image: url('@/assets/images/map.png');
      background-size: cover;
      background-repeat: no-repeat;
    }

    .path_box {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 20px;

      .path_contentBox {
        width: 100%;
        height: 130px;
        border-radius: 12px;
        padding: 8px 0px 8px 50px;
        display: flex;
        align-items: center;
        background: $BACKGROUND_LIGHTGRAY;

        .path_contentWrapper {
          display: flex;
          align-items: center;
          gap: 24px;

          .path_contentText {
            display: flex;
            flex-direction: column;
            gap: 4px;
            @extend .label_normal;

            h2 {
              @extend .body1;
              line-height: 28px;
              letter-spacing: -0.5px;
            }

            span {
              display: block;
              @extend .label4;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .path_container {
    height: 975px;
    padding-top: 7px;
    gap: 30px;

    .path_banner {
      margin: 0;
    }

    .path_content {
      width: 355px;
      padding-top: 7px;
      gap: 14px;
      margin: 0;

      .path_map {
        height: 277px;
        background-image: url('@/assets/images/map_small.png');
      }

      .path_box {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .path_contentBox {
          height: 120px;
          padding: 8px 8px 8px 20px;

          img {
            max-width: 52px;
            max-height: 57.1px;
          }

          span {
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
