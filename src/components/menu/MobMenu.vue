<script setup>
import { ref } from 'vue';

const menuList = [
  {
    item: '회사소개',
    path: '/about',
    itemList: [
      { name: '회사 개요', hash: '#overview' },
      { name: 'CEO 인사말', hash: '#ceo' },
      { name: '회사연혁', hash: '#history' },
      { name: '사업영역', hash: '#now' },
      { name: '오시는길', hash: '#path' },
    ],
    isOpen: ref(false),
  },
  {
    item: '서비스',
    path: '',
    isOpen: ref(false),
  },
  {
    item: '서비스 신청',
    path: '',
    isOpen: ref(false),
  },
  {
    item: '고객지원',
    path: '',
    isOpen: ref(false),
  },
  {
    item: 'Finevo In',
    path: '/finevo-in',
    isOpen: ref(false),
  },
];

const toggleMenu = (index) => {
  menuList.forEach((menu, i) => {
    if (i !== index) {
      menu.isOpen.value = false;
    }
  });

  menuList[index].isOpen.value = !menuList[index].isOpen.value;
};

const chevronImage = (index) => {
  return menuList[index].isOpen.value ? 'chevron' : 'chevron_down';
};
</script>

<template>
  <nav class="menu_container">
    <ul class="menu_list" v-for="(menu, index) in menuList" :key="index">
      <li class="menu_listItem" @click="toggleMenu(index)">
        <span>{{ menu.item }}</span>
        <img
          v-if="menu.itemList"
          :src="require(`@/assets/images/${chevronImage(index)}.svg`)"
        />
      </li>
      <ul class="menu_subList" v-show="menu.isOpen.value">
        <li v-for="(subMenu, subindex) in menu.itemList" :key="subindex">
          <router-link
            :to="{ path: menu.path, hash: subMenu.hash }"
            @click="$emit('close')"
          >
            <div>{{ subMenu.name }}</div>
          </router-link>
        </li>
      </ul>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu_container {
  width: 100%;
  height: 100vh;
  padding: 80px 0 140px;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;

  .menu_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    @extend .label_normal;
    white-space: nowrap;

    .menu_listItem {
      width: 100%;
      padding: 16px 46px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        @extend .body1;
        line-height: 28px;
        letter-spacing: -0.5px;
      }
    }
  }
}
.menu_subList {
  li {
    height: 53px;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    @extend .label1;

    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0 30px;
      display: flex;
      justify-content: center;

      div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  li:last-child {
    a {
      border-bottom: 1px solid rgba(218, 218, 218, 1);
    }
  }
}
</style>
