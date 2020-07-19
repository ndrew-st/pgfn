export default {
  addData (state, data) {
    // debugger
    // const keyArray = ['price', 'byTheDay', 'days']

    // let curField = state.result[keyArray[0]]
    // for (let i = 1; i < keyArray.length - 1; ++i) {
    //   curField = curField[keyArray[i]]
    // }
    // curField[keyArray[keyArray.length - 1]] = data.value
    state.result[data.key] = data.value
    // console.log('mutation')
  },
  setItemSecondLevel (state, data) {
    if (data.level === 'params') {
      state.result.params.push({ typeOfParam: data.key, paramValue: data.value })
    } else {
      state.result[data.level][data.key] = data.value
    }
  },
  removeItemSecondLevel (state, data) {
    if (data.level === 'params') {
      // debugger
      const remItem = state.result.params.findIndex(item => item.typeOfParam === data.key)
      state.result.params.splice(remItem, 1)
    }
  },
  addPrice (state, data) {
    state.result.price[data.type].push(data.data)
  },
  refreshPrice (state, data) {
    const refDay = state.result.price[data.type].find(item => item.days === data.data.days)
    refDay.price = data.data.price
    refDay.pledge = data.data.pledge
    refDay.commission = data.data.commission
  },
  removePrice (state, data) {
    // debugger
    const remDay = state.result.price[data.type].findIndex(item => item.days === data.days)
    state.result.price[data.type].splice(remDay, 1)
  },
  setBed (state, data) {
    const el = state.result.sleepingPlace.find(item => item.typeOfPlace === data.typeOfPlace)
    if (el === undefined) {
      state.result.sleepingPlace.push({ typeOfPlace: data.typeOfPlace, amount: data.amount })
    } else {
      el.amount = data.amount
    }
  },
  removeBed (state, data) {
    const elInd = state.result.sleepingPlace.findIndex(item => item.typeOfPlace === data.typeOfPlace)
    if (data.amount === 0) {
      state.result.sleepingPlace.splice(elInd, 1)
    } else {
      state.result.sleepingPlace[elInd].amount = data.amount
    }
  }
  // weekDayIn (state, data) {
  //   const el = state.result.reservation[data.sector].find(item => item.day === data.weekDay)
  //   if (el === undefined) {
  //     state.result.reservation[data.sector].push({
  //       day: data.weekDay,
  //       intervalTime: {
  //         start: new Date(1970, 0, 1, data.timeStart.substr(0, 2), data.timeStart.substr(3, 2)),
  //         end: new Date(1970, 0, 1, data.timeFinish.substr(0, 2), data.timeFinish.substr(3, 2))
  //       }
  //     })
  //   } else {
  //     el.intervalTime = {
  //       start: new Date(1970, 0, 1, data.timeStart.substr(0, 2), data.timeStart.substr(3, 2)),
  //       end: new Date(1970, 0, 1, data.timeFinish.substr(0, 2), data.timeFinish.substr(3, 2))
  //     }
  //   }
  // },
  // weekDayOut (state, data) {
  //   const elInd = state.result.reservation[data.sector].findIndex(item => item.day === data.weekDay)
  //   if (elInd !== -1) {
  //     state.result.reservation[data.sector].splice(elInd, 1)
  //   }
  // }
}
