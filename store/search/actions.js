export default {
  addSearchRequest: ({ commit }, search) => {
    commit('addContentField', { field: 'search', res: search })
  },
  async searchResult ({ commit }, query) {
    const data = await this.$api.apartments.searching(query)

    if (!data.error) { commit(`setData`, data) }
  },
  clearAllData: ({ commit }) => {
    commit('clearData')
  }
}
