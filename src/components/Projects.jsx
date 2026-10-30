
import {
  FaMapMarkedAlt,
  FaGraduationCap,
  FaShoppingCart,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Carbon Maps",
      description:
        "A web platform that maps carbon emission hotspots and carbon-sink regions using GIS and AI.",
      tech: "React • Node.js • Express • Mapbox",
      icon: <FaMapMarkedAlt />,
      github: "https://github.com/kamalikalyanasundaram/Carbon-Maps",
      demo: "https://youtu.be/lIFn587tX74",
    },
    {
      title: "CampusConnect",
      description:
        "A student platform for internships, job opportunities, and placement preparation.",
      tech: "React.js • JavaScript • Tailwind CSS • Framer Motion • Lucide React",
      icon: <FaGraduationCap />,
      github: "https://github.com/kamalikalyanasundaram/campusconnect",
    },
    {
      title: "FreshCart",
      description:
        "A modern grocery shopping platform with product discovery, cart, and checkout features.",
      tech: "React.js • Vite • JavaScript • Tailwind CSS • React Router • Framer Motion • Lucide React",
      icon: <FaShoppingCart />,
      github: "https://github.com/kamalikalyanasundaram/FreshCart",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-8 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition duration-300"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 text-cyan-400">
              {project.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-7">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.split(" • ").map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 text-cyan-400 bg-transparent px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
