import FeaturePlace from '~/components/blocks/FeaturePlace'

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    },
    description: {
      type: String,
      required: true,
      default: 'description'
    },
    background: {
      type: String,
      required: true,
      default: 'background'
    }
  },
  components: { FeaturePlace }
}
