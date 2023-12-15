'use client';

import Navigation from "../../../components/Navigation";
import React, { useState } from 'react';
import Modal from 'react-modal';
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import project240Imgs from "../../../js/project240.js";


export default function Cert240Project() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <main>
      <Navigation />
      <section className="feat-proj2-header">
        <div className="container text-center">
          <h1 className="display-5 fw-bold feat-proj-heading">
            240 Certification
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
                href="https://240certification.com/"
                target="_blank"
              >
                240 Certification
              </a>{" "}
              website is a small web project that the company 240 Tutoring set
              up to give prospective clients more information about how to
              become a certified teacher in Texas via their services. A former
              coworker of mine reached out to me about an open contract role
              that{" "}{" "}
              <a
                className="projectDetailLinks"
                href="https://www.240tutoring.com/"
                target="_blank"
              >
                240 Tutoring
              </a>{" "}
              had asking for a developer to create this site. I accepted the
              role and went on to create a custom WordPress theme and custom
              content blocks for this site and its content, based on the mockup
              their designer made.
            </p>
          </div>
          <div className="row">
            <h2>Process</h2>
            <p className="lead project-process">
              First, I met with my former co-worker and the designer from 240
              Tutoring to go over the mockup, what was expected, timeline,
              payment, and other contract paperwork. Then, I went over the
              technologies I would use. For the custom theme, I used PHP with
              HTML to create the classic Template Files that can be referenced
              on the{" "}
              <a
                href="https://developer.wordpress.org/"
                className="projectDetailLinks"
                target="_blank"
              >
                WordPress Developer 
              </a>{" "}website. Each template file is dynamic. WordPress has template tags which
              are functions that allow users to call and output data from the
              database. So I built standard templates for pages and page
              components like the header and footer, that can be used throughout
              the website. All the user does in the content management system
              portion of WordPress is just select the appropriate options to
              select the appropriate template for their page or blog posts. I
              also used CSS to style the theme according to the mockup provided.
            </p>
            <div className="row mini-gallery-row">
              {project240Imgs.map((img) => {
               return (
                  <div key={img} className={"col-lg-6"}>
                      <a className="card-link" onClick={() => openModal(img.imgSrc)}
            style={{ cursor: 'pointer' }}>
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
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{ cursor: 'pointer'}}
                className="modalContent"
                overlayClassName="modalOverlay"
              >
                <button className="btn-first modalButton" onClick={closeModal}>Close Modal</button>
                <Image 
                src={selectedImage} alt="Selected Image"  
                width={1920}
                height={4500} 
                className="modalImage"
                />
              </Modal>
            </div>
            <p className="lead project-process">
              A large part of the project was the custom blocks. WordPress’s
              custom blocks allow users to add content to their site via an
              editor that will closely resemble how the content will look in the
              front-end of the website. It helps users get a better idea of how
              their content is arranged, which helps keep expectations as close
              to the reality as possible. For these custom blocks I referenced
              WordPress’s{" "}
              <a
                href="https://developer.wordpress.org/block-editor/reference-guides/"
                className="projectDetailLinks"
                target="_blank"
              >
                API reference guides
              </a>{" "}
              and this WordPress{" "}
              <a
                href="https://www.youtube.com/watch?v=U4sfx7vN0Iw"
                className="projectDetailLinks"
                target="_blank"
              >
                Gutenberg block training
              </a>{" "}
              by Imran Sayed any time I got stuck or if I wanted to find a new
              feature to add to the blocks I was building. I used React, SCSS,
              and PHP to help create both the back-end and front-end appearance
              and functionality of these custom blocks.
            </p>
          </div>
          <div className="row">
            <h2>Outcome</h2>
            <p className="lead project-outcome">
              After this project was completed, it went live and I learned that
              it earned a Web Core Vitals average score of 97. I learned a lot
              from the project about how useful the WordPress documentation is
              and how strong and passionate the community is about sharing
              knowledge so that developers can understand how to make great
              websites for clients. In turn, this helps empower clients to
              handle and direct their website’s journey once the developer hands
              it off.
            </p>
          </div>
          <Link className="back-feat-projects" href="/#projects-featured">Back to Featured Projects</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
