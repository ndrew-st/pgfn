// import OcDropDown from '@/components/global/ocDropDown/index.vue'
// import OcButton from '@/components/global/Forms/ocButton/index.vue'
import { mapActions } from 'vuex'
import ApInput from '../ap-input/index.vue'
// import ApButton from '../ap-button/index.vue'
import ApListDropdown from '../ap-list-dropdown/index.vue'

export default {
  components: {
    // OcDropDown,
    // OcButton,
    ApInput,
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
      this.$root.$emit('dropdown:hide')
      // this.$store.dispatch('setItem', )
      // debugger
      this.setItem({ key: 'typeOfTenant', value: par })
    },
    selectItem2 (par) {
      this.selItem2 = par
      this.$root.$emit('dropdown:hide')
    },
    ...mapActions('placement', ['setItem'])
  }
}
