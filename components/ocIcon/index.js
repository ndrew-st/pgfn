export default {
  props: {
    type: {
      type: String,
      default: 'fontawesome'
    },
    icon: {
      type: String,
      required: true
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass () {
      if (this.type === 'fontawesome') {
        const faClass = this.outline ? 'far' : 'fas'
        return `${faClass} fa-${this.icon}`
      }
    },
    iconImage () {
      return `/icons/${this.icon}.png`
    }
  }
}
