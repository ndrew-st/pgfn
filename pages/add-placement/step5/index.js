import CountBed from '~/pages/add-request/-components/CountBed'

import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'
import ApCheckbox from '../ap-checkbox/index.vue'
import CheckBlock from '../blocks/two-columns-checkboxes/index.vue'
import ApFolding from '../blocks/ap-folding'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox,
    CheckBlock,
    CountBed,
    ApFolding
  },
  data () {
    return {
      furniture: 0,
      listFur: [
        { label: 'Есть вся необходимая', value: 0 },
        { label: 'Частично есть', value: 1 },
        { label: 'Отсутствует', value: 2 }
      ],
      limits: '',
      listLimits: [
        { label: 'Нельзя с детьми', value: 'kids' },
        { label: 'Нельзя с животными', value: 'pets' },
        { label: 'Нельзя для мероприятий', value: 'party' },
        { label: 'Нельзя курить', value: 'weed' }
      ],
      internet: 0,
      listInternet: [
        { label: 'Wi-Fi менее 10 Мбит/с', value: 0 },
        { label: 'Wi-Fi от 10 Мбит/с', value: 1 },
        { label: 'Wi-Fi от 30 Мбит/с', value: 2 },
        { label: 'Wi-Fi от 50 Мбит/с', value: 3 },
        { label: 'Wi-Fi от 100 Мбит/с', value: 4 },
        { label: 'Отсутствует', value: 5 }
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
        { label: 'Подходит для праздников', value: 'goodForParty' },
        { label: 'Удобно с детьми', value: 'goodForKids' },
        { label: 'Удобно пожилым', value: 'goodForAged' },
        { label: 'Удобно для двоих', value: 'goodForPairs' },
        { label: 'Удобно для больших компаний', value: 'goodForBigCompany' },
        { label: 'Удобно людям с ограниченными возможностями', value: 'goodForInvalids' }
      ],
      starCheckbox: false,
      countBedTotal: 0
    }
  },
  methods: {
    next () {
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'params', key: 'furniture', value: this.furniture })
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'params', key: 'internet', value: this.internet })

      // this.$store.dispatch('placement/setItemSecondLevel', { level: 'paramsList', list: [] })
      this.$emit('next')
    },
    checkbox (par) {
      par = !par
    },
    changeRadio (val, type) {
      this[type] = val
      this.$store.dispatch('placement/setItemSecondLevel', { level: 'params', key: type, value: val })
    }
  }
}
