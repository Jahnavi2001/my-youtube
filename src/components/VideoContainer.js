import React, { useEffect, useState } from "react"
import VideoCard, { AdVideoCard } from './VideoCard'
import VIDEO_LIST_API from "../utils/constants"
import {Link} from 'react-router-dom'

const VideoContainer = () => {

  const [videoList, setVideoList] = useState([])
    
  useEffect(() => {
    fetchVideoList()
  }, [])

  const fetchVideoList = async() => {
    const data = await fetch(VIDEO_LIST_API)
    const json = await data.json()
    setVideoList(json.items)
  }

  if (!videoList.length) {
    return (
      <div className="flex flex-wrap mt-4">
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
        <div className="bg-gray-100 rounded-lg w-[368px] h-56 my-6 mx-4"></div>
      </div>
    )
  }

  return (
    
    <div className="my-6 flex flex-wrap">
      <AdVideoCard data={ videoList[45]} />
      {
        videoList.map((video) => (
          <Link to={'/watch?v=' + video.id} key={video.id} >
            <VideoCard data={video} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer