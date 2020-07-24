export default {
  addDataPlacement (state, data) {
    state.result = data
  },
  addDataRequest (state, data) {
    state.request = data
  },
  setTypePage (state, payload) {
    state.type = payload
  }
}
