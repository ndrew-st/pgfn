export default {
  async getData ({ commit }) {
    try {
      const placement = await this.$api.apartments.getUserPlacement()
      const request = await this.$api.request.getUsersRequests()
      const history = await this.$api.reservation.getUserReservation()

      commit(`setResult`, { placement, request, history })
    } catch (e) {
      console.log('Error card profile page: ', e)
    }
  }
}
