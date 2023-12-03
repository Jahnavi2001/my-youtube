import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineThumbUp,
  MdHistory,
  MdLibraryBooks,
} from "react-icons/md";

const Sidebar = () => {
  const showMenu = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  // if (!showMenu) return null;

  return (
    <div>
      <ul className="flex flex-col gap-6">
        <li>
          <Link to="/" className="flex items-center gap-4">
            <div>
              <MdHomeFilled size={32} />
            </div>
            {showMenu && <div>Home</div>}
          </Link>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <div>
              <MdOutlineSubscriptions size={32} />
            </div>
            {showMenu && <div>Subscriptions</div>}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <div>
              <MdOutlineThumbUp size={32} />
            </div>
            {showMenu && <div>Liked Videos</div>}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <div>
              <MdHistory size={32} />
            </div>
            {showMenu && <div>History</div>}
          </div>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <div>
              <MdLibraryBooks size={32} />
            </div>
            {showMenu && <div>Library</div>}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
