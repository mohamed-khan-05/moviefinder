import React, { useEffect, useState } from "react";

const Card = (props) => {
  const { search, data } = props;
  const { Title, Genre, Year, Rated, Poster } = data;
  const [hover, setHover] = useState();
  let style = "";
  if (hover) {
    style = "brightness-50";
  } else {
    style = "brightness-100";
  }

  return (
    <div className="h-[70vh] flex flex-col items-center justify-center">
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="flex justify-center"
      >
        <img
          className={style}
          id="CardImage"
          src={Poster}
          alt="Movie not found"
        />
        <div
          hidden={!hover}
          className="absolute mt-[150px] cursor-default text-[1.5rem] text-center text-white"
        >
          <div className="max-w-[303px] px-1 break-words">{Rated}</div>
          <div className="max-w-[303px] px-1 break-words">{Genre}</div>
        </div>
      </div>
      <span className="flex text-[1.3rem]">
        <h1>{Title}</h1>
        <h1 className="pl-4">{Year}</h1>
      </span>
    </div>
  );
};

export default Card;
