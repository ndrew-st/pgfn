import Card from '../Card'

export default {
  components: { Card },
  props: {
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => ([
        { }
      ])
    }
  }
}
