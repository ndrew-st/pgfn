export default {
  props: {
    content: {
      type: Array,
      default: () => ([
        {

        }
      ])
    },
    type: { // link or button
      type: String,
      default: 'button'
    }
  },
  data () {
    return {}
  }
}
