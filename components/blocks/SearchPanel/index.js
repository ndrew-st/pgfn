export default {
  data () {
    return {
      search: '',
      list: []
    }
  },
  methods: {
    handlerSearch () {
      console.log('handlerSearch ', this.search)
    },
    select (val) {
      // this.$root.$emit('dropdown:hide')
    }
  }
}
