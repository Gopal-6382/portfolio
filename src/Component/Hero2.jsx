// src/components/Hero2.jsx
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContent } from "./ModalContent";
import "../Sass/Hero.scss";
import BoardSvg from "./Hero";
import img1 from "../assets/img/IMG_20230126_214810.jpg";
import mongo from "../assets/Icons/skill-icons--mongodb.svg";
import express from "../assets/Icons/skill-icons--expressjs-dark.svg";
import react from "../assets/Icons/skill-icons--react-dark.svg";
import node from "../assets/Icons/skill-icons--nodejs-dark.svg";
import arrow from "../assets/Hero/Hero-Arrow.svg";
import starhero from "../assets/Hero/Hero-Star.svg";
import bulb from "../assets/Hero/bulb.svg";
import star from "../assets/Hero/start2.svg";
export const Hero2 = () => {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleShow = (type) => {
    setModalType(type);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div id="section-2" className="section-2">
      <div className="container">
        <div className="row">
          <div className="col-12 hero1 pe-md-5 col-md-6">
            <img src={star} alt="Start2" className="star-2" />
            <h1 className="t-hero">I Design And Develop Top Notch Websites</h1>
            <div className="tech-stack d-flex gap-3 py-2">
              {[
                { name: "MongoDB", icon: mongo },
                { name: "Express", icon: express },
                { name: "React", icon: react },
                { name: "Node.js", icon: node },
              ].map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-icon"
                  width="40"
                  height="40"
                />
              ))}
            </div>

            <div className="btnsection d-flex gap-3 mt-5">
              <button
                className="btn text-white rounded-5"
                onClick={() => handleShow("about")}
              >
                About Me
              </button>
              <button
                className="btn text-white rounded-5"
                onClick={() => handleShow("hire")}
              >
                Hire Me
              </button>
              <button
                className="btn text-white rounded-5"
                onClick={() => handleShow("resume")}
              >
                Resume
              </button>
            </div>
          </div>
          <div className="col-12 hero-2 col-md-6 board position-relative">
            <img src={arrow} alt="Arrow" className="hero-arrow" />
            <BoardSvg imageUrl={img1} className="b-svg" />
            <img src={bulb} alt="Bulb" className="bulb" />
            <img src={starhero} alt="Hero Star" className="hero-star" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <ModalContent modalType={modalType} handleClose={handleClose} />
        <Modal.Footer style={{ background: "#f6f9d4", borderTop: "none" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
