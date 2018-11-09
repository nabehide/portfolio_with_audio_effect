<template>
  <div class="container">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: {
    Navigation,
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 5px;
}
</style>
