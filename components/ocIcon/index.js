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
      // return require('/static/icons/this.icon.png')
      // return require('/static/icons/' + this.icon + '.png')
      return '../../_nuxt/static/icons/document-text.png'
    }
  }
}
