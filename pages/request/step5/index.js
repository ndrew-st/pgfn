import ApButton from '../../add-placement/ap-button/index.vue'
import ApRadio from '../../add-placement/ap-radio/index.vue'
import ApCheckbox from '../../add-placement/ap-checkbox/index.vue'
import CheckboxesList from '../../add-placement/blocks/two-columns-checkboxes/index.vue'
import CountBed from '../../request/-components/CountBed/index.vue'
import ApFolding from '../../add-placement/blocks/ap-folding'
import ApInput from '../../add-placement/ap-input'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox,
    CheckboxesList,
    CountBed,
    ApFolding,
    ApInput
  },
  data () {
    return {
      specials: [
        { label: 'Подходит для праздников', value: 'goodForParty' },
        { label: 'Удобно с детьми', value: 'goodForKids' },
        { label: 'Удобно пожилым', value: 'goodForAged' },
        { label: 'Удобно для двоих', value: 'goodForPairs' },
        { label: 'Удобно для больших компаний', value: 'goodForBigCompany' },
        { label: 'Удобно людям с ограниченными возможностями', value: 'goodForInvalids' }
      ],
      parking: [
        { label: 'Открытая (свободный въезд)', value: 'openParking' },
        { label: 'Подземная', value: 'undergroundParking' },
        { label: 'Платная', value: 'paidParking' },
        { label: 'Закрытая (въезд через шлагбаум или ворота)', value: 'indoorParking' },
        { label: 'Бесплатная', value: 'freeParking' },
        { label: 'Отсутствует', value: 'noParking' }
      ],
      floors: [
        { label: '1 этаж', value: '1floor' },
        { label: 'Все, кроме 1-го этажа', value: 'allExcept1Floor' },
        { label: 'С 2-го по 5-й этаж', value: 'from2to5Floor' },
        { label: 'Выше 5-го этажа', value: 'above5Floor' }
      ],
      elevators: [
        { label: 'Пассажирский', value: 'passenger' },
        { label: 'Грузовой', value: 'freight' }
      ],
      yardArea: [
        { label: 'Детская площадка', value: 'playground' },
        { label: 'Спортивная площадка', value: 'sportsGround' },
        { label: 'Баскетбольная площадка', value: 'basketballCourt' },
        { label: 'Закрытый двор', value: 'closedYard' },
        { label: 'Теннисный корт', value: 'tennisCourt' },
        { label: 'Беседка', value: 'pergola' },
        { label: 'Мангал/барбекю', value: 'barbecue' }
      ],
      material: [
        { label: 'Кирпичный', value: 'brick' },
        { label: 'Монолитный/железобетонный', value: 'ferroconcrete' },
        { label: 'Каркасный', value: 'frameHouse' },
        { label: 'Сип-панели', value: 'sip' },
        { label: 'Деревянный из бруса', value: 'wooden' },
        { label: 'Деревянный из бревна', value: 'fromLog' },
        { label: 'Экологичный', value: 'eco' }
      ],
      yearOfBuildStart: 0,
      yearOfBuildEnd: 0
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
    next () {
      if (this.yearOfBuildStart > 0) {
        this.$store.dispatch('placement/setItemSecondLevel', { level: 'params', key: 'yearOfBuildStart', value: this.yearOfBuildStart })
      }
      if (this.yearOfBuildEnd > 0) {
        this.$store.dispatch('placement/setItemSecondLevel', { level: 'params', key: 'yearOfBuildEnd', value: this.yearOfBuildEnd })
      }
      this.$emit('next')
    }
  }
}
