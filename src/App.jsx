import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Particle from "./components/Particle";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function App() {
  return (
    <>
      <Router>
        <Particle />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
              </>
            }
          />
          <Route
            path="/projects"
            element={
                <Projects />
            }
          />
          <Route
            path="/resume"
            element={
                <Resume />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
