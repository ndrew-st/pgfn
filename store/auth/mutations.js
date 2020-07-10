import { setTokens } from '~/constants/mutations/auth'

export default {
  [setTokens] (state, { access, refresh }) {
    state.token = access
    state.refreshToken = refresh
  },
  setUser (state, data) {
    state.user = data
  },
  clear (state) {
    state.token = null
    state.refreshToken = null
    state.error = null
    state.user = null
  }
}
