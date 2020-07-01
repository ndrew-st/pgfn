export default axios => resource => ({
  getUsersRequests () {
    return axios.get(`${resource}?user=true`)
  }
})
