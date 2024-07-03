<template>
  <header class="header_container">
    <h1 class="header_title">
      <router-link to="/"> Vue <span>site</span> </router-link>
    </h1>
    <nav class="header_nav">
      <ul>
        <li>
          <router-link to="todo">TODO</router-link>
        </li>
        <li>
          <router-link to="">소개</router-link>
        </li>
        <li>
          <router-link to="">소개</router-link>
        </li>
        <li>
          <router-link to="">소개</router-link>
        </li>
        <li>
          <router-link to="">소개</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header_container {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem 0 1.5rem;
  gap: 1.5rem;
}

.header_title {
  font-size: 30px;
  font-weight: 800;

  span {
    font-weight: 500;
  }
}

.header_nav ul {
  display: flex;
  justify-content: space-evenly;

  li {
    display: inline-block;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
