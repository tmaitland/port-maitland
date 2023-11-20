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
    marginTop:"1.6em",
    marginBottom: "0.9em", 
    overflow: "hidden",
    borderRadius: "8px", 
    willChange: "transform"
  }
  const iframeStyles = {
    position: "absolute", 
    width: "100%", 
    height: "100%",
    top: 0, 
    left: 0, 
    border: "none", 
    padding: 0,
    margin: 0
  }
  return (
    <main>
      <Navigation />
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold">About Me</h1>
        <div className="col-lg-6 mx-auto"></div>
      </div>
      <section className="about-text-container">
        <div className="container">
          <p className="lead about-text">
            Purus in mollis nunc sed id semper risus. Neque gravida in fermentum
            et sollicitudin ac orci. Aenean et tortor at risus viverra
            adipiscing. Lectus quam id leo in vitae. Auctor neque vitae tempus
            quam pellentesque nec nam. Risus nullam eget felis eget nunc
            lobortis mattis aliquam faucibus. Fringilla urna porttitor rhoncus
            dolor purus. Id cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin. Tempor id eu nisl nunc mi ipsum faucibus. Tortor id
            aliquet lectus proin nibh nisl condimentum id. Ut morbi tincidunt
            augue interdum velit euismod in. In pellentesque massa placerat duis
            ultricies lacus. Id nibh tortor id aliquet lectus proin nibh nisl.
            Scelerisque varius morbi enim nunc. Non arcu risus quis varius quam
            quisque id. Sem nulla pharetra diam sit amet nisl. Duis at tellus at
            urna condimentum mattis pellentesque.
          </p>
        </div>
      </section>
      <section className="about-tech-resume">
        <div className="container">
          <div className="resume-intro">
            <h2 className="text-center my-3">My Developer Work Experience</h2>
            <p className="lead about-text">
              Purus in mollis nunc sed id semper risus. Neque gravida in
              fermentum et sollicitudin ac orci. Aenean et tortor at risus
              viverra adipiscing. Lectus quam id leo in vitae. Auctor neque
              vitae tempus quam pellentesque nec nam. Risus nullam eget felis
              eget nunc lobortis mattis aliquam faucibus.
            </p>
            <div className="hold-header-cta">
                <a
                  target="_blank"
                  href=""
                  className="btn btn-outline-primary px-4 bloglink"
                >
                  Download Resume
                </a>
            </div>
          </div>
          <div className="hold-iframe-resume">
            <div
              style={iframeDivStyles}
            >
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
