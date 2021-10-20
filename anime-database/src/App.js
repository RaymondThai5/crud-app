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

  const GetTopAnime = async () => {
    // const temp = await fetch(`http://localhost:9000/testAPI`).then(
      const temp = await fetch(`http://localhost:9000/anime/top-anime`).then(
      (res) => res.json());
      // setTopAnime(temp.top.splice(0,5));
      setTopAnime(temp.top);
  };

  useEffect(() => {
    GetTopAnime();
  }, [])


  console.log(topAnime);

  return (
    <div className="App">
      <Header />

      <div className="content-area">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
