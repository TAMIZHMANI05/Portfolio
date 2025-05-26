import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particle from "./components/Particle";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
