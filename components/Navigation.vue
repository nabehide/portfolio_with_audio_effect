<template>
  <div class="container">
    <div class="canvasContainer">
      <GlslCanvas class="canvas" />
    </div>
    <nav :class="{ 'isColorInverted' : (isColorInverted === true) }">
      <ul>
        <nuxt-link exact to="/" ><li>Top</li></nuxt-link>
        <nuxt-link to="/wallpaper" ><li>Wallpapers</li></nuxt-link>
        <nuxt-link to="/settings" ><li>Settings</li></nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import GlslCanvas from './GlslCanvas'
export default {
  components: {
    GlslCanvas,
  },
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

    .nuxt-link-exact-active {
      border-bottom: black solid thin;
    }

    a {
      color: black;
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
canvasContainer {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.canvas {
  z-index: -100;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
nav.isColorInverted {
  ul {
    .nuxt-link-exact-active {
      border-bottom-color: #eee,
    }
    a {
      color: #eee,
    }
  }
  border-bottom-color: #eee,
}
</style>
