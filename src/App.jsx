import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("John Wick");
  const [data, setData] = useState({
    Title: null,
    Genre: null,
    Year: null,
    Rated: null,
    Poster: null,
  });
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?t=${search}&apikey=3a95680b`)
      .then((res) => {
        let d = res.data;
        setData({
          Title: d.Title,
          Genre: d.Genre,
          Year: d.Year,
          Rated: d.Rated,
          Poster: d.Poster,
        });
      });
  }, [search]);
  return (
    <div className="absolute w-[100vw] h-[100vh] bg-white">
      <Search setSearch={setSearch} />
      <Card data={data} search={search} />
    </div>
  );
};

export default App;
