import { setTokens } from '~/constants/mutations/auth'

export default {
  [setTokens] (state, { access, refresh }) {
    state.token = access
    state.refreshToken = refresh
  }
}