import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value  
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "=" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "=" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="main-poster"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white bg-black p-12 w-3/12 mx-auto right-0 left-0 my-36 bg-opacity-85 rounded-md"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          className="px-4 py-4 w-full my-4 bg-transparent border border-1 border-slate-500 rounded-md text-white"
          type="text"
          placeholder="Email or mobile number"
        />
        {!isSignInForm && (
          <input
            ref={name}
            className="px-4 py-4 w-full my-4 bg-transparent border border-1 border-slate-500 rounded-md text-white"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        )}
        <input
          ref={password}
          className="px-4 py-4 w-full my-4 bg-transparent border border-1 border-slate-500 rounded-md text-white"
          type="password"
          name="password"
          placeholder="Password"
        />
        <p className="font-semibold text-red-600">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="py-2 px-4 w-full my-4 bg-red-700 text-white rounded-md font-semibold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="text-slate-300 cursor-pointer">
          {isSignInForm ? "New to Netflix ? " : "Already Registered ? "}
          <span className="font-semibold text-white">
            {isSignInForm ? "Signup Now" : "SignIn Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
