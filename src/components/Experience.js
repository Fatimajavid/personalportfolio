import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "ANOTE",
    description: (
        <>
          Collaborated in a team to tag unstructured financial data using NLP techniques to develop an AI chatbot to answer customer inquiries about financial documents. In addition to this project, I assisted in writing a research paper focused on enhancing large language models for financial question-answering.
          <p>
            This is a link to the paper:{" "}
            <a 
              href="https://arxiv.org/abs/2402.01722" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#007bff" }} // Optional: Styling the link
            >
              Research Paper on LLMs for Financial Question-Answering
            </a>
          </p>
        </>
      )
      
  },
  {
    title: "Financial Analytics & Sales Intern",
    company: "Bloomberg",
    description: "Trained on Bloomberg products, especially the Bloomberg Terminal. As part of a sales campaign, I promoted new features to 50+ clients, helped with installation, and encouraged adoption to improve user experience. I also attended three client meetings to teach new users and led one training session. Additionally, I worked with a team to pitch Bloomberg solutions to a hypothetical hedge fund."
  },
  {
    title: "Business Developer Intern",
    company: "Flexie",
    description: "Worked on identifying growth opportunities through market and competitor research. Developed communication strategies and proposed outreach plans to expand the startup's client base."
  },
  {
    title: "AI Fellow",
    company: "Breakthrough Tech AI Program",
    description: "Completed a rigorous program focused on machine learning, data pipelines, and AI product development."
  },
  {
    title: "Data Science Fellow",
    company: "CUNY Tech Prep",
    description: "Achieved proficiency in Python (Pandas, NumPy, Scikit-learn) and ML algorithms (Regression, RF, Image Classification, NLP) over a rigorous 22-week training program, leading to the presentation of a successful group capstone project"  
  },
  {
    title: "Extern",
    company: "Paragon One AI-Powered Product Discovery Lab",
    description: "Conducted customer discovery to refine Extern’s product-market fit for a global student audience. Automated outreach to 25 potential users using AI tools like ChatGPT and conducted 5 user interviews. Synthesized insights into a comprehensive report with 5 actionable recommendations to improve product usability and enhance user experience."
},
  {
    title: "Investment Operations Fellow",
    company: "Year Up",
    description: "Explored roles in financial operations and risk analysis through mentorship and practical assignments. Learned foundational concepts in asset servicing, reporting, and reconciliation."
  },
  {
    title: "Tech Connect Scholar",
    company: "Management Leadership for Tomorrow (MLT)",
    description: "Selected for a competitive program providing career development and mentorship in the tech industry. Participated in career coaching, technical interview prep, and professional networking."
  },
  {
    title: "Treasurer & Team Leader",
    company: "Rescuing Leftover Cuisine Club, Hunter College",
    description: "Led a team to organize food rescue events, managed club budget, and collaborated with nonprofits to reduce food waste on campus."
  }
];

function Experience() {
  return (
    <Container fluid className="experience-section" style={{ padding: "100px" }}>
      <h1 className="experience-title ibm-plex-serif">Professional Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h5 style={{ color: "#ff5733" }}>{exp.company}</h5>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Experience;
