export default axios => resource => ({
  getCatalog () {
    return axios.get(`${resource}`)
  }
})
