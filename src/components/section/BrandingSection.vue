<script setup>
import BannerContent from '@/components/content/BannerContent.vue';

const bannerContents = [
  {
    title: '끈기',
    description1: '끝까지 해결하고자 하는',
    description2: '목표의식과 끈기를 발휘하는 사람',
    image: 'grit',
    word: 'Grit',
  },
  {
    title: '열정',
    description1: '불편함을 참지 않고 혁신을',
    description2: '주도하는 열정적인 사람',
    image: 'passion',
    word: 'Passion',
  },
  {
    title: '존중',
    description1: '업무에 대한 고도의 책임감을 바탕으로',
    description2: '상대방을 진심으로 존중하는 사람',
    image: 'respect',
    word: 'Respect',
  },
  {
    title: '긍정',
    description1: '어려움 속에서 긍정적인 면을 발굴하고',
    description2: '문제 속에서 해결책을 찾는 사람',
    image: 'positiveness',
    word: 'Positiveness',
  },
];
</script>

<template>
  <section class="branding_container">
    <div class="branding_title">
      <h1>
        <span class="branding_title_blue">Imageers </span>
        <span>Freely Professional</span>
      </h1>
      <p>
        <span>꿈꾸는 대로 일하고 프로다운 결과를 만드는 사람들이</span>
        <span> 모여 피네보의 성과를 만들어갑니다. </span>
      </p>
    </div>
    <div class="branding_content">
      <div class="branding_grid">
        <BannerContent
          v-for="(content, index) in bannerContents"
          :key="index"
          v-bind="content"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.branding_container {
  width: 100%;
  height: 1080px;
  padding: 139px 0 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 98px;

  .branding_title {
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

      .branding_title_blue {
        @extend .blue_heavy;
      }
    }

    p {
      @extend .body2;
      line-height: 28px;
      text-align: center;
    }
  }

  .branding_content {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;

    .branding_grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }
  }
}

@media (max-width: 767px) {
  .branding_container {
    height: auto;
    padding: 88px 20px 0;
    gap: 62px;

    .branding_title {
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
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .branding_content {
      .branding_grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 20px;
      }
    }
  }
}
</style>
