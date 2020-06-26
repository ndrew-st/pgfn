export default {
  addData (state, data) {
    state.result[data.key] = data.value
    console.log('mutation')
  }
}
