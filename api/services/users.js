export default axios => resource => ({
  subscribeEmail (email) {
    return axios.get(`subscribe?email=${email}`)
  },
  getCode (phone) {
    // return axios.post(`${resource}/code`, { phone })
    return axios.post(`code`, { phone })
  },
  checkCode (phone, code) {
    return axios.get(`code?phone=${phone}&code=${code}`)
  },
  getUser () {
    return axios.get(`profile`)
  },
  register (phone, name, password) {
    return axios.post(`auth/signUp`, { phone, name, password })
  },
  refreshToken (token) {
    return axios.get(`auth/refresh?token=${token}`)
  },
  login (phone, password) {
    return axios.post(`auth/signIn`, { phone, password })
  },
  uploadFiles (files) {
    const formData = new FormData()

    formData.append(`files`, files)

    return axios.post('attachment/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  }
})
