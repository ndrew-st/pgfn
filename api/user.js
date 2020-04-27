import axios from 'axios'

// export const testPr = () => axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')

export const loginPromise = param => axios.post('https://dev.personal.guide/api/users/login', param)

export const registerPromise = param => axios.post('https://dev.personal.guide/api/users/register', param)

export const reoveryPromise = param => axios.post('https://dev.personal.guide/api/users/access-recovery', param)

export const checkCodePromise = param => axios.post('https://dev.personal.guide/api/users/check-code', param)

export const getCodePromise = param => axios.post('https://dev.personal.guide/api/users/get-code', param)
