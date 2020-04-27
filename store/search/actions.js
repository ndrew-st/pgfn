export default {
  addSearchRequest: ({ commit }, search) => {
    commit('addContentField', { field: 'search', res: search })
  },
  searchResult: ({ commit }, data) => new Promise((resolve, reject) => {
    this.$api.searchObject(data.search, data.request)
      .then((res) => {
        commit('addContentField', { field: 'result', res: res.data })
        resolve(res.data)
      })
      .catch(err => reject(err))
  }),
  clearAllData: ({ commit }) => {
    commit('clearData')
  }
}
