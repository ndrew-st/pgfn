import { refreshToken, initAuth, login, register, logout } from '~/constants/actions/auth'
import { absentTokensFromServer, notRefreshToken } from '~/constants/messages/errors'
import { setTokens } from '~/constants/mutations/auth'

import authHeader from '~/utils/authHeader'

export default {
  [initAuth] ({ commit }) { // to need handler errors
    try {
      const access = this.$storage.getItem(process.env.token_key.access)
      const refresh = this.$storage.getItem(process.env.token_key.refresh)
      const user = this.$storage.getItem('user')

      this.$axios.defaults.headers[process.env.header_auth] = authHeader()

      commit(setTokens, { access, refresh })
      commit('setUser', user)
    } catch (e) {
      console.log('InitAuth ', e)
    }
  },
  [refreshToken] ({ commit }) {
    const refToken = this.$storage.getItem(process.env.token_key.refresh)
    let err

    if (!refToken) {
      err = {
        error: notRefreshToken
      }

      return Promise.reject(err)
    }

    const { accessToken, refreshToken } = this.$api.users.refreshToken(refToken)

    if (!accessToken || !refreshToken) {
      err = {
        error: absentTokensFromServer
      }

      return Promise.reject(err)
    }

    try {
      this.$storage.setItem(process.env.token_key.access, accessToken)
      this.$storage.setItem(process.env.token_key.refresh, refreshToken)

      this.$axios.defaults.headers[process.env.header_auth] = authHeader()

      commit(setTokens, { access: accessToken, refresh: refreshToken })

      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async [login] ({ commit }, { phone, password }) {
    const res = await this.$api.users.login(phone, password)

    if (res.error) {
      return {
        error: res.error
      }
    }

    const user = {
      avatar: res.avatar,
      name: res.name,
      phone: res.phone,
      roles: res.roles,
      status: res.status
    }

    commit('setUser', user)
    this.$storage.setItem('user', user)

    console.log('res tokens ', res)

    try {
      this.$storage.setItem(process.env.token_key.access, res.accessToken)
      this.$storage.setItem(process.env.token_key.refresh, res.refreshToken)

      this.$axios.defaults.headers[process.env.header_auth] = authHeader()

      commit(setTokens, { access: res.accessToken, refresh: res.refreshToken })

      return Promise.resolve()
    } catch (e) {
      throw new Error(e)
    }
  },
  [register] ({ commit }) {

  },
  logout ({ commit }) {
    this.$storage.rmItem(process.env.token_key.access)
    this.$storage.rmItem(process.env.token_key.refresh)
    this.$storage.rmItem('user')

    commit(`clear`)
  }
}
