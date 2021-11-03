import React from 'react'

function Header(props) {

    const sendSearch = (e) => {
        const searchQuery = e.target.value;

        if (e.code == "Enter" && searchQuery!= props.search) {
            if (e.target.value.length < 3) {
                console.log('Needs to be at least three characters long') //Add warning sigh later on
            } else {
                props.setSearch(searchQuery);
                props.getSearchAnime(searchQuery);
            }
        }
    }

    return (
        <header>
            <div className="title">
                <div className="title-text">The <strong>Anime</strong> Database</div>
            </div>
            <div className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">First</a></li>
                    <li className="nav-item"><a href="#">Second</a></li>
                    <li className="nav-item"><a href="#">Third</a></li>
                </ul>
                <input id="search-bar" onKeyDown={e => sendSearch(e)} type="text" placeholder="Search" className="search-bar"></input>
            </div>
        </header>
    )
}

export default Header
