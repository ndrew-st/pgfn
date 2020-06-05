import OcVerification from '@/components/global/ocVerification/index.vue'
import OcPass from '@/components/ocPass/index.vue'

export default {
  layout: 'clean',
  components: {
    OcVerification,
    OcPass
  },
  data: () => ({
    stage: 'phone',
    error: '',
    phone: '',
    pass: '',
    attemptCounter: 0,
    picked: 0,
    timeCounter: 119
  }),
  methods: {
    async login (pass) {
      const result = await this.$api.users.login(this.phone, pass)
      if (!result.error) {
        localStorage.setItem('token', result.tokens.accessToken)
        this.$axios.defaults.headers[process.env.header_auth] = result.tokens.accessToken
        this.$router.push('/profile')
      }
    },
    next (par) {
      console.log('next sign-in ')
      switch (this.stage) {
        case 'phone':
          this.stage = 'pass'
          break
        case 'pass':
          this.login(par)
          break
      }
    }
  }
}
