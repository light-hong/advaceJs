// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  // player: playerReducer
})

export default cReducer