import React, { Component } from "react";
import brazil_flag from "../assets/img/header/brazil-flag.svg";
import united_states_flag from "../assets/img/header/united-states-flag.svg";
import menuIcon from "../assets/img/header/menu.svg";

class Header extends Component {
  render() {
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
              <a className="nav-link" href="./">
                About Me
              </a>
              <a className="nav-link" href="./">
                Projects
              </a>
              <a className="nav-link" href="./">
                Contact
              </a>
            </div>
            <div className="menu hidden">
              <img src={menuIcon} alt="" />
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
