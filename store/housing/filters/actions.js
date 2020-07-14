export default {
  getFilters ({ commit, state }, type) {
    // const data = await this.$api.apartments.getCatalogFilter(type, state.page)

    // commit(`setResult`, data)
    console.log('action ', type)
  },
  changeTypePage ({ commit }, type) {
    commit(`setType`, type)
  }
}
