export default {
  async getData ({ commit }, query) {
    const data = await this.$api.apartments.getDirection(query)

    commit('addData', data)
  },
  async updateTabs ({ commit }, data) {
    const res = await this.$api.apartments.updateTabs(data.url)
    debugger
    if (!res.error) { commit('updateTabs', { field: data.field, items: res }) }
  }
}
