import React from "react";
import screenshot from "../img/screenshot.png";
import "./css/Intro.css"

export default function Intro({ toggleOpen }) {
  return (
    <div className="intro">
      <img src={screenshot} onClick={toggleOpen} />
      <div className="content">
        <h2>
          An RPG-style skilltree
          <br />
          for software engineers
        </h2>
        <p>
          This project is a react version of{" "}
          <a href="https://github.com/352Media/skilltree">
            352media/skilltree{" "}
          </a>
          with several adjustment in it's functionality and also firebase
          integration.
          <br />
          You can use this app to keep track of your own skills or to track your
          subordinates skills (for managers)
          <br />
        </p>
        <h3>So, start your adventure now!</h3>
        <button onClick={toggleOpen}>Open my skilltree »</button>
        <br /><br /><br /><br />
        For more detail please visit the{" "}
        <a href="https://github.com/Astandro/engineering-skilltree">
          project in github{" "}
        </a>
      </div>
    </div>
  );
}
