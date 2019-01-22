<template>
  <div class="container">
    <nav :class="{ 'isColorInverted' : (isColorInverted === true) }">
      <ul>
        <nuxt-link exact to="/" ><li>Top</li></nuxt-link>
        <nuxt-link to="/works" ><li>Works</li></nuxt-link>
        <nuxt-link to="/settings" ><li>Settings</li></nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isColorInverted () { return this.$store.state.parameters.invertColor.isColorInverted.isColorInverted }
  },
}
</script>

<style scoped lang="scss">
nav {
  z-index: 100;

  position: absolute;
  top: 0;
  left: 0;

  ul {
    list-style: none;
    margin: 5px 0px;

    a {
      border-bottom-color: transparent;
      transition: border-bottom-color 1s ease 0.01s;
    }
    .nuxt-link-exact-active {
      border-bottom: black solid thin;
      transition: border-bottom-color 1s ease 0.01s;
    }

    li {
      display: inline-block;
      margin: 0px 10px;
    }
  }
  border-bottom: {
    color: black;
    style: solid;
    width: thin;
  }
}
nav.isColorInverted {
  ul {
    .nuxt-link-exact-active {
      border-bottom-color: #eee;
      transition: border-bottom-color 1s ease 0.01s;
    }
  }
  border-bottom-color: #eee,
}
</style>
