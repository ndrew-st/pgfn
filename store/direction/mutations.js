export default {
  addPlacementData (state, data) {
    state.result = data
  },
  addRequestData (state, data) {
    state.request = data
  },
  updateTabs (state, data) {
    state.result[data.field].items = data.items
  },
  toggleLoading (state, flag) {
    state.loading = flag
  }
}
