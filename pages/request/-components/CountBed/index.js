import Counter from '~/components/blocks/Counter'

export default {
  components: { Counter },
  props: {
    list: {
      type: Array,
      default: () => ([
        { title: 'jng kjdfnsg 1', value: 'jkfnkjsd 1' },
        { title: 'jng kjdfnsg 2', value: 'jkfnkjsd 2' },
        { title: 'jng kjdfnsg 3', value: 'jkfnkjsd 3' }
      ])
    }
  },
  data () {
    return {
      content: [],
      result: [],
      beds: [
        { title: 'Односпальная кровать', value: 'single-bed' },
        { title: 'Полутороспальная кровать', value: 'one-half-bed' },
        { title: 'Двуспальная кровать', value: 'two-bed' }
      ]
    }
  },
  mounted () {
    if (this.list) {
      this.content = this.list
    }
  },
  methods: {
    change (val) {
      this.result.push(val)
    },
    select (val) {
      this.beds.push(val)

      const idx = this.content.findIndex(item => item.value === val.value)
      this.content.splice(idx, 1)
    }
  }
}
