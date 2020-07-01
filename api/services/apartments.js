export default axios => resource => ({
  getDirection (city) {
    return axios.get(`${resource}?city=${city}`)
  },
  getSearch (search) {
    return axios.get(`${resource}/search?q=${search}`)
  },
  updateTabs (url) {
    return axios.get(`${resource}${url}`)
  },
  getUserPlacement () {
    return axios.get(`${resource}?user=true`)
  },
  getFilteredData () {
    return axios.get(`${resource}`)
  }
})
