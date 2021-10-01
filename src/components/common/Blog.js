function Blog() {

  return (
    <>
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        </head>
        <div className="blog-font">
          <header className="hero has-background-white has-text-black">
            <div className="hero-body container has-text-centered">
              <h1 className="is-size-1 section"><strong>The Book of Theodore</strong></h1>
              <p>Welcome to my blog! This will mainly detail my journey developing my different projects in Javascript, React, Python and Node.js.</p>
            </div>
          </header>
          <body className="has-text-white blog-font">
            <section className="section">
              <div>
                <div><div className="is-size-4">Introductory Post<div className="is-pulled-right">Sept 19th 2021</div></div></div>
                <hr />
                <figure className="blog-image-figure">
                  <img className="blog-image" src="https://i.imgur.com/Sa2znGH.png" alt="youwatch pseudo" />
                  <figcaption><small>YouWatch pseudo</small></figcaption>
                </figure>
                <p>Hello! Simple layout to start with - as this page develops it'll get more complex and hold more widgets. So I'll outline what I'm currently working on:</p> 
                <br/>
                <p>My biggest current project is <u>YouWatch</u>, where users can post their YouTube viewing habits and browse other users collections. This is a full-stack project using Django/Python and React. The design will reflect the grid system of Netflix, with a 'like' and comment system in place to promote interactivity and sharing between users.</p>                
                <p>It's been a while since I've worked with pure JavaScript, so I'm creating a Halo-themed variant of <u>Space Invaders</u> to keep my hand in. At GA I created a game of Snake so I'm applying similar logic concepts when it comes to movement and scoring systems. Definitely looking forward to creating the visual and sound design for this one!</p>
                <p>Currently this blog is comprised of basic HTML and new posts are pushed to the GitHub - fine ,but I'd rather use a more sophisticated approach. My current thinking is to create a Python or Node.js backend with a basic post model, this'll also allow visitors to filter my posts by a month &amp; year field.</p>
              </div>
            </section>
          </body>
        </div>
      </html>
    </>
  )

}

export default Blog