/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { toggleMenu } from "../store/appSlice";
import { cachedSearchData } from "../store/searchSlice";

const Header = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const [searchList, setSearchList] = useState([]);

  const [showSuggestionList, setShowSuggestionList] = useState(false);

  const searchCachedData = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchCachedData[searchQuery]) {
        fetchSearchList();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const fetchSearchList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSearchList(json[1]);
    dispatch(
      cachedSearchData({
        [searchQuery]: searchList,
      })
    );
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex shadow-sm items-center px-8 justify-between sticky top-0 bg-white z-10">
      <div className="flex items-center gap-5">
        <img
          onClick={handleToggleMenu}
          className="w-12 h-12 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburger-logo"
        />
        <a href="/">
          <img
            className="w-36 cursor-pointer"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="youtube-logo"
          />
        </a>
      </div>
      {user && (
        <>
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
          <img
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full"
            src={user.photoURL}
            alt="profile-icon"
          />
        </>
      )}
    </div>
  );
};

export default Header;
