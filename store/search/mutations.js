export default {
  addContentField (state, data) {
    state[data.field] = data.res
  },
  delResult (state) {
    state.result = []
  },
  setData (state, res) {
    state.result = res
  },
  delSearch (state) {
    state.search = ''
  },
  clearData (state) {
    state.search = ''
    state.result = []
  },
  setPage (state, page) {
    state.page = page
  }
}
