export default {
  data () {
    return {
      search: '',
      list: []
    }
  },
  methods: {
    async handlerSearch () {
      const res = await this.$api.apartments.searchingDirectionOrCity(this.search)

      if (!res.error) { this.list = res }
    },
    select (val) {
      this.search = this.val
      this.list = []

      this.$emit('input', val)
      this.$root.$emit('dropdown:hide')
    }
  }
}
