import { createStore, applyMiddleware } from "redux"
import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

// 应用一些中间件
const storeEnhancer =  applyMiddleware(thunkMiddleWare)

const store = createStore(reducer, storeEnhancer)

export default store