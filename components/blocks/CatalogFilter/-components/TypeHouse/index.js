import Footer from '../Footer'

export default {
  name: 'TypeHousingFilter',
  components: { Footer },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      list: [
        { label: 'Апартаменты', value: 'apartments' },
        { label: 'Коттеджи и дома', value: 'cottages-houses' },
        { label: 'Отели', value: 'otels' },
        { label: 'Гостиницы', value: 'hotels' },
        { label: 'Хостелы', value: 'hostels' },
        { label: 'Квартиры', value: 'flats' },
        { label: 'Комнаты', value: 'rooms' }
      ],
      select: this.value || [],
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
    },
    updateValue (value) {
      console.log('updateValue ', value)
    }
  }
}
