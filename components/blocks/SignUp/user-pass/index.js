import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  props: {
    error: {
      type: String,
      default: null
    }
  },
  data: () => ({
    username: '',
    userpassword: ''
  }),
  validations: {
    username: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(15)
    },
    userpassword: {
      required,
      isHaveNumber: value => /(\d+)/g.test(value),
      isUpperCase (value) {
        for (let i = 0; i < value.length; i++) { // выведет 0, затем 1, затем 2
          if (/^[A-Z]*$/.test(value[i])) {
            return true
          }
        }

        return false
      },
      minLength: minLength(8)
    }
  },
  methods: {
    next () {
      if (this.username !== '' && this.userpassword.length > 5) {
      }
    },
    setName (val) {
      this.username = val
      this.$v.username.$touch()
    },
    setPass (val) {
      this.userpassword = val
      this.$v.userpassword.$touch()
    },
    submit () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$emit('next', { name: this.username, password: this.userpassword })
      }
    }
  }
}
