import Guests from '~/components/blocks/Guests'
import Calendar from '~/components/blocks/Calendar'
import ApButton from '../../add-placement/ap-button'
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
    TimeOptions,
    Guests,
    Calendar
  },
  data () {
    return {
      datesOfStay: '',
      curDate: new Date().toString(),
      curSelStart: new Date().toString(),
      guests: {
        parent: 0,
        children: 0,
        babies: 0
      },
      getstsInputText: '',
      listLimits: [
        { label: 'Можно с детьми', value: 'kids' },
        { label: 'Можно с животными', value: 'pets' },
        { label: 'Можно курить', value: 'weed' }
      ],
      listTypeOfTenant1: [
        { label: 'Частное лицо', value: '0' },
        { label: 'Компания/ИП', value: '1' },
        { label: 'Отель', value: '2' },
        { label: 'Гостиница', value: '3' },
        { label: 'Пансионат', value: '4' },
        { label: 'Санаторий', value: '5' },
        { label: 'Хостел', value: '6' },
        { label: 'Кемпинг', value: '7' }
      ],
      listTypeOfTenant2: [
        { label: 'Агент', value: '8' },
        { label: 'Агентство', value: '9' },
        { label: 'Частное лицо', value: '10' },
        { label: 'Компания/ИП', value: '11' }
      ],
      selTypesOfTenants: [],
      listTypesOfReservation: [
        { label: 'Без предоплаты', value: '0' },
        { label: 'Оплата первого месяца/суток', value: '1' },
        { label: 'Оплата 50% суммы', value: '2' }
      ],
      selTypesOfReservation: [],
      listCancellationPolicies: [
        { label: 'Бесплатная отмена за любое время', value: '0' },
        { label: 'Бесплатная отмена за 2 дня до даты въезда', value: '1' }
      ],
      selCancellationPolicies: [],
      price: '',
      citizenship: ''
    }
  },
  methods: {
    addPlacement () {
      // this.$store.dispatch('request/setItemSecondLevel', { level: 'params', key: 'datesOfStay', value: this.datesOfStay })
      this.$store.dispatch('request/addRequest')
    },
    // mask () {
    //   const matrix = '__.__.____ - __.__.____'
    //   let i = 0
    //   const def = matrix.replace(/\D/g, '')
    //   let val = this.datesOfStay.replace(/\D/g, '')
    //   if (def.length >= val.length) { val = def }
    //   this.datesOfStay = matrix.replace(/./g, function (a) {
    //     return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
    //   })
    // },
    changeTimeForCalls (val) {
      this.$store.dispatch('request/setItemSecondLevel', { level: 'reservation', key: 'timeForCalls', value: val })
    },
    changePickUpTime (val) {
      this.$store.dispatch('request/setItemSecondLevel', { level: 'reservation', key: 'pickUpTime', value: val })
    },
    changeDepartureTime (val) {
      this.$store.dispatch('request/setItemSecondLevel', { level: 'reservation', key: 'departureTime', value: val })
    },
    changeSelDate (date) {
      this.$root.$emit('dropdown:hide')
      this.datesOfStay = date
      this.$store.dispatch('request/setItemSecondLevel', { level: 'params', key: 'datesOfStay', value: this.datesOfStay })
    },
    handlerGuests (data) {
      this.guests = Object.assign({}, data)
      console.log('this.guests:', this.guests)
      this.$store.dispatch('request/setItemSecondLevel', { level: 'params', key: 'guests', value: Object.assign({}, this.guests) })
      // debugger
      this.getstsInputText = '' + (data.babies + data.children + data.parent)
      if (this.getstsInputText === '0') {
        this.getstsInputText = ''
      }
    },
    changePrice (val) {
      this.price = val
      this.$store.dispatch('request/setItem', { key: 'price', value: parseInt(val) })
    },
    changeCitizenship (val) {
      this.citizenship = val
      this.$store.dispatch('request/setItem', { key: 'citizenship', value: val })
    },
    changeTypeOfTenant (fl, val) {
      if (fl) {
        this.selTypesOfTenants.push(val)
      } else {
        const remItemIndx = this.selTypesOfTenants.findIndex(item => item === val)
        if (remItemIndx !== -1) {
          this.selTypesOfTenants.splice(remItemIndx, 1)
        }
      }

      this.$store.dispatch('request/setItem', { key: 'typeOfTenant', value: this.selTypesOfTenants.slice(0) })
    },
    changeTypeOfReservation (fl, val) {
      if (fl) {
        this.selTypesOfReservation.push(val)
      } else {
        const remItemIndx = this.selTypesOfReservation.findIndex(item => item === val)
        if (remItemIndx !== -1) {
          this.selTypesOfReservation.splice(remItemIndx, 1)
        }
      }

      this.$store.dispatch('request/setItemSecondLevel', { level: 'reservation', key: 'typeOfReservation', value: this.selTypesOfReservation.slice(0) })
    },
    changeCancellationPolicy (fl, val) {
      if (fl) {
        this.selCancellationPolicies.push(val)
      } else {
        const remItemIndx = this.selCancellationPolicies.findIndex(item => item === val)
        if (remItemIndx !== -1) {
          this.selCancellationPolicies.splice(remItemIndx, 1)
        }
      }

      this.$store.dispatch('request/setItemSecondLevel', { level: 'reservation', key: 'cancellationPolicy', value: this.selCancellationPolicies.slice(0) })
    }
  }
}
