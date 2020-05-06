import createApartmentsApi from '~/api/apartments'
import createUsersApi from '~/api/user'

export default ({ $axios }, inject) => {
  $axios.onResponseError((e) => {
    if (e.response && e.response.data && e.response.data.error) {
      return {
        error: e.response.data
      }
    }
  })

  $axios.onRequestError((error) => {
    debugger
    if (error.request) {
      return {
        error: error.request
      }
    }
  })

  $axios.onError((error) => { // handler config errors
    console.log('Main handler ', error)
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
