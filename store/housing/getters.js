export default {
  placementCoords: ({ placement }) => {
    return placement.apartments.map(({ address }) => address.geo)
  },
  requiresCoords: ({ request }) => {
    return request.request.map(({ address }) => address.geo)
  }
}
