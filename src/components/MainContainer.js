import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-5/6 mt-6 m-6">
      <ButtonsList />
      <VideoContainer/>
    </div>
  )
}

export default MainContainer;