// import OcCheckbox from '@/components/global/Forms/ocCheckbox/index.vue'
import ApButton from '../ap-button/index.vue'
import ApRadio from '../ap-radio/index.vue'
import ApCheckbox from '../ap-checkbox/index.vue'

export default {
  components: {
    ApButton,
    ApRadio,
    ApCheckbox
  },
  data () {
    return {
      value: [],
      chV: { instantBooking: false }
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

    }
  }
}
