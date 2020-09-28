import React from "react"

import { subAction } from "../store/actionCreator"
import { connect } from '../utils/connect'

function About(props) {
    return (
      <div>
        <h1> Home </h1>
        <h2> 当前计数: {props.counter} </h2>
        <button onClick={(e) => props.subNumber(3)}> -3 </button>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    subNumber(data) {
      dispatch(subAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
