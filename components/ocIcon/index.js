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
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    iconClass () {
      if (this.type === 'fontawesome') {
        if (this.outline) {
          let faClass

          if (typeof this.outline === 'boolean') {
            faClass = this.outline ? 'far' : 'fas'
          } else {
            faClass = this.outline
          }

          return `${faClass} fa-${this.icon}`
        }
      }
    }
  }
}
