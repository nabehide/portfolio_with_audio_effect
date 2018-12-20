export const state = () => ({
  invertColor: {
    isColorInverted: {
      type: "Boolean",
      isColorInverted: true,
      max: null,
      min: null,
      step: null,
    },
  },
  glitch: {
    isGlitched: {
      type: "Boolean",
      isGlitched: false,
      max: null,
      min: null,
      step: null,
    },
    glitch: {
      type: "Number",
      glitch: 5.0,
      max: 30,
      min: 0,
      step: 0.1,
    },
  },
  zoom: {
    zoom: {
      type: "Number",
      zoom: 1.0,
      max: 8.0,
      min: 0.1,
      step: 0.01,
    },
  },
  time: {
    isStopped: {
      type: "Boolean",
      isStopped: false,
      max: null,
      min: null,
      step: null,
    },
    speed: {
      type: "Number",
      speed: 0.05,
      max: 2,
      min: 0.01,
      step: 0.01,
    },
  },
})

export const mutations = {
  set (state, {effect, name, value}) {
    state[effect][name][name] = value
  }
}

export const getters = {
  state: state => {
    return state
  },
}

export const actions = {
}
