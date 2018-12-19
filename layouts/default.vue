<template>
  <div class="container">
    <div class="canvasContainer">
      <GlslCanvas class="canvas" />
    </div>
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import GlslCanvas from '~/components/GlslCanvas'
import Navigation from '~/components/Navigation'

export default {
  components: {
    GlslCanvas,
    Navigation,
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 5px;
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
</style>
