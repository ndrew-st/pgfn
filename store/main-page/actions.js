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
  },
  updateTabs ({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$api.updateTabs(data.url)
        .then((res) => {
          commit('updateTabs', { field: data.field, items: res.data })

          resolve()
        }).catch(err => reject(err))
    })
  }
}
