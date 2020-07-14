export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  data () {
    return {
      list: [
        { title: 'Редактировать профиль', action: { to: '/profile/edit' } },
        { title: 'История бронирования', action: { to: '/history' } },
        { title: 'Редактировать объявление', action: { to: '/habitation/edit' } },
        { title: 'Выйти из аккаунта', action: {} }
      ]
    }
  },
  methods: {
    handlerClick ({ to }) {
      if (to) {
        this.$router.push(to)
      } else {
        this.$store.dispatch(`auth/logout`)
      }
    }
  }
}
