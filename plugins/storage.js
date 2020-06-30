export default ({ $axios }, inject) => {
  inject('storage', {
    setItem (name, data) {
      localStorage.setItem(name, JSON.stringify(data))
    },
    getItem (name) {
      if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name))
      } else {
        return null
      }
    },
    rmItem (name) {
      localStorage.removeItem(name)
    },
    clearAll () {
      localStorage.clear()
    }
  })
}
