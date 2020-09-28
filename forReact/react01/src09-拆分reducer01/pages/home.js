import React, { PureComponent } from "react"
import { connect } from 'react-redux'
import axios from 'axios'
import { addAction, getHomeMultidataAction, fetchHomeMultidataAction } from "../store/actionCreator"

class home extends PureComponent {

  componentDidMount() {
    /* axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data
      this.props.getBanners(data.banner.list)
      this.props.getRecommends(data.recommend.list)
    }) */
    this.props.getHomeMultidata()
  }

  render() {
    return (
      <div>
        <h1> Home </h1>
        <h2> 当前计数: {this.props.counter} </h2>
        <button onClick={(e) => this.props.addNumber(5)}> +5 </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counterInfo.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(data) {
    dispatch(addAction(data))
  },
  getHomeMultidata() {
    dispatch(fetchHomeMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(home)
