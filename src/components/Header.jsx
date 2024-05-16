import React, { Component } from "react";
import brazil_flag from "../assets/img/header/brazil-flag.svg";
import united_states_flag from "../assets/img/header/united-states-flag.svg";
import menuIcon from "../assets/img/header/menu.svg";
import closeIcon from "../assets/img/header/close.svg";

class Header extends Component {
  render() {
    function openCloseMenu() {
      const menu = document.querySelector(".menu-nav");
      const menuButton = document.querySelector(".menu img");
      if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menuButton.setAttribute("src", closeIcon);
      } else {
        menu.classList.add("hidden");
        menuButton.setAttribute("src", menuIcon);
      }
    }

    return (
      <>
        <header className="global-header">
          <nav className="global-nav">
            <a className="nav-link logo-link" href="./">
              portfolio.
            </a>
            <div className="links-div">
              <div className="select-language">
                <img id="brazil-flag" src={brazil_flag} alt="brazil-flag" />
                <img
                  id="us-flag"
                  src={united_states_flag}
                  alt="united-states-flag"
                />
              </div>
              <a className="nav-link" href="#about-me">
                About Me
              </a>
              <a className="nav-link" href="#projects">
                Projects
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
            <div className="menu hidden">
              <img onClick={openCloseMenu} src={menuIcon} alt="" />
            </div>
            <nav className="menu-nav hidden">
              <a href="#about-me" className="nav-link">
                About Me
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <div className="nav-link language-selector">Language</div>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
