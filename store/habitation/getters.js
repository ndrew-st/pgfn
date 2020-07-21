import typeHousing from '~/constants/consts/typeOfHousing'

export default {
  title: state => `${parseInt(state.result.typeOfHousing) === 0 ? `${state.result.numberOfRooms}-к квартира` : typeHousing[parseInt(state.result.typeOfHousing)]}, ${state.result.areaOfHousin} м² `
}
