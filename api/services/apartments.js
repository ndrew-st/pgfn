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
  },
  getCatalog (limit, offset) {
    return axios.get(`${resource}?limit=${limit}&offset=${offset}`)
  },
  getCatalogFilter () {
    // return axios.get(`${resource}/apartments-filter`)
    return axios.get(`apartments-filter`)
  }
})
