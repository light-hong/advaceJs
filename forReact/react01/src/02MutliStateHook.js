import React, { useState } from 'react'

export default function MutliStateHook() {
  const [counter, setCount] = useState(0)
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(['Tom', 'Kobe'])

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <h2>年龄：{age}</h2>
      <ul>
        {
          friends.map((item, index) => {
            return(
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
