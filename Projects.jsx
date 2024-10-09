import React, { useState } from "react";
import "./ProjectsSection.css";

// Correct image imports
import cleanWaterImage from "../assets/clean_water.jpg";
import treePlantationImage from "../assets/tree plantation.jpg"; 
import educationImage from "../assets/education.jpg"; // Fixed typo in file extension

const projectsData = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing clean drinking water to rural areas.",
    status: "Ongoing",
    category: "Water",
    image: cleanWaterImage,
    detail: "This is a collective initiative done by us to fund a ground water pipe that helps extract ground water for irrigation areas through crowd funding."
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    description: "Planting trees to combat deforestation.",
    status: "Completed",
    category: "Environment",
    image: treePlantationImage,
    detail: "We planted around 1 million trees in the span of 2 years that boosted oxygen production by 50% in the area."
  },
  {
    id: 3,
    title: "Education for All",
    description: "Providing education to underprivileged children.",
    status: "Ongoing",
    category: "Education",
    image: educationImage,
    detail: "We are currently teaching underprivileged children in local schools and are recruiting more teachers."
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("Ongoing");
  const [visibleDetails, setVisibleDetails] = useState([]); // Array to track multiple visible project details

  const filteredProjects =
    filter === "Ongoing" || filter === "Completed"
      ? projectsData.filter((project) => project.status === filter)
      : projectsData;

  const toggleDetails = (projectId) => {
    setVisibleDetails((prevVisibleDetails) =>
      prevVisibleDetails.includes(projectId)
        ? prevVisibleDetails.filter((id) => id !== projectId) // Remove from array if already visible
        : [...prevVisibleDetails, projectId] // Add to array if not visible
    );
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">Our Projects</h2>
      <div className="filters">
        <button className="btn" onClick={() => setFilter("All")}>All</button>
        <button className="btn" onClick={() => setFilter("Ongoing")}>Ongoing</button>
        <button className="btn" onClick={() => setFilter("Completed")}>Completed</button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className={`project-status ${project.status.toLowerCase()}`}>
              {project.status}
            </p>
            <button
              className="project-button"
              onClick={() => toggleDetails(project.id)}
            >
              {visibleDetails.includes(project.id) ? "Hide Details" : "Show Details"}
            </button>
            {visibleDetails.includes(project.id) && (
              <div className="project-detail">
                <br />
                {project.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
