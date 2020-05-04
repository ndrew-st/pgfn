export default {
  direction: state => state.result.direction,
  apartments: state => state.result.apartments,
  services: state => state.result.services,
  head: (state) => {
    return {
      title: state.result.title,
      description: state.result.description,
      keywords: state.result.keywords
    }
  },
  header: (state) => {
    return {
      title: state.result.header,
      description: state.result.mainText,
      background: state.result.background
    }
  },
  count: state => state.result.count
}
