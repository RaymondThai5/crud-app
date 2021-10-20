import React from 'react'

function Header() {
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
                <input type="text" placeholder="Search" className="search-bar"></input>
            </div>
        </header>
    )
}

export default Header
