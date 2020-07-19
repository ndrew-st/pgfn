import Counter from '~/components/blocks/Counter'

export default {
  components: { Counter },
  props: {
    list: {
      type: Array,
      default: () => ([
        { title: 'Диван-кровать', value: 'sofaBed' },
        { title: 'Кресло-кровать', value: 'chairBed' },
        { title: 'Двухъярусная кровать', value: 'bunkBed' },
        { title: 'Детская кровать', value: 'childrensBed' },
        { title: 'Раскладушка', value: 'cot' },
        { title: 'Надувной матрас', value: 'airMattress' },
        { title: 'Матрас на полу', value: 'MattressOnTheFloor' }
      ])
    }
  },
  data () {
    return {
      content: [],
      result: [],
      beds: [
        { title: 'Односпальная кровать', value: 'singleBed' },
        { title: 'Полутороспальная кровать', value: 'oneHalfBed' },
        { title: 'Двуспальная кровать', value: 'twoBed' }
      ],
      resultLength: 0
    }
  },
  mounted () {
    if (this.list) {
      this.content = this.list
    }
  },
  methods: {
    change (val, flag, value) {
      // debugger
      if (flag) {
        this.result.push(val)
        this.$store.dispatch('placement/setBed', { typeOfPlace: value, amount: val })
      } else {
        this.result.shift(val)
        this.$store.dispatch('placement/removeBed', { typeOfPlace: value, amount: val })
      }
      this.resultLength = this.result.length
    },
    select (val) {
      this.beds.push(val)

      const idx = this.content.findIndex(item => item.value === val.value)
      this.content.splice(idx, 1)
    }
  }
}
