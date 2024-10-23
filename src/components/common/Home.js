import React from "react";
import "./Home.css";
import heroImage from "./images/theo_profile.jpg";
import NavBar from "../NavBar";
import "../NavBar.css";

function Home() {
  return (
    <div className="">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/4fb58de0f3.js"
          crossorigin="anonymous"
        ></script>
      </head>

      {/* TOP SECTION*/}
      <body class="body-font">
        <section className="section has-background has-background-white">
          <div className="banner-container">
            <h1 className="test name">THEO WYZGOWSKI</h1>
            <h2 className="is-size-3 has-text-black">
              Junior Software Engineer
            </h2>
            <br />
            <div className="navbar-container">
              <NavBar />
            </div>
          </div>
        </section>

        {/* ABOUT*/}

        <section
          id="about"
          className="section about flexbox-container has-background-black"
        >
          <div className="flexbox-item flexbox-item-1 devicons-about has-text-white has-background-black">
            <div class="devicon-div">
              <i class="devicon-html5-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-css3-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-javascript-plain"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-bulma-plain"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-git-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-nodejs-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-react-original-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-github-original-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-python-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-mongodb-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-express-original-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-django-plain"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-postgresql-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-npm-original-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-vscode-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-sass-original"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-jquery-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-heroku-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-trello-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-csharp-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-microsoftsqlserver-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-dot-net-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-amazonwebservices-plain-wordmark"></i>
            </div>
            <div class="devicon-div">
              <i class="devicon-visualstudio-plain"></i>
            </div>
          </div>

          <div className="flexbox-item flexbox-item-2 has-text-centered has-text-white has-background-black">
            <div className="is-size-4">
              <p>
                Previously working as a location sound recordist, I came across
                an app developed by a fellow coworker, which sparked my interest
                in software development. A year later, I enrolled at General
                Assembly, learning full-stack JavaScript, HTML, CSS, Python and
                React.
              </p>
              <br />
              <p>
                With my most recent role at Evotix I have progressed from a
                Graduate to Junior Developer level, and gained additional
                abilities in C# and .NET development whilst working with an
                experienced team to deliver sprint based, development-led
                features.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="experience"
          className="section has-background-white has-text-black"
        >
          <div className="has-text-centered is-size-2">Experience</div>
          <div class="exp-section">
            <div class="exp-column">
              <div class="exp-row">
                <div class="exp-part evotix">
                  <div className="is-size-3">Junior Software Engineer</div>

                  <div className="is-size-5">
                    <i>Evotix | May 22 - Oct 24</i>
                  </div>
                  <br />
                  <div className="is-size-5">
                    <div>
                      Starting as a Graduate developer, I worked within a team
                      focused primarily on the company product and provided
                      development effort and met sprint goals using agile
                      workflow.
                    </div>
                    <br />
                    <div>
                      In this role I was introduced to MVC and Razor development
                      within the .NET framework. Across both my Graduate
                      Engineer position and eventual promotion to Junior
                      Engineer I worked on bug fixes and feature development,
                      collaborating on and heading multiple projects. I handled
                      regular releases to production via Azure pipelines and
                      demoed my features during company-wide presentations.
                    </div>
                  </div>
                </div>
                <div class="exp-part languages">
                  <div class="languages-container is-size-6">
                    <div class="languages-header">Frontend</div>
                    <div class="languages-text">
                      JavaScript, CSS, HTML, Razor
                    </div>
                    <div class="languages-header">Back End</div>
                    <div class="languages-text">C#, SQL, .Net</div>
                    <div class="languages-header">Version Control</div>
                    <div class="languages-text">Azure Devops</div>
                    <div class="languages-header">Testing</div>
                    <div class="languages-text">xUnit</div>
                  </div>
                </div>
              </div>
              <div className="exp-row">
                <div class="exp-part languages">
                  <div class="languages-container is-size-6 student">
                    <div class="languages-header">Frontend</div>
                    <div class="languages-text">
                      JavaScript, HTML/CSS, React, Sass, Bulma, Razor, JQuery,
                      AJAX
                    </div>
                    <div class="languages-header">Back End</div>
                    <div class="languages-text">
                      MongoDB, Mongoose, Express, Node.js, Python, Django, NPM,
                      mySQL, TablePlus
                    </div>
                    <div class="languages-header">Version Control</div>
                    <div class="languages-text">Git, GitHub, Heroku</div>
                    <div class="languages-header">Testing</div>
                    <div class="languages-text">Jest</div>
                  </div>
                </div>
                <div class="exp-part student">
                  <div className="is-size-3">Student</div>
                  <div className="is-size-5">
                    <i>General Assembly | April 21 - Jun 21</i>
                  </div>
                  <br />
                  <div className="is-size-5">
                    <div>
                      A 13 week remote immersive course that taught me the
                      fundamentals of programming in various languages
                      (JavaScript, React.js, HTML, and CSS), in which I learned
                      to build full-stack apps as an individual and a team.
                      Involved daily labs, stand-ups, and online lessons.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERESTS */}
        <section
          id="interests"
          className="section has-background-black has-text-white"
        >
          <h1 className="has-text-centered is-size-2">My Interests</h1>
          <br />
          <div className="columns">
            <div className="section column is-half is-offset-one-quarter">
              <div className="has-text-centered">
                <a
                  href="https://www.youtube.com/channel/UCaCnFiV6EODc_d2_vO9rDGw"
                  alt="YT Link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="interests-icon grow"
                    src="https://i.imgur.com/XuH59Y4.png"
                    alt="YT Icon"
                  />
                </a>
                <h2 className="is-size-4">Film &amp; Animation</h2>
                <hr />
                <div className="is-size-5">
                  I love to create animated works using Unreal Engine, Source
                  Filmmaker and various other programs. Click the icon to find
                  out more!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS */}
        <section id="contact" className="section has-background-white">
          <div className="has-text-centered">
            <h2 className="is-size-2">Contact</h2>
            <div className="hero-image-container">
              <img src={heroImage} alt="profile" className="hero-image" />
            </div>

            {/*Icon Links*/}
            <section class="flexbox-container">
              <div className="contact-icons">
                <div className="grow">
                  <a href="mailto: theowyz@btinternet.com">
                    <i class="fa fa-envelope"></i>
                  </a>
                  Email
                </div>
                <div class="grow">
                  <a
                    href="https://www.linkedin.com/in/theo-wyzgowski-66191a205/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="devicon-linkedin-plain"></i>
                  </a>
                  LinkedIn
                </div>

                <div class="grow">
                  <a
                    href="https://github.com/tdore92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="devicon-github-original"></i>
                  </a>
                  GitHub
                </div>
              </div>
            </section>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;
