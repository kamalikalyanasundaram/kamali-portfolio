
import {
  FaPalette,
  FaPenRuler,
  FaLayerGroup,
  FaMobileAlt,
  FaSitemap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "UI Design",
      icon: <FaPalette className="text-pink-400" />,
    },
    {
      name: "UX Principles",
      icon: <FaLayerGroup className="text-purple-400" />,
    },
    {
      name: "Wireframing",
      icon: <FaPenRuler className="text-orange-400" />,
    },
    {
      name: "User Flow Design",
      icon: <FaSitemap className="text-green-400" />,
    },
    {
      name: "Visual Hierarchy",
      icon: "🎨",
    },
    {
      name: "Responsive Design",
      icon: <FaMobileAlt className="text-cyan-400" />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white" />,
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
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-4"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 mb-12"
      >
        Design concepts and frontend technologies I use to
        create attractive, intuitive, and responsive user interfaces.
      </motion.p>

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
