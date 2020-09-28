import { ADD_NUMBER, SUB_NUMBER } from "./constants"

const defaultState = {
  counter: 0
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.data}
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.data}
    default:
      return state
  }
}

export default reducer
