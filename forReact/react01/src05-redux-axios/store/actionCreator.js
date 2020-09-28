import { ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constants"

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
