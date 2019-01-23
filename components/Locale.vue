<template>
  <div>
    <span><nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link></span>
    <span>/</span>
    <span><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></span>
  </div>
</template>

<style scoped lang="scss">
div {
  span {
    display: inline-block;
    a {
      text-decoration: none;

      &::after {
        content: '';
        display: block;
        height: 1px;
        background-color: #111;
        transform: scale(0);
        transition: transform 0.2s 0.1s;
      }
      &:hover::after {
        transform: scale(1);
      }
      &.nuxt-link-exact-active {
        border-bottom: solid thin #111;
      }
    }
  }
}
.isColorInverted {
  a {
    &::after {
      background-color: #eee;
    }
    &.nuxt-link-exact-active {
      border-bottom-color: #eee;
    }
  }
}
</style>
