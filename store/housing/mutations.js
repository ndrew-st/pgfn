export default {
  addDataPlacement (state, data) {
    state.placement = data
  },
  addDataRequest (state, data) {
    state.request = data
  },
  setPage (state, nextPage) {
    state.page = nextPage
  }
}
