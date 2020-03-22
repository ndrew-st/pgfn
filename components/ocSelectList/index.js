import OcIcon from '@/components/ocIcon'

export default {
  props: ['type', 'items'],
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
        topLine = 'Выберите пункты'
      }
      return topLine
    }
  },
  methods: {
    changeSelect (item) {
      this.$emit('changeSelect', item)
      if (this.type !== 'multiselect') {
        this.isActive = false
        console.log('etit tvou')
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
  created () {
    document.addEventListener('click', this.clickOutside)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.clickOutside)
  }
}
