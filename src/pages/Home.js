import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";

function Home() {
  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <img src={profileImg} alt="Saidali" className="hero-img" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="title">
          Hi, I'm <span>Saidali</span>
        </h1>

        <p className="subtitle">
          Developer |M-Tech CSE Student|Tutor
        </p>

        <p className="tagline">
          Building intelligent web applications using modern technologies and scalable solutions. </p>

        <Link to="/projects" className="btn">
          View Projects
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;