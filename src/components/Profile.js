import React from "react";
import "./css/Profile.css"

export default function Profile({ logOut, photoURL, name }) {
  return (
    <div className="avatar">
      <div className="portrait">
        <img src={photoURL} />
      </div>
      <div className="portrait-controls">
        <button onClick={logOut}>logout</button>
      </div>
      <div className="details">
        <input className="username" defaultValue={name} disabled />
        <div className="level">
          Level <span className="value">1</span> Web Developer
        </div>
        <div className="talent-summary" />
        <ul className="stats">
          <li>
            <span className="title">Charisma</span>:{" "}
            <span className="value">9</span>
          </li>
          <li>
            <span className="title">Dexterity</span>:{" "}
            <span className="value">9</span>
          </li>
          <li>
            <span className="title">Fortitude</span>:{" "}
            <span className="value">9</span>
          </li>
          <li>
            <span className="title">Intellect</span>:{" "}
            <span className="value">9</span>
          </li>
          <li>
            <span className="title">Strength</span>:{" "}
            <span className="value">9</span>
          </li>
          <li>
            <span className="title">Wisdom</span>:{" "}
            <span className="value">9</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
