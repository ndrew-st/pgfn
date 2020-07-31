export default {
  props: {
    parName: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    store: {
      type: String,
      default: 'placement',
      required: false
    }
  },
  data () {
    return {
      locChecked: this.checked
    }
  },
  methods: {
    change () {
      if (this.parName !== '') {
        if (this.locChecked) {
          this.$store.dispatch(`${this.store}/setItemSecondLevel`, { level: 'params', key: this.parName, value: 1 })
        } else {
          this.$store.dispatch(`${this.store}/removeItemSecondLevel`, { level: 'params', key: this.parName })
        }
      }
      this.$emit('change', this.locChecked)
    }
  }
}
