export default {
  layout: 'main',
  middleware: 'auth',
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
  async mounted () {
    const result = await this.$api.users.getUser()
    this.userName = result.name
    this.userPhone = result.phone
  }
}
