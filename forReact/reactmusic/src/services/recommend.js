import request from './request'

export function getTopBanners(params) {
  return request({
    url: "/banner"
  })
}
