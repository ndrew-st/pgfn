export default axios => ({
  getMapData () {
    return axios.get('/maps')
  },
  subscribeEmail (email) {
    return axios.get(`/api/users/subscribe?email=${email}`)
  },
  getMainPageData (name) {
    return axios.get(`/api/apartments/direction?name=${name}`)
  }
})
