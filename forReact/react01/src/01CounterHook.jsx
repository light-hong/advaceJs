import React, { useState } from 'react'

export default function CounterHook() {
  /**
   * Hook: useState
   * 本身是一个函数
   *    参数和返回值：
   *    1.参数：作用是给创建出来的状态一个默认值
   *    2.返回值：数组
   *            元素1：当前state的值
   *            元素2：设置新的值时使用的函数
   */

  const [state, setstate] = useState(0)

  return (
    <div>
      <h2>当前计数：{state}</h2>
      <button onClick={e => setstate(state + 1)}>+1</button>
      <button onClick={e => setstate(state - 1)}>-1</button>
    </div>
  )
}
