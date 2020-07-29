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
  async getPlacementData ({ commit, state }) {
    const offset = state.placement.length - (state.page * state.limit)

    const data = await this.$api.apartments.getCatalog(state.limit, 0)

    commit('addData', data)
  },
  changePage ({ commit }, page) {
    commit(`setPage`, parseInt(page))
  }
}
