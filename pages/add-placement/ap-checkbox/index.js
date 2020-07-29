export default {
  props: {
    parName: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      locChecked: this.checked
    }
  },
  methods: {
    change () {
      // debugger
      if (this.parName !== '') {
        if (this.locChecked) {
          this.$store.dispatch('placement/setItemSecondLevel', { level: 'params', key: this.parName, value: 1 })
        } else {
          this.$store.dispatch('placement/removeItemSecondLevel', { level: 'params', key: this.parName })
        }
      }
      this.$emit('change', this.locChecked)
    }
  }
}
