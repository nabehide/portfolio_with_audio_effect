export default class KeyEventListener {
  constructor (store) {
    this.store = store
    this.setup()
  }
  setup () {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case '1':
          this.store.commit("parameters/set", {value: true, index: 0})
          break
        default:
          break
      }
    })
    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case '1':
          this.store.commit("parameters/set", {value: false, index: 0})
          break
        default:
          break
      }
    })
  }
}

