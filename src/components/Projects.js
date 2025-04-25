import React from 'react';
import { AiFillGithub } from 'react-icons/ai'; 
import fics from "../images/fics_demo.gif";
import prep from "../images/prep_plate.gif";
import foodie from "../images/foodlover.png";
import echo from "../images/echo.png";

// const Projects = () => {
//   const projects = [
//     {
//       title: "FICS (Fixed Income for College Students)",
//       technologies: ["Kotlin", "Jetpack Compose"],
//       description: [
//         "Collaborated on the development of an investment simulation app for Android, designed to help college students and financial educators learn about bond markets and investment strategies.",
//         "Engineered a step-by-step portfolio management simulation, allowing users to manage a $10,000 portfolio while reacting to bond defaults and market fluctuations.",
//         "Utilized MVVM architecture and Kotlin coroutines to ensure a responsive user interface and efficient data handling, enhancing the app's performance and user experience."
//       ]
//     },
//     {
//       title: "Prep & Plate It",
//       technologies: ["HTML", "CSS", "Server-Side Templating", "AWS"],
//       description: [
//         "Developed a meal planning website that offers dynamic recipe content based on cuisine and meal type, providing users with personalized meal options.",
//         "Integrated an API to fetch real-time recipe data, and implemented responsive design techniques to ensure a seamless experience across devices.",
//         "Deployed the application using AWS, ensuring scalability and reliability for handling user traffic."
//       ]
//     },
//     {
//       title: "Crime Prediction App",
//       technologies: ["Jupyter Notebook", "Python", "Streamlit"],
//       description: [
//         "Built a predictive model to estimate annual crime rates across different regions in the U.S. using the Kaggle Crimes in US Communities dataset.",
//         "Achieved an R² value of 0.93 with a random forest regressor by analyzing key demographic factors, identifying significant predictors of crime rates.",
//         "Utilized Streamlit to create an interactive user interface, allowing users to visualize and explore crime data and model predictions."
//       ]
//     },
//     {
//       title: "Transportation Data Science Project",
//       technologies: ["Python", "Excel"],
//       description: [
//         "Analyzed over 2 million NYC crash records to identify patterns in traffic accidents, focusing on high-risk demographics and accident hotspots.",
//         "Performed data cleaning, exploratory analysis, and visualizations to uncover key insights for improving road safety in the city.",
//         "Formulated data-driven recommendations for policymakers to enhance traffic safety based on the findings."
//       ]
//     },
//     {
//       title: "Food Lover App",
//       technologies: ["XCode", "Swift"],
//       description: [
//         "Developed a mobile app that helps users find nearby restaurants based on personal preferences, such as cuisine type and rating.",
//         "Employed the Scrum methodology to manage project timelines and deliverables, ensuring consistent progress and meeting weekly milestones.",
//         "Implemented location-based features, using geolocation services to provide real-time restaurant suggestions."
//       ]
//     },
//     {
//       title: "Echo (Language Learning App)",
//       technologies: ["Java"],
//       description: [
//         "Developed an Android language learning app that allows users to record phrases in their native language and provides translations for learners.",
//         "Incorporated features such as user profiles, audio recording, and a feed to allow users to interact with language content and share progress.",
//         "Focused on creating a user-friendly design to facilitate language practice through daily interactions and learning modules."
//       ]
//     }
//   ];

//   return (
//     <div id="project-container" style={{ padding: "100px" }}>

    // <h1 className="experience-title ibm-plex-serif" style={{ marginBottom: "-28px" }}>My Projects</h1>

    //   <div className="github-button-container" style={{ textAlign: "center", marginBottom: "25px" }}>
    //     <a href="https://github.com/fatimajavid" target="_blank" rel="noopener noreferrer">
    //         <button className="github-button justify-content-center" >
    //         <AiFillGithub size={30} style={{ marginRight: "8px" }} />
    //         To explore these projects and many more, please follow me on GitHub!
    //         </button>
    //     </a>
    //   </div>

//       {projects.map((project, index) => (
//         <div className="project-card" key={index}>
//           <div className="left-column">
//             <h2>{project.title}</h2>
//             <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
//           </div>
//           <div className="right-column">
//             <ul>
//               {project.description.map((desc, idx) => (
//                 <li key={idx}>{desc}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;

