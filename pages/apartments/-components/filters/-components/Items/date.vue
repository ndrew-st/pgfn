<template>
  <div class="date-filter">
    <Calendar
      class="date-filter__calendar"
      :is-input="false"
      :filter="true"
      @input="setDate"
      @clear="clearValue"
      @save="saveValue"
    />
  </div>
</template>

<script>
import Calendar from '~/components/blocks/Calendar'

export default {
  name: `Date`,
  components: { Calendar },
  data () {
    return {
      date: ``
    }
  },
  methods: {
    setDate (val) {
      this.date = val
    },
    clearValue () {
      this.date = ``
      this.$emit(`input`, null)
    },
    saveValue () {
      if (this.date.length) {
        this.$emit(`input`, this.date)
        this.$root.$emit(`dropdown:hide`)
      }
    }
  }
}
</script>

<style lang="stylus">
.date-filter
  &__calendar .calendar
    position absolute
    left 0
    top 0

    margin-top 0

    z-index 99
    visibility visible
</style>
