import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-400" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white" />,
    },
    {
      name: "Machine Learning",
      icon: "🤖",
    },
    {
      name: "Express",
      icon: "⚡",
    },
    {
      name: "MySQL",
      icon: "🗄️",
    },
    {
      name: "MongoDB",
      icon: "🍃",
    },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-8 py-24"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-4"
      >
        Skills
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 mb-12"
      >
        Technologies and tools I use to build web applications
        and AI-powered solutions.
      </motion.p>

      {/* Skills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            className="bg-slate-900/60 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
          >
            <div className="text-4xl mb-4 flex justify-center">
              {skill.icon}
            </div>

            <h3 className="font-semibold text-lg text-gray-200">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;