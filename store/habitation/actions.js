export default {
  async getData ({ commit }, payload) {
    const data = await this.$api.users.serverRequest(payload)

    commit('addData', data)
  }
}
