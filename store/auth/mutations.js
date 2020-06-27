import { setTokens } from '~/constants/mutations/auth'

export default {
  [setTokens] (state, { access, refresh }) {
    console.log('setTokens mut ', setTokens)

    state.token = access
    state.refreshToken = refresh
  }
}
