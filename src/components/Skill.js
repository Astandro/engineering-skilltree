import React from "react";

export default function Skill({ id, currentPoints, maxPoints, hasDependencies }) {

  var classes = "skill "

  if (currentPoints === maxPoints) {
    classes += "has-points has-max-points"
  } else if (!hasDependencies && currentPoints === 0) {
    classes += "can-add-points"
  } else if (currentPoints > 0 && currentPoints < maxPoints) {
    classes += "has-points can-add-points"
  }
  
  return (
    <div className={classes} data-skill-id={id}>
      <div className="skill-dependency" />
      <div className="icon-container">
        <div className="icon" />
      </div>

      <div className="tool-tip">
        <h3 className="skill-name">HTML</h3>
        <div className="skill-description">
          The main language for creating web pages, HTML is written in the form
          of tags enclosed in angle brackets (like &lt;html&gt;).
        </div>
        <ul className="skill-links">
          <li>
            <a target="_blank" href="http://www.html.net/tutorials/html/">
              HTML.net Tutorials
            </a>
          </li>
          <li>
            <a target="_blank" href="http://www.sublimetext.com/">
              Sublime Text 3, a great code editor
            </a>
          </li>
        </ul>
        <hr />
        <div className="current-rank-description" />
        <div className="next-rank-description">
          Next rank:{" "}
          <span>You understand how to create and view a basic web page.</span>
        </div>
        <hr />
        <ul className="stats">
          <li>
            <span className="value">
              +<span>1</span>
            </span>{" "}
            <span className="title">Intellect</span>
          </li>
          <li>
            <span className="value">
              +<span>1</span>
            </span>{" "}
            <span className="title">Charisma</span>
          </li>
          <li>
            <span className="value">
              +<span>1</span>
            </span>{" "}
            <span className="title">Strength</span>
          </li>
        </ul>

        <div className="help-message" />
      </div>
      <div className="frame">
        <div className="skill-points">
          <span className="points">{currentPoints}</span>/
          <span className="max-points">{maxPoints}</span>
        </div>
        <div className="hit-area" />
      </div>
    </div>
  );
}
