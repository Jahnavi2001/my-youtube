/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import VideoCard, { AdVideoCard } from './VideoCard'
import VIDEO_LIST_API from "../utils/constants"
import { addVideosList } from "../store/videoSlice"

const VideoContainer = () => {

  const dispatch = useDispatch()

  const videoList = useSelector((store) => store.video.videoList)
  console.log("🚀 > VideoContainer > videoList:", videoList)
    
  useEffect(() => {
    fetchVideoList()
  }, [])

  const fetchVideoList = async() => {
    const data = await fetch(VIDEO_LIST_API)
    const json = await data.json()
    dispatch(addVideosList(json.items))
    
  }

  if (!videoList) {
    return (
      <div>
        Error
      </div>
    )
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
    
    <div className="my-6 flex flex-wrap h-[80vh] overflow-y-scroll">
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