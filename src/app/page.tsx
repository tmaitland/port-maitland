import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import projectOne from "../imgs/projects/240cert.png";
import projectTwo from "../imgs/projects/experts-ufl.png";
import projectThree from "../imgs/projects/ai-ufl.png";

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="top-hero">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">Hello! I'm Toni-Lee. </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              I'm an experienced Web Developer who specializes in Front-End
              programming and Web Design. I also have a background in K-12
              education, research, history, and writing.
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="container px-5">
              <img
                src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
                loading="lazy"
              />
              <p className="lead">
                Check out my latest blog post, or see the rest of my site below!
              </p>
              <div className="hold-header-cta">
                <a
                  target="_blank"
                  href="https://tonitalkstech.com/2023/11/14/tonitalks-dealing-with-grief/"
                  className="btn btn-primary px-4 bloglink"
                >
                  Read Blog
                </a>
                <a
                  href="#about-teaser"
                  className="btn btn-primary px-4 bloglink"
                >
                  See More Below
                </a>
              </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque elit eget gravida cum sociis natoque penatibus et
                magnis. Sagittis id consectetur purus ut faucibus. Enim nunc
                faucibus a pellentesque sit amet porttitor. Sit amet purus
                gravida quis blandit turpis cursus.
              </p>
              <a href="/about" className="btn btn-primary px-4">
                More About Me
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-teaser">
        <div className="container">
          <div className="row">
            <h2 className="teaser-heading text-center">Featured Projects</h2>
            <div className="hold-teaser-text">
              <p className="lead teaser-text">
                Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
                Porttitor leo a diam sollicitudin. Ornare suspendisse sed nisi
                lacus sed viverra tellus. Sit amet mauris commodo quis. Non
                tellus orci ac auctor augue mauris augue neque. Amet consectetur
                adipiscing elit duis tristique sollicitudin nibh sit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="hold-project-cards">
              <div className="project card col-lg-4" id="one">
                <Image
                  src={projectOne}
                  alt="240 Certification Website project screenshot image"
                  width={400}
                  height={250}
                />
                <div className="card-body">
                  <h3 className="card-title">240 Certification</h3>
                  <p className="card-text">
                    With this project, I was asked to develop a new website for
                    the certification service that 240Tutoring provides.
                  </p>
                  <a href="/projects/240certification" className="btn btn-info">
                    View Details
                  </a>
                </div>
              </div>
              <div className="project card col-lg-4" id="two">
                <Image
                  src={projectTwo}
                  width={400}
                  height={250}
                  alt="Experts.ufl.edu website project screenshot image"
                />
                <div className="card-body">
                  <h3 className="card-title">UF Experts</h3>
                  <p className="card-text">
                    This project was a re-design and re-development of the
                    University of Florida's Experts website, featured in a custommized WordPress theme.
                  </p>
                  <a href="/projects/ufexperts" className="btn btn-info">
                    View Details
                  </a>
                </div>
              </div>
              <div className="project card col-lg-4" id="three">
                <Image
                  src={projectThree}
                  width={400}
                  height={250}
                  alt="Ai.ufl.edu website project screenshot image"
                />
                 <div className="card-body">
                  <h3 className="card-title">Artificial Intelligence</h3>
                  <p className="card-text">
                  This project focused on the re-design and re-development of the 
                  Artificial Intelligence website that the University of Florida launched.
                  </p>
                  <a href="/projects/ai-uf" className="btn btn-info">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="hold-cta">
              <a href="/projects" className="btn btn-primary px-4">
                See More Projects
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
