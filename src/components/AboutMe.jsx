import React from "react";
import bookIcon from "../assets/img/about-me/book-icon.png";
import jobIcon from "../assets/img/about-me/job-icon.png";
import studiesIcon from "../assets/img/about-me/studies-icon.png";
import runningIcon from "../assets/img/about-me/running-icon.png";
import goodIcon from "../assets/img/about-me/good-icon.png";
import readingIcon from "../assets/img/about-me/reading-icon.png";

function AboutMe() {
  const getAge = () => {
    const today = new Date();
    const birthday = new Date("2006-08-14:00:00");
    let ageMs = today.getTime() - birthday.getTime();
    return Math.floor(ageMs * 3.171e-11);
  };

  return (
    <section className="about-me" id="about-me">
      <div className="secondary-title">
        <p>about me.</p>
        <hr />
      </div>
      <section className="container">
        <article className="information-container">
          <p className="subtitle">who am i</p>
          <p>
            My name is Valmir, I'm {getAge()} years old and I live in this
            technological world. I love making new connections and improving all
            my skills with lots of knowledge
          </p>
          <span className="secondary-title">
            <hr />
          </span>
          <div className="info-item">
            <img src={bookIcon} alt="" />
            <p>
              High School Student at Federal Technological University of Paraná.
            </p>
          </div>

          <div className="info-item">
            <img src={jobIcon} alt="" />
            <p>
              Looking for an Internship Program as a Developer or in IT-related
              areas.
            </p>
          </div>

          <div className="info-item">
            <img src={studiesIcon} alt="" />
            <p>
              At the moment I am studying as much as I can about programming.
            </p>
          </div>
        </article>

        <article className="information-container">
          <p className="subtitle">know me</p>
          <p>
            Just a simple man trying to become better every day, living in a
            light way to reach my goals and build a wonderful and awesome life
            in a near future.
          </p>
          <span className="secondary-title">
            <hr />
          </span>
          <div className="info-item">
            <img src={readingIcon} alt="" />
            <p>
              Reading enthusiast. I really like to read a lot of self-knowledge
              and self-help books.
            </p>
          </div>

          <div className="info-item">
            <img src={runningIcon} alt="" />
            <p>
              My favorite hobbies are exercising at the gym, running and playing
              volleyball with friends.
            </p>
          </div>

          <div className="info-item">
            <img src={goodIcon} alt="" />
            <p>
              I really like having a good time with good people around me and
              enjoy all of the life.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}

export default AboutMe;
