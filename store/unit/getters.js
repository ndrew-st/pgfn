import typeHousing from '~/constants/consts/typeOfHousing'

export default {
  title: ({ type, result }) => {
    if (type === 'habitation') {
      return `${parseInt(result.typeOfHousing) === 0 ? `${result.numberOfRooms}-к квартира` : typeHousing[parseInt(result.typeOfHousing)]}, ${result.areaOfHousin} м²`
    } else {
      return `Запрос на аренду жилья в г. ${result.address.city}`
      // return `Запрос на аренду жилья в г. ${result.address.city}, ${result.address.region}`
    }
  },
  intro: ({ type, result: { title, typeOfHousing, areaOfHousin: { start, end } } }) => {
    return type === 'habitation' ? title : `${typeHousing[typeOfHousing]}, ${start}-${end} м²`
  },
  date: ({ type, result }) => {
    return type === 'habitation' ? result.date : result.params.find(item => item.typeOfParam === 'datesOfStay').paramValue
  },
  countPlaces: ({ type, result }) => {
    if (type === 'habitation') {
      return result.sleepingPlace && result.sleepingPlace.reduce((sum, cur) => sum + (cur.typeOfPlace === 'bunkBed' ? parseInt(cur.amount) * 2 : parseInt(cur.amount)), 0)
    } else {
      const res = result.params.find(item => item.typeOfParam === 'guests').paramValue
      let count = 0

      for (const key in res) {
        count += res[key]
      }

      return count
    }
  }
}
