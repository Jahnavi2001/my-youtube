import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const showMenu = useSelector((store) => store.app.isMenuOpen)

  return (
    <div className="p-8 pt-4 flex gap-4">
      <div className={showMenu ? "w-1/6" : ''}>
        <Sidebar />
      </div>
      <div className={showMenu ? "w-5/6" : "w-[98.33%]"}>
        <ButtonsList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
