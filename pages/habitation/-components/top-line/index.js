export default {
  props: {
    title: {
      type: String,
      default: null
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
