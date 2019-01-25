<template>
  <div id="guiWrapper">
    <div id="guiContainer"/>
  </div>
</template>

<script>
import { flagAudio } from '~/assets/js/parameter';

export default {
  mounted () {
    const dat = require("dat.gui");
    this.gui = new dat.GUI({
      closed: false,
      closeOnTop: true,
      autoPlace: false,
    });
    this.gui.close();
    const guiContainer = document.getElementById("guiContainer");
    guiContainer.appendChild(this.gui.domElement);

    if ( flagAudio ) {
      const general = this.gui.addFolder("general");
      general.open();
      const generalState = this.$store.getters["general/state"];
      const state = JSON.parse(JSON.stringify(generalState));
      general.add(state, "audioSources", state.audioSources).setValue(state.audioSource).listen()
      .onChange(audioSource => {
        this.$store.commit("general/set", {name: "audioSource", value: audioSource})
        document.getElementById("button").click();
      });
    }

    const uniformsState = this.$store.getters["uniforms/state"];
    const uniforms = JSON.parse(JSON.stringify(uniformsState));
    for (let effect in uniforms) {
      const folder = this.gui.addFolder(effect);
      folder.open();
      for (let name in uniforms[effect]) {
        const target = uniforms[effect][name];
        const { min, max, step } = target;
        folder.add(target, "value", target.min, target.max, target.step).name(name).onChange(value => {
          this.$store.commit("uniforms/set", {effect: effect, name: name, value: value});
        })
      }
    }
  },
}
</script>

<style>
#guiWrapper {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>
