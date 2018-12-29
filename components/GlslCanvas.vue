<template>
  <div id="container">
    <canvas id="canvas"/>

    <input type="button" id="buttonChangeScene" style="display: none;" @click="handleChangeScene" >
    <!--
    <input type="button" id="buttonChangeAudioSource" style="display: none;" @click="handleChangeAudioSource" >
    -->
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
      console.log("change scene", this.$store.state.canvasParameters.scene.scene)
      this.three.setScene()
    },
    /*
    handleChangeAudioSource () {
      const audioSource = this.$store.state.canvasParameters.audioSource.audioSource

      if (audioSource === "music") {
        this.three.stopMicrophone()
        this.three.startAudio()
      } else if (audioSource === "microphone") {
        this.three.stopAudio()
        this.three.startMicrophone()
      } else {
        this.three.stopAudio()
        this.three.stopMicrophone()
        this.three.resetAudioData()
      }
    }
    */
  },
}
</script>

<style scoped lang="scss">
</style>
