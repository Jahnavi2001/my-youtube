import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate()
  const showMenu = useSelector((store) => store.app.isMenuOpen);

  const handleLogout = () => {
    console.log("handleLogout");
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  };

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
        <li>
          <span className="flex items-center gap-4 cursor-pointer" onClick={handleLogout}>
            <div>
              <MdLogout size={32} />
            </div>
            {showMenu && <div>Logout</div>}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
