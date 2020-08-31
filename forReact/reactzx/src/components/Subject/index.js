import React, { Component } from "react"
import { Flex } from "antd-mobile"

import "./subject.less"

export default class index extends Component {
  render() {
    return (
      <div className="subject">
        <Flex>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -50 }}></i>
              <p>Java EE</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -100 }}></i>
              <p>Go</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -150 }}></i>
              <p>Python</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -200 }}></i>
              <p>javascript</p>
            </a>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -250 }}></i>
              <p>IOS</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -300 }}></i>
              <p>大数据</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -350 }}></i>
              <p>C++</p>
            </a>
          </Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>
      </div>
    )
  }
}
