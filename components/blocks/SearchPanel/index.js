import { getSearchDaData } from '~/api/out.js'

export default {
  props: {
    value: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      search: '',
      list: [],
      result: {}
    }
  },
  created () {
    if (this.value) {
      this.search = this.value
    }
  },
  methods: {
    async handlerSearch () {
      if (!this.search.length) {
        return
      }

      const result = await getSearchDaData(this.search)

      if (result && !result.error) { this.list = result.suggestions }
    },
    select (val) {
      const { data } = this.list.find(item => item.value === val)
      this.search = val
      this.list = []

      this.$emit('input', { city: data.city, country: data.country, region: data.region_with_type })
      this.$root.$emit('dropdown:hide')
    }
  }
}
