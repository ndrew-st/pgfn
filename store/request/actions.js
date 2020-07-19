// import addPlacement from '~/pages/add-placement'

export default {
  // async getData ({ commit }) {
  //   const data = await this.$api.apartments.getFilteredData()

  //   commit('addData', data)
  // }
  setItem ({ commit }, data) {
    commit('addData', data)
  },
  setItemSecondLevel ({ commit }, data) {
    commit('setItemSecondLevel', data)
  },
  removeItemSecondLevel ({ commit }, data) {
    commit('removeItemSecondLevel', data)
  },
  setPrice ({ commit }, data) {
    commit('addPrice', data)
  },
  removePrice ({ commit }, data) {
    commit('removePrice', data)
  },
  refreshPrice ({ commit }, data) {
    commit('refreshPrice', data)
  },
  setBed ({ commit }, data) {
    commit('setBed', data)
  },
  removeBed ({ commit }, data) {
    commit('removeBed', data)
  },
  weekDayIn ({ commit }, data) {
    commit('weekDayIn', data)
  },
  weekDayOut ({ commit }, data) {
    commit('weekDayOut', data)
  },
  async addPlacement ({ state }) {
    const result = await this.$api.apartments.addPlacement(state.result)
    console.log(result)
  },
  async addRequest ({ state }) {
    const result = await this.$api.apartments.addRequest(state.result)
    console.log(result)
  }
}
