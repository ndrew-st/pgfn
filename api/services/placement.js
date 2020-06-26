export default axios => resource => ({
  addPlacement (apData) {
    return axios.post('/apartments', apData)
  }

  // ,
  // checkCode (phone, randomCode) {
  //   return axios.post(`${resource}/check-code`, { phone, randomCode })
  // },
  // register (phone, name, password) {
  //   // return axios.post(`${resource}/register`, { phone, name, password })
  //   return axios.post('/auth/signUp', { phone, name, password })
  // },
  // login (phone, password) {
  //   // return axios.post(`${resource}/login`, { phone, password })
  //   return axios.post('/auth/signIn', { phone, password })
  // },
  // getUser () {
  //   return axios.get(`${resource}/profile`)
  // }
})
