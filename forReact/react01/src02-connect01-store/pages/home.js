import React, { PureComponent } from "react"

import { connect } from '../utils/connect'
import { addAction } from "../store/actionCreator"

class home extends PureComponent {
  render() {
    return (
      <div>
        <h1> Home </h1>
        <h2> 当前计数: {this.props.counter} </h2>
        <button onClick={(e) => this.props.addNumber(5)}> +5 </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(data) {
    dispatch(addAction(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(home)
