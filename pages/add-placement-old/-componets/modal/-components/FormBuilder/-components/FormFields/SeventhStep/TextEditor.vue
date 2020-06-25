<template>
  <div class="text-editor">
    <vue-editor
      v-model="content"
      :disabled="!disabled"
      :editorToolbar="customToolbar"
      class="text-editor__content"
    />
    <span class="text-editor__attention">Осталось {{remainedCharacter}} символов</span>
  </div>
</template>

<script>
export default {
  name: 'TextEditor',
  props: {
    params: {
      type: Object,
      default: () => {}
    },
    setValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      content: this.setValue || '',
      customToolbar: [
        [ { header: [0, 2, 3] } ],
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['bold', 'italic', 'underline', 'strike']
      ]
    }
  },
  computed: {
    disabled () {
      return !!this.remainedCharacter
    },
    remainedCharacter () {
      return (this.params['max-character'] - this.content.length)
    }
  },
  watch: {
    content (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="stylus">
  .text-editor
    &__content
      width 480px

    &__attention
      font-size 13px
      font-weight 400
      color rgb(166, 166, 166)
</style>
