import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function AnimeContent(props) {
  const [animeDetails, setAnimeDetails] = useState([]);

  const getAnimeDetails = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/anime/" + props.match.params.id
    ).then((res) => res.json());

    setAnimeDetails(temp);
  };

  useEffect(() => {
    getAnimeDetails();
  }, []);
  console.log(animeDetails);
  return (
    <animedetail>
      <div class="anime-info"></div>
      {props.match.params.id}
    </animedetail>
  );
}

export default AnimeContent;
