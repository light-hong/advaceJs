import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleWare from 'redux-thunk'

import reducer from './reducer'

// 支持redux-devtools工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true})|| compose

// 应用一些中间件
const storeEnhancer =  applyMiddleware(thunkMiddleWare)

const store = createStore(reducer, composeEnhancers(storeEnhancer))

export default store