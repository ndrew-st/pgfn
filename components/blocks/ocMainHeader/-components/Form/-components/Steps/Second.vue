<template>
  <div class="step-container">
    <h3 class="step-container__title">Укажите даты</h3>

    <div class="step-container__date-container date-container">
      <ul class="date-container__list">
        <li class="date-container__item">
          <label
            :class="{ checked: mode === 'start' }"
            class="date-container__label">
              <input
                @focus="handlerFocus('start')"
                @keydown="handlerKeyDown($event, 'start')"
                v-model="start"
                type="text"
                placeholder="дд.мм.гггг"
                class="date-container__input">
          </label>
        </li>
        <li class="date-container__item">
          <label
            :class="{ checked: mode === 'end' }"
            class="date-container__label">
              <input
                v-model="end"
                @focus="handlerFocus('end')"
                @keydown="handlerKeyDown($event, 'end')"
                type="text"
                placeholder="дд.мм.гггг"
                class="date-container__input">
          </label>
        </li>
      </ul>

      <Calendar
        @changeSelDate="changeSelDate"
        :mode="mode"
        :key="curDate"
        :cur-sel-date="curSelStart"
        class="step-container__date-content"/>
    </div>
  </div>
</template>

<script>
import Calendar from '~/components/ocMonth'

export default {
  components: { Calendar },
  data () {
    return {
      formatDate: 'DD.MM.YYYY',
      mode: 'start',
      regNum: /^[0-9]/,
      curSelStart: new Date(),
      start: '',
      curDate: new Date().toString(),
      end: ''
    }
  },
  watch: {
    curSelStart (val) {
      console.log(val)
    },
    start (val) {
      this.$emit('input', { start: val, end: this.end })
    },
    end (val) {
      this.$emit('input', { end: val, start: this.start })
    }
  },
  methods: {
    changeSelDate (mode, newSelDate) {
      const selDate = newSelDate || new Date(newSelDate)
      const resDate = [
        this._addLeadZero(selDate.getDate()),
        this._addLeadZero(selDate.getMonth() + 1),
        selDate.getFullYear()
      ].join('.')

      if (mode === 'start') {
        this.start = resDate
      } else {
        this.end = resDate
      }
    },
    _addLeadZero (val) {
      if (+val < 10) { return '0' + val }
      return val
    },
    handlerFocus (md) {
      this.mode = md

      this.curDate = new Date().toString() // Reload calendar
    },
    handlerKeyDown (e, field) {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        return
      }

      if (!this.regNum.test(e.key) || this[field].length >= 10) {
        e.preventDefault()
      }

      if (this[field].length === 2 || this[field].length === 5) {
        this[field] = this[field] + '.'
      }
    }
  }
}
</script>

<style lang="stylus">
.step-container
  &__date-container
    max-width 320px
    margin 0 auto
    margin-top 10px

.date-container
  &__list
    display flex
    margin 0
    margin-bottom 15px
    padding 0
    margin-left -18px
    margin-right -18px

    list-style none

    box-sizing border-box

  &__label
    display block

    border-bottom 1px solid #D3D3D3
    box-sizing border-box
    cursor pointer

    &.checked
      border-color #272528

  &__input
    width 100%
    padding 11px 0

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.3px;
    color: #272528;
    text-align center

    border 0
    box-sizing border-box

    &:hover
    &:focus
      outline 0

.step-container
  &__date-content
    & .headline
      font-weight normal

    & .flex
      & .arrow
        position relative

        width 100%
        max-width 36px
        height 28px

        &_left
        &_right
          position absolute
          top 0
          bottom 0
          left 0
          right 0

          margin auto

      & .month-name
        width 100%

        font-weight: bold;
        font-size: 15px;
        line-height: 21px;

    & .table
      margin-left auto
      margin-right auto

      & .week-days
      & .cell-box
        width 40px
        height 40px

        box-sizing border-box
</style>
