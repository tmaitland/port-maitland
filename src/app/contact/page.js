import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Contact() {
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
        <h1 className="display-5 fw-bold">Contact Me</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div> */}
        </div>
      </div>
      <section className="hold-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 hold-form">
              <p className="lead">
                Please do not hesitate to send me a message if you want me work
                on a project, if you have any questions or comments, or if you
                just want to say hello. You can contact me by sending me a
                message via the form to the right, or contact me via the available 
                links. I look forward to hearing from you!
              </p>
            </div>
            <div className="col-lg-6 hold-form">
              <iframe
                src="https://www.cognitoforms.com/f/CLYLixHiikSpd_bK02Y1TA/1"
                style={{border:"0", width: "100%"}}
                height="417"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <script src="https://www.cognitoforms.com/f/iframe.js"></script>
    </main>
  );
}
