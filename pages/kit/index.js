import OcButton from '@/components/global/Forms/ocButton/index.vue'
import OcInput from '@/components/global/Forms/ocInput/index.vue'

export default {
  components: {
    OcButton,
    OcInput
  },
  data () {
    return {
      circleRadioCurrent: 'Значение1'
    }
  },
  methods: {
    async createUser () {
      const result = await this.$api.users.register('79628752003', 'Vasya', 'Eprst_123456')
      console.log(result)
    },
    async loginVasya () {
      const result = await this.$api.users.login('79628752003', 'Eprst_123456')
      console.log(result)
      if (!result.error) {
        localStorage.setItem('token', result.accessToken)
        this.$axios.defaults.headers[process.env.header_auth] = result.accessToken
        this.$router.push('/profile')
      }
    }
  }
}
