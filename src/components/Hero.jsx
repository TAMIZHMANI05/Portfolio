import Typewriter from "typewriter-effect";
import HeroImage from "../assets/Hero.svg"; // Import your image if needed

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden"
      style={{ minHeight: "100vh", background: "transparent" }}
    >
      {/* Animated gradient overlay - pointer events disabled to allow interaction with background */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-black/80 animate-pulse" />
      {/* Content above the interactive background */}
      <div className="pointer-events-auto relative z-20 flex flex-col md:flex-row items-center justify-center h-full w-full text-center md:text-left px-4 animate-fade-in select-none gap-8 md:gap-16">
        {/* Left: Greetings and Typewriter */}
        <div className="pl-35 pt-15 flex-1 flex flex-col items-center md:items-start justify-center">
          <h1 className="text-4xl md:text-4xl mb-4 text-white animate-fade-in flex items-center gap-3">
            Hi There!
            <span className="inline-block animate-waving-hand text-4xl md:text-5xl origin-bottom">
              👋🏻
            </span>
          </h1>
          <h3 className="text-3xl md:text-5xl  mb-4  animate-fade-in">
            <span className="text-white">I'M</span>{" "}
            <span className="text-fuchsia-400">TAMIZHMANI</span>
          </h3>
          <br />
          <br />
          <div className="text-2xl md:text-4xl font-semibold mb-6 text-fuchsia-400 animate-fade-in delay-200 min-h-[48px]">
            <Typewriter
              options={{
                strings: [
                  "Tech Enthusiast",
                  "Web Developer",
                  "MERN Developer",
                  "FullStack Developer",
                  "Mobile Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                pauseFor: 1400,
                cursor: "|",
              }}
            />
          </div>
        </div>
        {/* Right: Interactive Image Placeholder with Parallax */}
        <div className="pr-25 flex-1 flex items-center justify-center w-full h-72 md:h-[400px] relative">
          <div
            className="w-80 h-80 md:w-150 md:h-150 flex items-center justify-center cursor-pointer transition-transform duration-500 will-change-transform parallax-img"
            style={{
              backgroundImage: "url()", // Add your image URL here later
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = ((y - centerY) / centerY) * 14;
              const rotateY = ((x - centerX) / centerX) * -14;
              el.style.transition =
                "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)";
              el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transition =
                "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
              e.currentTarget.style.transform =
                "rotateX(0deg) rotateY(0deg) scale(1)";
            }}
          >
            <img className="glow-text" src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
