export default axios => ({
  getMapData () {
    return axios.get('/maps')
  },
  getSearch (search) {
    return axios.get(`/api/apartments/search?q=${search}`)
  }
})
