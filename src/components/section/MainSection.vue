<script setup>
import { onMounted, ref } from 'vue';

const videoRef = ref(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.autoplay = true;
    videoRef.value.muted = true;
    videoRef.value.play();
  }
});
</script>

<template>
  <section class="main_container">
    <Transition appear name="move">
      <div class="main_wrapper">
        <Transition appear name="fade">
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
        </Transition>
        <figure class="main_image">
          <video class="main_video" ref="videoRef" loop muted playsinline>
            <source
              src="@/assets/video/finevo_main_video.mp4"
              type="video/mp4"
            />
          </video>
        </figure>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss">
.main_container {
  background-color: $BACKGROUND_NORMAL;
  width: 100%;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-left: 157px;

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
  white-space: nowrap;

  .main_title {
    @extend .display1;
    color: $LABEL_NORMAL;
    line-height: 78px;
    letter-spacing: -1.2px;

    span {
      display: block;
    }
  }

  .main_description {
    @extend .body2, .label_alternative;
    line-height: 28px;
  }
}

.main_image {
  display: flex;
  overflow: hidden;
  width: 702.22px;
  height: 632px;
  video {
    width: 700.4px;
    height: 630.7px;
    object-fit: contain;
  }
}

.move-enter-active,
.move-leave-active {
  transition: all 1.5s ease-in-out;
}

.move-enter-from,
.move-leave-to {
  transform: translateY(-25px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .main_container {
    height: 852px;
    align-items: flex-start;
    padding-left: 0;

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
    width: 430.7px;
    height: 387.75px;
    video {
      width: 430.7px;
      height: 387.5px;
    }
  }
}
</style>
