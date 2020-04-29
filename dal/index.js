export default axios => ({
  getMapData () {
    return axios.get('/maps')
  },
  subscribeEmail (email) {
    return axios.get(`/api/users/subscribe?email=${email}`)
  },
  getDirection (name) {
    return axios.get(`/api/apartments/direction?name=${name}`)
  },
  getSearch (search) {
    return axios.get(`/api/apartments/search?q=${search}`)
  },
  updateTabs (url) {
    return axios.get(url)
  }
})
