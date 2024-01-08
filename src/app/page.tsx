import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import projectOne from "../imgs/projects/accrp.png";
import projectTwo from "../imgs/projects/240cert.png";
import projectThree from "../imgs/projects/ai-ufl.png";
import featBlogPost from "../imgs/feat-blog-post.png";

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="top-hero">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Hello! I'm Toni-Lee. </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              I'm an experienced Web Developer, Web Designer, and Technical Writer. I also have a background in
              education, research, and history. 
            </p>
            <p className="lead">
              Check out the rest of my site below!
            </p>
            <div className="hold-header-cta">
              <a href="#about-teaser" className="btn-first px-4 bloglink">
                See More Below
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about-teaser" id="about-teaser">
        <div className="container">
          <div className="row">
            <h2 className="teaser-heading text-center">About</h2>
            <div className="hold-teaser-text">
              <p className="lead teaser-text">
                Welcome! I’m so glad to have you here. I made this website to
                showcase some projects I have worked on in the past and that I
                have been working on recently. For the past five years, I have
                been working professionally as a Web Developer. While most of my
                work does lie in designing websites and developing the frontend, 
                I do work with the backend to input data or access
                information from the database. I am looking for roles that utilize my 
                skills in web development, web design, and technical writing in the 
                web development or software enginnering fields.
              </p>
              <a href="/about" className="btn-first px-4">
                More About Me
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-teaser" id="projects-featured">
        <div className="container">
          <div className="row">
            <h2 className="teaser-heading text-center">Featured Projects</h2>
            <div className="hold-teaser-text">
              <p className="lead teaser-text">
                These are the most recent projects that I have worked on, and
                they have a bit more detailed information about the process that
                went into completing each of them. This will be updated as I
                take on and complete more current projects.
              </p>
            </div>
          </div>
          <div className="row hold-project-cards">
            <div className="col-lg-4 col-md-12">
             <div className="project card" id="one">
                <Image
                  src={projectOne}
                  alt="ACCRP Website project screenshot image"
                  width={400}
                  height={300}
                />
                <div className="card-body">
                  <h3 className="card-title">ACCRP: Truth & Reconciliation</h3>
                  <p className="card-text">
                    With this project, I was asked to develop a new website for
                    the Alachua County Community Remembrance Project (ACCRP).
                  </p>
                  <a href="/projects/accrp" className="btn-second">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="project card" id="two">
                <Image
                  src={projectTwo}
                  width={400}
                  height={300}
                  alt="240 certification website project screenshot image"
                />
                <div className="card-body">
                  <h3 className="card-title">240 Certification</h3>
                  <p className="card-text">
                    I was asked to develop custom WordPress content blocks to
                    accompany a custommized WordPress theme for 240 Tutoring's
                    new 240 Certification website.
                  </p>
                  <a href="/projects/240certification" className="btn-second">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="project card" id="three">
                <Image
                  src={projectThree}
                  width={400}
                  height={300}
                  alt="Ai.ufl.edu website project screenshot image"
                />
                <div className="card-body">
                  <h3 className="card-title">UF: Artificial Intelligence</h3>
                  <p className="card-text">
                    In this project, I was asked to focus on the re-design and re-development of
                    the Artificial Intelligence website that the University of
                    Florida launched.
                  </p>
                  <a href="/projects/aiuf" className="btn-second">
                    View Details
                  </a>
                </div>
            </div>
             
            </div>
            <div className="hold-cta">
              <a href="/projects" className="btn-first px-4">
                See All Projects
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="blog-teaser">
        <div className="container">
          <div className="row">
            <h2 className="teaser-heading text-center">Featured Blog Post</h2>
            <div className="hold-teaser-text">
              <p className="lead teaser-text">
                I also have a blog where I discuss various topics like
                technology, education, music, and self care. You’re welcome to
                follow my whereabouts there, too. Below you’ll find an excerpt
                and link to my most recent post.
              </p>
            </div>
           
              <div className="col-lg-6">
                <div className="hold-feat-img">
                  <Image
                    className="feat-blog-post-img"
                    src={featBlogPost}
                    alt="featured blog post from ToniTalksTech screenshot image"
                  />

                </div>
              </div>
              <div className="col-lg-6">
                <p className="lead blog-excerpt">
                  I have been away from this blog for quite some time, with
                  every intention of returning. A lot has happened within the
                  past almost two years that has kept me from returning fully. I
                  had to take time to heal, grieve, deal with family affairs,
                  and attempt to manage my life healthily. I recently
                  experienced the unexpected passing of my Mother, which to this
                  day I still struggle to fully accept, even though I know the
                  reality.
                </p>
                <div className="hold-header-cta">
                  <a
                    target="_blank"
                    href="https://tonitalkstech.com/2023/11/14/tonitalks-dealing-with-grief/"
                    className="btn-first px-4 bloglink"
                  >
                    Read Blog Post
                  </a>
                </div>
              </div>

          </div>
        </div>
      </section> */}
      <Footer />
    </main>
  );
}
