import Counter from '~/components/blocks/Counter'

export default {
  components: { Counter },
  props: {
    list: {
      type: Array,
      default: () => ([
        { title: 'Надувной матрас', value: 'air-mattress' },
        { title: 'Водяной матрас', value: 'water-mattress' },
        { title: 'Гамак', value: 'hammock' }
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
    change (val, flag) {
      // debugger
      if (flag) {
        this.result.push(val)
      } else {
        this.result.shift(val)
      }
    },
    select (val) {
      this.beds.push(val)

      const idx = this.content.findIndex(item => item.value === val.value)
      this.content.splice(idx, 1)
    }
  }
}
