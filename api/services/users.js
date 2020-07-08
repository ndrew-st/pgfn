export default axios => resource => ({
  subscribeEmail (email) {
    return axios.get(`${resource}/subscribe?email=${email}`)
  },
  getCode (phone) {
    return axios.post(`${resource}/get-code`, { phone })
  },
  checkCode (phone, randomCode) {
    return axios.post(`${resource}/check-code`, { phone, randomCode })
  },
  register (phone, name, password) {
    // return axios.post(`${resource}/register`, { phone, name, password })
    return axios.post('/auth/signUp', { phone, name, password })
  },
  login (phone, password) {
    // return axios.post(`${resource}/login`, { phone, password })
    return axios.post('/auth/signIn', { phone, password })
  },
  getUser () {
    return axios.get(`${resource}/profile`)
  },
  uploadFiles (files) {
    const formData = new FormData()

    formData.append(`files`, files[0])

    return axios.post('/attachment/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  }
})
