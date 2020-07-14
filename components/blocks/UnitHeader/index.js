export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  data () {
    return {
      topPath: [ 'Главная', 'Жильё' ]
    }
  },
  created () {
    if (this.title) {
      this.topPath.push(this.title)
    }
  }
}
