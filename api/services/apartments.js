export default axios => resource => ({
  getDirection (city) {
    return axios.get(`${resource}`)
  },
  searching (search) {
    return axios.get(`${resource}?search=${search}`)
  },
  searchingDirectionOrCity (search) {
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
  getCatalog (limit, offset, filters) {
    return axios.get(`${resource}?limit=${limit}&offset=${offset}${filters}`)
  },
  addPlacement (apData) {
    return axios.post(`${resource}`, apData)
  },
  getItem (id) {
    return axios.get(`${resource}/${id}`)
  },
  addRequest (apData) {
    return axios.post('request', apData)
  }
})
