<template>
  <div id="container">
    <canvas id="canvas"/>
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

    const button = document.getElementById("button")
    button.addEventListener("click", this.startAudio)
  },
  methods: {
    startAudio () {
      console.log("start")
      this.three.mediaElement.play()
    },
  },
  updated () {
  },
}
</script>

<style scoped lang="scss">
</style>
