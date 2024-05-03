import React from "react";

function ProjectsContainer({ projects }) {
  return (
    <>
      {Object.keys(projects).map((projectName, index) => {
        return (
          <article
            className="project-box"
            id={projectName.replace(/ /g, "-")}
            key={index}
          >
            <p className="project-title">{projectName}</p>
            <a
              className="project-link"
              href={`${projects[projectName][1]}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-image"
                src={projects[projectName][0]}
                alt=""
              />
            </a>
          </article>
        );
      })}
    </>
  );
}

export default ProjectsContainer;
