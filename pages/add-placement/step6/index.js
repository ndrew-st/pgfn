import ApButton from '../ap-button/index.vue'
import ApAddPhoto from './add-photo/index.vue'

export default {
  components: {
    ApAddPhoto,
    ApButton
  },
  data () {
    return {
      photoArray: [],
      title: '',
      description: ''
    }
  },
  methods: {
    addPlacement () {
      // debugger
      this.$store.dispatch('placement/setItem', { key: 'title', value: this.title })
      this.$store.dispatch('placement/setItem', { key: 'description', value: this.description })
      this.$store.dispatch('placement/addPlacement')
      this.$router.push('/')
    },
    async handleFileUpload (file) {
      await this.$api.users.uploadFiles(file)
    },
    uploadFiles (val) {
      for (let ind = 0; ind < val.length; ind++) {
        const reader = new FileReader()
        reader.readAsDataURL(val[ind])
        reader.onload = () => {
          this.photoArray.push({ src: reader.result, alt: val[ind].name })
          this.handleFileUpload(val[ind])
        }
      }
    }
  },
  computed: {
    photoArrayLength () {
      if (this.photoArray.length === 0) {
        return 2
      } else {
        return this.photoArray.length + 1
      }
    }
  }
}
