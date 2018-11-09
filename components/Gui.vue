<template>
  <div id="guiWrapper">
    <div id="guiContainer"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    const dat = require("dat.gui")
    this.gui = new dat.GUI({
      closed: false,
      closeOnTop: true,
      autoPlace: false,
    })
    this.gui.open()

    const guiContainer = document.getElementById("guiContainer")
    guiContainer.appendChild(this.gui.domElement)

    this.state = this.$store.getters["parameters/state"]
    this.parameters = JSON.parse(JSON.stringify(this.state))

    for(let effect in this.parameters){
      const folder = this.gui.addFolder(effect)
      folder.open()
      for(let name in this.parameters[effect]){
        const { max, min, step } = this.parameters[effect][name]
        // folder.add(this.parameters[effect], name).listen().onChange(() => {
        folder.add(this.parameters[effect][name], name, min, max, step).listen().onChange(() => {
          this.setParameter(effect, name)
        })
      }
    }

    // window.addEventListener('keydown', (e) => { this.keyEventCase(e, true) })
    // window.addEventListener('keyup', (e) => { this.keyEventCase(e, false) })
    window.addEventListener('keydown', (e) => {
      let effect
      let name
      switch (e.key) {
        case 'a':
          effect = 'invertColor'
          name = 'isColorInverted'
          this.keyEvent(effect, name, !this.parameters[effect][name][name])
          break

        case 's':
          effect = 'glitch'
          name = 'isGlitched'
          this.keyEvent(effect, name, !this.parameters[effect][name][name])
          break
        case 'w':
          effect = 'glitch'
          name = 'glitch'
          this.keyEvent(effect, name, this.parameters[effect][name][name]+1)
          break
        case 'x':
          effect = 'glitch'
          name = 'glitch'
          this.keyEvent(effect, name, this.parameters[effect][name][name]-1)
          break

        case 'e':
          effect = 'zoom'
          name = 'zoom'
          this.keyEvent(effect, name, this.parameters[effect][name][name]+1)
          break
        case 'c':
          effect = 'zoom'
          name = 'zoom'
          this.keyEvent(effect, name, this.parameters[effect][name][name]-1)
          break

        case 'f':
          effect = 'time'
          name = 'isStopped'
          this.keyEvent(effect, name, !this.parameters[effect][name][name])
          break

        default:
          console.log(e.key)
          break
      }
    })

    // MIDI
    this.midiDevices = {
      inputs: {},
      outputs: {},
    }
    const requestMIDI = () => {
      navigator["requestMIDIAccess"]()
      .then(this.requestSuccess, this.requestError)
    }
    requestMIDI()
    console.log("midiDevices", this.midiDevices)
  },
  methods: {
    setParameter (effect, name) {
      this.$store.commit("parameters/set", {effect: effect, name: name, value: this.parameters[effect][name][name]})
    },
    keyEvent (effect, name, b) {
      this.parameters[effect][name][name] = b
      this.setParameter(effect, name)
    },
    // keyEventCase (e, b) {
    //   switch (e.key) {
    //     case 'a':
    //       this.keyEvent('isColorInverted', b)
    //       break
    //     default:
    //       console.log(e.key)
    //       break
    //   }
    // },

    requestSuccess (data) {
      const inputIterator = data.inputs.values()
      for (let input=inputIterator.next(); !input.done; input=inputIterator.next()) {
        const value = input.value
        this.midiDevices.inputs[value.name] = value
        value.addEventListener('midimessage', this.inputEvent, false)
      }
      const outputIterator = data.outpus.values()
      for (let output=outputIterator.next(); !output.done; output=outputIterator.next()) {
        const value = output.value
        this.midiDevices.outputs[value.name] = value
      }
    },
    requestError (error) {
      console.log("MIDI error", error)
    },
    inputEvent (e) {
      switch (e) {
        default:
        break
      }
    },
  }
}
</script>

<style scoped>
#guiWrapper {
  position: absolute;
  top: 0;
  right: 0;
}
#guiContainer {
  position: relative;
  z-index: 1;
}

#guiContainer *{
  font-size: 20px;
  color: red;
}
@media screen and (min-width:768px) {
  #guiContainer *{
    font-size: 10px;
  }
}
</style>
