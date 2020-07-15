export default {
  async getPlacementData ({ commit }, query) {
    const data = await this.$api.apartments.getDirection(query)

    commit('addPlacementData', data)
  },
  async getRequestData ({ commit }) {
    const data = await this.$api.request.getCatalog()

    commit('addRequestData', data)
  },
  async updateTabs ({ commit }, data) {
    const res = await this.$api.apartments.updateTabs(data.url)

    if (!res.error) { commit('updateTabs', { field: data.field, items: res }) }
  }
}
