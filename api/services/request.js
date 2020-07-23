export default axios => resource => ({
  getUsersRequests () {
    return axios.get(`${resource}?user=true`)
  },
  getCatalog () {
    return axios.get(`${resource}`)
  },
  getItem (id) {
    return axios.get(`${resource}/${id}`)
  }
})
