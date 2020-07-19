import ApButton from '../../add-placement/ap-button/index.vue'
import ApRadio from '../../add-placement/ap-radio/index.vue'
import ApCheckbox from '../../add-placement/ap-checkbox/index.vue'
import CheckboxesList from '../../add-placement/blocks/two-columns-checkboxes/index.vue'
import ApFolding from '../../add-placement/blocks/ap-folding'
import CountBed from '../-components/CountBed/index.vue'
import ListApRadio from '../../add-placement/blocks/list-ap-radio'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox,
    CheckboxesList,
    ApFolding,
    CountBed,
    ListApRadio
  },
  data () {
    return {

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

      bathAndShower: [
        { label: 'Туалет', value: 'wc' },
        { label: 'Биде', value: 'bidet' },
        { label: 'Душ/душевая кабина', value: 'shower' },
        { label: 'Полноценная ванная', value: 'bath' },
        { label: 'Джакузи', value: 'jacuzzi' }
      ],

      interior: [
        { label: 'Минимализм', value: 'minimal' },
        { label: 'Хай-тек', value: 'highTech' },
        { label: 'Скандинавский стиль', value: 'scandinavian' },
        { label: 'Дизайнерский ремонт', value: 'design' }
      ],

      cellingheight: [
        { label: 'до 3-х метров', value: 'upTo3' },
        { label: 'От 3-х до 4-х метров', value: 'from3To4' },
        { label: 'Более 4-х метров', value: 'moreThan4' }
      ],

      viewFromTheWindow: [
        { label: 'Лес', value: 'forest' },
        { label: 'Море', value: 'sea' },
        { label: 'Горы', value: 'mountains' },
        { label: 'Двор', value: 'yard' },
        { label: 'Соседний двор', value: 'neighboringYard' },
        { label: 'Панорамный вид окрестностей', value: 'panoramicView' },
        { label: 'Вид в даль', value: 'viewIntoTheDistance' },
        { label: 'Водоём', value: 'lake' },
        { label: 'Виден восход солнца', value: 'sunrise' },
        { label: 'Виден закат солнца', value: 'sunset' }
      ],

      panWindows: [
        { id: 0, label: 'Да', value: 1 },
        { id: 1, label: 'Нет', value: 0 }
      ],
      selIdPanWindow: 0,
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
    setSelIdPanWindow (evt) {
      this.selIdPanWindow = evt
      this.$store.dispatch('request/setItemSecondLevel', { level: 'params', key: 'panWindows', value: this.panWindows[this.selIdPanWindow].value })
    }
  }
}
