<template>
  <div>
    <Navigation/>
    <canvas id="canvas" />
    <button id="button" style="display: none;">button</button>
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation';
import Three from '~/assets/js/Three'
export default {
  components: {
    Navigation,
  },
  mounted () {
    this.three = new Three(this.$store)
    this.three.mounted()
  },
}
</script>

<style>
#canvas {
  position: fixed;
  z-index: -100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
