export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    const root = this.$root

    root.$on('dropdown:hide', () => this._hideDropDown())

    // hide dropdown, if click at another area
    document.onmousedown = (e) => {
      const target = e.target
      const dropdown = target.closest('.dropdownbtn') || target.closest('.dropdowncontent')
      if (!dropdown) {
        root.$emit('dropdown:hide')
      }
    }
  },
  methods: {
    _hideDropDown () {
      this.isShow = false
    },
    toggle (e) {
      if (e.target.closest('.dropdownbtn')) {
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

      if (!e.target.closest('.dropdowncontent')) {
        // hide dropdown if other dropdowns show
        this.$root.$emit('dropdown:hide')
      }

      this.isShow = !this.isShow
    }
  }
}
