export default axios => ({
  getMapData () {
    return axios.get('/maps')
  },
  subscribeEmail (email) {
    return axios.get(`/api/users/subscribe?email=${email}`)
  },
  searchByQuery (query) {
    return axios.get(`/api/apartments/quickSearch?q=${query}`)
  },
  searchObject (query, data) {
    return axios.post(`/api/apartments/search?q=${query}`, data)
  }
})
