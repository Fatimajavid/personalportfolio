import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import aboutLogo from "../images/avatarme.png";
import "../index.css";


function About() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const strings = [
      "Problem Solver",
      "Lifelong Learner",
      "Aspiring Developer",
      "Data Analyst",
      "Finance & Data Enthusiast",
      "Student",
    ];

    let typingSpeed = 220;
    let deletingSpeed = 180;

    const handleTyping = () => {
      const currentString = strings[currentIndex];

      if (!deleting) {
        if (currentText.length < currentString.length) {
          setCurrentText(currentText + currentString.charAt(currentText.length));
        } else {
          setDeleting(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }
      }
    };

    const timer = setInterval(handleTyping, deleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(timer);
  }, [currentText, currentIndex, deleting]);

  return (
    <section>
      <Container fluid className="about-section" id="about" style={{ padding: "100px" }}>
        <Container className="about-content" style={{ padding: 0 }}>
          <Row className="d-flex align-items-center justify-content-center" style={{ maxWidth: "1040px", margin: "0 auto", padding: 0 }}>
            
            <Col md={6} className="text-section" style={{ padding: "0.8rem" }}>
              <h1 className="ibm-plex-serif" style={{ fontSize: "1.8rem" }}>
                Hi there! I'm <span style={{ color: "#ff5733" }}>Fatima Javid</span>.
              </h1>
              <h1 className="typing-animation" style={{ fontSize: "2rem", fontWeight: "normal" }}>
                {currentText}
                <span className="cursor"></span>
              </h1>
  
              <div className="social-icons d-flex justify-content-center" style={{ marginTop: "20px", gap: "15px" }}>
                <a href="https://github.com/fatimajavid" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub size={45} style={{ color: "#333" }} />
                </a>
                <a href="https://linkedin.com/in/fatimajavid" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin size={45} style={{ color: "#0e76a8" }} />
                </a>
                <a href="mailto:fatimajavid@gmail.com">
                  <AiOutlineMail size={45} style={{ color: "#d14836" }} />
                </a>
              </div>
            </Col>
  
            <Col md={6} className="d-flex justify-content-center">
              <img
                src={aboutLogo}
                alt="about pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </Col>
          </Row>
  
          <Row style={{ padding: "40px" }}>
          <Col>
            <div style={{ textAlign: "center", lineHeight: "1.6" }}>
              <p className="ibm-plex-serif" style={{ fontSize: "24px", fontWeight: "800", color: "#1a3269" }}>
                Welcome to my little corner of the web! 
              </p>
              <p className="ibm-plex-serif" style={{ fontSize: "17px" }}>I'm a <strong>Computer Science and Economics student</strong> who thrives on solving puzzles, analyzing financial data, and building creative tech solutions. 
                My journey has taken me through <strong>machine learning, business intelligence, and fintech</strong>, always keeping me curious about how data and technology shape decision-making.
                When I'm not diving into datasets or coding up new ideas, you'll probably find me <strong>reading, exploring AI, or working on my next side project</strong>. 
              </p>
              <p className="ibm-plex-serif" style={{ fontSize: "17px" }}>
                Feel free to <strong>connect with me, let’s create something impactful!</strong>
              </p>
            </div>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default About;

