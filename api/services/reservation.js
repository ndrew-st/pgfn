export default axios => resource => ({
  getUserReservation () {
    return axios.get(`${resource}?user=true`)
  }
})
