<template>
  <div>
    <Gui/>
  </div>
</template>

<script>
import Gui from '~/components/Gui'

export default {
  components: {
    Gui,
  },
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
