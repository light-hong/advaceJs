import React, { Component } from "react"
import { Flex } from "antd-mobile"

import Img from "_c/Img"

export default class index extends Component {
  render() {
    return (
      <a href="#/detail">
        <Flex className="sub-list-item">
          <Flex.Item className="sub-list-left">
            <Img src={this.props.item.img} height={80} />
          </Flex.Item>
          <Flex.Item className="sub-list-right">
            <h3>{this.props.item.title}</h3>
            <p>{this.props.item.des}</p>
          </Flex.Item>
        </Flex>
      </a>
    )
  }
}
