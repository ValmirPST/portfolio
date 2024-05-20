import React from "react";
import curriculumImg from "../../assets/img/info-page/curriculum-img.jpg";
import closeButtonImg from "../../assets/img/header/close.svg";

function Curriculum() {
  const [magnifyStyle, setMagnifyStyle] = React.useState({
    backgroundImage: `url(${curriculumImg})`,
  });

  const handleModalPopup = () => {
    const modal = document.querySelector(".curriculum .modal");
    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
    } else modal.classList.add("hidden");
  };

  const handleMouseMove = e => {
    const magnifyBox = document.querySelector(".curriculum .modal .magnify");
    const halfMagnifyBoxWidth = magnifyBox.clientWidth * 0.5;
    const halfMagnifyBoxHeight = magnifyBox.clientHeight * 0.5;

    const { offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = e.target;

    const xPercentage = (offsetX / offsetWidth) * 100;
    const yPercentage = (offsetY / offsetHeight) * 100;

    const top = Math.min(
      Math.max(offsetY - halfMagnifyBoxHeight, 0),
      offsetHeight - magnifyBox.clientHeight
    );

    setMagnifyStyle(prev => ({
      ...prev,
      backgroundPosition: `${xPercentage}% ${yPercentage}%`,
      top: `${top}px`,
      left: `${offsetX - halfMagnifyBoxWidth}px`,
      display: "block",
    }));
  };

  const handleMouseLeave = () => {
    setMagnifyStyle(prev => ({ ...prev, display: "none" }));
  };

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
            alt="Curriculum"
            className="curriculum-img"
            onClick={handleModalPopup}
          />
        </div>

        <div className="modal hidden">
          <div className="overlay" onClick={handleModalPopup}></div>
          <div className="content">
            <div className="content-box">
              <img
                src={curriculumImg}
                alt="curriculum"
                className="modal-curriculum-img"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                draggable={false}
                width={400}
              />
              <div className="magnify" style={magnifyStyle}></div>

              <div className="close-modal" onClick={handleModalPopup}>
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={closeButtonImg}
                  alt="close modal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Curriculum;
