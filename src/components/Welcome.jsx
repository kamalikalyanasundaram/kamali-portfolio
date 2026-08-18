import { motion } from "framer-motion";
import anime from "../assets/images/welcome-anime.png";

function Welcome({ onContinue }) {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Animated Background Glow */}
<motion.div
  animate={{
    x: [0, 40, 0],
    y: [0, -30, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
/>

<motion.div
  animate={{
    x: [0, -40, 0],
    y: [0, 30, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
/>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-2 md:gap-6 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left"
        >

          <p className="text-cyan-400 text-lg md:text-xl mb-5">
            Hello 👋
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Welcome to my
            <br />
            <span className="text-cyan-400">
              Portfolio
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mt-6 mb-10">
            AI & ML Student • Developer • Creator
          </p>

          <motion.button
            onClick={onContinue}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(34,211,238,0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Continue →
          </motion.button>

        </motion.div>


        {/* RIGHT SIDE - ANIME */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >

          <motion.img
            src={anime}
            alt="Anime developer"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[520px] md:w-[650px] lg:w-[750px] max-w-none object-contain md:-translate-x-26"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Welcome;