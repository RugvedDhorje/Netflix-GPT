import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [changeForm,setChangeForm] = useState(false);
    const toggleSignInForm = () => {
        setChangeForm(!changeForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_medium.jpg"
          alt="main-poster"
        />
      </div>
      <form className="absolute text-white bg-black p-12 w-3/12 mx-auto right-0 left-0 my-36 bg-opacity-85">
        <h1 className="text-3xl font-bold py-4">{changeForm ? "Sign In":"Sign Up"}</h1>
        <input
          className="px-4 py-4 w-full my-4 bg-transparent border border-1 border-slate-500 rounded-md text-white"
          type="text"
          placeholder="Email or mobile number"
        />
        {!changeForm && <input
          className="px-4 py-4 w-full my-4 bg-transparent border border-1 border-slate-500 rounded-md text-white"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />}
        <input
          className="px-4 py-4 w-full my-4 bg-transparent border border-1 border-slate-500 rounded-md text-white"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="py-2 px-4 w-full my-4 bg-red-700 text-white rounded-md font-semibold">
        {changeForm ? "Sign In":"Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="text-slate-300 cursor-pointer">
        {changeForm ? "New to Netflix ? ":"Already Registered ? "}
          <span className="font-semibold text-white">{changeForm ? "Signup Now":"SignIn Now"}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
