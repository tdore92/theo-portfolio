import React from "react";
import "./Home.css";
import heroImage from "./images/theo_profile.jpg";

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
        <script
          src="https://kit.fontawesome.com/4fb58de0f3.js"
          crossorigin="anonymous"
        ></script>
      </head>

      {/* TOP SECTION*/}
      <body class="body-font">
        <section className="section hero has-background has-background-white">
          <div className="has-text-centered">
            <h1 className="test name">THEO WYZGOWSKI</h1>
            <h2 className="is-size-3 has-text-black">
              Junior Software Engineer
            </h2>
            <br />
          </div>
        </section>

        {/* ABOUT*/}

        <section className="section flexbox-container has-background-black">
          <div className="flexbox-item flexbox-item-1 has-background-black">
            <div className="hero-image-container">
              <img src={heroImage} alt="profile" className="hero-image" />
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
        <section className="section has-background-white has-text-black experience-section">
          <div className="has-text-centered is-size-2">Experience</div>
          <br />
          <div className="experience-container">
            <div className="experience-item">
              <div>
                <div className="is-size-3">Junior Software Engineer</div>
                <div className="is-size-5">Evotix | May 22 - Oct 24</div>
                <br />
                <div className="is-size-5">
                  Starting as a Graduate developer, I worked within a team
                  focused primarily on the company product and provided
                  development effort and met sprint goals using agile workflow.
                  <br />
                  In this role I was introduced to MVC and Razor development
                  within the .NET framework. Across both my Graduate Engineer
                  position and eventual promotion to Junior Engineer I worked on
                  bug fixes and feature development, collaborating on and
                  heading multiple projects. We made use of a combination of SQL
                  Server and AWS for data file storage - utilising their APIs
                  for specific work such as translations via the AWS Translate
                  API. I handled multiple releases to production via Azure
                  pipelines and demoed my features during company-wide
                  presentations.
                </div>
              </div>
              <div className="experience-icons devicons">
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
                  <i class="devicon-csharp-plain-wordmark"></i>
                </div>
                <div class="devicon-div">
                  <i class="devicon-microsoftsqlserver-plain"></i>
                </div>
                <div class="devicon-div">
                  <i class="devicon-dot-net-plain"></i>
                </div>
                <div class="devicon-div">
                  <i class="devicon-jquery-plain-wordmark"></i>
                </div>
              </div>
            </div>
            <br />
            <div className="experience-item">
              <div className="experience-icons devicons">
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
              </div>
              <div>
                <div className="is-size-3">Student</div>
                <div className="is-size-5">
                  General Assembly | April 21 - Jun 21
                </div>
                <br />
                <div className="is-size-5">
                  A 13 week remote immersive course that taught me the
                  fundamentals of programming in various languages (JavaScript,
                  React.js, HTML, and CSS), in which I learned to build
                  full-stack apps as an individual and a team. Involved daily
                  labs, stand-ups, and online lessons.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERESTS */}
        <section className="section has-background-black has-text-white">
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
                <h2 className="is-size-5">Film &amp; Animation</h2>
                <hr />
                <p>
                  I love to create animated works using Unreal Engine, Source
                  Filmmaker and various other programs. Click the icon to find
                  out more!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS */}
        <section className="section has-background-white">
          <div className="has-text-centered">
            <h2 className="is-size-2">Contact</h2>
            <hr />
            <p className="is-size-3">theowyz@btinternet.com</p>

            {/*Icon Links*/}
            <section class="flexbox-container">
              <div className="devicons level">
                <div class="grow">
                  <a
                    href="https://www.linkedin.com/in/theo-wyzgowski-66191a205/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="devicon-linkedin-plain"></i>
                  </a>
                </div>

                <div class="grow">
                  <a
                    href="https://github.com/tdore92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="devicon-github-original"></i>
                  </a>
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
