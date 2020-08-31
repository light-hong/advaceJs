import React, { Component } from "react"

import { Flex, Tabs, List } from "antd-mobile"

import HomeHeader from "_c/HomeHeader"
import HomeBanner from "_c/HomeBanner"
import Subject from "_c/Subject"
import SubList from "_c/SubList"
import Img from "_c/Img"

import "_a/fonts/iconfont.css"
import "_a/styles/homePage.less"

const Item = List.Item

const tabs = [
  { title: "产品" },
  { title: "出行" },
  { title: "深度" },
]

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeBanner />
        <Subject />
        <SubList />
        <div className="tab">
          <Tabs tabs={tabs} initialPage={0} useOnPan={false}>
            <div style={{ backgroundColor: "#fff" }}>
              <Flex className="home-tab-item">
                <Flex.Item className="home-tab-item-left">
                  <Img src="20191025091907842.gif" />
                </Flex.Item>
                <Flex.Item className="home-tab-item-right">
                  <h3>传三星计划为Galaxy S11配置可卷曲显示屏和可旋转摄像头</h3>
                  <div className="txt_info">
                    <i className="iconfont icon-shijian"></i>
                    <span>2小时前</span>
                    <div className="right">
                      <i className="iconfont icon-liulan"></i>
                      <span>63</span>
                    </div>
                  </div>
                </Flex.Item>
              </Flex>
              <Item arrow="horizontal" onClick={() => {}}>
                小米有品推出小寻定位书包，拥有8重定位系统
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                小米有品推出小寻定位书包，拥有8重定位系统
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                小米有品推出小寻定位书包，拥有8重定位系统
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                小米有品推出小寻定位书包，拥有8重定位系统
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                小米有品推出小寻定位书包，拥有8重定位系统
              </Item>
            </div>
            <div>
              <Item arrow="horizontal" onClick={() => {}}>
                小米有品推出小寻定位书包，拥有8重定位系统
              </Item>
            </div>
            <div>
              <Item arrow="horizontal" onClick={() => {}}>
                小米有品推出小寻定位书包，拥有8重定位系统
              </Item>
            </div>
          </Tabs>
        </div>
        <HomeHeader isFooter={true} />
        <div className="footer">
          <p>© 2018-2019 ICP备案：粤ICP备17147191号</p>
          <p>广州狼码教育科技有限公司</p>
          <p>办公电话：020-85628002</p>
          <p>地址：广州市天河区棠下大地商务港D栋603</p>
        </div>
      </div>
    )
  }
}
