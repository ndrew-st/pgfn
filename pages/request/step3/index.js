import ApButton from '../../add-placement/ap-button/index.vue'
import ApRadio from '../../add-placement/ap-radio/index.vue'
import ApCheckbox from '../../add-placement/ap-checkbox/index.vue'
import CheckboxesList from '../../add-placement/blocks/two-columns-checkboxes/index.vue'
import ApFolding from '../../add-placement/blocks/ap-folding'
import ApRadioList from '../../add-placement/blocks/ap-radio-list'
import CountBed from '../-components/CountBed/index.vue'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox,
    CheckboxesList,
    ApFolding,
    ApRadioList,
    CountBed
  },
  data () {
    return {

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

      bathAndShower: [
        { label: 'Туалет', value: 'wc' },
        { label: 'Биде', value: 'bidet' },
        { label: 'Душ/душевая кабина', value: 'shower' },
        { label: 'Полноценная ванная', value: 'bath' },
        { label: 'Джакузи', value: 'jacuzzi' }
      ],

      interior: [
        { label: 'Минимализм', value: 'minimal' },
        { label: 'Хай-тек', value: 'high-tech' },
        { label: 'Скандинавский стиль', value: 'scandinavian' },
        { label: 'Дизайнерский ремонт', value: 'design' }
      ],

      cellingheight: [
        { label: 'до 3-х метров', value: 'up-to-3' },
        { label: 'От 3-х до 4-х метров', value: 'from-3-to-4' },
        { label: 'Более 4-х метров', value: 'more-than-4' }
      ],

      viewFromTheWindow: [
        { label: 'Лес', value: 'forest' },
        { label: 'Море', value: 'sea' },
        { label: 'Горы', value: 'mountains' },
        { label: 'Двор', value: 'yard' },
        { label: 'Соседний двор', value: 'neighboring-yard' },
        { label: 'Панорамный вид окрестностей', value: 'panoramic-view' },
        { label: 'Вид в даль', value: 'view-into-the-distance' },
        { label: 'Водоём', value: 'lake' },
        { label: 'Виден восход солнца', value: 'sunrise' },
        { label: 'Виден закат солнца', value: 'sunset' }
      ],

      panWindows: [
        { label: 'Да', value: 'yes' },
        { label: 'Нет', value: 'no' }
      ],
      checkedWindows: 'yes',
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
