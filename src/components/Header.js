import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL: photoURL, }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute flex justify-between w-screen  px-8 py-2 bg-gradient-to-b from-black z-10">
      <div>
        <img
          className="w-44"
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && <div className="flex justify-center items-center gap-2">
        <img
          className="w-12 h-12 rounded-sm"
          src={user?.photoURL}
          alt="usericon"
        />
        <button 
          onClick={handleSignOut}
          className="px-2 bg-red-600 py-1 rounded-md text-white font-semibold"
        >
          (sign out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
