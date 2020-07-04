export default {
  props: {
    content: {
      type: Array,
      default: () => ([
        {
          title: '',
          value: ''
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
  },
  methods: {
    select (title, value) {
      this.$root.$emit('dropdown:hide')
      this.$emit('input', { title, value })
    }
  }
}
