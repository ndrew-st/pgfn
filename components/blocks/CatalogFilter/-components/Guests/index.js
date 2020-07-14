import Vue from 'vue'

import Footer from '../Footer/index'

import Counter from '~/components/blocks/Counter'

export default {
  name: 'Guest',
  components: { Footer, Counter },
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      list: [
        { title: 'Взрослые', name: 'parent' },
        { title: 'Дети', name: 'children', subTitle: 'От 2 до 12 лет' },
        { title: 'Младенцы', name: 'babies', subTitle: 'До 2 лет' }
      ],
      result: this.value || {},
      date: new Date().toString()
    }
  },
  mounted () {
    this.list.map(item => Vue.set(this.result, item.name, 0))
  },
  methods: {
    save () {
      this.$emit('input', this.result)
      this.$root.$emit('dropdown:hide')
    },
    clear () {
      this.list.map(item => Vue.set(this.result, item.name, 0))
      this.date = new Date().toString()

      this.$emit('input', null)
    },
    updateValue (field, val) {
      this.result[field] = val
    }
  }
}
