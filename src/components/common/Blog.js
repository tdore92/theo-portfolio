function Blog() {

  return (
    <>
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet" />
        </head>
        <div className="blog-font has-text-white">
          <header className="hero">
            <div className="hero-body container has-text-centered">
              <img className="blog-profile-image " src="https://i.imgur.com/dGTSlH5.jpg" alt="profile-mugshot" />
              <h1 className="is-size-1 section">Theo Wyzgowski</h1>
              <p>Welcome to my blog! This will mainly detail my journey developing my different projects in Javascript, React, Python and Node.js.</p>
            </div>
          </header>
          <body className="blog-font has-text-white">
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
                <h2>YouWatch</h2>
                <br/>
                <p>My biggest current project is YouWatch, where users can post their YouTube viewing habits and browse other users collections. This is a full-stack project using Django/Python and React.</p>
                <br />
                <h2>Space Invaders</h2>
                <br />
                <p>It's been a while since I've worked with pure JavaScript, so I'm creating a Halo-themed variant of Space Invaders to keep my hand in. At GA I created a game of Snake so I'm applying similar logic concepts when it comes to movement and scoring systems.</p>
                <br />
                <h2>Blog Backend</h2>
                <br />
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