import authHeader from '~/utils/authHeader'

export default ({ $axios }, inject) => {
  if (process.browser) {
    $axios.defaults.headers[process.env.header_auth] = authHeader()
  }

  console.log('$axios ', $axios.interceptors)

  $axios.onResponseError((e) => {
    if (e.response.status === 401) {
      console.log('Here ', e.response.status)
    }

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
