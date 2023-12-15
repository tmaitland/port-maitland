'use client';

import Navigation from "../../../components/Navigation";
import React, { useState } from 'react';
import Modal from 'react-modal';
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import projectAIUFImgs from "../../../js/projectAIUF.js";

export default function AIUFProject() {
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
            <p className="lead project-overview">
              The University of Florida’s{" "}
              <a
                className="projectDetailLinks"
                href="https://ai.ufl.edu/"
                target="_blank"
              >
                Artificial Intelligence
              </a>{" "}
              website needed a redesign and as the Web Developer hired to help
              the Marketing and Communications department with current and
              upcoming web projects, I was assigned this task. UF’s Artificial
              Intelligence initiative was being developed around that time, and
              they needed an updated website where they could present that
              information for all interested parties and stakeholders to access
              once completed. I was asked to redesign the landing page and to
              also add a possible AI News section as well as an AI Search
              section.
            </p>
          </div>
          <div className="row">
            <h2>Process</h2>
            <p className="lead project-process">
              <a
                className="projectDetailLinks"
                href="https://ai.ufl.edu/"
                target="_blank"
              ></a>
              I met with members of the Market and Communications team at UF and
              we discussed the type of content they hoped to have presented on
              the landing page, as well as a vision for other additions to the
              website like a news section and a search section. They showed me
              websites for other universities’ AI initiatives, and I also did my
              own research on other companies and organizations’ AI-focused
              websites. I was particularly inspired by Google’s <a
                className="projectDetailLinks"
                href="https://ai.google/"
                target="_blank"
              >AI website</a>.
              Although I had to maintain UF’s branding, I was able to
              incorporate some elements of the bright, open spacing and a
              mixture of sharp-cornered and round, soft-cornered containers in
              my AdobeXD mockups.
            </p>
            <div className="row mini-gallery-row">
              {projectAIUFImgs.map((img) => {
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
              After designing, having the design reviewed and then eventually
              approved, the next step was development. I worked with a few
              teammates to help build out parts of the pages. We used a content
              management system called Terminal 4. It allows us to build content
              types using HTML, CSS, and JavaScript in order to create reusable
              content pieces that users can add to their websites to display
              content and other media of their choosing.
            </p>
          </div>
          <div className="row">
            <h2>Outcome</h2>
            <p className="lead project-outcome">
              The AI news page exists, but uses some variation in design today
              and the search has since been put on pause. I do not have much
              insight into what led to these decisions, but the website is still
              available, provides pertinent data, and still uses content types
              and layouts that I created a few years ago.
            </p>
          </div>
          <Link className="back-feat-projects" href="/#projects-featured">Back to Featured Projects</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
