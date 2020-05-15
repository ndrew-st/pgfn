import OcVerification from '@/components/ocVerification/index.vue'
// import { makePr } from '@/api/user.js'
import OcPhoneNumber from '@/components/ocPhoneNumber/index.vue'
import OcPass from '@/components/ocPass/index.vue'

export default {
  layout: 'clean',
  components: {
    OcVerification,
    OcPhoneNumber,
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
        this.$axios.defaults.headers['authorization'] = result.tokens.accessToken
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
