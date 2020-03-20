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
    }
  },
  components: {
    OcIcon
  },
  directives: {
    listIsOpen: {
      inserted (el) {
        console.log('asdfasdfasdf')
      }
    }
  }
}
