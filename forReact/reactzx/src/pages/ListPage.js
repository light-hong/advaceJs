import React, { Component } from "react"

import HomeHeader from "_c/HomeHeader"
import MyListView from "_c/MyListView"

export default class ListPage extends Component {
  render() {
    return (
      <div className="list-page">
        <HomeHeader />
        <div className="sub-list">
            <div className="sub-list-header">相关资讯</div>
            <MyListView />
        </div>
      </div>
    )
  }
}
