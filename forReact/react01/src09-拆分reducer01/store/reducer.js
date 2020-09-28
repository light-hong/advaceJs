import { ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constants"

// 拆分counter reducer
const initialCounterState = {
  counter: 0
}
function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.data}
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.data}
    default:
      return state
  }
}
// 拆分home reducer
const initialHomeState = {
  banners: [],
  recommends: []
}
function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return {...state, banners: action.banners}
    case CHANGE_RECOMMENDS:
      return {...state, recommends: action.recommends}
    default:
      return state
  }
}

function reducer(state = {}, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}

export default reducer
