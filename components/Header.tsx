"use client";

import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div
        className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center flex-1 bg-black 
        px-4 md:px-20 py-6 md:py-8 shadow-lg shadow-gray-600"
      >
        <h2 className="text-neutral-200 text-transparent bg-gradient-to-b bg-clip-text from-lime-50 to-lime-500 hover:scale-125 transition-all text-3xl">
          tRelloW
        </h2>

        <div className="flex flex-1 justify-end items-center space-x-5 w-full">
          <form
            className="flex flex-1 md:flex-initial space-x-2 bg-white p-4 rounded-md shadow-lg
           hover:shadow-gray-500 transition-all"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-2 rounded-md outline-none"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar
            name="Sarah Habibi"
            round
            //color : lime-100
            color="#ecfccb"
            size="50"
            fgColor="black"
          />
        </div>
      </div>

      <div className="flex justify-center items-center px-5 py-5 w-full">
        <p className="flex justify-center items-center text-sm font-light shadow-2xl shadow-gray-500 rounded-2xl p-5 pr-5 italic bg-white md:w-3/5">
          <UserCircleIcon className="inline-block h-10 w-10 mr-1 text-red-300" />
          GPT is summarising your tasks for the day ...
        </p>
      </div>
    </header>
  );
};

export default Header;
