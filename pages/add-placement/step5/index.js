// import OcCheckbox from '@/components/global/Forms/ocCheckbox/index.vue'
import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'
import ApCheckbox from '../ap-checkbox/index.vue'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox
  },
  watch: {
    furniture (val) {
      console.log('furniture ', val)
    },
    listTimeCall (val) {
      console.log('listTimeCall ', val)
    },
    starCheckbox (val) {
      console.log('starCheckbox ', val)
    }
  },
  data () {
    return {
      furniture: '', // выбранные значения для мебели
      listFur: [
        { label: 'Есть вся необходимая', value: 'all-inclusive' },
        { label: 'Частично есть', value: 'part' },
        { label: 'Отсутствует', value: 'missing' }
      ],
      timeCall: '',
      listTimeCall: [
        { label: 'Любое время', value: 'any' },
        { label: 'Выбранное время', value: 'part' },
        { label: 'Часть', value: 'Part' }
      ],
      starCheckbox: false,
      value: [],
      chV: { instantBooking: false }
    }
  },
  methods: {
    // selectItem (par) {
    //   this.selItem = par
    //   this.$root.$emit('dropdown:hide')
    // }
    checkbox (par) {
      par = !par
    },
    input (par) {

    },
    change (evt) {

    }
  }
}
