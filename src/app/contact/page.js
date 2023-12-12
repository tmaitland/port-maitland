import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <main>
      <Navigation />
      <section className="contact-header">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Contact Me</h1>
        </div>
      </section>
      <section className="hold-contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 hold-form-text">
              <p className="lead form-paragraph">
                Thank you for stopping by! If you’d like to speak with me or if you have any questions, please feel free to contact me via the form on
                this page. I’ll try to get back to you as soon as I can. <br/><br/>
                If you would like to learn more about me and what I do, feel free to check out my <a className="projectDetailLinks" href="https://www.linkedin.com/in/toni-lee-m-5b5703b2/" target="_blank">LinkedIn</a> 
                {" "}page. To hear my thoughts or perspective on topics related to tech or my personal experiences, please feel free to check out my blog, <a className="projectDetailLinks" href="https://tonitalkstech.com/" target="_blank">ToniTalksTech</a>. I look forward to connecting and meeting with you!
              </p>
            </div>
            <div className="col-lg-12 hold-form">
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
