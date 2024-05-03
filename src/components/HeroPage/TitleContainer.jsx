import React from "react";

function TitleContainer() {
  return (
    <section className="titles-container">
      <h1 id="title">
        VALMIR PAIVA<br></br>STACHIN
      </h1>
      <h2 id="subtitle">
        student<span>{"</>"}</span> developer
      </h2>

      <hr />

      <button
        onClick={() => window.open("https://github.com/valmirpst/")}
        className="more-info-button"
      >
        MORE INFO
      </button>
    </section>
  );
}

export default TitleContainer;
