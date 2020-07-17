import { minLength, required } from 'vuelidate/lib/validators'

export default {
  props: {
    error: String,
    btnText: String,
    value: String
  },
  data: () => ({
    isActive: false,
    password: ''
  }),
  validations: {
    password: {
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
    setPass (val) {
      this.password = val
      this.$v.password.$touch()
    },
    next () {
      if (!this.$v.$invalid) {
        this.$emit('next', { password: this.password })
      }
    }
  }
}
