import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {

  // 🖱️ Smooth cursor glow
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    let x = 0, y = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      if (glow) {
        glow.style.left = x + "px";
        glow.style.top = y + "px";
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <Router>

      {/* Cursor Glow */}
      <div className="cursor-glow"></div>

      {/* Background Glow */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <Navbar />

      <AnimatedRoutes />

    </Router>
  );
}

export default App;