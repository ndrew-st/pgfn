import ApButton from '../../add-placement/ap-button/index.vue'
import ApRadio from '../../add-placement/ap-radio/index.vue'
import ApCheckbox from '../../add-placement/ap-checkbox/index.vue'
import CheckboxesList from '../../add-placement/blocks/two-columns-checkboxes/index.vue'
import ApFolding from '../../add-placement/blocks/ap-folding'
import CountBed from '../-components/CountBed/index.vue'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox,
    CheckboxesList,
    CountBed,
    ApFolding
  },
  data () {
    return {
      furniture: '',
      listFur: [
        { label: 'Есть вся необходимая', value: 'allInclusive' },
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
      listInternet: [
        { label: 'Wi-Fi менее 10 Мбит/с', value: 'less10' },
        { label: 'Wi-Fi от 10 Мбит/с', value: 'more10' },
        { label: 'Wi-Fi от 30 Мбит/с', value: 'more30' },
        { label: 'Wi-Fi от 50 Мбит/с', value: 'more50' },
        { label: 'Wi-Fi от 100 Мбит/с', value: 'more100' },
        { label: 'Отсутствует', value: 'none' }
      ],
      climate: [
        { label: 'Камин', value: 'fire' },
        { label: 'Автономное отопление', value: 'privatHeat' },
        { label: 'Магистральное отопление', value: 'commonHeat' }
      ],
      interior: [
        { label: 'Минимализм', value: 'minimal' },
        { label: 'Хай-тек', value: 'highTech' },
        { label: 'Скандинавский стиль', value: 'scandinavian' },
        { label: 'Дизайнерский ремонт', value: 'design' }
      ],
      rooms: [
        { label: 'Гардероб', value: 'wardrobe' },
        { label: 'Кухня', value: 'kitchen' },
        { label: 'Детская', value: 'kidsRoom' },
        { label: 'Спальня', value: 'bedroom' },
        { label: 'Рабочее место (письменный стол)', value: 'workroom' },
        { label: 'Гостиная', value: 'livingRoom' },
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
        { label: 'Гладильная доска', value: 'ironingBoard' },
        { label: 'Стиральная машина', value: 'washer' },
        { label: 'Сушильная машина', value: 'drying' },
        { label: 'Посудомоечная машина', value: 'dishwasher' },
        { label: 'Газовая плита', value: 'gasStove' },
        { label: 'Электроплита', value: 'electricStove' },
        { label: 'Духовка / духовой шкаф', value: 'oven' },
        { label: 'Микроволновка', value: 'microwave' }
      ],
      dishes: [
        { label: 'Посуда', value: 'dishes' },
        { label: 'Столовые приборы', value: 'tableware' },
        { label: 'Всё для готовки еды', value: 'allForCooking' },
        { label: 'Чашки для чая', value: 'teaCups' },
        { label: 'Кухонный нож', value: 'kitchenKnife' }
      ],
      hygiene: [
        { label: 'Зубная щётка', value: 'toothbrush' },
        { label: 'Зубная паста', value: 'toothpaste' },
        { label: 'Шампунь', value: 'shampoo' },
        { label: 'Мыло для рук', value: 'soap' },
        { label: 'Гель для душа', value: 'showerGel' }
      ],
      specials: [
        { label: 'Баня/сауна', value: 'sauna' },
        { label: 'Бассейн', value: 'pool' },
        { label: 'Спортзал', value: 'gym' },
        { label: 'Бильярд', value: 'billiards' },
        { label: 'Домашний кинотеатр', value: 'homeTheater' }
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
