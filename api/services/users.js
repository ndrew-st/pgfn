export default axios => resource => ({
  subscribeEmail (email) {
    return axios.get(`${resource}/subscribe?email=${email}`)
  },
  getCode (phone) {
    // return axios.post(`${resource}/code`, { phone })
    return axios.post(`code`, { phone })
  },
  checkCode (phone, code) {
    // return axios.get(`${resource}/code?phone=${phone}&code=${code}`)
    return axios.get(`code?phone=${phone}&code=${code}`)
  },
  getUser () {
    return axios.get(`${resource}/profile`)
  },
  register (phone, name, password) {
    return axios.post(`auth/signUp`, { phone, name, password })
    // return axios.post(`${resource}/auth/signUp`, { phone, name, password })
  },
  refreshToken (token) {
    return axios.get(`auth/refresh?token=${token}`)
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
