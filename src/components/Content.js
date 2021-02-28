import React from "react";

export default function Content() {
  return (
    <div className="sign-off">
      <h2>It’s dangerous to go alone!</h2>
      <p>
        Throughout the dark corners of the web, doors are always opening to new
        challenges that will test the mettle of even the most stout developer.
        Let these watering holes provide a brief respite and an opportunity for
        you and other heroes to band together:
      </p>
      <ul>
        <li>
          <a href="http://alistapart.com/" target="_blank">
            A List Apart
          </a>
        </li>
        <li>
          <a href="http://www.smashingmagazine.com/" target="_blank">
            Smashing Magazine
          </a>
        </li>
        <li>
          <a href="http://www.codecademy.com/" target="_blank">
            Code Academy
          </a>
        </li>
        <li>
          <a href="http://www.stackoverflow.com/" target="_blank">
            Stack Overflow
          </a>
        </li>
        <li>
          <a href="http://www.reddit.com/r/webdesign/" target="_blank">
            reddit webdesign
          </a>
        </li>
      </ul>
    </div>
  );
}
