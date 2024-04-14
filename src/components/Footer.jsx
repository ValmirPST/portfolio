import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-nav-box">
          <a className="nav-link" href="./">
            Home
          </a>
          <a className="nav-link" href="./">
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
          <a className="nav-link" href="./">
            Projects
          </a>
          <a className="nav-link" href="./">
            Contact
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
