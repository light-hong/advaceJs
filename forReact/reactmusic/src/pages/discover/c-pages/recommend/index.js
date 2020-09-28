import React, { memo } from "react"

import TopBanners from './c-cnps/top-banners'
import { RecommendWrapper } from './style'

function DisRecommend() {
  return (
    <RecommendWrapper>
      <TopBanners />
    </RecommendWrapper>
  )
}

export default memo(DisRecommend)
