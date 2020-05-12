export default {
  async getData ({ commit }) {
    const data = await this.$api.apartments.getFilteredData()

    commit('addData', data)
  }
}
