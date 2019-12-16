<template>
  <div>
    <OcMainPanel />

    <div class="main__wrapper">
      <OcMainMenu
        class="main-menu_big"
        :active="true"
        :menuType="config.view"
        :menuItems="bigMenuItems"
      >
        <div class="service-list">
          <router-link to="/">О сервисе</router-link> •
          <router-link to="/">Связаться с нами</router-link>•
          <router-link to="/">Отелям</router-link>•
          <router-link to="/">Владельцам жилья</router-link>•
          <router-link to="/">Предпринимателям</router-link>
        </div>

        <div class="help-list">
          <router-link to="/">Политика и условия</router-link> •
          <router-link to="/">Конфиденциальность</router-link>
        </div>

        <div class="copyright">
          © 2019 OurCrimea.com
        </div>
      </OcMainMenu>

      <OcMainMenu
        class="main-menu_middle"
        :active="true"
        menuType="small"
        :menuItems="smallMenu"
      />

      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import OcMainPanel from '@/components/ocMainPanel/index.vue'
import OcMainMenu from '@/components/ocMainMenu/index.vue'

export default {
  components: {
    OcMainPanel,
    OcMainMenu
  },
  computed: {
    ...mapGetters('main-menu', ['config', 'fullMenu', 'smallMenu']),
    bigMenuItems () {
      return (this.config.view === 'full') ? this.fullMenu : this.smallMenu
    }
  }
}
</script>

<style lang="stylus">
.main__wrapper
  display flex
  flex-direction row
  margin-top 60px

.main-menu_big
  display none
  max-width 300px
  box-shadow 0 0 20px 0 $gray-2

  @media screen and (min-width 1280px)
    display flex

.main-menu_middle
  display none
  box-shadow 0 0 20px 0 $gray-2

  @media screen and (min-width 600px) and (max-width 1279px)
    display flex

.service-list, .help-list, .copyright
  padding 0px 20px 10px 20px

.copyright
  color $gray-2
</style>
