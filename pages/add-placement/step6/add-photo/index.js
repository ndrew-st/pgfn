export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data  () {
    return {
      // files: []
    }
  },
  methods: {
    // async handleFilesUpload () {
    //   const uploadedFiles = this.$refs.files.files

    //   for (let i = 0; i < uploadedFiles.length; i++) {
    //     this.files.push(uploadedFiles[i])
    //   }

    //   await this.$api.users.uploadFiles(this.files)
    // },
    handleFilesUpload () {
      this.$emit('uploadFiles', this.$refs.files.files)
    },
    loadPhoto () {
      this.$refs.files.click()
    }
  }
}
