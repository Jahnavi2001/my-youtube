import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachedSearchData } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const [searchList, setSearchList] = useState([]);

  const [showSuggestionList, setShowSuggestionList] = useState(false);

  const searchCachedData = useSelector(store => store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
      if(!searchCachedData[searchQuery]){
        fetchSearchList();
      }
    }, 200)

    return () => {
      clearInterval(timer)
    }

  }, [searchQuery]);

  const fetchSearchList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchList(json[1]);
    dispatch(cachedSearchData({
      [searchQuery]: searchList
    }))
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex shadow-sm items-center px-8 justify-between sticky top-0 bg-white">
      <div className="flex items-center gap-5">
        <img
          onClick={handleToggleMenu}
          className="w-12 h-12 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburger-logo"
        />
        <img
          className="w-36"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="relative">
        <div>
          <input
            className="w-[600px] border rounded-l-full py-2 px-6"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestionList(true);
            }}
            onBlur={() => {
              setShowSuggestionList(false);
            }}
          />
          <button className="bg-gray-200 border rounded-r-full p-2">
            Search
          </button>
        </div>
        {showSuggestionList && (
          <div className="absolute bg-white rounded-2xl p-4 shadow-lg border border-gray-200 w-[37.5rem] mt-0.5">
            <ul>
              {searchList.map((item) => (
                <li className="p-2 hover:bg-gray-200 rounded-lg" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="w-10 h-10"
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt="profile-icon"
        />
      </div>
    </div>
  );
};

export default Header;
