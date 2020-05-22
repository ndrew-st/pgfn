import OcIcon from '@/components/ocIconOld'

export default {
  props: ['type', 'items', 'emptySelect'],
  data: () => ({
    isActive: false
  }),
  computed: {
    topLine () {
      let topLine = ''
      this.items.forEach((element) => {
        topLine =
          topLine +
          (element.flag ? (topLine === '' ? '' : ' + ') + element.name : '')
      })
      if (topLine === '') {
        topLine = this.emptySelect
      }
      return topLine
    }
  },
  methods: {
    changeSelect (item) {
      this.$emit('changeSelect', item)
      if (this.type !== 'multiselect') {
        this.isActive = false
      }
    },
    clickOutside (e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false
      }
    }
  },
  components: {
    OcIcon
  },
  mounted () {
    document.addEventListener('click', this.clickOutside)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.clickOutside)
  }
}
