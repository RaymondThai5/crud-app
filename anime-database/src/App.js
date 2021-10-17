import { useState, useEffect } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <div className="App">
      <Header/>

      <div class="content-area">
      <Sidebar/>
      <MainContent/>
      </div>
    </div>
  );
}

export default App;
