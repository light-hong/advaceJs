import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from "react-router"

import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import ListPage from "./ListPage"
import DetailPage from "./DetailPage"

/* export default class App extends Component {
  render() {
    return (
      // < LoginPage />
      // <HomePage />
      // <ListPage />
      <DetailPage />
    )
  }
} */
const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={LoginPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/list" component={ListPage} />
    <Route path="/detail" component={DetailPage} />
  </Router>
)

ReactDOM.render(appRouter, document.getElementById("root"))
