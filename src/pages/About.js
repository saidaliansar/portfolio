import { motion } from "framer-motion";
import profileImg from "../assets/profile1.jpg";


function About() {
  return (
    <motion.div
      className="page about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        {/* Left: Image */}
        <div className="about-img">
          <img src={profileImg} alt="Saidali" />
        </div>

        {/* Right: Content */}
        <div className="about-content">

          <p>
            I'm <strong>Saidali</strong>, an M.Tech Computer Science student with
            a strong foundation in programming and AR development technologies. I specialize in
            building modern web applications and intelligent systems.
          </p>

          <p>
            With over <strong>2 years of teaching experience</strong>, I run my
            own tuition center <strong>B-Tech Calculus</strong>, helping students
            excel in engineering subjects.
          </p>

          <p>
            My interests include AR/VR development, AI and ML based systems and creating
            interactive learning experiences.
          </p>

        </div>
      </div>

      {/* Highlights */}
      <div className="about-highlights">

        <div className="highlight-card">
          <h3>2+</h3>
          <p>Years Teaching Experience</p>
        </div>

        <div className="highlight-card">
          <h3>M.Tech</h3>
          <p>Computer Science</p>
        </div>

        <div className="highlight-card">
          <h3>Projects</h3>
          <p>AI & AR Systems</p>
        </div>

      </div>

    </motion.div>
  );
}

export default About;