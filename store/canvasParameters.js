export const state = () => ({
  fps: 30,
})

export const mutations = {
  set (state, {name, value}) {
    state[name] = value
  }
}

export const getters = {
  state: state => {
    return state
  },
}

export const actions = {
}
