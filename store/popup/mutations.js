export default {
  closePopup (store, name) {
    store.result[name] = false
  },
  showPopup (store, name) {
    for (const key in store.result) {
      if (key !== name) {
        store.result[key] = false
      } else {
        store.result[key] = true
      }
    }
  }
}
