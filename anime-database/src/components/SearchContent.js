import { useEffect, useState, useRef } from "react";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import OutsideAlerter from "../hooks/useClickOutside/index.js";

function SearchContent(props) {
  const [isModlActive, setIsModlActive] = useState(0);

  var modal = document.getElementById("modal");
  var body = document.getElementsByTagName("body")[0];
  var searchContent = document.getElementById("main");

  const openModal = () => {
    modal.style.display = "flex";
    setIsModlActive(1);
    body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    modal.style.display = "none";
    setIsModlActive(0);
    body.style.overflowY = "scroll";
  };

  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  useEffect(() => {
    console.log("this is the search anime content component");
  }, []);

  return (
    <main id="main">
      <div>
        <div id="modal">
          {isModlActive ? (
            <div>
              <OutsideAlerter performAction={closeModal}>
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  {/* <p>Some text in the Modal..</p> */}
                  <div className="anime-title">Title</div>
                  <div className="anime-modal">
                    <img className="anime-single-picture" src="https://m.media-amazon.com/images/M/MV5BZmE1NjIyNjYtMTVmMy00M2YyLTljMjMtZGQwYmUxOTU4NjRlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg"></img>
                    <div className="anime-single-description">this is description</div>
                    <div className="anime-single-score"></div>
                    <div className="anime-single-info">
                      <div className="anime-episode-count info-box">
                        <p>Episode Count</p>
                        <div className="episode-line"></div>
                      </div>
                      <div className="anime-episode-count info-box"></div>
                      <div className="anime-episode-count info-box"></div>
                      <div className="anime-episode-count info-box"></div>
                      <div className="anime-episode-count info-box"></div>
                      <div className="anime-episode-count info-box"></div>
                    </div>
                  </div>
                </div>
              </OutsideAlerter>
            </div>
          ) : (
            <span></span>
          )}
        </div>
        <div className="anime-grid">
          {props.animeArr == "" ? (
            <div class="no-result">No results...</div>
          ) : (
            props.animeArr.map((animeInfo, index) => (
              <div
                className="anime-content"
                key={animeInfo.mal_id}
                onClick={openModal}
              >
                {/* <a href={"/anime/" + animeInfo.mal_id} style={{display: "table-cell"}} target="_blank"> */}
                <img
                  className="anime-content-picture"
                  src={animeInfo.image_url}
                ></img>
                <div className="anime-title">{animeInfo.title}</div>
                {/* </a> */}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default SearchContent;