const projects = [
  {
    title: "FICS (Fixed Income for College Students)",
    technologies: ["Kotlin", "Jetpack Compose"],
    image: fics,
    description: [
      "Collaborated on the development of an investment simulation app for Android, designed to help college students and financial educators learn about bond markets and investment strategies.",
      "Engineered a step-by-step portfolio management simulation, allowing users to manage a $10,000 portfolio while reacting to bond defaults and market fluctuations.",
      "Used MVVM architecture and Kotlin coroutines to ensure a responsive user interface and efficient data handling, enhancing the app's performance and user experience."
    ],
    layout: "row-right",
  },
  {
    title: "Prep & Plate It",
    technologies: ["HTML", "CSS", "Server-Side Templating", "AWS"],
    image: prep,
    description: [
      "Developed a meal planning website that offers dynamic recipe content based on cuisine and meal type, providing users with personalized meal options.",
      "Integrated an API to fetch real-time recipe data, and implemented responsive design techniques to ensure a seamless experience across devices.",
      "Used AWS to build the website, ensuring scalability and reliability."
    ],
    layout: "column-below",
  },
  {
    title: "Food Lover App",
    technologies: ["XCode", "Swift"],
    image: foodie,
    description: [
        "Developed a mobile app that helps users find nearby restaurants based on personal preferences, such as cuisine type and rating.",
        "Led weekly Scrum sprints to manage project timelines and deliverables, ensuring consistent progress and meeting weekly milestones.",
        "Implemented location-based features, using geolocation services to provide real-time restaurant recommendations."
    ],
    layout: "column-below",
  },
  {
    title: "Echo (Language Learning App)",
    technologies: ["Java"],
    image: echo,
    description: [
      "Developed an Android language learning app that allows users to record phrases in their native language and provides translations for learners.",
      "Incorporated features such as user profiles, audio recording, and a feed to allow users to interact with language content and share progress.",
      "Focused on creating a user-friendly design to facilitate language practice through daily interactions and learning modules."
    ],
    layout: "column-below",
  },
  {
    title: "Crime Prediction App",
    technologies: ["Jupyter Notebook", "Python", "Streamlit"],
    description: [
      "Built a predictive model to estimate annual crime rates across different regions in the U.S. using the Kaggle Crimes in US Communities dataset.",
      "Achieved an R² value of 0.93 with a random forest regressor by analyzing key demographic factors, identifying significant predictors of crime rates.",
      "Used Streamlit to create an interactive user interface, allowing users to visualize and explore crime data and model predictions."

    ],
  },
  {
    title: "Transportation Data Science Project",
    technologies: ["Python", "Excel"],
    description: [
      "Analyzed over 2 million NYC crash records to identify patterns in traffic accidents, focusing on high-risk demographics and accident hotspots.",
      "Performed data cleaning, exploratory analysis, and visualizations to uncover key insights for improving road safety in the city.",
      "Formulated data-driven recommendations for policymakers to enhance traffic safety based on the findings."

    ],
  },
];



function Projects() {
  return (
    <section style={{ paddingTop: "4rem" }}>
      <h1 className="title ibm-plex-serif"style={{ fontSize: "25px" }} >
        My Projects
      </h1>

      <div className="projects-container" style={{ padding: "30px" }}>
        {projects.map((project, index) => (
          <div key={index} className="project" style={{ flexDirection: project.layout === "column-below" ? "column" : "row" }}>
            <div className="project-details">
              <h3>{project.title}</h3>
              <div className="tech">{project.technologies.join(" • ")}</div>
              <div className="description-list">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </div>
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} demo`}
                className="project-media"
                style={{
                  maxWidth: index === 0 ? "180px" : (project.layout === "column-below" ? "100%" : "150px"),
                  minWidth: project.layout === "column-below" ? "360px" : "auto", // Minimum width for column-below
                  marginLeft: project.layout === "row-right" ? "1rem" : (project.layout === "column-below" ? "auto" : "0"), // Center for column-below
                  marginRight: project.layout === "column-below" ? "auto" : "0", // Center for column-below
                  marginTop: project.layout === "column-below" ? "0rem" : "0",
                  height: project.layout === "column-below" ? "200px" : "auto",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="button-container" style={{ textAlign: "center", marginBottom: "40px" }}>
        <a href="https://github.com/fatimajavid" target="_blank" rel="noopener noreferrer">
          <button className="button justify-content-center">
            <AiFillGithub size={30} style={{ marginRight: "8px" }} />
            These are just a few of my projects! To explore these projects and many more, please follow me on GitHub!
          </button>
        </a>
      </div>
    </section>
  );
}

export default Projects;