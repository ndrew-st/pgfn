export default {
  addDataPlacement (state, data) {
    state.result = data
  },
  addDataRequest (state, data) {
    state.result = data
  },
  setTypePage (state, payload) {
    state.type = payload
  }
}
