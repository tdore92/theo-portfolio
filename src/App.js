
import './App.css';


function App() {
  return (
    <div className="">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/4fb58de0f3.js" crossorigin="anonymous"></script>
      </head>


      {/* TOP SECTION*/}
      <body class="body-font">
        <section className="section hero has-background">
          <div className="has-text-centered">

            <h1 className="test name">THEO WYZGOWSKI</h1>
            <h2 className="is-size-4 has-text-black">Junior Fullstack Software Developer</h2>
            <br />


            {/*Icon Links*/}
            <section class="flexbox-container">
              <div className="devicons level">
                <div class="grow">
                  <a href="https://www.linkedin.com/in/theo-wyzgowski-66191a205/" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain"></i></a>
                </div>

                <div class="grow">
                  <a href="https://github.com/tdore92" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i></a>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* ABOUT*/}

        <section className=" section flexbox-container has-background-black">
          <div className="flexbox-item flexbox-item-1 devicons has-text-white has-background-black">
            <div class="devicon-div"><i class="devicon-html5-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-css3-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-javascript-plain"></i></div>
            <div class="devicon-div"><i class="devicon-bulma-plain"></i></div>
            <div class="devicon-div"><i class="devicon-git-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-nodejs-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-react-original-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-github-original-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-python-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-mongodb-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-express-original-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-django-plain"></i></div>
            <div class="devicon-div"><i class="devicon-postgresql-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-npm-original-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-vscode-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-sass-original"></i></div>
            <div class="devicon-div"><i class="devicon-jquery-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-heroku-plain-wordmark"></i></div>
            <div class="devicon-div"><i class="devicon-trello-plain-wordmark"></i></div>
          </div>

          <div className="flexbox-item flexbox-item-2 has-text-centered has-text-white has-background-black">
            <p className="is-size-4">Previously working as a location sound recordist, I came across an app developed by a fellow coworker, which sparked my interest in software development. A year later, I enrolled at General Assembly, learning full-stack JavaScript, HTML, CSS, Python and React. With the course now completed, I’m excited to apply my newfound technical abilities towards a creative end-goal whilst learning from a team of experienced developers.</p>
          </div>
        </section>





        {/* PROJECTS */}
        <section className=" section has-background-white has-text-black">
          <h1 class="has-text-centered is-size-2">Projects</h1>
          <br />
          <h2 className="box has-text-centered">These projects were created during my time on the General Assembly Software Engineering Immersive course. Hover over each project to discover more about it, and click to visit!</h2>
          <br />
          <div className="flexbox-container-projects">

            <div className="">
              <a href="https://tdore92.github.io/project-1/" alt="MS Link" target="_blank" rel="noopener noreferrer">

                <div className="column">
                  <h3 className="card-header-title text is-centered is-size-4">Metroid Snake</h3>
                  <div className="image is-1by1 img__wrap grow">
                    <img class="img__img project-images" src="https://i.imgur.com/WlwChmr.png" alt="Click Here!" />
                    <div class="img__description_layer">
                      <p className="img__description has-text-centered">A Nintendo-themed variant of Snake. Defeat the Metroids, grow your army! Created in 1 week with HTML, CSS and JavaScript.</p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://github.com/tdore92/project-1" alt="" target="_blank" rel="noopener noreferrer">
                <div className="card-footer-item github-icon grow">
                  <i class="devicon-github-original"></i>
                </div>
              </a>

            </div>

            <div>
              <a href="https://ga-react-punk-api.netlify.app/" alt="Brewdog Link" target="_blank" rel="noopener noreferrer" >
                <div className="">
                  <div className="column">
                    <div className="card-header-title text is-centered is-size-4">BrewDog</div>
                    <div className="img__wrap image is-1by1 grow">
                      <img class="img__img project-images" src="https://i.imgur.com/XdQ5x0g.png" alt="Click Here!" />
                      <div class="img__description_layer">
                        <p className="img__description has-text-centered">Browse BrewDogs wares on this React App, created in 48 hours with a third party API and Axios requests.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </a>
              <a href="https://github.com/tdore92/sei-project-2" alt="" target="_blank" rel="noopener noreferrer">
                <div className="card-footer-item github-icon grow">
                  <i class="devicon-github-original"></i>
                </div>
              </a>
            </div>

            <div className="">
              <div className="column">
                <h3 className="card-header-title text is-centered is-size-4">MontVenture</h3>
                <div className="img__wrap image is-1by1 grow">
                  <img class="img__img project-images" src="https://i.imgur.com/RAvdPV4.png?1" alt="Click Here!" />
                  <div class="img__description_layer">
                    <p className="img__description has-text-centered">Search for UK based mountaineering activities with our MontVenture app. Created in 1 week with node.js, React.js and mongoDB.</p>
                  </div>
                </div>
              </div>
              <a href="https://github.com/tdore92/project-3-server" alt="" target="_blank" rel="noopener noreferrer">
                <div className="card-footer-item github-icon grow">
                  <i class="devicon-github-original"></i>
                </div>
              </a>
            </div>

            <div className="">
              <div className="column">
                <h3 className="card-header-title text is-centered is-size-4">Dinosaur Petshop</h3>
                <div className="image is-1by1 img__wrap grow">
                  <img class="img__img project-images" src="https://i.imgur.com/I22et98.png" alt="Click Here!" />
                  <div class="img__description_layer">
                    <p className="img__description has-text-centered">An online pet shop selling dinosaurs and assorted items- take the Q&amp;A to find the right dinosaur for you. Uses a Python Django backend and a React front end.</p>
                  </div>
                </div>
              </div>
              <a href="https://github.com/tdore92/project-4-server" alt="" target="_blank" rel="noopener noreferrer">
                <div className="card-footer-item github-icon grow">
                  <i class="devicon-github-original"></i>
                </div>
              </a>
            </div>



          </div>
        </section>


        {/* INTERESTS */}
        <section className="section has-background-black has-text-white">
          <h1 className="has-text-centered is-size-2">My Interests</h1>
          <br />
          <div className="columns flexbox-container section">
            <div className="column is-one-third has-text-centered">
              <a href="https://www.youtube.com/channel/UCaCnFiV6EODc_d2_vO9rDGw" alt="YT Link" target="_blank" rel="noopener noreferrer">
                <img class="interests-icon grow" src="http://pngmesh.com/media/1616166067.png" alt="YT Icon" />
              </a>
              <h2 className="is-size-5">Film &amp; Animation</h2>
              <hr />
              <p>I love to create animated works using Unreal Engine, Source Filmmaker and various other programs. Click the icon to find out more!</p>

            </div>
            <div className="column is-one-third has-text-centered interests-box">
              <a href="https://github.com/tdore92" alt="Blog Link" target="_blank" rel="noopener noreferrer">
                <img class="interests-icon grow" src="https://icons-for-free.com/iconfiles/png/512/blog+blogging+compose+resolutions+sign+write+icon-1320084094980840700.png" alt="Blog Icon" />
              </a>
              <h2 className="is-size-5">Software Development</h2>
              <hr />
              <p>I'm currently developing YouWatch- a blog based around showing and and expressing your internet viewing habits. Click the icon to follow its progress!</p>
            </div>
          </div>

        </section>

        {/* CONTACT DETAILS */}
        <section className="section">
          <div className="has-text-centered">
            <h2 className="is-size-2">Contact</h2>
            <hr/>
            <p className="is-size-3">theowyz@btinternet.com</p>
          </div>
        </section>
      </body>
    </div>
  )
}

export default App;
