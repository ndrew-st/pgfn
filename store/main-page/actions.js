export default {
  getData ({ commit }, query) {
    return new Promise((resolve, reject) => {
      this.$api.getDirection(query)
        .then((res) => {
          commit('addData', res.data)

          resolve()
        })
        .catch(err => reject(err))
    })
  }
}
