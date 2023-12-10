import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import projects from "../../js/projects.js";
import Image from "next/image";
import projHeadImg from "../../imgs/faizur-rehman-yapBRdPWxik-unsplash.jpg";

export default function Projects() {
  return (
    <main>
      <Navigation />
      <section className="projects-header">
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1">Projects</h1>
              <p className="lead">
                Below you will find direct links to some of the projects that I have worked on
                throughout my development career. This page will be updated
                as I work on and complete more projects.
              </p>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <Image
                src={projHeadImg}
                className="rounded-3"
                alt="Project header image from Unsplash by Faizur Rehman"
                width={720}
                // height={250}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="hold-projects">
        <div className="container">
          <div className="row">
            {projects.map((project) => {
              return (
                <div key={project} className={"col-lg-4"}>
                  <a href={project.url} className="card-link" target="_blank">
                    <div className="card mb-4">
                      <Image
                        src={project.screenshot}
                        alt={project.alt}
                        className="project-page-imgs"
                        width={500}
                        height={300}
                      />
                      <div className="card-body">
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-text">{project.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              );
              // console.log(project);
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
