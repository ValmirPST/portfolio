import { FaGithub } from "react-icons/fa";

function Project({ repo }) {
  return (
    <>
      <article className="project-box" id={repo.name.replace(/ /g, "-")}>
        <a
          className="project-link"
          href={repo.homepage !== null ? repo.homepage : repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-image">
            <div className="title-box">
              <FaGithub size={64} fill="var(--secondary-color-medium)" />
              <p className="project-title">{repo.name}</p>
            </div>
            <p className="project-description">{repo.description}</p>
            <div className="line" id="line1"></div>
            <div className="line" id="line2"></div>
            <div className="line" id="line3"></div>
            <div className="line" id="middle-line"></div>
          </div>
        </a>
      </article>
    </>
  );
}

export default Project;
