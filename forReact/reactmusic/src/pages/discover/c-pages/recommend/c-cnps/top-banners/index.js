import React, { memo, useEffect, useState, useRef, useCallback } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"

import { getTopBannersAction } from "../../store/actionCreators"

import { Carousel } from "antd"
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style"

export default memo(function TopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.topBanners
      // topBanners: state.get('recommend').get('topBanners') // 使用immutable要通过get获取数据
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
    )
  const dispatch = useDispatch()
  
  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const bannerChange = useCallback(
    (from, to) => {
      setTimeout(() => {
        setCurrentIndex(to)
      }, 0)
    },
    [],
  )

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    // 定义bgImage属性可以在styled-components接收
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
