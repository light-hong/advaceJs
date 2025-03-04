import React, { memo, useEffect } from "react"
import { connect } from "react-redux"

import { getTopBannersAction } from "./store/actionCreators"

function DisRecommend(props) {
  const { getBanners, topBanners } = props
  useEffect(() => {
    getBanners()
  }, [getBanners])

  return <div>disRecommend:{topBanners.length}</div>
}

const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
})

const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannersAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(DisRecommend))
