export default {
  setResult (state, { request, reservation, placement }) {
    state.request = request
    state.reservation = reservation
    state.placement = placement
  }
}
