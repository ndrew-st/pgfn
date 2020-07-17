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
      description: '',
      images: []
    }
  },
  methods: {
    addPlacement () {
      // debugger
      this.$store.dispatch('placement/setItem', { key: 'title', value: this.title })
      this.$store.dispatch('placement/setItem', { key: 'description', value: this.description })
      this.$store.dispatch('placement/setItem', { key: 'images', value: this.images })
      this.$store.dispatch('placement/addPlacement')
      this.$router.push('/')
    },
    async handleFileUpload (file) {
      const { _id } = await this.$api.users.uploadFiles(file)

      this.images.push(_id)
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
