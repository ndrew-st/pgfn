export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShow (val) {
      this.$emit('change', val)
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    const root = this.$root

    root.$on('dropdown:hide', () => this._hideDropDown())

    // hide dropdown, if click at Another area
    document.addEventListener('mousedown', function (e) {
      const target = e.target
      const dropdown = target.closest('.dropdown__btn') || target.closest('.dropdown__content')
      if (!dropdown) {
        root.$emit('dropdown:hide')
      }
    })
  },
  methods: {
    _hideDropDown () {
      this.isShow = false
    },
    toggle (e) {
      if (e.target.closest('.dropdown__btn')) {
        if (!this.isShow) {
          this.$root.$emit('dropdown:hide')
          this.isShow = true

          return null
        } else {
          this.$root.$emit('dropdown:hide')
          this.isShow = false

          return null
        }
      }

      if (!e.target.closest('.dropdown__content')) {
        // hide dropdown if other dropdowns show
        this.$root.$emit('dropdown:hide')
      }

      this.isShow = !this.isShow
    }
  }
}
