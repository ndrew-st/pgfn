export default axios => resource => ({
  getUsersRequests () {
    return axios.get(`${resource}?user=true`)
  },
  getCatalog (limit, offset, filters) {
    return axios.get(`${resource}?limit=${limit}&offset=${offset}${filters}`)
  },
  getItem (id) {
    return axios.get(`${resource}/${id}`)
  }
})
