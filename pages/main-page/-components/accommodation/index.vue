<template>
  <div class="accommodation">
    <h2 class="accommodation__header">Проживание в Крыму · <span>Смотреть все</span></h2>
    <div class="accommodation__tabs">
      <OcTabs
        :tabs="tabs"
        :activeTab="active"
        @change-tab="changeActive"
      />
    </div>
    <div class="accommodation__sort"></div>
    <div class="accommodation__list"></div>
  </div>
</template>

<script>
import OcTabs from '~/components/ocTabs'

export default {
  components: {
    OcTabs
  },

  data () {
    return {
      baseTabs: [
        {
          title: 'Все',
          value: 'all',
          counter: 0
        },
        {
          title: 'Апартаменты',
          value: 'apartments',
          counter: 0
        }
      ],
      active: 0
    }
  },

  computed: {
    tabs () {
      return this.baseTabs.map(item => ({
        title: `${item.title} · ${item.counter}`,
        value: item.value
      }))
    }
  },

  methods: {
    changeActive (value) {
      this.active = this.baseTabs.map(item => item.value).indexOf(value)
    }
  }
}
</script>

<styles lang="stylus">
.accommodation
  padding 22px
</styles>
