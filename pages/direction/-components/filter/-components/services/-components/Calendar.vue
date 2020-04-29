<template>
  <div class="calendar">
    <div
      @click="touched = !touched"
      class="calendar__input">{{ selectedDate.length ? selectedDate : mask }}</div>
    <div
      v-if="touched"
      class="calendar__content">
      <Month
        :cur-sel-date="date"
        @changeSelDate="handlerDate"
        mode="no"
      />
    </div>
  </div>
</template>

<script>
import Month from '~/components/ocMonth'

export default {
  components: { Month },
  data () {
    return {
      selectedDate: '',
      mask: 'дд.мм.гггг',
      date: new Date(),
      touched: false
    }
  },
  methods: {
    handlerDate (mode, date) {
      const selDate = date
      const resDate = [
        this._addLeadZero(selDate.getDate()),
        this._addLeadZero(selDate.getMonth() + 1),
        selDate.getFullYear()
      ].join('.')

      this.selectedDate = resDate
      this.touched = false

      this.$emit('input', resDate)
    },
    _addLeadZero (val) {
      if (+val < 10) { return '0' + val }
      return val
    }
  }
}
</script>

<style lang="stylus" scoped>
.calendar
  position relative

  &__input
    display flex
    align-items center
    width 100%
    height 56px
    padding 0 16px

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.1px;
    color: #989BA8;

    background: #F3F3F3;
    border 0
    border-bottom 2px solid #D5D1DB
    border-radius: 4px 4px 0px 0px;
    box-sizing border-box
    cursor pointer

    transition all 0.3s ease-in-out 0s

    &:hover
    &:focus
      outline 0

    &:hover
    &:focus
      border-color #7140B8
      transition border-color 0.3s ease-in-out 0s

  &__content
    position absolute
    top 57px
    left 0
    right 0
    padding 16px
    padding-top 0

    background-color #fff
    box-sizing border-box
</style>
