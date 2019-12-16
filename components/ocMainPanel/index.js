import { mapGetters, mapMutations } from 'vuex'

import Switcher from './-components/switcher'
import MobileMenu from './-components/mobile-menu'

export default {
  components: {
    Switcher,
    MobileMenu
  },
  data () {
    return {
      activeMenu: false
    }
  },
  computed: {
    ...mapGetters('main-menu', ['config'])
  },
  methods: {
    ...mapMutations('main-menu', ['switchView', 'switchActive']),
    switchMenu () {
      console.log(this.activeMenu)
      this.activeMenu = !this.activeMenu
      const menuType = (this.config.view === 'full') ? 'small' : 'full'
      this.switchView(menuType)
    },
    activateMenu () {
      this.switchActive(true)
    }
  }
}
