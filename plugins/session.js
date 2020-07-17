export default ({ $axios }, inject) => {
  inject('session', {
    setItem (name, data) {
      if (data) {
        sessionStorage.setItem(name, JSON.stringify(data))
      } else {
        console.warn('Data is clear')
      }
    },
    getItem (name) {
      if (name && sessionStorage.getItem(name) !== 'undefined') {
        return JSON.parse(sessionStorage.getItem(name))
      } else {
        return null
      }
    },
    rmItem (name) {
      sessionStorage.removeItem(name)
    },
    clearAll () {
      sessionStorage.clear()
    }
  })
}
