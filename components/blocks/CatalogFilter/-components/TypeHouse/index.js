import Footer from '../Footer/index'

export default {
  name: 'TypeHousingFilter',
  components: { Footer },
  props: {
    value: {
      type: Array,
      default: null
    }
  },
  created () {
    if (this.value && this.value.length) {
      this.select = this.value
    }
  },
  data () {
    return {
      list: [
        { label: 'Квартира целиком', value: 0 },
        { label: 'Номер в отеле', value: 1 },
        { label: 'Дом целиком с отдельным двором', value: 2 },
        { label: 'Дом целиком с общим двором', value: 3 },
        { label: 'Дом целиком при отеле', value: 4 },
        { label: 'Часть дома с отдельным двором', value: 5 },
        { label: 'Часть дома с общим двором', value: 6 },
        { label: 'Часть дома при отеле', value: 7 },
        { label: 'Таунхаус', value: 8 },
        { label: 'Таунхаус при отеле', value: 9 },
        { label: 'В квартире', value: 10 },
        { label: 'В доме', value: 11 },
        { label: 'В хостеле', value: 12 },
        { label: 'В квартире', value: 13 },
        { label: 'В доме', value: 14 },
        { label: 'В хостеле', value: 15 },
        { label: 'Место на кемпинге', value: 16 },
        { label: 'Земельный участок', value: 17 }
      ],
      select: [],
      date: new Date().toString()
    }
  },
  methods: {
    clear () {
      this.select = []
      this.$emit('input', null)
      this.date = new Date().toString()
    },
    save () {
      if (this.select.length) {
        this.$emit('input', this.select)
        this.$root.$emit('dropdown:hide')
      }
    }
  }
}
