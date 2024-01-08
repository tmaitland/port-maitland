import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function About() {
  const iframeDivStyles = {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: "129.4118%",
    paddingBottom: 0,
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "1.6em",
    marginBottom: "0.9em",
    overflow: "hidden",
    borderRadius: "8px",
    willChange: "transform",
  };
  const iframeStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    border: "none",
    padding: 0,
    margin: 0,
  };
  return (
    <main>
      <Navigation />
      <section className="about-header">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">About Me</h1>
          {/* <div className="col-lg-6 mx-auto"></div> */}
        </div>
      </section>
      <section className="about-text-container">
        <div className="container">
          <p className="lead about-text">
            Welcome! I’m so glad to have you here. I made this website to
            showcase some projects I have worked on in the past and that I have
            been working on recently. For the past five years, I have been
            working professionally as a Web Developer.  While most of my
            work does lie in designing websites and developing the frontend, 
            I do work with the backend to input data or access
            information from the database. I am looking for roles that utilize my 
            skills in web development, web design, and technical writing in the 
            web development or software enginnering fields. Some technologies that I regularly work with
            include HTML, CSS/SCSS, JavaScript, React, PHP, WordPress, and
            Terminal4. You can access my resume below if you would like to read
            more about my experience in web development and other technologies
            and tools that I use. 
            <br/>  <br/>
            Another thing about me is that I have a lot of
            interests. Choosing a career path was not easy, but I definitely
            like to choose topics that allow me have the freedom to explore
            other topics simultaneously. This is the major reason why I
            initially chose history as a major, because I’m curious and love to
            investigate the origins of people, places, and things. Underneath
            that was a brewing interest in the Internet and technology. I was
            always on the Internet as a child growing up, and it became a
            gateway to funnel more energy into researching my various interests.
            I pursued web development after a break in teaching that led to jobs
            and freelance projects over the past five years. Some of my other
            interests include reading, writing, art/design, music, fashion,
            social sciences, the humanities, AI, science, health and wellness,
            and delicious food. I explore pertinent technical topics and my other 
            interests on my blog, <a class="projectDetailLinks" target="_blank" href="">ToniTalksTech</a>.
          </p>
        </div>
      </section>
      <section className="about-tech-resume">
        <div className="container">
          <div className="resume-intro">
            <h2 className="text-center my-3">Professional Developer Experience</h2>
            <p className="lead about-text">
              Below you will find an embed of my resume, where you can see more details about 
              my professional experience in the information or Internet technology field.
              There is also a link below the resume where you can open my resume in a new
              tab and have the option to share with other interested parties.
            </p>
    
          </div>
          <div className="hold-iframe-resume">
            <div style={iframeDivStyles}>
              <iframe
                loading="lazy"
                style={iframeStyles}
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFmrbBqPOY&#x2F;view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
              ></iframe>
            </div>
            <a
              href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFmrbBqPOY&#x2F;view?utm_content=DAFmrbBqPOY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
              target="_blank"
              rel="noopener"
            >
              Toni-Lee's Resume
            </a>{" "}
            by Toni-Lee Maitland
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
