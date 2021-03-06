export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 9
    },
    pageRange: {
      type: Number,
      default: 2
    }
  },
  computed: {
    pages () {
      const pages = []

      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }

      return pages
    },
    rangeStart () {
      const start = this.current - this.pageRange

      return (start > 0) ? start : 1
    },
    rangeEnd () {
      const end = this.current + this.pageRange

      return (end < this.totalPages) ? end : this.totalPages
    },
    totalPages () {
      return Math.ceil(this.total / this.perPage)
    },
    nextPage () {
      return this.current + 1
    },
    prevPage () {
      return this.current - 1
    }
  },
  methods: {
    hasFirst () {
      return this.rangeStart !== 1
    },
    hasLast () {
      return this.rangeEnd < this.totalPages
    },
    hasPrev () {
      return this.current > 1
    },
    hasNext () {
      return this.current < this.totalPages
    },
    changePage (page) {
      console.log('changePage ', page)
      this.$emit('page-changed', page)
    }
  }
}
