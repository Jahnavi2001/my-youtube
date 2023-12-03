/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { Outlet, useNavigate } from 'react-router-dom'
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/auth");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Body