import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'
import ApCheckbox from '../ap-checkbox/index.vue'
import CheckBlock from '../blocks/two-columns-checkboxes/index.vue'
import CountBed from '../../request/-components/CountBed/index.vue'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox,
    CheckBlock,
    CountBed
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
      furniture: '',
      listFur: [
        { label: 'Есть вся необходимая', value: 'all-inclusive' },
        { label: 'Частично есть', value: 'part' },
        { label: 'Отсутствует', value: 'missing' }
      ],
      limits: '',
      listLimits: [
        { label: 'Можно с детьми', value: 'kids' },
        { label: 'Можно с животными', value: 'pets' },
        { label: 'Можно для мероприятий', value: 'party' },
        { label: 'Можно курить', value: 'weed' }
      ],
      internet: '',
      listinternet: [
        { label: 'Wi-Fi менее 10 Мбит/с', value: 'less10' },
        { label: 'Wi-Fi от 10 Мбит/с', value: 'more10' },
        { label: 'Wi-Fi от 30 Мбит/с', value: 'more30' },
        { label: 'Wi-Fi от 50 Мбит/с', value: 'more50' },
        { label: 'Wi-Fi от 100 Мбит/с', value: 'more100' },
        { label: 'Отсутствует', value: 'none' }
      ],
      climate: [
        { label: 'Камин', value: 'fire' },
        { label: 'Автономное отопление', value: 'privat-heat' },
        { label: 'Магистральное отопление', value: 'common-heat' }
      ],
      interior: [
        { label: 'Минимализм', value: 'minimal' },
        { label: 'Хай-тек', value: 'high-tech' },
        { label: 'Скандинавский стиль', value: 'scandinavian' },
        { label: 'Дизайнерский ремонт', value: 'design' }
      ],
      rooms: [
        { label: 'Гардероб', value: 'wardrobe' },
        { label: 'Кухня', value: 'kitchen' },
        { label: 'Детская', value: 'kids-room' },
        { label: 'Спальня', value: 'bedroom' },
        { label: 'Рабочее место (письменный стол)', value: 'workroom' },
        { label: 'Гостиная', value: 'living-room' },
        { label: 'Балкон', value: 'balcony' },
        { label: 'Лоджия', value: 'loggia' }
      ],
      facilities: [
        { label: 'Фен', value: 'hairdryer' },
        { label: 'Кофемашина', value: 'coffee' },
        { label: 'Чайник', value: 'teapot' },
        { label: 'Утюг', value: 'iron' },
        { label: 'Холодильник', value: 'frige' },
        { label: 'Телевизор', value: 'tv' },
        { label: 'Аудиосистема', value: 'audio' },
        { label: 'Игровая приставка', value: 'playstation' },
        { label: 'Гладильная доска', value: 'ironing-board' },
        { label: 'Стиральная машина', value: 'washer' },
        { label: 'Сушильная машина', value: 'drying' },
        { label: 'Посудомоечная машина', value: 'dishwasher' },
        { label: 'Газовая плита', value: 'gas-stove' },
        { label: 'Электроплита', value: 'electric-stove' },
        { label: 'Духовка / духовой шкаф', value: 'oven' },
        { label: 'Микроволновка', value: 'microwave' }
      ],
      dishes: [
        { label: 'Посуда', value: 'dishes' },
        { label: 'Столовые приборы', value: 'tableware' },
        { label: 'Всё для готовки еды', value: 'all-for-cooking' },
        { label: 'Чашки для чая', value: 'tea-cups' },
        { label: 'Кухонный нож', value: 'kitchen-knife' }
      ],
      hygiene: [
        { label: 'Зубная щётка', value: 'toothbrush' },
        { label: 'Зубная паста', value: 'toothpaste' },
        { label: 'Шампунь', value: 'shampoo' },
        { label: 'Мыло для рук', value: 'soap' },
        { label: 'Гель для душа', value: 'shower-gel' }
      ],
      starCheckbox: false
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
