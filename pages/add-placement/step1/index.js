import OcDropDown from '@/components/ocDropDown/index.vue'
import ApInput from '../ap-input/index.vue'
import ApButton from '../ap-button/index.vue'
import ApListDropdown from '../ap-list-dropdown/index.vue'

export default {
  components: {
    OcDropDown,
    ApInput,
    ApButton,
    ApListDropdown
  },
  data () {
    return {
      map: {},
      coords: [],
      list: ['Собственник/арендодатель', 'Посредник'],
      selItem: '',
      list2: [
        'Частное лицо',
        'Компания/ИП',
        'Отель',
        'Гостиница',
        'Пансионат',
        'Санаторий',
        'Хостел',
        'Кемпинг'
      ],
      selItem2: ''
    }
  },
  methods: {
    initMap (instance) {
      this.map = instance
    },
    selectItem (par) {
      this.selItem = par
    },
    selectItem2 (par) {
      this.selItem2 = par
    }
  }
}
