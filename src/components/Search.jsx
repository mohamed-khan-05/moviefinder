import React, { useState } from "react";

const Search = (props) => {
  const { setSearch } = props;
  const [text, setText] = useState("");
  return (
    <div className="w-[100vw] flex justify-center items-center mt-8">
      <input
        placeholder="Enter movie name"
        className="w-[350px] border-b-2 border-gray-600 pl-2 text-[1.2rem]"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="border-1 rounded-xl mx-2 px-2 h-[40px]"
        onClick={() => {
          if (!text) {
            setSearch("John Wick");
          } else {
            setSearch(text);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
