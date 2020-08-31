import React, { Component } from "react"
import { NavBar, SearchBar, Icon } from "antd-mobile"

import Img from "_c/Img"

import "./homeHeader.less"

export default class index extends Component {
  render() {
    return (
      <div className="header-wrapper">
        {/* <NavBar
          leftContent={
            this.props.isDetail
              ? ""
              : [
                  this.props.isFooter ? (
                    ""
                  ) : (
                    <Img key="0" src="logo.png" height={30} />
                  ),
                ]
          }
          icon={this.props.isDetail ? <Icon type="left" /> : ""}
          // onLeftClick={() => console.log("onLeftClick")}
        >
          {this.props.isDetail ? (
            <Img src="logo.png" height={30} />
          ) : this.props.isFooter ? (
            <div style={{ flex: "1", textAlign: "right" }}>
              <Img src="logo.png" height={30} />
            </div>
          ) : (
            <SearchBar placeholder="搜索" maxLength={8} />
          )}
        </NavBar> */}
        {this.props.isDetail ? (
          <NavBar
            icon={<Icon type="left" />}
            onLeftClick={() => window.history.go(-1)}
          >
            <a href="#/home">
              <Img src="logo.png" height={30} />
            </a>
          </NavBar>
        ) : (
          <NavBar
            leftContent={[
              this.props.isFooter ? (
                ""
              ) : (
                <a href="#/home">
                  <Img key="0" src="logo.png" height={30} />
                </a>
              ),
            ]}
          >
            {this.props.isFooter ? (
              <div style={{ flex: "1", textAlign: "right" }}>
                <Img src="logo.png" height={30} />
              </div>
            ) : (
              <SearchBar placeholder="搜索" maxLength={8} />
            )}
          </NavBar>
        )}
      </div>
    )
  }
}
