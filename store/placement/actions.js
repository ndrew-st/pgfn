import addPlacement from '~/pages/add-placement'

export default {
  // async getData ({ commit }) {
  //   const data = await this.$api.apartments.getFilteredData()

  //   commit('addData', data)
  // }
  setItem ({ commit }, data) {
    // debugger
    // console.log('aee ' + JSON.stringify(data))
    commit('addData', data)
  },
  async addPlacement ({ state }) {
    const result = await this.$api.apartments.addPlacement(state.result)
    console.log(result)
  }
}
