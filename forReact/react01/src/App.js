import React, { useState, createContext } from "react"

import CounterHook from "./01CounterHook"
import MutliStateHook from "./02MutliStateHook"
import ComplexStateHook from "./03ComplexStateHook"
import HookCounterChangeTitle from "./04HookCounterChangeTitle"
import EffectHookCancelDemo from "./05EffectHookCancelDemo"
import MultiEffectHookDemo from "./06MultiEffectHookDemo"
import ContextHookDemo from "./07ContextHookDemo"
import UseReducerHook from "./08UseReducerHook"

export const UserContext = createContext()
export const TokenContext = createContext()

export const ThemeContext = createContext()

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* 1.useState */}
      {/* <CounterHook /> */}
      {/* <MutliStateHook /> */}
      {/* <ComplexStateHook /> */}

      {/* 2.useEffect */}
      {/* <HookCounterChangeTitle/> */}
      {/* {show && <EffectHookCancelDemo/>} */}
      {/* <MultiEffectHookDemo/> */}

      {/* 3.useContext */}
      {/* <UserContext.Provider value={{name: "why", age: 18}}>
        <ThemeContext.Provider value={{fontSize: "30px", color: "red"}}>
          <ContextHookDemo/>
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 4.useReducer */}
      <UseReducerHook />

      <button onClick={(e) => setShow(!show)}>切换</button>
    </div>
  )
}

export default App
