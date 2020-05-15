import createApartmentsApi from '~/api/apartments'
import createUsersApi from '~/api/user'

export default ({ $axios }, inject) => {
  if (process.browser) {
    const token = localStorage.getItem('token')
    if (token) {
      $axios.defaults.headers.authorization = token
    }
  }

  $axios.onResponseError((e) => {
    if (e.response && e.response.data && e.response.data.error) {
      return {
        error: e.response.data
      }
    }
  })

  $axios.onRequestError((error) => {
    if (error.request) {
      return {
        error: error.request
      }
    }
  })

  $axios.onError((error) => { // handler config errors
    return {
      error: error.message
    }
  })

  $axios.onRequest((config) => {
    return {
      ...config,
      url: encodeURI(config.url)
    }
  })

  $axios.onResponse(res => res.data)

  const apartWithAxios = createApartmentsApi($axios)
  const usersWithAxios = createUsersApi($axios)

  const rep = {
    apartments: apartWithAxios('apartments'),
    users: usersWithAxios('users')
  }

  inject('api', rep)
}
