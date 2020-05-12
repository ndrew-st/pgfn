export default axios => resource => ({
  subscribeEmail (email) {
    return axios.get(`${resource}/subscribe?email=${email}`)
  }
})

// export const testPr = () => axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')

// export const loginPromise = param => axios.post('https://dev.personal.guide/api/users/login', param)

// export const registerPromise = param => axios.post('https://dev.personal.guide/api/users/register', param)

// export const reoveryPromise = param => axios.post('https://dev.personal.guide/api/users/access-recovery', param)

// export const checkCodePromise = param => axios.post('https://dev.personal.guide/api/users/check-code', param)

// export const makePr = function (phone, pwd) {
//   return new Promise((resolve, reject) => {
//     const sec = new Date().getSeconds()
//     console.log('Начало кода, sec = ' + sec + ' pass ' + pwd + ' phone ' + phone)
//     setTimeout(() => {
//       if (sec % 2) {
//         console.log('Дождались, нечётная секунда, sec = ' + sec)
//         reject(sec)
//       } else {
//         const otv = { im: 'ivan' }
//         console.log('Дождались, чётная секунда, sec = ' + otv)
//         resolve(otv)
//       }
//     }, 2000)
//   })
// }
// export const getCodePromise = param => axios.post('https://dev.personal.guide/api/users/get-code', param)
