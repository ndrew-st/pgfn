export default axios => resource => ({
  subscribeEmail (email) {
    return axios.get(`${resource}/subscribe?email=${email}`)
  }
})

// export const login = async (phone, password) => {
//   // const data = await axios.post('api/users/login', { phone, password })
//   // return data
//   console.log('мы зашли в логин на user.js ' + password)
//   // const data = await setTimeout(() => {
//   //   const a = { name: 'Иоанн', test: '654987' }
//   //   return a
//   // }, 2000)
//   // debugger

//   setTimeout(() => { }, 3000)

//   console.log('мы в конце user.js ')
//   return 'data456'
// }

// export const login = new Promise(function (resolve, reject) {
//   console.log('мы в user.js ')
//   setTimeout(() => resolve('Иоанн'), 3000)
// })

// // вариант работает
// export const makePr = (phone, pwd) => new Promise((resolve, reject) => {
//   const sec = new Date().getSeconds()
//   console.log('Начало кода, sec = ' + sec + ' pass ' + pwd + ' phone ' + phone)
//   setTimeout(() => {
//     if (sec % 2) {
//       console.log('Дождались, нечётная секунда, sec = ' + sec)
//       reject(sec)
//     } else {
//       const otv = { im: 'ivan' }
//       console.log('Дождались, чётная секунда, sec = ' + otv)
//       resolve(otv)
//     }
//   }, 2000)
// })

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
