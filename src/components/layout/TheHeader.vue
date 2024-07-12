<script setup>
import { ref, watch } from 'vue';
import MobMenu from '@/components/menu/MobMenu.vue';

const showMenu = ref(false);

const openMenu = () => {
  showMenu.value = true;
};

const closeMenu = () => {
  showMenu.value = false;
};

watch(showMenu, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const showAlert = () => {
  alert('준비중입니다!');
};
</script>

<template>
  <header class="header_container">
    <div class="header_layout">
      <router-link to="/"
        ><img src="@/assets/images/finevo_logo.png"
      /></router-link>
      <nav class="header_nav">
        <router-link to="/about" class="body4 header_nav_text"
          >회사소개</router-link
        >
        <router-link
          to=""
          class="body4 header_nav_text"
          @click.prevent="showAlert"
          >서비스</router-link
        >
        <router-link
          to=""
          class="body4 header_nav_text"
          @click.prevent="showAlert"
          >서비스신청</router-link
        >
        <router-link
          to=""
          class="body4 header_nav_text"
          @click.prevent="showAlert"
          >고객지원</router-link
        >
        <router-link to="/finevo-in" class="body4 header_nav_text"
          >FINEVO IN</router-link
        >
      </nav>
      <img
        class="hamburger"
        :src="
          showMenu
            ? require('@/assets/images/close_icon.png')
            : require('@/assets/images/hamburger_icon.png')
        "
        @click="showMenu ? closeMenu() : openMenu()"
      />
    </div>
  </header>
  <Teleport to="body">
    <MobMenu v-if="showMenu" @close="closeMenu" />
  </Teleport>
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
  z-index: 40;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 501px;
  }

  nav {
    display: flex;
    gap: 48px;
    cursor: pointer;
    white-space: nowrap;
  }

  .hamburger {
    display: none;
  }
}

@media (max-width: 1199px) {
  .header_container {
    div {
      justify-content: space-between;
      gap: 0;
    }
  }
}

@media (max-width: 767px) {
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
