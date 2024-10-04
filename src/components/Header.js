import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showLangButton = useSelector(store => store.gpt.showGptSearch)
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
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute flex justify-between w-screen  px-8 py-2 bg-gradient-to-b from-black z-10">
      <div>
        <img className="w-44" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex justify-center items-center gap-2">
         {showLangButton && <select className="px-4 py-2 rounded-md outline-none bg-gray-900 text-white" onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            onClick={handleGptSearchClick}
            className="px-4 py-1 bg-blue-500 text-white rounded-lg text-[16px] mx-2 font-medium"
          >
           {showLangButton ? "HomePage": "GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-md"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="px-4 mx-2 bg-red-600 py-1 rounded-md text-[16px] text-white font-medium"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
