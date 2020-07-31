export default {
  async getPlacementData ({ commit, state }, payload) {
    // const offset = state.placement.length - (state.page * state.limit)

    const data = await this.$api.apartments.getCatalog(state.limit, 0, payload)

    if (!data.error) {
      commit('addDataPlacement', data)
    }
  },
  async getRequestData ({ commit, state }, payload) {
    // const offset = state.placement.length - (state.page * state.limit)
    const data = await this.$api.request.getCatalog(state.limit, 0, payload)

    if (!data.error) {
      commit('addDataRequest', data)
    }
  },
  changePage ({ commit }, page) {
    commit(`setPage`, parseInt(page))
  }
}
