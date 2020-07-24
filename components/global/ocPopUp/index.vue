<template>
  <div
    v-if="getStatus(name)"
    class="popup"
  >
    <div
      class="popup__wrapper"
      @click="close"
    />

    <slot
      @close="close"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('popup', ['getStatus'])
  },
  methods: {
    ...mapMutations('popup', ['closePopup']),
    close () {
      this.closePopup(this.name)
    }
  }
}
</script>
