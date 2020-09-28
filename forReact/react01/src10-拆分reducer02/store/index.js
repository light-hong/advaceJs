import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleWare from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import saga from './saga'

// 支持redux-devtools工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true})|| compose

// 创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware()

// 应用一些中间件
const storeEnhancer = applyMiddleware(thunkMiddleWare, sagaMiddleware)

const store = createStore(reducer, composeEnhancers(storeEnhancer))

// 运行redux-saga中间件
sagaMiddleware.run(saga)

export default store