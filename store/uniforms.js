export const state = () => ({
  color: {
    isColorInverted: {
      type: "i",
      value: true,
      min: null,
      max: null,
      step: null,
    },
  },
  glitch: {
    isGlitched: {
      type: "i",
      value: false,
      min: null,
      max: null,
      step: null,
    },
    glitch: {
      type: "f",
      value: 5.0,
      min: 0,
      max: 30,
      step: 0.1,
    },
  },
  zoom: {
    zoom: {
      type: "f",
      value: 1.0,
      min: 0.1,
      max: 8.0,
      step: 0.01,
    }
  },
  time: {
    isStopped: {
      type: "i",
      value: false,
      min: null,
      max: null,
      step: null,
    },
    speed: {
      type: "f",
      value: 0.05,
      min: 0.01,
      max: 2.0,
      step: 0.01,
    }
  },
})

export const mutations = {
  set (state, {effect, name, value}) {
    state[effect][name].value = value
  }
}

export const getters = {
  state: state => {
    return state
  },
}

export const actions = {
}
