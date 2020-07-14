import WeekTimeRow from './week-time-row'

export default {
  components: {
    WeekTimeRow
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    ready () {
      this.$emit('block3Ready')
      this.$root.$emit('dropdown:hide')
    }
  }
}
