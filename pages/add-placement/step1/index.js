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
      listTypeOfTenant: [
        { id: 0, name: 'Собственник/арендодатель' },
        { id: 1, name: 'Посредник' }],
      typeOfTenant: null,
      listTypeOfHousing: [
        { id: 0, name: 'Частное лицо' },
        { id: 1, name: 'Компания/ИП' },
        { id: 2, name: 'Отель' },
        { id: 3, name: 'Гостиница' },
        { id: 4, name: 'Пансионат' },
        { id: 5, name: 'Санаторий' },
        { id: 6, name: 'Хостел' },
        { id: 7, name: 'Кемпинг' }
      ],
      typeOfHousing: null
    }
  },
  methods: {
    initMap (instance) {
      this.map = instance
    },
    selectTypeOfTenant (par) {
      this.typeOfTenant = par
      this.$root.$emit('dropdown:hide')
      // this.$store.dispatch('setItem', )
      // debugger
      this.setItem({ key: 'typeOfTenant', value: par.id })
    },
    selectTypeOfHousing (par) {
      this.typeOfHousing = par
      this.$root.$emit('dropdown:hide')
      this.setItem({ key: 'typeOfHousing', value: par.id })
    },
    ...mapActions('placement', ['setItem'])
  }
}
