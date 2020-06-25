export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    name: {
      type: String,
      default: Math.random()
    }
  },
  data () {
    return {
      check: [],
      text: 'text'
    }
  },
  methods: {
    finish () {
      this.$emit('input', this.check)
      this.$root.$emit('dropdown:hide')
    }
  }
}
