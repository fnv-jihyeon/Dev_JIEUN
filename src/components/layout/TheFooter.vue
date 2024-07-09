<template>
  <footer class="footer_container">
    <section>
      <div class="footer_content">
        <figure>
          <img src="@/assets/images/finevo_logo_white.png" />
        </figure>
        <div class="label1 footer_info_box bg_normal">
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
  </footer>
</template>

<style lang="scss">
.footer_container {
  background: $BACKGROUND_DARK;
  width: 100%;
  max-height: 465.84px;
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
  gap: 49px;

  figure {
    padding: 8px 0;
  }

  .footer_info_box {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

  .footer_data {
    display: none;
  }

  .footer_info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      display: flex;
      gap: 40px;
    }
  }
}

.footer_copyright {
  text-align: center;
  padding: 8px;
}

@media (max-width: 767px) {
  .footer_container {
    max-height: 629.37px;
    padding: 8px 24px;

    section {
      gap: 104px;
    }
  }

  .footer_info_box {
    .footer_info {
      font-weight: 400;
      font-size: 14px;

      div {
        flex-direction: column;
        gap: 10px;
      }
    }
  }

  .footer_copyright span {
    font-size: 12px;
  }
}
</style>
