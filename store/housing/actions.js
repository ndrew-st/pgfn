export default {
  async getData ({ commit }) {
    const data = await this.$api.apartments.getFilteredData()

    console.log('catalog ', data)

    commit('addData', data)
  }
}
