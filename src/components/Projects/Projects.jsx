import React from 'react';
import ProjectsContainer from './ProjectsContainer';

function Projects() {
  return (
    <section className="projects">

      <section className="projects-section">
        <div className='secondary-title'>
          <p>projects.</p>
          <hr />
        </div>
        
        <ProjectsContainer />

      </section>

    </section>
  )
}

export default Projects;
