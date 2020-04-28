export default axios => ({
  getMapData () {
    return axios.get('/maps')
  }
})
