import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import me from "../images/meicon.png";
import resume from "../images/FatimaResume.pdf";
import "../index.css";

// Separate work and extracurricular experiences
const workExperiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "ANOTE",
    description: (
      <>
        I worked as part of a team to build a chatbot that answered client questions about financial documents by tagging unstructured financial data using natural language processing (NLP) techniques. In addition to this project, I co-authored a research paper that explored how large language models (LLMs) can be fine-tuned and augmented to improve financial question-answering.
        This is a link to the paper:{" "}
          <a 
            href="https://arxiv.org/abs/2402.01722" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "#007bff" }} // Optional: Styling the link
          >
            Research Paper on LLMs for Financial Question-Answering
          </a>
      </>
    ),
  },
  {
    title: "Financial Analytics & Sales Intern",
    company: "Bloomberg",
    description:
      "I completed training on Bloomberg products, especially the Bloomberg Terminal. As part of a sales campaign, I reached out to over 50 clients to promote new features, assisted with installations, and encouraged adoption to enhance the client experience. I participated in three client meetings to support new users and independently led a product training session. I also collaborated with a team to develop and present a strategic pitch for a hypothetical hedge fund using Bloomberg solutions.",
  },
  {
    title: "Business Developer Intern",
    company: "Flexie",
    description:
      "I conducted market and competitor research to identify growth opportunities for this early-stage startup. Based on my findings, I helped shape communication strategies and proposed outreach plans to expand the client base and improve engagement. I also participated in weekly sprint kickoff meetings and tested the application prototype, identifying and reporting issues that needed resolution before the final release.",
  },
  {
    title: "Data Intern",
    company: "NYC Department of Health and Mental Hygiene",
    description:
      "I collected and compiled missing data on five borough-specific indicators from HIV-testing partners to support quarterly progress tracking for the city’s HIV-testing goals. I presented my findings to the New York Knows team and helped revise and distribute the weekly digest. Additionally, I collaborated with my supervisor to plan and support an awareness event for National HIV/AIDS and Aging Awareness Day.",
  },
  {
    title: " AI-Powered Product Discovery Lab Extern",
    company: "Paragon One",
    description:
      "I conducted customer discovery to evaluate product-market fit for a student-focused AI tool. I automated outreach to 25 potential users using ChatGPT and other AI tools, conducted five user interviews, and synthesized findings into a report with five actionable recommendations to improve usability and enhance the overall user experience.",
  },
  {
    title: "Student Assistant",
    company: "Hunter College Writing Center",
    description:
      "I coordinated, promoted, and facilitated free cultural events for the New York City community. I managed social media accounts, supported general administrative tasks, and helped oversee a $250,000 project budget. I worked closely with the Director, Lewis Burke Frumkes, to ensure smooth execution of the Center’s programs.",
  },
];

const extracurriculars = [
  {
    title: "CUNY Directed Reading Program",
    company: "Cornell Tech",
    description:
      "I was selected for the CUNY Directed Reading Program, where I am studying Nonlinear Dynamics and Chaos by Steven Strogatz with a graduate student mentor. We held weekly one-on-one discussions, and I am preparing a final presentation on on a topic not typically covered in the standard undergraduate curriculum — bifurcations in nonlinear systems.",
  },
  {
    title: "Breakthrough Tech AI Fellow",
    company: "Cornell Tech",
    description:
      "I completed a 9-week Machine Learning Foundations course through eCornell, earning a certificate. I collaborated on a semester-long Challenge Project applying machine learning techniques to real-world problems. I also participated in a Kaggle competition in partnership with the New York Botanical Garden to classify plant specimen images, contributing to global biodiversity research.",
  },
  {
    title: "Data Science Fellow",
    company: "CUNY Tech Prep",
    description:
      "I developed skills in Python, Pandas, NumPy, and Scikit-learn during a 22-week intensive data science program. I worked with a team on a capstone project using machine learning models to analyze and interpret data, and we presented our findings to industry professionals.",
  },
  {
    title: "Investment Operations Fellow",
    company: "Year Up",
    description:
      "I explored the financial services industry through mentorship and hands-on assignments. I learned about topics such as financial operations, asset servicing and reconciliation practiceswhile also strengthening my communication and technical skills through professional development workshops.",
  },
  {
    title: "Tech Connect Scholar",
    company: "Management Leaders for Tomorrow",
    description:
      "I was selected for a competitive tech leadership program where I received one-on-one mentorship, participated in technical interview prep, and connected with professionals in the tech industry.",
  },
  {
    title: "Treasurer & Team Leader",
    company: "Rescuing Leftover Cuisine Club, Hunter College",
    description:
      "I managed a $500 club budget, coordinated financial transactions, and worked with vendors to organize events. I also led weekly food rescue volunteer events, transporting excess meals from restaurants to homeless shelters.",
  },
  {
    title: "Student Advisory Board Member",
    company: "CUNY Transformative Learning in the Humanities",
    description:
      "I represented CUNY students on the TLH Student Advisory Board. I provided feedback on student-facing programming and collaborated with fellow board members to organize inclusive, community-building events across campuses that supported transformative and equity-centered learning.",
  },
];
function Experience() {
  return (
    <Container fluid className="experience-section"style={{ marginTop: "3rem" }}>
      <Row>
      <Col md={4} className="mb-5">
        {/* Image + Intro Card */}
        <img
              src={me}
              alt="My Icon"
              className="img-fluid mb-3"
              style={{ maxHeight: "350px" }}
            />
        <Card className="mb-4 shadow-sm rounded-card" style={{ marginTop: "-0.5rem", backgroundColor: "#8dd8b5" }}>
          <Card.Body className="text-center">
            <p className="intro-text">
              Hi! I'm a Computer Science and Economics student building experience in
              machine learning, financial analytics, product development, and business
              strategy. I enjoy working on interdisciplinary teams to solve complex
              problems through data-driven solutions, particularly at the intersection
              of technology and finance.
            </p>
          </Card.Body>
        </Card>

        {/* Resume Button */}
        <div className="text-center mt-3" style={{ paddingBottom: "2rem" }}>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Download My Resume
          </a>
        </div>

        {/* Certifications Card */}
        <Card className="mb-4 shadow-sm rounded-card" >
          <Card.Body>
            <h4 className="timeline-heading mb-3" style={{ color: "#091f6d" }} >Certifications</h4>
            <div className="award-list">
              Google Data Analytics Certificate<br />
              Scrum.org Professional Scrum Master I Certificate<br />
            </div>
          </Card.Body>
        </Card>

        {/* Awards Card */}
        <Card className="mb-4 shadow-sm rounded-card" style={{ color: "#091f6d" }}>
            <Card.Body>
              <h4 className="timeline-heading mb-3">Awards</h4>
              <p className="award-list">
                APIA Scholarship <br />
                Albert Shankers UFT Scholarship <br />
                Peter Vallone Academic Achievement  <br />
                Hunter College Dean’s List <br />
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <h4 className="timeline-heading">Work Experience</h4>
          <div className="timeline">
            {workExperiences.map((exp, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h5>{exp.company}</h5>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>

        <Col md={4}>
          <h4 className="timeline-heading">Clubs & Fellowships</h4>
          <div className="timeline">
            {extracurriculars.map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <h5>{item.company}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default Experience;