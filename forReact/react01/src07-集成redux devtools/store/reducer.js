import { ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constants"

const defaultState = {
  counter: 0,
  banners: [],
  recommends: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.data}
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.data}
    case CHANGE_BANNERS:
      return {...state, banners: action.banners}
    case CHANGE_RECOMMENDS:
      return {...state, recommends: action.recommends}
    default:
      return state
  }
}

export default reducer
