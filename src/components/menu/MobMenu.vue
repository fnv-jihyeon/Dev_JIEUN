<script setup>
const menuList = [
  {
    item: '회사소개',
    itemList: ['회사 개요', 'CEO 인사말', '회사연혁', '사업영역', '오시는길'],
  },
  {
    item: '서비스',
  },
  {
    item: '서비스 신청',
  },
  {
    item: '고객지원',
  },
  {
    item: 'Finevo In',
  },
];
</script>

<template>
  <nav class="menu_container">
    <ul class="menu_list" v-for="(menu, index) in menuList" :key="index">
      <li class="menu_listItem">
        <span>{{ menu.item }}</span>
        <img src="@/assets/images/chevron.svg" />
      </li>
      <ul
        v-for="(subMenu, index) in menu.itemList"
        :key="index"
        class="menu_subList"
      >
        <li>
          {{ subMenu }}
        </li>
      </ul>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu_container {
  width: 100%;
  height: 852px;
  padding: 140px 0;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  .menu_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    @extend .label_normal;

    .menu_listItem {
      width: 100%;
      padding: 16px 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        @extend .body1;
        line-height: 28px;
        letter-spacing: -0.5px;
      }
    }

    .menu_subList {
      &:hover {
        background: $BACKGROUND_LIGHTGRAY;
      }
      li {
        padding: 0 60px;
        @extend .label1;

        &:hover {
          @extend .bg_neutral;
        }
      }
    }
  }
}
</style>
