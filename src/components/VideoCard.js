import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ data }) => {

  const showMenu = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = data;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className={"rounded-lg my-6 mx-4 cursor-pointer " + (showMenu ? "w-[368px]" : "w-80")}>
      <img
        className={"rounded-lg " + (showMenu ? "w-[368px]" : "w-80")}
        src={thumbnails.medium.url}
        alt="video-data"
      />
      <div className="px-2 py-3 flex flex-col gap-1">
        <div className="text-md font-bold line-clamp-2">{title}</div>
        <div className="text-sm">{channelTitle}</div>
        <div className="text-sm">{statistics.viewCount} views</div>
      </div>
    </div>
  );
};
export default VideoCard;

// HOC(Higher Order Component) - We can write like this (or) the one we written in swiggy project (learn-react)
export const AdVideoCard = ({data}) => {
    return (
      <div className="border">
        <VideoCard data={data} />
      </div>
    );
};
