export default axios => resource => ({
  getDirection (name) {
    return axios.get(`${resource}/direction?name=${name}`)
  },
  getSearch (search) {
    return axios.get(`${resource}/search?q=${search}`)
  },
  updateTabs (url) {
    return axios.get(`${resource}${url}`)
  },
  getFilteredData () {
    return axios.get(`${resource}`)
  },
  addPlacement (apData) {
    return axios.post(`${resource}`, apData)
  }
})
