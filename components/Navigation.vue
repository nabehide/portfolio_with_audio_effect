<template>
  <div class="container">
    <nav :class="{ 'isColorInverted' : (isColorInverted === true) }">
      <ul>
        <li><nuxt-link exact to="/" >Top</nuxt-link></li>
        <li><nuxt-link to="/works" >Works</nuxt-link></li>
        <li><nuxt-link to="/settings" >Settings</nuxt-link></li>
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
    margin: 5px 0px 2px 0px;

    li {
      display: inline-block;
      margin: 0px 10px;

      a {
        text-decoration: none;
      }

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

      & .nuxt-link-exact-active {
        border-bottom: solid thin #111;
      }
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
    li {
      &::after {
        background-color: #eee;
      }
      & .nuxt-link-exact-active {
        border-bottom: solid thin #eee;
      }
    }
  }
  border-bottom-color: #eee,
}
</style>
