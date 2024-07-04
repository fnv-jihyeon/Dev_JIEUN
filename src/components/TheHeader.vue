<template>
  <header class="header_container">
    <div class="header_layout">
      <img src="@/assets/images/finevo_logo.png" />
      <nav class="header_nav">
        <span class="body4 header_nav_text">회사소개</span>
        <span class="body4 header_nav_text">서비스</span>
        <span class="body4 header_nav_text">서비스신청</span>
        <span class="body4 header_nav_text">고객지원</span>
        <span class="body4 header_nav_text">FINEVO IN</span>
      </nav>
      <img class="hamburger" src="@/assets/images/hamburger_icon.png" />
    </div>
  </header>
</template>

<style lang="scss">
.header_container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 72px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 48px;
    cursor: pointer;
  }

  .hamburger {
    display: none;
  }
}

@media (min-width: 0px) and (max-width: 767px) {
  .header_container {
    height: 54.37px;
    padding: 10px 24px;

    nav {
      display: none;
    }

    .hamburger {
      display: flex;
      cursor: pointer;
    }
  }
}
</style>

<script setup></script>
