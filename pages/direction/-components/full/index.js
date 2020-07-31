import FeaturePlace from '~/components/blocks/FeaturePlace'

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Хотите снять или сдать жильё в России?'
    },
    description: {
      type: String,
      required: true,
      default: 'Аренда частного жилья и номеров в отелях на ваших условиях — место, где цену назначаете вы!'
    },
    description2: {
      type: String,
      required: false,
      default: ''
    },
    background: {
      type: String,
      required: true,
      default: '/main-page-bg.jpg'
    },
    buttons: {
      type: String, // rent - кнопки снять, сдать жильё, request - кнопка "подать заявку", catalog - кнопка "каталог "
      required: false,
      default: ''
    }
  },
  components: { FeaturePlace }
}
