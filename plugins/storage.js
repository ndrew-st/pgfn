export default ({ $axios }, inject) => {
  inject('storage', {
    setItem (name, data) {
      localStorage.setItem(name, JSON.stringify(data))
    },
    getItem (name) {
      return JSON.parse(localStorage.getItem(name))
    },
    rmItem (name) {
      localStorage.removeItem(name)
    },
    clearAll () {
      localStorage.clear()
    }
  })
}
