import React from "react";
import logo from '../assets/saberLogo.svg';

function Header() {
  return (
    <header>
      <div className="header-content text-white bg-gradient-to-t from-[#03D8FA] to-[#004799] h-22 w-full flex justify-between items-center px-3">
        <section className="logo w-1/4 mx-3">
            <img src={logo} alt='Saber Comics Logo' />
        </section>
        <nav className="w-1/2  flex justify-cente">
            <ul className=" flex justify-evenly w-full">
                <li><a href="/">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Updates</a></li>
                <li><a href="/library">Library</a></li>
                <li><a href="">Work</a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;