import React, { Component } from "react";
import html5 from "../../assets/img/info-page/html5-logo.svg";
import css3 from "../../assets/img/info-page/css3-logo.svg";
import js from "../../assets/img/info-page/js-logo.svg";
import react from "../../assets/img/info-page/react-logo.svg";
import python from "../../assets/img/info-page/python-logo.svg";
import git from "../../assets/img/info-page/git-logo.svg";
import postgresql from "../../assets/img/info-page/postgresql-logo.svg";
import nodejs from "../../assets/img/info-page/nodejs-logo.svg";

class Knowledge extends Component {
  knowledgeList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Python",
    "Git",
    "PostgreSQL",
    "NodeJS",
  ];

  knowledgeImgList = [html5, css3, js, react, python, git, postgresql, nodejs];

  render() {
    return this.knowledgeList.map((value, index) => {
      return (
        <div className="knowledge-box" key={index}>
          <img
            className="knowledge-logo"
            src={this.knowledgeImgList[index]}
            alt={value}
          />
          <p>{value}</p>
        </div>
      );
    });
  }
}

export default Knowledge;
