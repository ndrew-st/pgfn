import addModuleName from '~/constants/_helpers/addModuleName'

export const moduleNameUnit = 'unit'

export const getPlacementAction = 'GET_PLACEMENT'
export const getRequestAction = 'GET_REQUEST'
export const setTypePageAction = 'SET_TYPE_PAGE'

export const getPlacement = addModuleName(moduleNameUnit, getPlacementAction)
export const getRequest = addModuleName(moduleNameUnit, getRequestAction)
export const setTypePage = addModuleName(moduleNameUnit, setTypePageAction)
