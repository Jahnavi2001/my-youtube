import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import moment from "moment";
import { CHANNEL_LIST_API } from "../utils/constants";

const VideoCard = ({ data }) => {
  const showMenu = useSelector((store) => store.app.isMenuOpen);

  const [channelList, setChannelList] = useState([]);

  const { snippet, statistics, contentDetails } = data;
  const { title, channelTitle, thumbnails, channelId, publishedAt } = snippet;

  const seconds = moment.duration(contentDetails?.duration).asSeconds();
  const duration = moment.utc(seconds * 1000).format("mm:ss");

  const fetchChannelList = async () => {
    const data = await fetch(CHANNEL_LIST_API + channelId);
    const json = await data.json();
    setChannelList(json.items[0]);
  };

  useEffect(() => {
    // fetchChannelList();
  }, []);

  return (
    <div
      className={
        "rounded-lg my-6 mx-4 cursor-pointer " +
        (showMenu ? "w-[368px]" : "w-80")
      }
    >
      <div className="relative">
        <span className="absolute right-2 bottom-2 bg-black text-white p-1 rounded-sm">
          {duration}
        </span>
        <img
          className={"rounded-lg " + (showMenu ? "w-[368px]" : "w-80")}
          src={thumbnails.medium.url}
          alt="video-data"
        />
      </div>
      <div className="flex gap-4 px-2 py-3">
        <div className="w-[40px] h-[40px] object-cover aspect-video">
          {channelList?.snippet && (
            <img
              className="rounded-full"
              src={channelList.snippet.thumbnails.medium.url}
              alt="channel-icon"
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-md font-bold line-clamp-2">{title}</div>
          <div className="text-sm">{channelTitle}</div>
          <div className="text-sm flex gap-1 items-center">
            <span>
              {numeral(statistics?.viewCount).format("0.0a").toUpperCase()} views
            </span>
            <span>•</span>
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;

// HOC(Higher Order Component) - We can write like this (or) the one we written in swiggy project (learn-react)
export const AdVideoCard = ({ data }) => {
  return (
    <div className="border">
      <VideoCard data={data} />
    </div>
  );
};
