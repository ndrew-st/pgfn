export default axios => resource => ({
  getDirection (city) {
    return axios.get(`${resource}?city=${city}`)
  },
  searching (search) {
    return axios.get(`${resource}?search=${search}`)
  },
  getDataSearch ({ search, date, guests, limit, offset }) {
    return axios.get(`${resource}?search=${search}&date=${date}&params=[{ "params.guests": ${guests} }]&limit=${limit}&offset=${offset}`)
  },
  updateTabs (url) {
    return axios.get(`${resource}${url}`)
  },
  getUserPlacement () {
    return axios.get(`${resource}?user=true`)
  },
  getFilteredData () {
    return axios.get(`${resource}`)
  },
  getCatalog (limit, offset) {
    return axios.get(`${resource}?limit=${limit}&offset=${offset}`)
  },
  getCatalogFilter (type, page) {
    // type - step, page - request or placement
    return axios.get(`${resource}/filter?type=${type}&page=${page}`)
  },
  addPlacement (apData) {
    return axios.post(`${resource}`, apData)
  }
})
