export default {
  data () {
    return {
      topPath: [
        {
          title: 'Главная',
          url: '/'
        },
        {
          title: 'Жильё',
          url: '/housing/supply'
        }
      ]
    }
  },
  computed: {
    title () {
      return this.$store.getters['habitation/title']
    }
  },
  created () {
    if (this.title) {
      this.topPath.push({ title: this.title, url: '' })
    }
  }
}
