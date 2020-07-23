import { getPlacementAction, getRequestAction, setTypePageAction } from '~/constants/actions/unit'

export default {
  async getData ({ commit }, payload) {
    const data = await this.$api.users.serverRequest(payload)

    commit('addData', data)
  },
  async [getPlacementAction] ({ commit }, id) {
    const data = await this.$api.apartments.getItem(id)

    if (!data.error) {
      commit('addDataPlacement', data)
    }
  },
  async [getRequestAction] ({ commit }, id) {
    const data = await this.$api.request.getItem(id)

    if (!data.error) {
      commit('addDataRequest', data)
    }
  },
  [setTypePageAction] ({ commit }, payload) {
    commit('setTypePage', payload)
  }
}
