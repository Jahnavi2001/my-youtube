import React from "react"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const showMenu = useSelector((store) => store.app.isMenuOpen)

  // Early return pattern
  if (!showMenu) return null

  return (
    <div className="w-1/6 p-6 pr-0 shadow-md h-[91vh] overflow-y-auto">
      <ul className="flex flex-col gap-2">
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>History</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>

      <h1 className="font-bold pt-6 pb-1">Subscriptions</h1>
      <ul className="flex flex-col gap-2">
        <li>Star Maa</li>
        <li>Apple</li>
        <li>Zee Telugu</li>
        <li>Disney Hotstar</li>
        <li>Aha VideoIn</li>
      </ul>

      <h1 className="font-bold pt-6 pb-1">Explore</h1>
      <ul className="flex flex-col gap-2">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learing</li>
        <li>Podcasts</li>
        <li>Fashion & Beauty</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learing</li>
        <li>Podcasts</li>
        <li>Fashion & Beauty</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learing</li>
        <li>Podcasts</li>
        <li>Fashion & Beauty</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learing</li>
        <li>Podcasts</li>
        <li>Fashion & Beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar