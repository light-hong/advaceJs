import React, { Component } from "react"

import "../../assests/fonts/iconfont.css"
import "./formInput.less"

export default class index extends Component {
  render() {
    return (
      <div className="input-group">
        <i className={`iconfont ${this.props.iconClass}`}></i>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}
