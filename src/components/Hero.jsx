import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 overflow-x-hidden"
    >

      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-400 text-lg font-medium mb-4"
          >
            👋 Hello
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            I'm <span className="text-cyan-400">Kamali</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-2xl md:text-3xl mt-5 text-gray-300 h-10"
          >
            <TypeAnimation
              sequence={[
                "AI & ML Student",
                2000,
                "Aspiring UI/UX Designer",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={65}
              repeat={Infinity}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 text-gray-400 leading-8 max-w-xl"
          >
            Passionate about creating visually appealing, user-friendly interfaces, 
            exploring UI/UX design principles, 
            and designing meaningful digital experiences that solve real-world problems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
          <motion.button
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 25px rgba(34,211,238,0.5)",
  }}
  whileTap={{ scale: 0.95 }}
  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
>
  View Projects
</motion.button>

            <motion.a
              href="/kamali_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 25px rgba(34,211,238,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </motion.a>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE — PROFILE */}
        <div className="flex justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 },
              scale: { duration: 0.8, delay: 0.5 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            className="w-80 h-80 rounded-full bg-slate-900 border-2 border-cyan-400/60 shadow-2xl shadow-cyan-400/30 overflow-hidden"
          >

            <img
              src={profile}
              alt="Kamali"
              className="w-full h-full object-cover"
            />

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;