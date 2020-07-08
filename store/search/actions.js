export default {
  addSearchRequest: ({ commit }, search) => {
    commit('addContentField', { field: 'search', res: search })
  },
  async searchResult ({ commit, state }, query) {
    const data = await this.$api.apartments.getDataSearch({ ...query, limit: state.limit, offset: state.offset })

    if (!data.error) { commit(`setData`, data) }
  },
  clearAllData: ({ commit }) => {
    commit('clearData')
  },
  changePage ({ commit }, page) {
    commit(`setPage`, parseInt(page))
  }
}
