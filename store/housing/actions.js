export default {
  async getPlacementData ({ commit, state }, payload) {
    // const offset = state.placement.length - (state.page * state.limit)
    let filters = ''
    for (const key in payload) {
      if (payload[key]) {
        filters = filters + `&${key}=${JSON.stringify(payload[key])}`
      }
    }

    const data = await this.$api.apartments.getCatalog(state.limit, 0, filters)

    commit('addDataPlacement', data)
  },
  async getRequestData ({ commit, state }, payload) {
    // const offset = state.placement.length - (state.page * state.limit)
    let filters = ''
    for (const key in payload) {
      if (payload[key]) {
        filters = filters + `&${key}=${payload[key]}`
      }
    }

    const data = await this.$api.request.getCatalog(state.limit, 0, filters)

    commit('addDataRequest', data)
  },
  changePage ({ commit }, page) {
    commit(`setPage`, parseInt(page))
  }
}
