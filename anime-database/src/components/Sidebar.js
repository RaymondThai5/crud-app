import { useState, useEffect } from "react";
import React from "react";

function Sidebar(props) {
  const [sidebarSelection, setSidebarSelection] = useState([
    "Recent",
    "Favorites",
    "Top",
  ]);
  const [sidebarState, setSidebarState] = useState(0);

  const switchSelection = (selection) => {
    if (selection.id == "prev-select") {
      if (sidebarState == 0) {
        setSidebarState(sidebarSelection.length - 1);
      } else {
        setSidebarState(sidebarState - 1);
      }
    } else {
      setSidebarState((sidebarState + 1) % 3);
    }
  };

  let content;
  switch(sidebarState) {
    case 0: 
      content = props.recentAnime.map((anime, index) => (
        <div key={index} class="selection-choice">
          <h1>
            <span onClick={e => (sendSearch(e))}>{anime}</span>
          </h1>
        </div>
      ))
      break;
    case 1:
      break;
    case 2:
      content = props.topAnime.map((anime, index) => (
        <div key={index} class="selection-choice">
          <h1>
            <span onClick={e => (sendSearch(e))}>{anime}</span>
          </h1>
        </div>
      ))
      break;
  }

  const sendSearch = (e) => {
    props.setSearch(e.target.textContent);
    props.getSearchAnime(e.target.textContent);
  }

  return (
    <sidebar>
      <div className="selection-header">
        <div className="selection-buttons">
          <button id="prev-select" onClick={(e) => switchSelection(e.target)}>
            &#8592;
          </button>
          <button id="next-select" onClick={(e) => switchSelection(e.target)}>
            &#8594;
          </button>
        </div>
        <h2>{sidebarSelection[sidebarState]}</h2>
      </div>
      <div className="selection-choices">
        {content}
      </div>
    </sidebar>
  );
}

export default Sidebar;
