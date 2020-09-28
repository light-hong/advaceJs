import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA
} from "./constants"

import axios from 'axios'

export const addAction = data => ({
  type: ADD_NUMBER,
  data
})
export const subAction = data => ({
  type: SUB_NUMBER,
  data
})
export const changBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners
})
export const changeRecommendsAction = recommends => ({
  type: CHANGE_RECOMMENDS,
  recommends
})
// redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch) => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data
    dispatch(changBannersAction(data.banner.list))
    dispatch(changeRecommendsAction(data.recommend.list))
  })
}

// redux-saga中拦截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}
