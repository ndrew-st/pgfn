<template>
  <RangeSliderWithTwoToggle
    :key="date"
    :type="type"
    :from="from"
    :show-description="showDescription"
    :to="to"
    @update="update"
  />
</template>

<script>
import RangeSliderWithTwoToggle from './-components/two-toggle'

export default {
  components: { RangeSliderWithTwoToggle },
  props: {
    type: { // type who view in tooltip of toggle
      type: String,
      default: ''
    },
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 100
    },
    showDescription: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      date: Date.now().toString()
    }
  },
  methods: {
    update () {
      this.date = Date.now().toString()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
