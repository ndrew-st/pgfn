<template>
  <div class="popular-direction">
    <h2 class="popular-direction__header">Популярные направления Крыма · <span>Смотреть все</span></h2>
    <div class="popular-direction__tabs">
      <OcTabs
        :tabs="tabs"
        :activeTab="active"
        @change-tab="changeActive"
      />
    </div>
    <div class="popular-direction__sort"></div>
    <div class="popular-direction__list"></div>
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
          title: 'Районы и округа',
          value: 'area',
          counter: 0
        },
        {
          title: 'Города',
          value: 'cities',
          counter: 0
        },
        {
          title: 'Сёла',
          value: 'country',
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
