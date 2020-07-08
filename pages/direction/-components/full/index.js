import FeaturePlace from '~/components/blocks/FeaturePlace'

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Путеводитель по Вашим правилам'
    },
    description: {
      type: String,
      required: true,
      default: 'Интернет-сервис, где пользователи сами назначают стоимость, за которую хотят снять жильё, а арендодатели могут предложить свои цены и варианты размещения.'
    },
    background: {
      type: String,
      required: true,
      default: '/main-page-bg.jpg'
    }
  },
  components: { FeaturePlace }
}
