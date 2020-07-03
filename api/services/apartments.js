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
  getCatalog (limit, offset) {
    return axios.get(`${resource}?limit=${limit}&offset=${offset}`)
  },
  getCatalogFilter () {
    // return axios.get(`${resource}/apartments-filter`)
    return axios.get(`apartments-filter`)
  }
})
