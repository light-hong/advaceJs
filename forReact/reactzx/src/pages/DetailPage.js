import React, { Component } from 'react'

import HomeHeader from '_c/HomeHeader'
import SubList from "_c/SubList"
import Img from '_c/Img'

import { Flex } from "antd-mobile";

import "_a/fonts/iconfont.css"
import "_a/styles/detailPage.less"

export default class DetailPage extends Component {
  render() {
    return (
      <div className="detail-page">
        <div className="detail-header">
          <HomeHeader isDetail={true} />
        </div>
        <article>
          <h1>React 用于构建用户界面的 Javascript 库</h1>
          <p>
            <span>作者：天上的鱼</span>
            <span style={{ float: "right" }}>2020-06-12</span>
          </p>
          <Img src="dt.gif" />
        </article>
        <content>
          <p>
            Props、State的概念都很清晰，组件的普通属性是指在组件中直接挂载到this下的属性。其实，Props和State也是组件的两个普通属性，因为我们可以通过this.props
            和 this.state 直接获取到。那么Props、State 和
            组件的其他普通属性，分别应该在什么场景下使用呢？
          </p>
          <p>
            Props和State都是用于组件渲染的，也就是说，一个组件最终长成什么样，取决于这个组件的Props和State。Props和State的变化都会触发组件的render方法。但这两者也是有区别的。Props是只读的数据，它是由父组件传递过来的；而State是组件内部自己维护的状态，是可变的。State可以根据Props的变化而变化。如果组件中还需要其他属性，而这个属性又与组件的渲染无关（也就是render方法中不会用到），那么就可以把这个属性直接挂在到this下，而不是作为组件的一个状态。
          </p>
          <p>
            例如，组件中需要一个定时器，每隔几秒改变一下组件的状态，就可以定义一个this.timer属性，以备在componentWillUnmount时，清除定时器。
          </p>
          <p>
            父组件每次render方法被调用，或者组件自己每次调用setState方法，都会触发组件的render方法（前提是shouldComponentUpdate使用默认行为，总是返回true）。那么组件每次render，是不是都会导致实体DOM的重新创建呢？答案是，不是！
          </p>
          <p>
            React之所以比直接操作DOM的JS库快，原因是React在实体DOM之上，抽象出一层虚拟DOM，render方法执行后，得到的是虚拟DOM，React
            会把组将当前的虚拟DOM结构和前一次的虚拟DOM结构做比较，只有存在差异性，React才会把差异的内容同步到实体DOM上。如果两次render后的虚拟DOM结构保持一致，并不会触发实体DOM的修改。
          </p>
        </content>
        <p>
          <i className="iconfont icon-liulan"></i> <span>6325</span> 次观看
          <span style={{ float: "right" }}>
            <i className="iconfont icon-jubao"></i> 我要举报
          </span>
        </p>
        <SubList />
        <div className="comment">
          <div className="comment-header">热门评论</div>
          <Flex className="comment-box">
            <Flex.Item className="box-l">
              <div className="avatar-box">
                <Img src="avatar.jpg" />
              </div>
            </Flex.Item>
            <Flex.Item className="box-r">
              <p>
                <strong>爱学习的孩子</strong>
                <span style={{ float: "right" }}>
                  3 <i className="iconfont icon-dianzan"></i>
                </span>
              </p>
              <p className="comment-content">
                我们应该在组件的哪一个生命周期方法中发送网络请求呢？
              </p>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    )
  }
}
