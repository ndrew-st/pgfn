export default {
  getAllData ({ commit, state }) {
    // const offset = state.result.count - (state.page * state.limit)
    //
    // const data = await this.$api.apartments.getCatalog(state.limit, offset)
    //
    // console.log('data ', data)
    //
    // commit('addData', data)
  },
  changePage ({ commit }, page) {
    commit(`setPage`, parseInt(page))
  }
}
