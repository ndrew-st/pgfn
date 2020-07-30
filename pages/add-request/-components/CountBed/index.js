import Counter from '~/components/blocks/Counter'

export default {
  components: { Counter },
  props: {
    store: {
      type: String,
      default: 'placement',
      required: false
    },
    list: {
      type: Array,
      default: () => ([
        { title: 'Диван-кровать', value: 'sofaBed', sleepPlaces: 1 },
        { title: 'Кресло-кровать', value: 'chairBed', sleepPlaces: 1 },
        { title: 'Двухъярусная кровать', value: 'bunkBed', sleepPlaces: 2 },
        { title: 'Детская кровать', value: 'childrensBed', sleepPlaces: 1 },
        { title: 'Раскладушка', value: 'cot', sleepPlaces: 1 },
        { title: 'Надувной матрас', value: 'airMattress', sleepPlaces: 1 },
        { title: 'Матрас на полу', value: 'MattressOnTheFloor', sleepPlaces: 1 }
      ])
    }
  },
  data () {
    return {
      content: [],
      beds: [
        { title: 'Односпальная кровать', value: 'singleBed', sleepPlaces: 1 },
        { title: 'Полутороспальная кровать', value: 'oneHalfBed', sleepPlaces: 1 },
        { title: 'Двуспальная кровать', value: 'twoBed', sleepPlaces: 2 }
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
      let resFind = this.list.find(item => item.value === value)
      if (resFind === undefined) {
        resFind = this.beds.find(item => item.value === value)
      }
      console.log('resFind:', resFind)
      if (flag) {
        this.resultLength += resFind.sleepPlaces
        this.$store.dispatch(`${this.store}/setBed`, { typeOfPlace: value, amount: val })
      } else {
        this.resultLength -= resFind.sleepPlaces
        this.$store.dispatch(`${this.store}/removeBed`, { typeOfPlace: value, amount: val })
      }
      // this.resultLength = this.result.length
      // console.log('this.resultLength:', this.resultLength)
      this.$emit('changeLength', this.resultLength)
    },
    select (val) {
      this.beds.push(val)

      const idx = this.content.findIndex(item => item.value === val.value)
      this.content.splice(idx, 1)
    }
  }
}
