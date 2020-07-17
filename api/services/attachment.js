export default axios => resource => ({
  getImage (id) {
    return axios.get(`${resource}?id=${id}`)
  }
})
