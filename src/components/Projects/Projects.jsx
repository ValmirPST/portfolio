import { useState, useEffect, useRef } from "react";
import Project from "./Project";
import arrowForward from "../../assets/img/global/arrow-forward-icon.svg";
import arrowBack from "../../assets/img/global/arrow-back-icon.svg";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/valmirpst/repos")
      .then(response => response.json())
      .then(data =>
        setRepos(
          data.filter(repo => {
            if (repo.name === "valmirpst") return false;
            if (repo.name === "javascript-dw") return false;
            return true;
          })
        )
      );
  }, []);

  let projectsLength = repos.length;

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(width * active);

    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    active === projectsLength - 1
      ? (nextBtn.style.display = "none")
      : (nextBtn.style.display = "block");
    active === 0
      ? (prevBtn.style.display = "none")
      : (prevBtn.style.display = "block");
  }, [active, projectsLength]);

  function nextSlide() {
    if (active < repos.length - 1) setActive(active + 1);
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
          {repos.map(repo => (
            <Project repo={repo} key={repo.id} />
          ))}
        </section>
        <button className="next-btn" onClick={nextSlide}>
          <img src={arrowForward} alt="" />
        </button>
      </section>
    </section>
  );
}

export default Projects;
