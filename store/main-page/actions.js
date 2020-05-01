import axios from 'axios'
import dal from '@/dal'

axios.defaults.baseURL = 'https://dev.personal.guide/'

export default {
  getData ({ commit }, query) {
    return new Promise((resolve, reject) => {
      dal(axios).getDirection(query)
        .then((res) => {
          commit('addData', res.data)

          resolve()
        })
        .catch(err => reject(err))
    })
  },
  updateTabs ({ commit }, data) {
    return new Promise((resolve, reject) => {
      dal(axios).updateTabs(data.url)
        .then((res) => {
          commit('updateTabs', { field: data.field, items: res.data })

          resolve()
        }).catch(err => reject(err))
    })
  }
}
