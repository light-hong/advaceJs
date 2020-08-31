import React, { Component } from 'react'

import "./formBtn.less"

export default class index extends Component {
  render() {
    return (
      this.props.type === 'ordinary' ? <a href="###">{this.props.children}</a> : 
      <button onClick={this.props.onClick} className={`btn ${this.props.isFull ? "full": ""}`}>{this.props.children}</button>
    )
  }
}
