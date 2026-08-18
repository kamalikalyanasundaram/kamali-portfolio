import { motion } from "framer-motion";

function About() {
  const stats = [
    { value: "3+", label: "Projects" },
    { value: "3", label: "Publications" },
    { value: "AI & ML + Web", label: "Focus Area" },
    { value: "2027", label: "Graduation" },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        className="text-4xl font-bold text-cyan-400 mb-10"
      >
        About Me
      </motion.h2>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-900/60 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-8 md:p-10 shadow-xl shadow-cyan-500/5"
      >
        <p className="text-gray-300 leading-8 text-lg">
          Hi! I'm{" "}
          <span className="text-cyan-400 font-semibold">
            Kamali
          </span>
          , a B.Tech Artificial Intelligence and Machine Learning
          student at Sri Shakthi Institute of Engineering and Technology.
        </p>

        <p className="text-gray-300 leading-8 mt-6">
          I enjoy building responsive web applications and developing
          AI-powered solutions using Python and Machine Learning.
          I'm interested in Web Development, AI, Machine Learning,
          and solving real-world problems through technology.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-slate-800/60 backdrop-blur-sm border border-cyan-400/10 p-5 rounded-xl text-center hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="text-gray-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;