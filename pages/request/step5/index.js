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
        { label: 'Подходит для праздников', value: 'good-for-party' },
        { label: 'Удобно с детьми', value: 'good-for-kids' },
        { label: 'Удобно пожилым', value: 'good-for-aged' },
        { label: 'Удобно для двоих', value: 'good-for-pairs' },
        { label: 'Удобно для больших компаний', value: 'good-for-big-company' },
        { label: 'Удобно людям с ограниченными возможностями', value: 'good-for-invalids' }
      ],
      parking: [
        { label: 'Открытая (свободный въезд)', value: '' },
        { label: 'Подземная', value: '' },
        { label: 'Платная', value: '' },
        { label: 'Закрытая (въезд через шлагбаум или ворота)', value: '' },
        { label: 'Бесплатная', value: '' },
        { label: 'Отсутствует', value: '' }
      ],
      floors: [
        { label: '1 этаж', value: '1floor' },
        { label: 'Все, кроме 1-го этажа', value: 'all-except1' },
        { label: 'С 2-го по 5-й этаж', value: 'from2to5' },
        { label: 'Выше 5-го этажа', value: 'above5' }
      ],
      elevators: [
        { label: 'Пассажирский', value: 'passenger' },
        { label: 'Грузовой', value: 'freight' }
      ],
      yardArea: [
        { label: 'Детская площадка', value: 'playground' },
        { label: 'Спортивная площадка', value: 'sports-ground' },
        { label: 'Баскетбольная площадка', value: 'basketball-court' },
        { label: 'Закрытый двор', value: 'closed-yard' },
        { label: 'Теннисный корт', value: 'tennis-court' },
        { label: 'Беседка', value: 'pergola' },
        { label: 'Мангал/барбекю', value: 'barbecue' }
      ],
      material: [
        { label: 'Кирпичный', value: 'brick' },
        { label: 'Монолитный/железобетонный', value: 'ferroconcrete' },
        { label: 'Каркасный', value: 'frame-house' },
        { label: 'Сип-панели', value: 'sip' },
        { label: 'Деревянный из бруса', value: 'wooden' },
        { label: 'Деревянный из бревна', value: 'from-log' },
        { label: 'Экологичный', value: 'eco' }
      ]
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
