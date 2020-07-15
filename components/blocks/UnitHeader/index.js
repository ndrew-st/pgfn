export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
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
  created () {
    if (this.title) {
      this.topPath.push({ title: this.title, url: '' })
    }
  }
}
