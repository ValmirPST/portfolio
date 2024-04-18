import React from "react";
import project01 from '../../assets/img/projects/project01.jpg';
import project02 from '../../assets/img/projects/project02.jpg';
import project03 from '../../assets/img/projects/project03.jpg';

function ProjectsContainer() {
  return (
    <section className="projects-container">

      <article className="project-box">
        <p className="project-title">android project</p>
        <a className="project-link" href="https://valmirpst.github.io/android-project" target="_blank" rel="noreferrer"><img className="project-image" src={project01} alt="" /></a>
        {/* <p className="project-description">Project developed at modulo 2 in HTML and CSS course of Curso em Video.</p> */}
      </article>

      <article className="project-box">
        <p className="project-title">to do list</p>
        <a className="project-link" href="https://valmirpst.github.io/online-to-do" target="_blank" rel="noreferrer"><img className="project-image" src={project02} alt="" /></a>
        {/* <p className="project-description">Project developed at a JavaScript course at Udemy Online Courses.</p> */}
      </article>
      
      <article className="project-box">
        <p className="project-title">logical tasks</p>
        <a className="project-link" href="https://valmirpst.github.io/usual-exercises" target="_blank" rel="noreferrer"><img className="project-image" src={project03} alt="" /></a>
        {/* <p className="project-description">Project developed at Web Development class at UTFPR, in 2022.</p> */}
      </article>
      
    </section>
  )
}

export default ProjectsContainer;
