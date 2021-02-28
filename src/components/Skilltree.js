import React from "react";

export default function Skilltree() {
  return (
    <div className="talent-tree">
      <h2 className="start-helper active">Start here!</h2>
      <div className="skill can-add-points" data-skill-id={1}>
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">HTML</h3>
            <div className="skill-description">
              The main language for creating web pages, HTML is written in the
              form of tags enclosed in angle brackets (like &lt;html&gt;).
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
              <span>
                You understand how to create and view a basic web page.
              </span>
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
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={2}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">CSS</h3>
            <div className="skill-description">
              Cascading Style Sheets (CSS) is a language for styling web pages.
              CSS rules target elements in the HTML document to specify the
              presentation, such as font, color, spacing, and size.
            </div>
            <ul className="skill-links">
              <li>
                <a target="_blank" href="http://www.htmldog.com/guides/css/">
                  CSS Tutorials
                </a>
              </li>
              <li>
                <a target="_blank" href="http://caniuse.com/#cats=CSS">
                  Can I use... (browser support)
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You are familiar with the basics of CSS formatting and the box
                model.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Stylish</span>
            </div>

            <div className="help-message">Learn HTML to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={3}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">CSS Tools</h3>
            <div className="skill-description">
              Preprocessors like LESS and SASS help you write more structured
              and efficient CSS by adding features like variables, functions,
              and nesting.
            </div>
            <ul className="skill-links">
              <li>
                <a target="_blank" href="http://css-tricks.com/sass-vs-less/">
                  Sass vs. LESS
                </a>
              </li>
              <li>
                <a target="_blank" href="http://lesscss.org/">
                  LESS
                </a>
              </li>
              <li>
                <a target="_blank" href="http://sass-lang.com/">
                  Sass
                </a>
              </li>
              <li>
                <a target="_blank" href="http://learnboost.github.io/stylus/">
                  Stylus
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>You are familiar with variables and nesting.</span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
            </ul>

            <div className="help-message">Learn CSS to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={4}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Web Design Mastery</h3>
            <div className="skill-description">
              You can bring design ideas to life by translating them into the
              requisite HTML document with CSS styles.
            </div>
            <ul className="skill-links"></ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>10</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
            </ul>

            <div className="help-message">Learn CSS to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={5}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">jQuery Effects</h3>
            <div className="skill-description">
              jQuery provides techniques and methods for client-side
              manipulation of the web page elements.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.codecademy.com/tracks/jquery"
                >
                  Codecademy jQuery
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://api.jquery.com/category/manipulation/"
                >
                  jQuery Category: Manipulation
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://api.jquery.com/category/effects/"
                >
                  jQuery Category: Effects
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You are familiar with manipulating the document object model
                (DOM) - modifying values, content, properties, entire elements,
                etc.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Sizzlin</span>
            </div>

            <div className="help-message">
              Learn Web Design Mastery to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">3</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={6}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Search Engine Optimization (SEO)</h3>
            <div className="skill-description">
              The process of affecting the ranking/visibility of a website or
              web page in a search engines results.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="https://support.google.com/webmasters/answer/35291"
                >
                  Search Engine Optimization (Google)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.google.com/webmasters/tools/"
                >
                  Webmaster Tools (Google)
                </a>
              </li>
              <li>
                <a target="_blank" href="http://www.bing.com/toolbox/webmaster">
                  Bing - Webmaster Tools
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Intellect</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
            </ul>

            <div className="help-message">Learn HTML to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={7}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Analytics</h3>
            <div className="skill-description">
              Analytics provide performance data about a website as well as
              information that is usable to measure the success of SEO.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.webgnomes.org/blog/10-seo-analysis-tools/"
                >
                  10 SEO Analysis Tools You Should Be Using
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://support.google.com/analytics/answer/1308621?hl=en"
                >
                  Configuring SEO data in Analytics (Google)
                </a>
              </li>
              <li>
                <a target="_blank" href="http://www.bing.com/toolbox/webmaster">
                  Using the SEO Reports (Google)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.bing.com/toolbox/seo-analyzer"
                >
                  Bing - SEO Analyzer
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
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
                  +<span>2</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Crafty</span>
            </div>

            <div className="help-message">
              Learn Search Engine Optimization (SEO) to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={8}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Javascript</h3>
            <div className="skill-description">
              JavaScript is the dominant language for client-side programming.
              It executes in the user’s browser to manipulate the HTML document
              after it has loaded. This may be as simple as showing hidden
              elements, or more advanced like contacting the server to load more
              data.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.htmldog.com/guides/javascript/"
                >
                  JavaScript Tutorial
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.codecademy.com/tracks/javascript"
                >
                  Codecademy JavaScript
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://thenewboston.org/list.php?cat=10"
                >
                  List of Videos for Beginner JavaScript
                </a>
              </li>
              <li>
                <a target="_blank" href="http://javascript.crockford.com/">
                  Douglas Crockford on Javascript
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
            </ul>

            <div className="help-message">Learn HTML to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={9}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">JS Libraries &amp; Frameworks</h3>
            <div className="skill-description">
              Once you’re comfortable with the JavaScript language, there’s a
              multitude of libraries and frameworks to accomplish common tasks
              and enhance your development.
            </div>
            <ul className="skill-links"></ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You tap into libraries like jQuery, MooTools, Prototype, Dojo,
                and YUI to streamline your work.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Nimble</span>
            </div>

            <div className="help-message">Learn Javascript to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={10}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Front-end Development Mastery</h3>
            <div className="skill-description" />
            <ul className="skill-links"></ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>10</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
            </ul>

            <div className="help-message">
              Learn JS Libraries &amp; Frameworks to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={11}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Server-side Programming</h3>
            <div className="skill-description">
              Developing items (code) that executes on the server (server-side)
              instead of the user's (client's) machine.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Server-side_scripting"
                >
                  Server-side scripting Wiki
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Strength</span>
              </li>
            </ul>

            <div className="help-message">Learn HTML to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={12}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Server-side Frameworks</h3>
            <div className="skill-description">
              These are software frameworks and collection of packages or
              modules that allow developers to write applications or services
              without having to handle the overhead of common activities and
              lower level details, such as session management, database access,
              etc.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks"
                >
                  Comparison of web application frameworks
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Web_development#Server_side_coding"
                >
                  Web development - server side coding
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Strength</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Beefcake</span>
            </div>

            <div className="help-message">
              Learn Server-side Programming to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill can-add-points" data-skill-id={13}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Database Authoring</h3>
            <div className="skill-description">
              Databases are powerful engines for storing, organizing, and
              retrieving data. There is a wide variety of database platforms to
              choose from. The most widely used database language is Structured
              Query Language (SQL). Properly architecting your data will
              facilitate your site’s server-side programming.
            </div>
            <ul className="skill-links">
              <li>
                <a target="_blank" href="http://www.w3schools.com/sql/">
                  w3schools.com SQL Tutorial
                </a>
              </li>
              <li>
                <a target="_blank" href="http://sqlzoo.net/wiki/">
                  SQLZOO Interactive SQL Tutorial
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Database_normalization"
                >
                  Database Normalization Wiki
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank: <span>You understand how to setup tables.</span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Strength</span>
              </li>
            </ul>

            <div className="help-message" />
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={14}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Advanced DB Management</h3>
            <div className="skill-description">
              Besides creating basic tables and relating data, databases allow
              for the creation of stored procedures, sets of SQL statements that
              are stored in the database, and user-defined functions (UDFs) ,
              functions that can be used in SQL statements. Just architecting
              the database is not enough. The database also needs to be
              optimized or tuned to increase performance.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Stored_procedure"
                >
                  Stored Procedure - Wiki
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/User_defined_function"
                >
                  User-defined function Wiki
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Database_tuning"
                >
                  Database Tuning Wiki
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://technet.microsoft.com/en-us/library/ms187830(v=sql.105).aspx"
                >
                  Performance Monitoring and Tuning How-to Topics (SQL Server)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/"
                >
                  Sql Server Performance Tuning Tips
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.orafaq.com/wiki/Oracle_database_Performance_Tuning_FAQ"
                >
                  Oracle database Performance Tuning FAQ
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You write stored procedures and user-defined functions for more
                efficient querying.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Strength</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>XXL Knapsack</span>
            </div>

            <div className="help-message">
              Learn Database Authoring to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={15}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Server-side Development Mastery</h3>
            <div className="skill-description">
              You are capable of architecting and building an application's
              backend to efficiently store and retrieve data.
            </div>
            <ul className="skill-links"></ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>10</span>
                </span>{" "}
                <span className="title">Strength</span>
              </li>
            </ul>

            <div className="help-message">
              Learn Server-side Frameworks and Advanced DB Management to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={16}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">
              User Authentication and Authorization
            </h3>
            <div className="skill-description">
              Authentication is the process determining whether someone or
              something is who or what it is declared to be. Authorization is
              the process of determining if a user is allowed to perform an
              action or has access to a resource.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.codeproject.com/Articles/98950/ASP-NET-authentication-and-authorization"
                >
                  ASP.NET authentication and authorization - CodeProject
                </a>
              </li>
              <li>
                <a target="_blank" href="http://en.wikipedia.org/wiki/OpenID">
                  OpenID Wiki (authentication)
                </a>
              </li>
              <li>
                <a target="_blank" href="http://oauth.net/">
                  OAuth Community
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://msdn.microsoft.com/en-us/library/wce3kxhd(v=vs.100).aspx"
                >
                  ASP.NET Authorization
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>5</span>
                </span>{" "}
                <span className="title">Fortitude</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Truthseeker</span>
            </div>

            <div className="help-message">
              Learn Server-side Development Mastery to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={17}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">AJAX &amp; APIs</h3>
            <div className="skill-description">
              Technology exists to allow separate systems to communicate between
              each other in various ways as well as allowing interfaces to be
              more intractive. These include the use of Asynchronous JavaScript
              and XML (AJAX), usually on the client-side, to communicate with an
              external system. Other technologies, such as web services, are
              used to setup end-points for allowing communication with an
              external system.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Ajax_(programming)"
                >
                  AJAX (programming) Wiki
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://thenewboston.org/list.php?cat=61"
                >
                  List of Videos for AJAX
                </a>
              </li>
              <li>
                <a target="_blank" href="http://www.asp.net/ajax">
                  Ajax: The Official Microsoft ASP.NET Site
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Web_service"
                >
                  Web Service Wiki
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Representational_state_transfer"
                >
                  Representational state transfer (REST) Wiki
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Strength</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Intellect</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Mindweaver</span>
            </div>

            <div className="help-message">
              Learn Front-end Development Mastery and Server-side Development
              Mastery to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill can-add-points" data-skill-id={18}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">User Discovery</h3>
            <div className="skill-description">
              One of the first steps taken before anything is designed is to
              determine what the client (both the site requestor and the site
              user) wants and/or needs. Techniques include simple sketching,
              card-sortting and experience mapping.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map"
                >
                  The anatomy of an experience map
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You know the right questions to ask, and use sketches to confirm
                your ideas.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Mindreader</span>
            </div>

            <div className="help-message" />
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={19}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Graphic Design</h3>
            <div className="skill-description">
              Graphic design is about aesthetics and usability. Good designs are
              inviting and easy to understand, by solid use of color,
              typography, balance, hierarchy and white space.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Graphic_design"
                >
                  Graphic Design Wiki
                </a>
              </li>
              <li>
                <a target="_blank" href="http://www.behance.net/">
                  Behance
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/User_experience_design"
                >
                  User experience design Wiki
                </a>
              </li>
              <li>
                <a target="_blank" href="http://www.awwwards.com/">
                  Awwwards
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You can create a balanced, complementary layout with a clear
                message.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Artistic</span>
            </div>

            <div className="help-message">Learn User Discovery to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={20}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Graphic Design Tools</h3>
            <div className="skill-description">
              Software such as Photoshop and devices like drawing tablets are
              used to create layouts, work with type, touch-up photos, and other
              activities to add professional polish to your designs.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://graphicdesignclasses.net/design-tools/"
                >
                  100 Top Tools for Graphic Designers | Graphic Design Classes
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Intellect</span>
              </li>
            </ul>

            <div className="help-message">Learn Graphic Design to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={21}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Prototypes</h3>
            <div className="skill-description">
              Modeling a new design without building all the underlying
              functionality is a fast and efficient way to convey ideas, test a
              new concept, and identify problems you didn't anticipate.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.smashingmagazine.com/2010/06/16/design-better-faster-with-rapid-prototyping/"
                >
                  Design Better And Faster With Rapid Prototyping
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://www.sitepoint.com/tools-prototyping-wireframing/"
                >
                  16 Design Tools for Prototyping and Wireframing
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Intellect</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Conjurer</span>
            </div>

            <div className="help-message">Learn User Discovery to unlock.</div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={22}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">User Experience Design Mastery</h3>
            <div className="skill-description">
              You are capable of converting project requirements to an
              attractive design that promotes a pleasant user experience.
            </div>
            <ul className="skill-links"></ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
            </ul>

            <div className="help-message">
              Learn Graphic Design and Prototypes to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={23}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">User Testing</h3>
            <div className="skill-description">
              It is a technique, also known as usability testing, that is used
              to evaluate a website by testing it on users.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.usefulusability.com/24-usability-testing-tools/"
                >
                  My big list of 24 Web Site Usability Testing Tools
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Usability_testing"
                >
                  Usability Testing Wiki
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Alchemist</span>
            </div>

            <div className="help-message">
              Learn User Experience Design Mastery to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill can-add-points" data-skill-id={24}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Server Administration</h3>
            <div className="skill-description">
              Even the simplest web applications will require a server to run
              them. There are several popular and fully-featured web servers to
              choose from, though your application's server-side programming
              language may limit your options. Learning to manage and configure
              your web server will help you keep your site up and running
              smoothly.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Comparison_of_web_server_software"
                >
                  Comparison of web server software Wiki
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="http://httpd.apache.org/docs/2.4/rewrite/"
                >
                  Apache mod_rewrite - Apache HTTP Server
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You are capable of setting up your application in a new
                environment.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Fortitude</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Stewardship</span>
            </div>

            <div className="help-message" />
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={25}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Deployment</h3>
            <div className="skill-description">
              Before sharing your application with the world, follow the best
              practices for security and performance on the server.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://www.sslshopper.com/ssl-certificate-installation.html"
                >
                  SSL Certificate Installation
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://developers.google.com/speed/docs/best-practices/payload"
                >
                  Minimize payload size - Google Developers
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://developers.google.com/speed/docs/best-practices/rtt#ParallelizeDownloads"
                >
                  Parallelize downloads across hostnames - Google Developers
                </a>
              </li>
            </ul>
            <hr />
            <div className="current-rank-description" />
            <div className="next-rank-description">
              Next rank:{" "}
              <span>
                You minify your public-facing files and serve compressed files
                to save bandwidth and improve your site's speed.
              </span>
            </div>
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>2</span>
                </span>{" "}
                <span className="title">Fortitude</span>
              </li>
              <li>
                <span className="value">
                  +<span>1</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Spectral Guide</span>
            </div>

            <div className="help-message">
              Learn Server Administration to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">2</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
      <div className="skill" data-skill-id={26}>
        <div className="skill-dependency" />
        <div className="icon-container">
          <div className="icon" />
        </div>
        <div className="frame">
          <div className="tool-tip">
            <h3 className="skill-name">Web Development Mastery</h3>
            <div className="skill-description">
              This refers to designing, creating, and maintaining a website.
            </div>
            <ul className="skill-links">
              <li>
                <a
                  target="_blank"
                  href="http://en.wikipedia.org/wiki/Web_development"
                >
                  Web Development Wiki
                </a>
              </li>
            </ul>
            <hr style={{ display: "none" }} />
            <div className="current-rank-description" />
            <div className="next-rank-description" />
            <hr />
            <ul className="stats">
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Charisma</span>
              </li>
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Dexterity</span>
              </li>
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Fortitude</span>
              </li>
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Intellect</span>
              </li>
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Strength</span>
              </li>
              <li>
                <span className="value">
                  +<span>3</span>
                </span>{" "}
                <span className="title">Wisdom</span>
              </li>
            </ul>

            <div className="talent-summary">
              Grants <span>Demigod</span>
            </div>

            <div className="help-message">
              Learn Web Design Mastery, Analytics, Front-end Development
              Mastery, Server-side Development Mastery, User Experience Design
              Mastery and Deployment to unlock.
            </div>
          </div>
          <div className="skill-points">
            <span className="points">0</span>/
            <span className="max-points">1</span>
          </div>
          <div className="hit-area" />
        </div>
      </div>
    </div>
  );
}
