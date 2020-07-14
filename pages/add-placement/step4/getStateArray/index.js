export function getStateArray (start = '00:00', end = '23:59', block3 = null) {
  const stateArray = []
  for (let ind = 0; ind < 7; ind++) {
    if (block3 !== null) {
      if (!block3[ind].checked) {
        continue
      }
    }
    stateArray.push({
      day: ind,
      intervalTime: {
        start: getTime(block3 === null ? start : block3[ind].intervalTime.timeStart),
        end: getTime(block3 === null ? end : block3[ind].intervalTime.timeEnd)
      }
    })
  }
  console.log('stateArray:', stateArray)
  return stateArray
}

function getTime (timePoint) {
  return new Date(1970, 0, 1, timePoint.substr(0, 2), timePoint.substr(3, 2))
}
