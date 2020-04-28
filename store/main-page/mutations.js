export default {
  addData (state, data) {
    state.result = data
  },
  updateTabs (state, data) {
    state.result[data.field].items = data.items
  }
}
