import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.jpg";

function Projects() {
  return (
    <motion.div className="page">
      <h2>Projects</h2>

      <div className="projects-grid">

        <Link to="/project/ai-interviewer" className="project-card">
          <img src={img1} alt="AI Interviewer" />
          <h3>AI Interviewer</h3>
          <p>React-based AI interview system</p>
        </Link>

        <Link to="/project/ar-museum" className="project-card">
          <img src={img2} alt="AR Museum" />
          <h3>AR Museum System</h3>
          <p>NFC + AR + AI based system</p>
        </Link>

      </div>
    </motion.div>
  );
}

export default Projects;