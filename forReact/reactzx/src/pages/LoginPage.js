import React, { Component } from "react"
import { Link } from "react-router"

import "_a/styles/loginpage.less"

import Img from "_c/Img"
import FormInput from "_c/FormInput"
import FormBtn from "_c/FormBtn"

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }
  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }
  handleSignIn = () => {
    console.log(111)
  }

  render() {
    return (
      <div className="login-page">
        <Img src="logo.png" />
        <form className="form-wrapper">
          <FormInput
            type="text"
            iconClass="icon-shouji"
            placeholder="用户名"
            value={this.state.username}
            onChange={this.handleUsername}
          />
          <FormInput
            type="password"
            iconClass="icon-mima"
            placeholder="密码"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <FormBtn isFull={true} onClick={this.handleSignIn}>
            登录
          </FormBtn>
          <FormBtn type="ordinary">忘记密码</FormBtn>
          <FormBtn>免费注册</FormBtn>&emsp;
          <FormBtn>游客登录</FormBtn>
        </form>
      </div>
    )
  }
}
