<template>
  <div :class="{'container': true, 'isColorInverted': isColorInverted}">
    <ul>
      <li><nuxt-link to="/">Top</nuxt-link></li>
      <li><nuxt-link to="/works">Works</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    isColorInverted () { return this.$store.state.uniforms.color.isColorInverted.value }
  },
}
</script>

<style scoped lang="scss">
.container {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;

  ul {
    list-style: none;
    margin: 0px 0px 0px 0px;
    padding: 10px 5px 5px 10px;

    li {
      display: inline-block;
      padding: 0px 5px;
      a {
        text-decoration: none;
      }
      .nuxt-link-exact-active {
        border-bottom: solid thin #111;
      }
    }
  }
}
.isColorInverted {
  ul {
    /*
    border-bottom-color: #eee;
    */
    li {
      .nuxt-link-exact-active {
        border-bottom-color: #eee;
      }
    }
  }
}
</style>
