import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-nav-box">
          <a className="nav-link" href=".#hero-page">
            Home
          </a>
          <a className="nav-link" href="#about-me">
            About Me
          </a>
        </div>

        <p className="footer-message">
          Developed by{" "}
          <a
            className="nav-link"
            href="https://github.com/valmirpst"
            target="_blank"
            rel="noreferrer"
          >
            Valmir Paiva Stachin
          </a>
        </p>

        <div className="footer-nav-box">
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
