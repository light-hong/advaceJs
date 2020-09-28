import React, { PureComponent } from "react"

import store from "../store"
import { subAction } from "../store/actionCreator"

export default class about extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter,
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h1> Home </h1>
        <h2> 当前计数: {this.state.counter} </h2>
        <button onClick={(e) => this.subNumber(3)}> -3 </button>
      </div>
    )
  }

  subNumber(data) {
    store.dispatch(subAction(data))
  }
}
