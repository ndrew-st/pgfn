export default axios => resource => ({
  subscribeEmail (email) {
    return axios.get(`${resource}/subscribe?email=${email}`)
  },
  getCode (phone) {
    return axios.post(`${resource}/code`, { phone })
  },
  checkCode (phone, code) {
    return axios.get(`${resource}/code?phone=${phone}&code=${code}`)
  },
  getUser () {
    return axios.get(`${resource}/profile`)
  },
  register (phone, name, password) {
    return axios.post(`${resource}/auth/signUp`, { phone, name, password })
  },
  refreshToken (token) {
    return axios.get(`auth/refresh?token=${token}`)
  },
  login (phone, password) {
    return axios.post(`${resource}/auth/signIn`, { phone, password })
  }
})
