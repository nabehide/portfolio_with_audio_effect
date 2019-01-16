<template>
  <div id="worksContainer" :class="{'isColorInverted': isColorInverted}">
    <WalkAndRide />
    <div class="separator"/>
    <TapAndWifi />
    <div class="separator"/>
    <Cracker />
    <div class="separator"/>
    <MCVStools />
    <div class="separator"/>
    <Portfolio />
  </div>
</template>

<script>
import Cracker from '~/components/works/Cracker'
import MCVStools from '~/components/works/MCVStools'
import Portfolio from '~/components/works/Portfolio'
import TapAndWifi from '~/components/works/TapAndWifi'
import WalkAndRide from '~/components/works/WalkAndRide'
export default {
  components: {
    Cracker,
    MCVStools,
    Portfolio,
    TapAndWifi,
    WalkAndRide,
  },
  computed: {
    isColorInverted () { return this.$store.state.parameters.invertColor.isColorInverted.isColorInverted }
  },
}
</script>

<style scoped lang="scss">
#worksContainer {
  margin: 50px 5px 0px 5px;
}

.separator {
  border: solid thin #111;
}
.isColorInverted {
  .separator {
    border: solid thin #eee;
  }
}
</style>
