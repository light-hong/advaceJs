import React, { Component } from "react"
import { Carousel } from "antd-mobile"

import Banner1 from '_a/images/banner1.png'
import Banner2 from '_a/images/banner2.png'
import Banner3 from '_a/images/banner3.png'

export default class index extends Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [Banner1, Banner2, Banner3],
      })
    }, 100)
  }
  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log("slide to", index)}
      >
        {this.state.data.map((val) => (
          <a
            key={val}
            href="###"
            style={{
              display: "inline-block",
              width: "100%",
              height: this.state.imgHeight,
            }}
          >
            <img
              src={val}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"))
                this.setState({ imgHeight: "auto" })
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}
