export default {
  async getData ({ commit }, payload) {
    const data = await this.$api.users.serverRequest(payload)

    commit('addData', data)
  },
  async getItem ({ commit }, id) {
    const data = await this.$api.apartments.getItem(id)

    commit('addData', data)
  }
}
