import { useParams } from "react-router-dom";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.jpg";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    "ai-interviewer": {
      title: "AI-Powered Virtual Interview System with Intelligent Feedback",
      image: img1,
      description:
        "An intelligent AI-based mock interview system built using React. It allows users to practice interviews using voice interaction and receive feedback.",
      features: [
        "Voice-based question answering",
        "AI-generated feedback",
        "Real-time interaction",
        "User-friendly interface"
      ],
      tech: ["React", "Web Speech API", "AI"],
    },

    "ar-museum": {
      title: "Context-Aware Augmented Reality Museum Application with integration of NFC and Artificial Intelligence",
      image: img2,
      description:
        "An advanced NFC-based Augmented Reality system that displays 3D models of museum artifacts along with AI-generated descriptions.",
      features: [
        "NFC tag detection",
        "3D model rendering",
        "AI-generated explanations",
        "Interactive user experience"
      ],
      tech: ["Unity", "ARCore", "NFC", "AI"],
    },
  };

  const project = projects[id];

  if (!project) {
    return <div className="page">Project not found</div>;
  }

  return (
    <div className="page project-details">

      {/* Image */}
      <img src={project.image} alt={project.title} className="project-banner" />

      {/* Title */}
      <h1 className="project-title">{project.title}</h1>

      {/* Description */}
      <p className="project-desc">{project.description}</p>

      {/* Features */}
      <div className="project-section">
        <h3>Key Features</h3>
        <ul>
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="project-section">
        <h3>Technologies Used</h3>
        <div className="tech-list">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProjectDetails;