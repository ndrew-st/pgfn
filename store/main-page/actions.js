import axios from 'axios'
import dal from '@/dal'

axios.defaults.baseURL = 'https://dev.personal.guide/'

export default {
  async getData ({ commit }, query) {
    const data = await this.$api.apartments.getDirection(query)

    commit('addData', data)
  },
  updateTabs ({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$api.apartments.updateTabs(data.url)
        .then((res) => {
          commit('updateTabs', { field: data.field, items: res.data })

          resolve()
        }).catch(err => reject(err))
    })
  }
}
