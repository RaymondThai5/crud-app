import React from 'react'

function Header() {
    return (
        <header>
            <div class="title">
                <div class="title-text">The <strong>Anime</strong> Database</div>
            </div>
            <div class="navbar">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#">First</a></li>
                    <li class="nav-item"><a href="#">Second</a></li>
                    <li class="nav-item"><a href="#">Third</a></li>
                </ul>
                <input type="text" placeholder="Search" class="search-bar"></input>
            </div>
        </header>
    )
}

export default Header
