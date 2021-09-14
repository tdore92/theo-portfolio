function Blog() {

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet" />
      </head>
      <div className="blog-font has-background-black has-text-white">
        <header className="hero">
          <div className="hero-body container has-text-centered">
            <h1 className="is-size-1 section">THE BOOK OF THEODORE</h1>
            <p>Welcome to my blog! This will mainly detail my journey developing my different projects in Javascript, React, Python and Node.js, at least until I get a full-time job. Just kidding. But not really. I mean, maybe.</p>
          </div>
        </header>

        <section className="section section-card">
          <div>
            <div><div className="is-size-4">Blogs are on the way<div className="is-pulled-right">Date Posted</div></div></div>
            <br/>
            <p>(This is the basic layout)</p>
          </div>
        </section>
      </div>
    </>
  )

}

export default Blog