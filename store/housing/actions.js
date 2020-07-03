export default {
  getAllData ({ commit, state }) {
    const offset = state.result.count - (state.page * state.limit)
    console.log('page ', state.page)

    // const data = await this.$api.apartments.getCatalog(state.limit, offset)

    // commit('addData', data)
  },
  changePage ({ commit }, page) {
    commit(`setPage`, parseInt(page))
  }
}
