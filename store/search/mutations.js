export default {
  addContentField (state, data) {
    state[data.field] = data.res
  },
  delResult (state) {
    state.result = []
  },
  delSearch (state) {
    state.search = ''
  },
  clearData (state) {
    state.search = ''
    state.result = []
  }
}
