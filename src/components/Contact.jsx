import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-8 py-24"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-10">
        Feel free to connect with me for internships,
        projects, or collaborations.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6">

      {/* Email */}
<a
  href="mailto:k.kamali2006@gmail.com"
  className="block bg-slate-900/60 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300 cursor-pointer"
>
  <FaEnvelope className="text-cyan-400 text-3xl mb-5" />

  <h3 className="text-xl font-semibold mb-2">
    Email
  </h3>

  <p className="text-gray-400 hover:text-cyan-400 break-all text-sm">
    k.kamali2006@gmail.com
  </p>
</a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kamalikalyanasundaram-aa8429373/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-900/60 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300 cursor-pointer"
        >
          <FaLinkedin className="text-cyan-400 text-3xl mb-5" />

          <h3 className="text-xl font-semibold mb-2">
            LinkedIn
          </h3>

          <p className="text-gray-400 hover:text-cyan-400 break-all text-sm">
            linkedin.com/in/kamalikalyanasundaram-aa8429373
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kamalikalyanasundaram"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-900/60 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300 cursor-pointer"
        >
          <FaGithub className="text-cyan-400 text-3xl mb-5" />

          <h3 className="text-xl font-semibold mb-2">
            GitHub
          </h3>

          <p className="text-gray-400 hover:text-cyan-400 break-all text-sm">
            github.com/kamalikalyanasundaram
          </p>
        </a>

      </div>
    </motion.section>
  );
}

export default Contact;