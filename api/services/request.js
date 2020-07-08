export default axios => resource => ({
  getUsersRequests () {
    return axios.get(`${resource}?user=true`)
  },
  getCatalog () {
    return axios.get(`${resource}`)
  }
})
