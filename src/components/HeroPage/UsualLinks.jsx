import React from "react";
import githubIcon from "../../assets/img/hero-page/github-icon.svg";
import facebookIcon from "../../assets/img/hero-page/facebook-icon.svg";
import instagramIcon from "../../assets/img/hero-page/instagram-icon.svg";
import linkedinIcon from "../../assets/img/hero-page/linkedin-icon.svg";

function UsualLinks() {
  return (
    <section className="usual-links animateRight">
      <p id="usual-links-title">usual links</p>
      <div className="link-container">
        <a
          className="social-link nav-link"
          href="https://github.com/valmirpst/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://github.com/valmirpst/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="github-icon" />
        </a>
      </div>

      <div className="link-container">
        <a
          className="social-link nav-link"
          href="https://linkedin.com/in/valmirpaivastachin/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://linkedin.com/in/valmirpaivastachin/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin-icon" />
        </a>
      </div>

      <div className="link-container">
        <a
          className="social-link nav-link"
          href="https://www.instagram.com/valmirpst_/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.instagram.com/valmirpst_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="instagram-icon" />
        </a>
      </div>

      <div className="link-container">
        <a
          className="social-link nav-link"
          href="https://facebook.com/valmir.paivastachin/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://facebook.com/valmir.paivastachin/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="facebook-icon" />
        </a>
      </div>
    </section>
  );
}

export default UsualLinks;
