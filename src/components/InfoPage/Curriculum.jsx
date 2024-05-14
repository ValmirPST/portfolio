import React from "react";
import curriculumImg from "../../assets/img/info-page/Valmir Paiva Stachin - Estagio Dev.png";

function Curriculum() {
  const openCurriculum = () => {};

  return (
    <>
      <section className="curriculum">
        <div className="secondary-title">
          <p>curriculum.</p>
          <hr />
        </div>

        <div className="curriculum-div">
          <img
            src={curriculumImg}
            alt="curriculum"
            className="curriculum-img"
            onClick={openCurriculum}
          />
        </div>
      </section>
    </>
  );
}

export default Curriculum;
