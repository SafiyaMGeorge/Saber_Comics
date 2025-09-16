import React from "react";
import logo from '../assets/saberLogo.svg';
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <div className="header-content text-white bg-gradient-to-t from-[#03D8FA] to-[#004799] h-22 w-full flex justify-between items-center px-3">
        <section className="logo">
            <img src={logo} alt='Saber Comics Logo' />
        </section>
        <nav>
            <ul className="w-100 flex justify-evenly">
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