import React from 'react'
import { Redirect } from 'react-router-dom'

import Discover from '@/pages/discover'
import DisAlbum from '@/pages/discover/c-pages/album'
import DisArtist from '@/pages/discover/c-pages/artist'
import DisDjradio from '@/pages/discover/c-pages/djradio'
import DisRanking from '@/pages/discover/c-pages/ranking'
import DisRecommend from '@/pages/discover/c-pages/recommend'
import DisSongs from '@/pages/discover/c-pages/songs'
import Mine from '@/pages/mine'
import Friend from '@/pages/friend'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: DisRecommend
      },
      {
        path: "/discover/ranking",
        component: DisRanking
      },
      {
        path: "/discover/songs",
        component: DisSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: DisDjradio
      },
      {
        path: "/discover/artist",
        component: DisArtist
      },
      {
        path: "/discover/album",
        component: DisAlbum
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  }
]
export default routes
