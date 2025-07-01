import TrackedLogo from "../assets/Projects/Tracked.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "TrackEd",
      description:
        "A smart web platform to simplify student life — featuring a CGPA tracker, an AI-powered project manager with smart suggestions, and a personalized AI assistant for instant academic and project support.",
      imageUrl: TrackedLogo,
      demoLink: "https://tracked.tamizh.tech",
      githubLink: "https://github.com/TAMIZHMANI05/TrackEd-frontend",
      tools: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini API",
        "Postman",
        "Git",
        "GitHub",
        "VSCode",
      ],
    },
  ];

  return (
    <section id="projects" className="relative w-full mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-fuchsia-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto rounded-lg shadow-lg border bg-transparent border-gray-700 hover:transform hover:-translate-y-1 transition-transform duration-500 hover:shadow-fuchsia-400"
            >
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={project.imageUrl}
                alt={project.title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x200?text=Project+Image";
                }}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h5>
                <p className="mb-4 font-normal text-gray-400">
                  {project.description}
                </p>

                {/* Tools Section */}
                <div className="mb-4">
                  <h6 className="text-sm font-semibold text-fuchsia-400 mb-2">
                    Tools & Technologies
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full border border-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Section */}
                <div className="flex gap-4 mt-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm -z-10"></div>
    </section>
  );
}
