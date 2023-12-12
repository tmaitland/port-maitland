import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import projectACCRPImgs from "../../../js/projectACCRP.js";

export default function ACCRP() {
  return (
    <main>
      <Navigation />
      <section className="feat-proj1-header">
        <div className="container text-center">
          <h1 className="display-5 fw-bold feat-proj-heading">
            ACCRP: Truth & Reconciliation
          </h1>
          {/* <div className="col-lg-6 mx-auto"></div> */}
        </div>
      </section>
      <section className="feat-project-text-container">
        <div className="container">
          <div className="row">
            <h2>Project Overview</h2>
            <p className="lead project-overview">
              The{" "}
              <a
                className="projectDetailLinks"
                href="https://truth.alachuacounty.us/"
                target="_blank"
              >
                Alachua County Community Remembrance Project
              </a>{" "}
              is a response to work completed by the Alachua County Historical
              Commission as led by the Alachua County Board of County
              Commissioners. The project is also inspired by the Equal Justice
              Initiative’s work done to document the unjust lynchings that took
              place between 1867 and 1926 in Alachua County, Florida. Alachua
              County has a website called Truth and Reconciliation that needed a
              redesign as well as some new sections that would aim to recognize
              those who were victims of racial terror and would also keep track
              of the historical sites of significance to the Black community in
              Alachua County. In doing this,{" "}
              <a
                className="projectDetailLinks"
                href="https://truth.alachuacounty.us/about"
                target="_blank"
              >
                ACCRP
              </a>{" "}
              aims to publicly confront the truth about this history of racial
              terror and injustice, fostering healing and reconciliation within
              the community.
            </p>
          </div>
          <div className="row">
            <h2>Process</h2>
            <p className="lead project-process">
              I showed interest in this project when my supervisor forwarded a
              message she received from a professor at the College of the Arts
              about a website project that she was helping lead in partnership
              with the county’s civic leaders. They needed a web developer to
              work on the front-end to help build a page where Black historical
              sites that they planned to store in an online database can be
              displayed on the “ACCRP: Truth and Reconciliation” website. Once I
              met with the professor, we came up with a timeline in hopes to get
              this project completed. I planned to re-design the website,
              establish some sort of brand identity, and redevelop the entire
              site.
            </p>
            <div className="row mini-gallery-row">
              {projectACCRPImgs.map((img) => {
               return (
                  <div key={img} className={"col-lg-4"}>
                      <a href={img.imgSrc} className="card-link" target="_blank">
                        <div className="card mb-4">
                          <Image
                            src={img.imgSrc}
                            width={700}
                            height={700}
                            className="mini-gallery-img"
                            alt={img.imgAlt}
                          />
                           <div className="card-body">
                              <p className="card-text">
                               {img.imgAlt}
                              </p>
                          </div>
                        </div>
                      </a>
                </div>
               );
              })}
            </div>
            <p className="lead project-process">
              For the mockups and style guide, I used Adobe XD. Since the
              initial iteration of the ACCRP website utilized React to build the
              frontend, that is the frontend library/framework tool that I
              decided to use. I also utilized SCSS to help handle the styling
              and Axios to handle one of the API calls to the database (I used
              fetch for the other). We had a graphic designer create the
              community map that would feature the Black heritage sites’
              locations in the county, and another Graphic designer to make the
              image I selected for the home page’s header into a video. Once the
              frontend was mostly completed, I partnered with Alachua County’s
              IT team of developers to build the backend of the website so that
              I can connect it to the frontend. Once everything was connected,
              the site went live!
            </p>
          </div>
          <div className="row">
            <h2>Outcome</h2>
            <p className="lead project-outcome">
              At the end of this project, we not only had a new website with
              updated features, but a community map that helps Alachua County
              citizens and visitors learn about the historical richness of this
              region, and to recognize the impactful contributions of Black
              Americans and other African descendent people. We threw a party to
              celebrate and it was so amazing to meet all of the wonderful civic
              leaders and community members that were a part of or took great
              interest in this project. It was great to know that the work I did
              will serve a definite purpose and have a genuine impact on the
              citizens and visitors of Alachua County.
            </p>
          </div>
          <Link className="back-feat-projects" href="/#projects-featured">Back to Featured Projects</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
