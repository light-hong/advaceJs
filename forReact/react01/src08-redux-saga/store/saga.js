import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects'
import axios from 'axios'

import {
  FETCH_HOME_MULTIDATA
} from './constants'
import {
  changBannersAction,
  changeRecommendsAction
} from './actionCreator'

function* fetchhomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  console.log(res)
  const data = res.data.data
  /* yield put(changBannersAction(data.banner.list))
  yield put(changeRecommendsAction(data.recommend.list)) */
  yield all([
    yield put(changBannersAction(data.banner.list)),
    yield put(changeRecommendsAction(data.recommend.list))
  ])
}

// 导出生成器函数
function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchhomeMultidata)
}

export default mySaga