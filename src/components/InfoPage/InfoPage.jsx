import React, { useState } from "react";
import Knowledge from "./Knowledge";
import Curriculum from "./Curriculum";
import ContactMe from "./ContactMe";
import emailLogo from "../../assets/img/info-page/email-logo.svg";
import arrowForward from "../../assets/img/global/arrow-forward-icon.svg";
import arrowBack from "../../assets/img/global/arrow-back-icon.svg";

function InfoPage() {
  let [slideMovement, setSlideMovement] = useState(true);

  const moveSlider = () => {
    const knowledgeInnerBox = document.querySelector(".knowledge-inner-box");
    const nextBtn = document.querySelector(".infopage .next-btn");

    if (slideMovement && knowledgeInnerBox instanceof HTMLElement) {
      nextBtn.firstChild.setAttribute("src", arrowBack);
      nextBtn.classList.add("left-btn");
      nextBtn.style.right = "92%";
      if (document.body.clientWidth > 482) {
        knowledgeInnerBox.style.transform = "translateX(-62%)";
      }
      if (document.body.clientWidth < 483) {
        knowledgeInnerBox.style.transform = "translateX(-112%)";
      }
    } else {
      nextBtn.firstChild.setAttribute("src", arrowForward);
      nextBtn.classList.remove("left-btn");
      knowledgeInnerBox.style.transform = "translateX(0)";
      nextBtn.style.right = "-0.5%";
    }
    setSlideMovement(!slideMovement);
  };

  return (
    <>
      <section className="infopage">
        <div className="secondary-title">
          <p>knowledge.</p>
          <hr />
        </div>
        <section id="knowledge-section" className="knowledge-section">
          <div className="knowledge-inner-box">
            <Knowledge />
          </div>
          <button onClick={moveSlider} className="next-btn">
            <img src={arrowForward} alt="" />
          </button>
        </section>

        <section className="curriculum-contactme">
          <Curriculum />
          <ContactMe />
        </section>

        <div className="email-container">
          <p>or send me an email</p>
          <div className="email-box">
            <img src={emailLogo} alt="Email Logo" />
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttNjCBHzLCbtTPcrKgXrDBBTwvqDbPXnsDngJLDBfSfGnsLTxzLMdtnKqMXSzSPQDBmdV"
              id="email-text"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              valmirpaivacpm@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoPage;
