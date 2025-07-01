export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto mt-16 px-4 py-12 rounded-3xl bg-black/60 border border-fuchsia-400/20 shadow-lg text-white text-center z-[60] relative mb-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-400">
        About Me
      </h2>
      <div className="flex flex-col gap-4 items-center">
        <ul className="text-lg md:text-xl text-gray-200 list-disc list-inside text-left max-w-2xl mx-auto">
          <li>💡 Passionate about building interactive web and mobile apps.</li>
          <li>🚀 Shipping apps with MERN and Flutter.</li>
          <li>
            🎨 Enjoys blending design and code for delightful user experiences.
          </li>
          <li>🌱 Always learning new tech, frameworks, and best practices.</li>
          <li>🤝 Believes in teamwork, open source, and sharing knowledge.</li>
        </ul>
        <blockquote className="italic text-fuchsia-300 mt-6 border-l-4 border-fuchsia-400 pl-4 max-w-xl mx-auto">
          "Falling for Computers, where every byte feels just right!"
          <br />
        </blockquote>
      </div>
    </section>
  );
}
