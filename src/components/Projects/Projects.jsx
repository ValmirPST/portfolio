import React from "react";
import ProjectsContainer from "./ProjectsContainer";
import arrowForward from "../../assets/img/global/arrow-forward-icon.svg";
import arrowBack from "../../assets/img/global/arrow-back-icon.svg";

import project01 from "../../assets/img/projects/project01.jpg";
import project02 from "../../assets/img/projects/project02.jpg";
import project03 from "../../assets/img/projects/project03.jpg";
import notFoundImg from "../../assets/img/global/not-found.svg";

function Projects() {
  let projects = {
    "android project": [
      project01,
      "https://valmirpst.github.io/android-project",
    ],
    "to do list": [project02, "https://valmirpst.github.io/online-to-do"],
    "logical tasks": [project03, "https://valmirpst.github.io/usual-exercises"],
    "whatsapp links": [
      notFoundImg,
      "https://github.com/valmirpst/whatsapp-link-project",
    ],
    "my portfolio": [notFoundImg, "https://github.com/valmirpst/portfolio"],
  };

  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(width * active);
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
