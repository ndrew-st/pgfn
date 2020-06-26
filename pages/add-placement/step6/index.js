import ApButton from '../ap-button/index.vue'
import ApAddPhoto from './add-photo/index.vue'

export default {
  components: {
    ApAddPhoto,
    ApButton
  },
  methods: {
    addPlacement () {
      // debugger
      this.$store.dispatch('placement/addPlacement')
    }
  }
}
