import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import SearchContent from "./components/SearchContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [currentAnime, setCurrentAnime] = useState([]);
  const [recentAnime, setRecentAnime] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchController = new AbortController();

  //Used to modify the string in order to conform to the api's requirements
  //Replaces spaces with slashes, and adds a slash at the end of the string
  const modifyString = (stringValue) => {
    var result = stringValue.replace(/ /g, "/");
    result = result + "/";
    return result;
  };

  //Retrieve the top anime through an api call. The top anime will be displayed by default.
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1`).then(
      (res) => res.json()
    );

    setAnime(temp.top);

    //Set the top 5 anime for the sidebar selection
    var topAnimeTitles = [];
    for (var i = 0; i < 5; i++) {
      topAnimeTitles.push(temp.top[i].title);
    }
    setTopAnime(topAnimeTitles);
  };

  const GetSearchAnime = async (searchQuery) => {
    const { signal } = fetchController;

    //Cancel the fetch request if the tiem to request info exceeds 5 seconds
    let fetchAnimeTimeout = setTimeout(() => {
      fetchController.abort();
      console.log("aborted fetch anime");
      setAnime("");
    }, 5000);

    const temp = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=" +
        modifyString(searchQuery) +
        "&page=1",
      { signal }
    ).then((res) => res.json());

    setAnime(temp.results);
    console.log("search anime extracted");
    clearTimeout(fetchAnimeTimeout);
    fillRecentAnime(searchQuery);
  };

  //Creates a list of recently searched anime
  const fillRecentAnime = (searchQuery) => {
    console.log("the search query is: " + searchQuery);
    if (recentAnime.indexOf(searchQuery) == -1) {
      if (recentAnime.length >= 5) {
        recentAnime.shift();
      }
      setRecentAnime((recentAnime) => [...recentAnime, searchQuery]);
    } else {
      console.log("duplicate...not adding");
    }
  };
  useEffect(() => {
    GetTopAnime();
    setSearch("");
  }, []);

  return (
    <Router>
      <div className="app">
        {currentAnime}
        <Header
          search={search}
          setSearch={(searchQuery) => setSearch(searchQuery)}
          getSearchAnime={GetSearchAnime}
        />
        <div className="content-area">
          <Sidebar
            recentAnime={recentAnime}
            topAnime={topAnime}
            setSearch={(searchQuery) => setSearch(searchQuery)}
            getSearchAnime={GetSearchAnime}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <SearchContent
                  {...props}
                  animeArr={anime}
                  setCurrentAnime={(anime) => setCurrentAnime(anime)}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
