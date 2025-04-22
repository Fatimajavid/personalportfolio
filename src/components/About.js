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
      "Analytical", 
      "Tech-Driven", 
      "Collaborative", 
      "Ambitious",
    ];

    let typingSpeed = 220;
    let deletingSpeed = 180;

    const handleTyping = () => {
      const currentString = strings[currentIndex];

      if (!deleting) {
        if (currentText.length < currentString.length) {
          setCurrentText((prevText) => prevText + currentString.charAt(prevText.length));
        } else {
          setDeleting(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText((prevText) => prevText.slice(0, -1));
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
                <p className="ibm-plex-serif" style={{ fontSize: "17px" }}>
                I’m currently pursuing a Bachelor’s in Computer Science and Economics and a Master’s in Economics, with a minor in Math, through an accelerated program at Hunter College. I chose this path because I’ve always been interested in how things work—why people make certain decisions, how systems are built, and how data can help us understand and improve them. I want to be someone who can bridge that gap between technical tools and real-world challenges, especially in finance and tech.                </p>
                <p className="ibm-plex-serif" style={{ fontSize: "17px" }}>
                Outside of school, I’m someone who really values community and giving back. I volunteer regularly and enjoy being part of initiatives that help others—whether it's organizing food rescue events or helping fellow students navigate academic and career opportunities. I’ve found that these experiences keep me grounded and remind me why I care so much about using my skills to make a difference.   </p>
                <p className="ibm-plex-serif" style={{ fontSize: "17px" }}>
                In everything I do, I try to stay open, curious, and willing to learn. I don’t have all the answers (yet!), but I’m excited about the journey - about learning new things, working with people who inspire me, and finding creative ways to solve problems that matter.    </p>
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


