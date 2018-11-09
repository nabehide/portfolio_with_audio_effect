export const state = () => ({
  invertColor: {
    isColorInverted: {
      tyle: Boolean,
      isColorInverted: false,
      max: null,
      min: null,
      step: null,
    },
  },
  glitch: {
    isGlitched: {
      tyle: Boolean,
      isGlitched: false,
      max: null,
      min: null,
      step: null,
    },
    glitch: {
      tyle: Number,
      glitch: 5.0,
      max: 30,
      min: 0,
      step: 0.1,
    },
  },
  zoom: {
    zoom: {
      tyle: Number,
      zoom: 1.0,
      max: 8.0,
      min: 0.1,
      step: 0.01,
    },
  },
  time: {
    isStopped: {
      tyle: Boolean,
      isStopped: false,
      max: null,
      min: null,
      step: null,
    },
    speed: {
      tyle: Number,
      speed: 0.05,
      max: 2,
      min: 0.01,
      step: 0.01,
    },
  },
})

export const mutations = {
  // set (state, {target, value}) {
  //   state.parameters[target] = value
  // },
  set (state, {effect, name, value}) {
    state[effect][name][name] = value
  }
}

export const getters = {
  /*
  parameters: state => {
    return state.parameters
  },
  */
  state: state => {
    return state
  },
}

export const actions = {
}
