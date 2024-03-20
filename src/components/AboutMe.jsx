import React from "react";
import bookIcon from '../assets/img/about-me/book-icon.png';
import jobIcon from '../assets/img/about-me/job-icon.png';
import studiesIcon from '../assets/img/about-me/studies-icon.png';


function AboutMe() {
  return (
    <section className="about-me">

      <div className="secondary-title">
        <p>about me.</p>
        <hr />
      </div>
      <section className="container">
        <article className="information-container">

          <p className="subtitle">who am i</p>
          <p>Just a dedicated man trying to become better every day, living in a light way to reach my goals and build a wonderful and awesome life in the near future.</p>
          <div className="info-item">
            <img src={bookIcon} alt="" />
            <p>High School Student at Federal Technological University of Paraná.</p>
          </div>

          <div className="info-item">
            <img src={jobIcon} alt="" />
            <p>Looking for an Internship Program as a Developer or in IT-related areas.</p>
          </div>

          <div className="info-item">
            <img src={studiesIcon} alt="" />
            <p>At the moment I am studying as much as I can about programming.</p>
          </div>

        </article>

        <article className="information-container">

          <p className="subtitle">who am i</p>
          <p>Just a dedicated man trying to become better every day, living in a light way to reach my goals and build a wonderful and awesome life in the near future.</p>
          <div className="info-item">
            <img src={bookIcon} alt="" />
            <p>High School Student at Federal Technological University of Paraná.</p>
          </div>

          <div className="info-item">
            <img src={jobIcon} alt="" />
            <p>Looking for an Internship Program as a Developer or in IT-related areas.</p>
          </div>

          <div className="info-item">
            <img src={studiesIcon} alt="" />
            <p>At the moment I am studying as much as I can about programming.</p>
          </div>

        </article>

      </section>

    </section>
  )
}

export default AboutMe;
