import axios from 'axios'

// export const makePr = axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')

// // работает
// export const makePr = () => axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

export const makePr = () => axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')
