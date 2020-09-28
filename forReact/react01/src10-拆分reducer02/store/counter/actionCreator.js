import {
  ADD_NUMBER,
  SUB_NUMBER
} from "./constants"

export const addAction = data => ({
  type: ADD_NUMBER,
  data
})
export const subAction = data => ({
  type: SUB_NUMBER,
  data
})
