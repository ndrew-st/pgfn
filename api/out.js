import axios from 'axios'

// export const makePr = axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')

// // работает
// export const makePr = () => axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

export const makePr = () => axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')

export const serverRequest = async (operation, param) => {
  try {
    const userData = await axios.post('https://dev.personal.guide/api/users/' + operation, param)
    return userData.data
  } catch (e) {
    if (e.response.data) {
      return e.response.data
    } else {
      console.error({ message: 'Bad request' })
    }
  }
}
