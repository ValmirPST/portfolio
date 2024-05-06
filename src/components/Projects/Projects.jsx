import React from "react";
import ProjectsContainer from "./ProjectsContainer";
import arrowForward from "../../assets/img/global/arrow-forward-icon.svg";
import arrowBack from "../../assets/img/global/arrow-back-icon.svg";

import project01 from "../../assets/img/projects/project01.png";
import project02 from "../../assets/img/projects/project02.png";
import project03 from "../../assets/img/projects/project03.png";
import project04 from "../../assets/img/projects/project04.png";
import project05 from "../../assets/img/projects/project05.png";

function Projects() {
  let projects = {
    "android project": [
      project01,
      "https://valmirpst.github.io/android-project",
    ],
    "whatsapp links": [
      project02,
      "https://github.com/valmirpst/whatsapp-link-project",
    ],
    "to do list": [project03, "https://valmirpst.github.io/online-to-do"],
    "logical tasks": [project04, "https://valmirpst.github.io/usual-exercises"],
    "my portfolio": [project05, "https://github.com/valmirpst/portfolio"],
  };

  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(width * active);

    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    active === Object.keys(projects).length - 1
      ? (nextBtn.style.display = "none")
      : (nextBtn.style.display = "block");
    active === 0
      ? (prevBtn.style.display = "none")
      : (prevBtn.style.display = "block");
  }, [active]);

  function nextSlide() {
    if (active < Object.keys(projects).length - 1) setActive(active + 1);
  }

  function prevSlide() {
    if (active > 0) setActive(active - 1);
  }

  return (
    <section className="projects" id="projects">
      <section className="projects-section">
        <div className="secondary-title">
          <p>projects.</p>
          <hr />
        </div>

        <button className="prev-btn" onClick={prevSlide}>
          <img src={arrowBack} alt="" />
        </button>
        <section
          ref={contentRef}
          className="projects-container"
          style={{ transform: `translateX(-${position}px)` }}
        >
          <ProjectsContainer projects={projects} />
        </section>
        <button className="next-btn" onClick={nextSlide}>
          <img src={arrowForward} alt="" />
        </button>
      </section>
    </section>
  );
}

export default Projects;
