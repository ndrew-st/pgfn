export default {
  direction: state => state.result.direction,
  apartments: state => state.result.apartments,
  services: state => state.result.services,
  head: (state) => {
    return {
      title: state.result.title,
      description: state.result.description,
      background: state.result.background
    }
  },
  count: state => state.result.count
}
