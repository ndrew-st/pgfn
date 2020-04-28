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
  updateTabs (url) {
    return axios.get(url)
  }
})
