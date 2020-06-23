import { mapState } from 'vuex'

import List from './-components/List'

export default {
  layout: 'main',
  components: { List },
  // async asyncData ({ store }) {
  // await store.dispatch(`profile/getData`)
  // },
  data () {
    return {
      userName: 'Иван Иванов',
      userPhone: '+7 906 780-65-44',
      activeName: false,
      activePass: false
    }
  },
  methods: {
    change (mode) {
      if (mode === 'name') {
        this.activeName = !this.activeName
      } else {
        this.activePass = !this.activePass
      }
    }
  },
  computed: {
    ...mapState(`profile`, {
      history: state => state.result.history,
      ads: state => state.result.ads,
      request: state => state.result.request
    })
  },
  async mounted () {
    // const result = await this.$api.users.getUser()
    // this.userName = result.name
    // this.userPhone = result.phone
  }
}
