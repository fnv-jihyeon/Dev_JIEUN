<template>
  <footer class="footer_container">
    <div class="icons">
      <a href="https://www.facebook.com" target="_blank"
        ><img src="@/assets/images/facebook.svg" alt="Facebook"
      /></a>
      <a href="https://www.instagram.com" target="_blank"
        ><img src="@/assets/images/instagram.svg" alt="Instagram"
      /></a>
      <a href="https://www.twitter.com" target="_blank"
        ><img src="@/assets/images/twitter.svg" alt="Twitter"
      /></a>
      <a href="https://www.github.com" target="_blank"
        ><img src="@/assets/images/github.svg" alt="GitHub"
      /></a>
    </div>
    <div class="footer_content">
      <span>연락처: 010-0000-0000</span>
      <span>이메일: cje0000@gmail.com</span>
      <span>주소: 경기도 수원시 00구 00대로</span>
    </div>
    <p>Copyright &copy; Choi Ji Eun</p>
  </footer>
</template>

<style lang="scss">
.footer_container {
  background: #ffececa2;
  text-align: center;
  padding: 2rem;

  p {
    margin-top: 2rem;
  }
}

.icons {
  a + a {
    margin-left: 1rem;
  }
}

.footer_content {
  margin-top: 1rem;

  span {
    display: block;
  }
  span + span {
    margin-top: 0.5rem;
  }
}
</style>
