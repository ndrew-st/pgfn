import createApartmentsApi from '~/api/apartments'
import createUsersApi from '~/api/user'

export default ({ $axios }, inject) => {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 500) {
    }
  })

  const apartWithAxios = createApartmentsApi($axios)
  const usersWithAxios = createUsersApi($axios)

  const rep = {
    apartments: apartWithAxios('apartments'),
    users: usersWithAxios('users')
  }

  inject('api', rep)
}
