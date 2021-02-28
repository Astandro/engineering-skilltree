import logo from "./img/logo.png";
import screenshot from "./img/screenshot.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="ltIE9-hide">
        <div data-bind="css: { open: isOpen }" className="page animated">

          <header>
            <img
              data-bind="click: toggle"
              src={logo}
              className="logo"
            />
          </header>

          <div className="intro">
            <img data-bind="click: toggle" src={screenshot} />
            <div className="content">
              <h2>
                An RPG-style talent tree
                <br />
                for web developers
              </h2>
              <p>
                As professional nerds, we love role-playing games. And we love
                web development. Naturally, we wondered what a character talent
                tree for a web developer might look like.
              </p>
              <h3>So, we decided to build one.</h3>
              <button data-bind="click: toggle">Open the talent tree »</button>
            </div>
          </div>
          
          <div className="talent-tree">
            <div className="who-made-this">
              {/* AddThis Button BEGIN */}
              <div
                className="addthis_toolbox addthis_default_style addthis_32x32_style"
                style={{ float: "right" }}
              >
                <a className="addthis_button_facebook" />
                <a className="addthis_button_twitter" />
                <a className="addthis_button_google_plusone_share" />
                <a className="addthis_button_email" />
              </div>
              {/* AddThis Button END */}
              <h1>Who made this?</h1>
              <p>
                352 is a digital agency creating websites, software and
                marketing campaigns. We came up with{" "}
                <i>Dungeons &amp; Developers</i> as a fun way to assess, promote
                and learn the skills it takes to design and develop great web
                sites. This page was built during the
                "Race to 3:52", our annual company retreat that has every member of the
                company working in teams on various innovative (and sometimes
                silly) projects. It’s a pep rally, hackathon and family reunion
                all rolled into one event.
              </p>
              <p>
                We love this stuff. During our day jobs, we partner with great
                clients to build smart solutions that drive results. Find out
                more at 352media.com.
              </p>
              <hr />
            </div>
            <h2 className="start-helper" data-bind="css:{active:noPointsSpent}">
              Start here!
            </h2>
            {/*ko foreach: skills*/}
            {/*ko if: hasDependencies*/}
            <div
              data-bind="css: { 'can-add-points': canAddPoints, 'has-points': hasPoints, 'has-max-points': hasMaxPoints }, attr: { 'data-skill-id': id }"
              className="skill"
            >
              <div
                data-bind="css: { active: dependenciesFulfilled }"
                className="skill-dependency"
              />
            </div>
            {/*/ko*/}
            {/*/ko*/}
            {/*ko foreach: skills*/}
            <div
              data-bind="css: { 'can-add-points': canAddPoints, 'has-points': hasPoints, 'has-max-points': hasMaxPoints }, attr: { 'data-skill-id': id }"
              className="skill"
            >
              <div className="icon-container">
                <div className="icon" />
              </div>
              <div className="frame">
                <div className="tool-tip">
                  <h3 data-bind="text: title" className="skill-name" />
                  <div
                    data-bind="html: description"
                    className="skill-description"
                  />
                  <ul className="skill-links">
                    {/*ko foreach: links*/}
                    <li>
                      <a
                        data-bind="attr: { href: url }, click: function(){ 
                _gaq.push(['_trackEvent',$parent.title, label, url]);
                return true;
                }, text: label"
                        target="_blank"
                      />
                    </li>
                    {/*/ko*/}
                  </ul>
                  <hr data-bind="visible: currentRankDescription() || nextRankDescription()" />
                  <div
                    data-bind="if: currentRankDescription"
                    className="current-rank-description"
                  >
                    Current rank:{" "}
                    <span data-bind="	text: currentRankDescription" />
                  </div>
                  <div
                    data-bind="if: nextRankDescription"
                    className="next-rank-description"
                  >
                    Next rank: <span data-bind="	text: nextRankDescription" />
                  </div>
                  <hr />
                  <ul className="stats">
                    {/*ko foreach: stats*/}
                    <li>
                      <span className="value">
                        +<span data-bind="text: value" />
                      </span>{" "}
                      <span data-bind="	text: title" className="title" />
                    </li>
                    {/*/ko*/}
                  </ul>
                  {/*ko if: talentSummary*/}
                  <div className="talent-summary">
                    Grants <span data-bind="text: talentSummary" />
                  </div>
                  {/*/ko*/}
                  <div data-bind="text: helpMessage" className="help-message" />
                </div>
                <div className="skill-points">
                  <span data-bind="text: points" className="points" />/
                  <span data-bind="	text: maxPoints" className="max-points" />
                </div>
                <div
                  data-bind="click: addPoint, rightClick: removePoint"
                  className="hit-area"
                />
              </div>
            </div>
            {/*/ko*/}
          </div>
          <div className="avatar">
            <div className="portrait">
              <img data-bind="attr: { src: portraitURL }" />
            </div>
            <div className="portrait-controls">
              <button data-bind="click: choosePreviousPortrait">«</button>
              <button data-bind="click: chooseNextPortrait">»</button>
            </div>
            <div className="details">
              <input data-bind="value: avatarName" className="h2" />
              <div className="level">
                Level <span data-bind="	text: level" className="value" /> Web
                Developer
              </div>
              <div data-bind="text: talentSummary" className="talent-summary" />
              <ul className="stats">
                {/*ko foreach: stats*/}
                <li>
                  <span data-bind="text: title" className="title" />:{" "}
                  <span data-bind="	text: value" className="value" />
                </li>
                {/*/ko*/}
              </ul>
            </div>
          </div>
          <div className="sign-off">
            <h2>It’s dangerous to go alone!</h2>
            <p>
              Throughout the dark corners of the web, doors are always opening
              to new challenges that will test the mettle of even the most stout
              developer. Let these watering holes provide a brief respite and an
              opportunity for you and other heroes to band together:
            </p>
            <ul>
              <li>
                <a
                  onclick="_gaq.push(['_trackEvent','external link','footer','A List Apart']);"
                  href="http://alistapart.com/"
                  target="_blank"
                >
                  A List Apart
                </a>
              </li>
              <li>
                <a
                  onclick="_gaq.push(['_trackEvent','external link','footer','Smashing Magazine']);"
                  href="http://www.smashingmagazine.com/"
                  target="_blank"
                >
                  Smashing Magazine
                </a>
              </li>
              <li>
                <a
                  onclick="_gaq.push(['_trackEvent','external link','footer','Code Academy']);"
                  href="http://www.codecademy.com/"
                  target="_blank"
                >
                  Code Academy
                </a>
              </li>
              <li>
                <a
                  onclick="_gaq.push(['_trackEvent','external link','footer','Stack Overflow']);"
                  href="http://www.stackoverflow.com/"
                  target="_blank"
                >
                  Stack Overflow
                </a>
              </li>
              <li>
                <a
                  onclick="_gaq.push(['_trackEvent','external link','footer','reddit']);"
                  href="http://www.reddit.com/r/webdesign/"
                  target="_blank"
                >
                  reddit webdesign
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ltIE9-show ltIE9-warning">
          <img src="img/logo.png" className="logo" />
          <h2>Please upgrade your browser!</h2>
          <p>Try one of these free options:</p>
          <ul>
            <li>
              <a
                onclick="_gaq.push(['_trackEvent','external link','upgrade browser','Chrome']);"
                href="http://google.com/chrome"
                target="_blank"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                onclick="_gaq.push(['_trackEvent','external link','upgrade browser','MSIE']);"
                href="http://windows.microsoft.com/en-US/internet-explorer/download-ie"
                target="_blank"
              >
                Microsoft Internet Explorer 10
              </a>
            </li>
            <li>
              <a
                onclick="_gaq.push(['_trackEvent','external link','upgrade browser','Firefox']);"
                href="www.mozilla.org/en-US/firefox"
                target="_blank"
              >
                Mozilla Firefox
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
