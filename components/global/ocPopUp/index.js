import { mapMutations, mapGetters } from 'vuex'

import signIn from '~/components/blocks/SignIn'
import signUp from '~/components/blocks/SignUp'
import passRecovery from '~/components/blocks/PasswordRecovery'
import addRequest from '~/components/blocks/AddRequest'

export default {
  components: {
    signIn,
    signUp,
    passRecovery,
    addRequest
  },
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
