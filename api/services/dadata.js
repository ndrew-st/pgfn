export default axios => resource => ({
  sendRequest (data) {
    return axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      { query: data,
        // from_bound: { value: 'city' }, // чтобы искать только по городам
        // to_bound: { value: 'city' },
        // locations: [{
        //   region: 'крым' // указываешь крым и перестаёт нормально работать по улицам после ввода города
        // }],
        count: 5 },
      { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token 9b4233c7cb1251947bf36fea4a78d4d2b38fab03'
      }
      }
    )
  }
})
