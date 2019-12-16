export default {
  switchView (state, payload) {
    state.config.view = payload
  },
  switchActive (state, payload) {
    state.config.open = payload
  }
}
