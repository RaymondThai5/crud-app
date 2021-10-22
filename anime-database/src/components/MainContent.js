import React from "react";

function MainContent(props) {
  return (
    <main>
      <div className="anime-grid">
        {props.topAnime.map((anime, index) => (
            <div className="anime-content" key={anime.mal_id}>
              <img className="anime-content-picture" src={anime.image_url}></img>
              <div className="anime-title">{anime.title}</div>
            </div>
        ))}

      </div>
    </main>
  );
}

export default MainContent;
