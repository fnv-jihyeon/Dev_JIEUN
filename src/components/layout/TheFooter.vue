<script setup>
import { ref, watch } from 'vue';
import FooterModal from '@/components/modal/FooterModal.vue';
const showModal = ref(false);
const modalUrl = ref('');

const openModal = (type) => {
  if (type === 'privacy_policy') {
    modalUrl.value = '/assets/html/개인정보처리방침v0.1.htm';
  } else if (type === 'terms_of_service') {
    modalUrl.value = '/assets/html/terms_of_service.html';
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

watch(showModal, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <Teleport to="body">
    <FooterModal :show="showModal">
      <iframe :src="modalUrl" frameborder="0"></iframe>
    </FooterModal>
  </Teleport>
  <footer class="footer_container">
    <section>
      <div class="footer_content">
        <figure>
          <img src="@/assets/images/finevo_logo_white.png" />
        </figure>
        <div class="footer_data body2 bg_normal">
          <span @click="openModal('privacy_policy')">개인정보 처리방침</span>
          <!--<span @click="openModal('terms_of_service')">이용약관</span>-->
        </div>
        <div class="footer_info_box bg_normal">
          <div class="body4 footer_info">
            <div>
              <span>대표 : 심정석</span>
              <span>상호 : 피네보 주식회사 852-81-01151</span>
            </div>
            <div>
              주소 : 서울특별시 서초구 서초대로 77길 55 에이프로 스퀘어(워워크)
              6층 A106 피네보㈜
            </div>
            <div>TEL : 070-4647-1575</div>
          </div>
        </div>
      </div>
      <div class="label1 footer_copyright label_alternative">
        <span>Copyright© 2024 Finevo Inc All Rights Reserved.</span>
      </div>
    </section>
    <Teleport to="body">
      <FooterModal :show="showModal" :url="modalUrl" :close="closeModal" />
    </Teleport>
  </footer>
</template>

<style lang="scss">
.footer_container {
  background: $BACKGROUND_DARK;
  width: 100%;
  height: 540.84px;
  padding: 68px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    gap: 84px;
    overflow: hidden;
    white-space: nowrap;
  }
}

.footer_content {
  display: flex;
  flex-direction: column;
  gap: 48px;

  figure {
    padding: 8px 0;
  }

  .footer_data {
    display: flex;
    gap: 44px;
    line-height: 28px;
    cursor: pointer;
  }

  .footer_info_box {
    .footer_info {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        display: flex;
        gap: 40px;
        line-height: 26px;
      }
    }
  }
}

.footer_copyright {
  text-align: center;
  padding: 8px;
  line-height: 24px;
}

@media (max-width: 767px) {
  .footer_container {
    height: 602.84px;
    padding: 68px 24px;

    section {
      gap: 84px;
    }
  }

  .footer_content {
    .footer_info_box {
      .footer_info {
        gap: 10px;

        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          white-space: normal;
          min-width: 345px;
        }
      }
    }
  }

  .footer_copyright span {
    font-size: 12px;
  }
}
</style>
