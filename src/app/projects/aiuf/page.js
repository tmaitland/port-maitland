import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function AIUFProject() {
  return (
    <main>
      <Navigation />
      <section className="feat-proj3-header">
        <div className="container text-center">
          <h1 className="display-5 fw-bold feat-proj-heading">AI at UF</h1>
          {/* <div className="col-lg-6 mx-auto"></div> */}
        </div>
      </section>
      <section className="feat-project-text-container">
        <div className="container">
            <div className="row">
                <h2>Project Overview</h2>
            </div>
            <div className="row">
                <h2>Process</h2>
            </div>
            <div className="row">
                <h2>Outcome</h2>
            </div>
            <Link href="/#projects-featured">Back to Featured Projects</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
