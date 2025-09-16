import React from "react";
import logo from '../assets/saberLogo.svg';
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <div className="header-content">
        <section className="logo">
            <img src={logo} alt='Saber Comics Logo' />
        </section>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Updates</a></li>
                <li><a href="/library">Library</a></li>
                <li><a href="">Work</a></li>
            </ul>
        </nav>
        <section className="search-bar">
            <SearchBar />
        </section>
      </div>
    </header>
  );
}

export default Header;