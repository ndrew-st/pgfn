import ApButton from '../../add-placement/ap-button'
import CheckboxesList from '../../add-placement/blocks/two-columns-checkboxes'
import ApFolding from '../../add-placement/blocks/ap-folding'

export default {
  components: {
    ApButton,
    CheckboxesList,
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
        { label: 'Wi-Fi менее 10 Мбит/с', value: 'internetLess10' },
        { label: 'Wi-Fi от 10 Мбит/с', value: 'internetMore10' },
        { label: 'Wi-Fi от 30 Мбит/с', value: 'internetMore30' },
        { label: 'Wi-Fi от 50 Мбит/с', value: 'internetMore50' },
        { label: 'Wi-Fi от 100 Мбит/с', value: 'internetMore100' },
        { label: 'Отсутствует', value: 'internetNone' }
      ],
      climate: [
        { label: 'Камин', value: 'fire' },
        { label: 'Автономное отопление', value: 'privatHeat' },
        { label: 'Магистральное отопление', value: 'commonHeat' },
        { label: 'Печь', value: 'stove' }
      ],
      water: [
        { label: 'Горячая вода магистральная', value: 'hotWaterMainLine' },
        { label: 'Горячая вода из бойлера', value: 'hotWaterFromTheBoiler' },
        { label: 'Горячая вода от колонки', value: 'hotWaterFromThePump' },
        { label: 'Холодная вода магистральная', value: 'coldWaterMainLine' },
        { label: 'Холодная вода из скважины', value: 'coldWaterFromTheWell' }
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
