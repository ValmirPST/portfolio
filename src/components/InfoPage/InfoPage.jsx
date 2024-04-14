import React from "react";
import Knowledge from "./Knowledge";
import Curriculum from "./Curriculum";
import ContactMe from "./ContactMe";
import emailLogo from "../../assets/img/info-page/email-logo.svg";

function InfoPage() {
  return (
    <>
      <section className="infopage">
        <div className="secondary-title">
          <p>knowledge.</p>
          <hr />
        </div>
        <section className="knowledge-section">
          <Knowledge />
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
