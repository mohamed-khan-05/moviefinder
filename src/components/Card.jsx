import React, { useEffect, useState } from "react";

const Card = (props) => {
  const { search, data } = props;
  const { Title, Genre, Year, Rated, Poster, Plot, Actors, Ratings } = data;
  const [hover, setHover] = useState();
  const [tab, setTab] = useState("Plot");
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
          <div className="max-w-[303px] px-1 break-words">{Ratings}</div>
        </div>
      </div>
      <span className="flex text-[1.3rem]">
        <h1>{Title}</h1>
        <h1 className="pl-4 pb-5">{Year}</h1>
      </span>
      <div className="flex w-[150px] mb-2 justify-between">
        <button
          className="border px-2"
          onClick={() => {
            setTab("Plot");
          }}
        >
          Plot
        </button>
        <button
          className="border px-2"
          onClick={() => {
            setTab("Actors");
          }}
        >
          Actors
        </button>
      </div>
      <div className="w-[300px] h-[150px] overflow-y-auto break-words">
        {tab === "Plot" ? <h1>{Plot}</h1> : null}
        {tab === "Actors" ? <h1>{Actors}</h1> : null}
      </div>
    </div>
  );
};

export default Card;
