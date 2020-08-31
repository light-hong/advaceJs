import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className="img-div">
        <img src={require(`../../assests/images/${this.props.src}`)} alt="" height={this.props.height}/>
      </div>
    )
  }
}
