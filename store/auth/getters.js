import { isAuth } from '~/constants/getters/auth'

export default {
  [isAuth]: state => !!state.token
}
