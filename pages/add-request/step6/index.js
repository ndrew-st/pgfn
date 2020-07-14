import ApButton from '../../add-placement/ap-button/index.vue'
import ApInput from '../../add-placement/ap-input'
import CheckboxesList from '../../add-placement/blocks/two-columns-checkboxes'
import ApFolding from '../../add-placement/blocks/ap-folding'
import TimeOptions from './time-options'

export default {
  components: {
    ApButton,
    ApInput,
    CheckboxesList,
    ApFolding,
    TimeOptions
  },
  data () {
    return {
      datesOfStay: '',
      listLimits: [
        { label: 'Можно с детьми', value: 'kids' },
        { label: 'Можно с животными', value: 'pets' },
        { label: 'Можно курить', value: 'weed' }
      ],
      listTypeOfHousing1: [
        { label: 'Частное лицо', value: '' },
        { label: 'Компания/ИП', value: '' },
        { label: 'Отель', value: '' },
        { label: 'Гостиница', value: '' },
        { label: 'Пансионат', value: '' },
        { label: 'Санаторий', value: '' },
        { label: 'Хостел', value: '' },
        { label: 'Кемпинг', value: '' }
      ],
      listTypeOfHousing2: [
        { label: 'Агент', value: '' },
        { label: 'Агентство', value: '' },
        { label: 'Частное лицо', value: '' },
        { label: 'Компания/ИП', value: '' }
      ],
      listBookingConditions: [
        { label: 'Без предоплаты', value: '' },
        { label: 'Оплата первого месяца/суток', value: '' },
        { label: 'Оплата 50% суммы', value: '' }
      ],
      listCancelBookingConditions: [
        { label: 'Бесплатная отмена за любое время', value: '' },
        { label: 'Бесплатная отмена за 2 дня до даты въезда', value: '' }
      ]
    }
  },
  methods: {
    addPlacement () {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'params', key: 'datesOfStay', value: this.datesOfStay })
      this.$store.dispatch('placement/addRequest')
    },
    mask () {
      const matrix = '__.__.____ - __.__.____'
      let i = 0
      const def = matrix.replace(/\D/g, '')
      let val = this.datesOfStay.replace(/\D/g, '')
      if (def.length >= val.length) { val = def }
      this.datesOfStay = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
      })
    },
    changeTimeForCalls (val) {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'timeForCalls', value: val })
    },
    changePickUpTime (val) {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'pickUpTime', value: val })
    },
    changeDepartureTime (val) {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'reservation', key: 'departureTime', value: val })
    }
  }
}
