import throttle from '~/utils/throttle'

export default {
  data () {
    return {
      search: '',
      list: [
        { id: 1, title: 'Search 1' },
        { id: 2, title: 'Search 2' },
        { id: 3, title: 'Search 3' },
        { id: 4, title: 'Search 4' }
      ]
    }
  },
  computed: {
    throttledSearch () {
      return throttle(this.handlerSearch, process.env.throttle_time)
    }
  },
  methods: {
    handlerSearch () {
    },
    handlerKeyDown (e) {
      if (e.repeat && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault()
      }
    },
    updateValue (val) {
    },
    clear () {
      this.search = ''
    },
    select (val) {
      // this.$root.$emit('dropdown:hide')
    }
  }
}
