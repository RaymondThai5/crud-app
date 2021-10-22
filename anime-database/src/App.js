import { useState, useEffect } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [recentAnime, setRecentAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

  const [apiResponse, setApiResponse] = useState([]);

  //Retrieve the top anime through an api call. The top anime will be displayed by default.
  const GetTopAnime = async () => {
    const temp = await fetch(`http://localhost:9000/anime/top-anime`)
      .then((res) => res.json())
      .then((data) => {
        var parsedData = JSON.parse(data);
        setTopAnime(parsedData.top);
      });
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="content-area">
        <Sidebar />
        <MainContent topAnime={topAnime} searchResults={search} />
      </div>
    </div>
  );
}

export default App;
