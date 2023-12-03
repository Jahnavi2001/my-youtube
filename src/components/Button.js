import React from "react";
import { YOUTUBE_SEARCH_LIST_API } from "../utils/constants";
import { addVideosList } from "../store/videoSlice";
import { useDispatch } from "react-redux";

const Button = ({ name }) => {

  const dispatch = useDispatch()
  
  const handleCategoryButtonSearch = async () => {
    console.log("🚀 > Button > name:", name)
    const data = await fetch(YOUTUBE_SEARCH_LIST_API + name)
    const json = await data.json()
    console.log("🚀 > handleCategoryButtonSearch > json:", json)
    dispatch(addVideosList(json.items))
  }

  return (
    <div>
      <button className="bg-gray-100 rounded-md px-3 py-1 w-max" onClick={handleCategoryButtonSearch}>{name}</button>
    </div>
  );
};

export default Button;
