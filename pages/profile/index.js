import { makePr } from '@/api/user.js'

export default {
  data () {
    return {
      userName: 'Иван Иванов',
      userPhone: '+7 906 780-65-44',
      activeName: false,
      activePass: false
    }
  },
  methods: {
    change (mode) {
      if (mode === 'name') {
        this.activeName = !this.activeName
      } else {
        this.activePass = !this.activePass
      }
    }
  },
  created () {
    const prom = makePr()
    prom.then((res) => {
      console.log('res: ' + res)
    })
    prom.catch((res) => {
      console.log('res: ' + res)
    })
  }
}
