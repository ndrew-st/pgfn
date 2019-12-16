export default {
  mainMenu (state) {
    return state.mainMenu
  },
  smallMenu (state) {
    return state.mainMenu.filter(item => item.type !== 'separator')
  },
  fullMenu (state) {
    return [
      ...state.mainMenu,
      ...state.userMenu
    ]
  },
  config (state) {
    return state.config
  }
}
