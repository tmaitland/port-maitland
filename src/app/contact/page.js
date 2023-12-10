import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <main>
      <Navigation />
      <section className="contact-header">
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="display-5 fw-bold">Contact Me</h1>
        </div>
      </section>
      <section className="hold-contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 hold-form">
              <p className="lead">
                Thank you for stopping by! If you’d like to learn more about me
                and what I do, please feel free to contact me via the form on
                this page, reach out to me on my LinkedIn page, or contact me
                via my blog, ToniTalksTech. I’ll try to get back to you as soon
                as I can. I look forward to hearing from you!
              </p>
            </div>
            <div className="col-lg-6 hold-form">
              <iframe
                src="https://www.cognitoforms.com/f/CLYLixHiikSpd_bK02Y1TA/1"
                style={{ border: "0", width: "100%" }}
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
