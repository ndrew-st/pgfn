export default axios => resource => ({
  getCenterMainMap (city) {
    return axios.get(`${resource}/${city}`)
  }
})
