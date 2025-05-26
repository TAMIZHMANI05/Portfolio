import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Particle from "./components/Particle";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
