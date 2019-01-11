<template>
  <div id="container">
    <canvas id="canvas"/>

    <input type="button" id="buttonChangeScene" style="display: none;" @click="handleChangeScene" >
    <input type="button" id="buttonChangeAudioSource" style="display: none;" >
  </div>
</template>

<script>
import Three from '~/assets/js/Three'

export default {
  computed: {
  },
  data () {
    const three = new Three(this.$store)
    return {
      three: new Three(this.$store),
    }
  },
  created () {
  },
  mounted () {
    this.three.mounted()
  },
  methods: {

    handleChangeScene () {
      console.log("scene:", this.$store.state.canvasParameters.scene.scene)
      this.three.setScene()
    },
  },
}
</script>

<style scoped lang="scss">
</style>
