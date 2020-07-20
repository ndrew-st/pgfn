import authHeader from '~/utils/authHeader'
import { refreshToken, initAuth } from '~/constants/actions/auth'
import { isAuth } from '~/constants/getters/auth'

export default ({ $axios, store: { state, dispatch, getters }, redirect }, inject) => {
  if (process.browser && authHeader()) {
    dispatch(`auth/${initAuth}`)
  }

  $axios.onResponseError(({ response }) => {
    if (response && response.status === 401) {
      if (getters[`auth/${isAuth}`]) {
        return dispatch(refreshToken)
          .then(() => {
            return $axios.$request({
              method: response.config.method,
              url: response.config.url,
              data: response.config.data
            })
          })
          .catch(err => ({ error: err }))
      } else {
        redirect('/sign-in')
      }
    }

    if (response && response.data && response.data.error) {
      return {
        error: response.data
      }
    }
  })

  $axios.onRequestError((error) => {
    console.log('error ', error)

    if (error.request) {
      return {
        error: error.request
      }
    }
  })

  $axios.onError((error) => { // handler config errors
    console.log('onError ', error)
    console.log('error.message ', error.message)

    return {
      error: error.message
    }
  })

  $axios.onRequest((config) => {
    console.log('config ', config)
    return {
      ...config,
      url: encodeURI(config.url)
    }
  })

  $axios.onResponse(({ data }) => data) // Maybe error when user is not authorized

  const requireComponent = require.context(
    '~/api/services',
    true,
    /[a-z].js/
  )

  let repositories = { }

  requireComponent.keys().forEach((fn) => {
    const createSerApi = requireComponent(fn).default
    const serName = fn.split('/').pop().replace(/\.\w+$/, '')

    repositories = Object.assign(repositories, {
      [serName]: createSerApi($axios)(serName)
    })
  })

  inject('api', repositories)
}
