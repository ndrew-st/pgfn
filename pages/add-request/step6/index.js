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
      // debugger
      this.$store.dispatch('placement/addRequest')
    }
  }
}
