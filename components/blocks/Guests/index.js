import Counter from '~/components/blocks/Counter'

export default {
  props: {
    guests: { // {  parent: 0, children: 0, babies: 0 }
      type: Object,
      default: null
    }
  },
  components: { Counter },
  data () {
    return {
      date: new Date().toString(),
      list: [
        { title: 'Взрослые', name: 'parent' },
        { title: 'Дети', name: 'children', subTitle: 'От 2 до 12 лет' },
        { title: 'Младенцы', name: 'babies', subTitle: 'До 2 лет' }
      ],
      peoples: {
        parent: 0,
        children: 0,
        babies: 0
      }
    }
  },
  created () {
    if (this.guests) {
      // debugger
      this.peoples = this.guests
    }
  },
  methods: {
    updateValue (field, current) { // get name and value
      if (field === 'parent') {
        this.peoples.parent = current
        this.date = new Date().toString()
        // this.$emit('input', { ...this.peoples })
        this.$emit('input', Object.assign({}, this.peoples))

        return null
      }

      if (this.peoples.parent === 0) {
        this.peoples[field] = current
        this.peoples.parent = 1
        this.date = new Date().toString()
      } else {
        this.peoples[field] = current
      }

      // this.$emit('input', { ...this.peoples })
      this.$emit('input', Object.assign({}, this.peoples))
    }
  }
}
