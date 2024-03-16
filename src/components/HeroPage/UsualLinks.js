import React from 'react';
import githubIcon from '../../assets/img/hero-page-links/github-icon.svg'
import facebookIcon from '../../assets/img/hero-page-links/facebook-icon.svg'
import instagramIcon from '../../assets/img/hero-page-links/instagram-icon.svg'
import linkedinIcon from '../../assets/img/hero-page-links/linkedin-icon.svg'

function UsualLinks() {
  return (
    <section className="usual-links">
      <p id='usual-links-title'>usual links</p>
      <div className="link-container">
        <a className="social-link nav-link" href="https://github.com/valmirpst" target="_blank">GitHub</a>
        <a href="https://github.com/valmirpst" target="_blank" ><img src={githubIcon} alt="github-icon" /></a>
      </div>

      <div className="link-container">
        <a className="social-link nav-link" href="https://linkedin.com/in/valmirpaivastachin" target="_blank">LinkedIn</a>
        <a href="https://linkedin.com/in/valmirpaivastachin" target="_blank" ><img src={linkedinIcon} alt="linkedin-icon" /></a>
      </div>  

      <div className="link-container">
        <a className="social-link nav-link" href="https://www.instagram.com/valmirpst_/" target="_blank">Instagram</a>
        <a href="https://www.instagram.com/valmirpst_/" target="_blank" ><img src={instagramIcon} alt="instagram-icon" /></a>
      </div>  
      
      <div className="link-container">
        <a className="social-link nav-link" href="https://facebook.com/valmir.paivastachin/" target="_blank">Facebook</a>
        <a href="https://facebook.com/valmir.paivastachin/" target="_blank" ><img src={facebookIcon} alt="facebook-icon" /></a>
      </div>  
    </section>
  )
}

export default UsualLinks;
