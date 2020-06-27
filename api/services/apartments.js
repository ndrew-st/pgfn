export default axios => resource => ({
  getDirection (name) {
    return axios.get(`direction?name=${name}`)
  },
  getSearch (search) {
    return axios.get(`${resource}/search?q=${search}`)
  },
  updateTabs (url) {
    return axios.get(`${resource}${url}`)
  }
})
