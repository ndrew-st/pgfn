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
        { id: 0, code: 0, name: 'Собственник/арендодатель' },
        { id: 1, code: 1, name: 'Посредник' }],
      typeOfTenant: null,
      listTypeOfHousing1: [
        { id: 0, code: 0, name: 'Частное лицо' },
        { id: 1, code: 1, name: 'Компания/ИП' },
        { id: 2, code: 2, name: 'Отель' },
        { id: 3, code: 3, name: 'Гостиница' },
        { id: 4, code: 4, name: 'Пансионат' },
        { id: 5, code: 5, name: 'Санаторий' },
        { id: 6, code: 6, name: 'Хостел' },
        { id: 7, code: 7, name: 'Кемпинг' }
      ],
      listTypeOfHousing2: [
        { id: 0, code: 8, name: 'Агент' },
        { id: 1, code: 9, name: 'Агентство' },
        { id: 2, code: 10, name: 'Частное лицо' },
        { id: 3, code: 11, name: 'Компания / ИП' }
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
      if (this.typeOfHousing !== null) {
        this.typeOfHousing = null
      }
      this.$root.$emit('dropdown:hide')
      // this.$store.dispatch('setItem', )
      // debugger
      // this.setItem({ key: 'typeOfTenant', value: par.code })
    },
    selectTypeOfHousing (par) {
      this.typeOfHousing = par
      this.$root.$emit('dropdown:hide')
      this.setItem({ key: 'typeOfTenant', value: par.code }) // здесь кутерьма с названиями полей, здесь должен быть только typeOfTenant, typeOfHousing - на следующем шаге
    },
    ...mapActions('placement', ['setItem'])
  }
  // ,
  // computed: {
  //   needArray () {
  //     return this.typeOfTenant !== null && thistypeOfTenant === 0 ? this.listTypeOfHousing1 : this.listTypeOfHousing2
  //   }
  // }
}
