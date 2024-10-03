import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchbar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%] mx-auto w-10/12 max-w-screen-2xl">
      <form action="" className="w-8/12 mx-auto ">
        <input
          type="text"
          name=""
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-9/12 px-6 py-4 text-[20px] outline-none rounded-l-full"
        />
        <button className="w-3/12 py-4 px-4 bg-red-600 text-[20px] text-white font-semibold hover:opacity-90 rounded-r-full">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
